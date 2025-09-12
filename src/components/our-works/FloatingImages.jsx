// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * FloatingImagesScroll
 * - p.imagesDesc: array of { url } (4 items expected)
 * - behavior:
 *   * when intersectionRatio >= 0.7 => progress = 0 (hidden behind card)
 *   * when 0.7 > ratio > 0.5 => progress linearly maps 0 -> 1
 *   * when 0.5 >= ratio >= 0.3 => progress = 1 (fully out)
 *   * when ratio < 0.3 => progress = 0 (hide)
 */
export default function FloatingImages({ p }) {
    const ref = useRef(null);
    const [ratio, setRatio] = useState(0);

    useEffect(() => {
        // thresholds 0..1 with step 0.01 to get smooth updates
        const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setRatio(entry.intersectionRatio); // 0..1
                });
            },
            {
                threshold: thresholds,
            }
        );

        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    // if imagesDesc missing or empty, don't render anything
    if (!p?.imagesDesc || !p.imagesDesc.length) return null;

    // positions: top-left, bottom-left, top-right, bottom-right
    const positions = [
        { sideClass: "left-0", x: -70, y: -100 },
        { sideClass: "left-0", x: -70, y: 50 },
        { sideClass: "right-0", x: 70, y: -100 },
        { sideClass: "right-0", x: 70, y: 50 },
    ];

    return (
        <div ref={ref} className="md:hidden relative w-full h-[1px]">
            {p.imagesDesc.map((ele, i) => {
                const pos = positions[i] || positions[0];
                return (
                    <FloatingItem
                        key={i}
                        ele={ele}
                        index={i}
                        pos={pos}
                        visibleRatio={ratio}
                    />
                );
            })}
        </div>
    );
}

function FloatingItem({ ele, index, pos, visibleRatio }) {
    // progress motion value drives x, y, rotate, opacity
    const progress = useMotionValue(0);

    // compute target progress from visibleRatio:
    //  - ratio >= 0.7 => p = 0 (hidden)
    //  - 0.7 > ratio > 0.5 => p = (0.7 - ratio) / 0.2  (0 -> 1)
    //  - 0.5 >= ratio >= 0.3 => p = 1 (fully out)
    //  - ratio < 0.3 => p = 0 (hide)
    useEffect(() => {
        let target = 0;
        if (visibleRatio >= 0.7) {
            target = 0;
        } else if (visibleRatio > 0.5 && visibleRatio < 0.7) {
            // linear map [0.7,0.5] -> [0,1]
            target = (0.7 - visibleRatio) / 0.2;
        } else if (visibleRatio <= 0.5 && visibleRatio >= 0.3) {
            target = 1;
        } else {
            // visibleRatio < 0.3
            target = 0;
        }

        // set the motion-value. Framer will interpolate UI smoothly.
        progress.set(target);
    }, [visibleRatio, progress]);

    // map progress -> x,y,rotate,opacity
    const x = useTransform(progress, (p) => pos.x * p);
    const y = useTransform(progress, (p) => pos.y * p);
    // rotate from 90deg (hidden) -> endRot (visible)
    const startRot = 90;
    const endRot = index === 0 || index === 3 ? 10 : -10; // same logic you used
    const rotate = useTransform(progress, (p) => startRot + (endRot - startRot) * p);
    const opacity = useTransform(progress, (p) => p);

    // container sits at left-0 or right-0; motion styles translate from there
    return (
        <div
            className={`absolute top-1/2 ${pos.sideClass} -translate-y-1/2 z-10 pointer-events-none`}
            aria-hidden
        >
            <motion.div
                style={{
                    x,
                    y,
                    rotate,
                    opacity,
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                }}
                className="h-20 w-20 p-[6px] bg-white/10 rounded-3xl
          shadow-[0_0_3px_rgba(99,102,241,0.4),0_0_6px_rgba(99,102,241,0.3),0_0_12px_rgba(99,102,241,0.2),0_0_24px_rgba(99,102,241,0.1)]"
            >
                <div className="h-full w-full rounded-2xl flex flex-col justify-between overflow-hidden">
                    <img src={ele.url} alt="" className="h-full w-full object-cover rounded-2xl" />
                </div>
            </motion.div>
        </div>
    );
}
