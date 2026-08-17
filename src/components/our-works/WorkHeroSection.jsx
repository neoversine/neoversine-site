"use client"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

const posts = [
    {
        name: "ARC Network",
        desp: "Lead CRM + outreach engine with collaboration intelligence (+40% conversion).",
        imgSrc: "/works/neobot.png",
        positionClassname: "left-[50%] top-[0%] -translate-[48px] md:-translate-[80px]",
        baseAngle: 0
    },
    {
        name: "NeoCrawl API",
        desp: "Adaptive vision-guided web scraping API with zero brittle selectors.",
        imgSrc: "/works/neocrawl.png",
        positionClassname: "left-[97.53%] top-[34.55%] -translate-[48px] md:-translate-[80px]",
        baseAngle: 72
    },
    {
        name: "Control Deck",
        desp: "MIT-licensed phone-first event-driven runtime monitor & live steering deck.",
        imgSrc: "/works/neopost2.png",
        positionClassname: "left-[79.39%] top-[90.45%] -translate-[48px] md:-translate-[80px]",
        baseAngle: 144
    },
    {
        name: "D8alytics",
        desp: "Computer vision synthetic pipeline: 700 YOLO images/1h with mAP50 0.96.",
        imgSrc: "/works/neogeo.png",
        positionClassname: "left-[20.61%] top-[90.45%] -translate-[48px] md:-translate-[80px]",
        baseAngle: 216
    },
    {
        name: "NeopostGen SaaS",
        desp: "Automated brand-consistent social posts and ad creatives from briefs.",
        imgSrc: "/works/neocontent.png",
        positionClassname: "left-[2.45%] top-[34.55%] -translate-[48px] md:-translate-[80px]",
        baseAngle: 288
    },
];

function NeoBot({ post, parentRotation }) {
    const [hovered, setHovered] = useState(false)

    const effectiveAngle = (post?.baseAngle + parentRotation) % 360
    const isInFront = effectiveAngle >= 280 || effectiveAngle <= 55

    useEffect(() => {
        if (isInFront) {
            setHovered(true);
        }
        else {
            setHovered(false);
        }
    }, [isInFront])

    return (
        <div className={`absolute neo-bot ${post.positionClassname}`}>
            <div className="relative">
                {/* Details Div */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={
                        hovered
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: 20, scale: 0.9 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute w-[300px] bg-[#1a1a1a]/90 backdrop-blur-md bottom-[100%] left-[100%] px-4 py-4 rounded-2xl border border-cyan-500/30 
               pointer-events-none z-30
               shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-white">{post.name}</h1>
                        <p className="text-xs text-gray-300 mt-1 leading-relaxed">{post.desp}</p>
                        <div className="w-full h-28 mt-3 overflow-hidden rounded-lg">
                            <img
                                src={post.imgSrc}
                                alt={post.name}
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </motion.div>

                <div className="relative h-24 w-24 md:h-40 md:w-40 bg-black/60 backdrop-blur-xs border border-white/40 shadow shadow-black p-2 rounded-full bg-[url('/works/Group10.png')] bg-cover bg-no-repeat bg-top">
                    <div className="flex justify-center items-center text-6xl h-full w-full rounded-full border border-cyan-400/50 
            text-white font-bold italic
            shadow-[0_0_15px_rgba(6,182,212,0.4)] z-10 ">
                    </div>
                </div>
            </div>
        </div>
    )
}

const WorkHeroSection = () => {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        let start = performance.now()
        let frame
        const update = (time) => {
            let elapsed = (time - start) / 1500
            let newRotation = (elapsed * 36) % 360
            setRotation(newRotation)
            frame = requestAnimationFrame(update)
        }
        frame = requestAnimationFrame(update)
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <div className="relative flex justify-center items-center h-[120vh] max-h-[750px] overflow-hidden">
            <div className="circle absolute top-[50%] left-[50%] -translate-x-1/2 h-[600px] w-[600px] md:h-[900px] md:w-[900px] rounded-full border border-white/30 animate-spin-slow
                shadow-[0_0_30px_rgba(99,102,241,0.4),0_0_60px_rgba(6,182,212,0.3)]">
                <div className="relative h-full w-full rounded-full">
                    {
                        posts.map((post, i) => (
                            <React.Fragment key={i}>
                                <NeoBot
                                    post={post}
                                    parentRotation={rotation}
                                />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-b from-transparent to-black"></div>
        </div>
    )
}

export default WorkHeroSection
