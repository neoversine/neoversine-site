// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const products = [
    {
        title: "NeoGen",
        desc: {
            features: [
                "AI-powered poster generation tailored to your business niche."
            ],
            "time Saved": [
                "Cuts design time by over 80% — what used to take hours now takes seconds."
            ],
            "usability": [
                "Simple prompt-based interface — just describe what you need."
            ],
            "thoughts Behind": [
                "Created with the vision to make , not just professionals."
            ]
        },
        img: "/works-grid/neopost2.png",
        gradient: "from-purple-500 via-pink-400 to-red-400",
        imagesDesc: [
            { url: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1757709634/tjxoaplb4jlxnbpvxvjj.png" },
            { url: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1757581907/brmtqmgrcou2rxh8gbig.png" },
            { url: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1757708334/b3pjbl74hzjht8w3rjje.png" },
            { url: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1757689895/o2arvskwacl1kufcr53t.png" },
        ]
    }
];

export default function ProductShowcase() {
    return (
        <section className="py-20">
            <div className="max-w-[330px] md:max-w-lg mx-auto px-6">
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                    {products.map((p, i) => {
                        const isEven = i % 2 === 0;

                        return (
                            <HoverCard key={i} product={p} isEven={isEven} index={i} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function HoverCard({ product: p, isEven, index }) {
    const [hovered, setHovered] = useState(false);



    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative group cursor-pointer ${isEven ? "origin-left" : "origin-right"}`}
        >
            <div className="relative shadow-2xl flex flex-col h-full transition-transform duration-500">
                <div className="relative bg-white/10 border border-white/10 backdrop-blur-sm p-4 md:p-6 rounded-3xl group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] z-10">
                    {/* Glow behind image */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-sky-500/30 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>

                    {/* Image */}
                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-300 via-gray-900 to-gray-950 overflow-hidden z-10 rounded-2xl">
                        <div className="absolute w-32 h-32 bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img
                            src={p.img}
                            alt={p.title}
                            className="relative object-contain h-full transition-transform duration-700 "
                        />
                    </div>

                </div>


                <div className="text-white text-center font-bold text-3xl mt-4 ">
                    {p.title}
                </div>

                {/* Floating Info Boxes */}
                {/* Floating Info Boxes */}
                {/* <AnimatePresence>
                    {hovered && (
                        <>

                            Left side (first 2)
                            <div className="absolute top-1/2 left-1 flex flex-col gap-3 -translate-y-1/2 z-0">
                                {Object.entries(p.desc)
                                    .slice(0, 2)
                                    .map(([key, value], idx) => {
                                        const colors = [
                                            "bg-orange-400", // TIME
                                            "bg-green-300",  // STREAK
                                            "bg-purple-300", // LEVEL
                                            "bg-blue-300"    // BADGES
                                        ];
                                        return (
                                            <motion.div
                                                key={idx}
                                                custom={idx}
                                                variants={{
                                                    hidden: (i) => ({
                                                        opacity: 0,
                                                        x: -50,
                                                        y: 0,
                                                        rotate: -90,
                                                        transition: { duration: 0.4, delay: i * 0.1 }
                                                    }),
                                                    visible: (i) => ({
                                                        opacity: 1,
                                                        x: -180,
                                                        y: idx == 0 ? -60 : +60,
                                                        rotate: idx == 0 ? 10 : -10,
                                                        transition: { duration: 0.6, delay: i * 0.15 }
                                                    }),
                                                    exit: (i) => ({
                                                        opacity: 0,
                                                        x: -50,
                                                        y: 0,
                                                        rotate: -90,
                                                        transition: { duration: 0.4, delay: i * 0.05 }
                                                    })
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="h-40 w-40 p-3 bg-white/10 rounded-3xl"
                                            >
                                                <div className={`px-4 py-2 h-full w-full rounded-2xl p-4 flex flex-col justify-between ${colors[idx]} 
            shadow-[0_0_3px_rgba(99,102,241,0.8),0_0_6px_rgba(99,102,241,0.6),0_0_12px_rgba(99,102,241,0.4),0_0_24px_rgba(99,102,241,0.2)]`}>
                                                    <div className="flex flex-col justify-evenly h-full ">
                                                        <div className="flex justify-between items-start">
                                                            <span className="text-sm font-bold text-black uppercase">
                                                                {key}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-black/80">{value[0]}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </motion.div>
                                        );
                                    })}
                            </div>

                            Right side (last 2)
                            <div className="absolute top-1/2 right-0 flex flex-col gap-3 -translate-y-1/2 z-0">
                                {Object.entries(p.desc)
                                    .slice(2)
                                    .map(([key, value], idx) => {
                                        const colors = [
                                            "bg-orange-400",
                                            "bg-green-300",
                                            "bg-purple-300",
                                            "bg-blue-300"
                                        ];
                                        return (
                                            <motion.div
                                                key={idx}
                                                custom={idx}
                                                variants={{
                                                    hidden: (i) => ({
                                                        opacity: 0,
                                                        x: 50,
                                                        y: 0,
                                                        rotate: 90,
                                                        transition: { duration: 0.4, delay: i * 0.1 }
                                                    }),
                                                    visible: (i) => ({
                                                        opacity: 1,
                                                        x: 180,
                                                        y: idx == 0 ? -60 : +60,
                                                        rotate: idx == 0 ? -10 : 10,
                                                        transition: { duration: 0.6, delay: i * 0.15 }
                                                    }),
                                                    exit: (i) => ({
                                                        opacity: 0,
                                                        x: 50,
                                                        y: 0,
                                                        rotate: 90,
                                                        transition: { duration: 0.4, delay: i * 0.05 }
                                                    })
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="h-40 w-40 p-3 bg-white/10 rounded-3xl"
                                            >
                                                <div className={`px-4 py-2 h-full w-full rounded-2xl p-4 flex flex-col justify-between ${colors[idx + 2]} 
            shadow-[0_0_3px_rgba(99,102,241,0.8),0_0_6px_rgba(99,102,241,0.6),0_0_12px_rgba(99,102,241,0.4),0_0_24px_rgba(99,102,241,0.2)]`}>
                                                    <div className="flex flex-col justify-evenly h-full">
                                                        <div className="flex justify-between items-start">
                                                            <span className="text-sm font-bold text-black uppercase">
                                                                {key}
                                                            </span>
                                                        </div>
                                                        <div className="mt-auto">
                                                            <p className="text-xs text-black/80 mt-2">{value[0]}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                            </div>
                        </>
                    )}
                </AnimatePresence> */}

                <div className="max-md:hidden">
                    <AnimatePresence>
                        {hovered && (
                            <>
                                {p.imagesDesc.map((ele, i) => {
                                    // Decide side & direction based on index
                                    const positions = [
                                        { side: "left-0", y: -140, x: -180 },  // top-left
                                        { side: "left-0", y: 100, x: -180 },  // bottom-left
                                        { side: "right-0", y: -140, x: 180 },  // top-right
                                        { side: "right-0", y: 100, x: 180 },  // bottom-right
                                    ];
                                    const pos = positions[i] || positions[0]; // fallback

                                    return (
                                        <div
                                            key={i}
                                            className={`absolute top-1/2 ${pos.side} flex flex-col gap-3 -translate-y-1/2 z-0`}
                                        >
                                            <motion.div
                                                custom={i}
                                                variants={{
                                                    hidden: {
                                                        opacity: 0,
                                                        x: 0,
                                                        y: 0,
                                                        rotate: 90,
                                                    },
                                                    visible: {
                                                        opacity: 1,
                                                        x: pos.x,
                                                        y: pos.y,
                                                        rotate: i == 0 || i == 3 ? 10 : -10,
                                                        transition: { duration: 0.6, delay: 0.15 }
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        x: 0,
                                                        y: 0,
                                                        rotate: -90,
                                                        transition: { duration: 0.4, delay: i * 0.05 }
                                                    }
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="h-40 w-40 p-3 bg-white/10 rounded-3xl
                                            shadow-[0_0_3px_rgba(99,102,241,0.4),0_0_6px_rgba(99,102,241,0.3),0_0_12px_rgba(99,102,241,0.2),0_0_24px_rgba(99,102,241,0.1)]
                                            "
                                            >
                                                <div className="h-full w-full rounded-2xl flex flex-col justify-between
              ">
                                                    <div className="flex flex-col justify-evenly h-full rounded-2xl">
                                                        <img src={ele.url} alt="" className="rounded-2xl object-cover" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </>
                        )}

                    </AnimatePresence>
                </div>

                <div className="md:hidden">
                    <AnimatePresence>
                        {hovered && (
                            <>
                                {p.imagesDesc.map((ele, i) => {
                                    // Decide side & direction based on index
                                    const positions = [
                                        { side: "left-0", y: -100, x: -70 },  // top-left
                                        { side: "left-0", y: 50, x: -70 },  // bottom-left
                                        { side: "right-0", y: -100, x: 70 },  // top-right
                                        { side: "right-0", y: 50, x: 70 },  // bottom-right
                                    ];
                                    const pos = positions[i] || positions[0]; // fallback

                                    return (
                                        <div
                                            key={i}
                                            className={`absolute top-1/2 ${pos.side} flex flex-col gap-3 -translate-y-1/2 z-0`}
                                        >
                                            <motion.div
                                                custom={i}
                                                variants={{
                                                    hidden: {
                                                        opacity: 0,
                                                        x: 0,
                                                        y: 0,
                                                        rotate: 90,
                                                    },
                                                    visible: {
                                                        opacity: 1,
                                                        x: pos.x,
                                                        y: pos.y,
                                                        rotate: i == 0 || i == 3 ? 10 : -10,
                                                        transition: { duration: 0.6, delay: 0.15 }
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        x: 0,
                                                        y: 0,
                                                        rotate: -90,
                                                        transition: { duration: 0.4, delay: i * 0.05 }
                                                    }
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="h-20 w-20 p-[6px] bg-white/10 rounded-3xl
                                            shadow-[0_0_3px_rgba(99,102,241,0.4),0_0_6px_rgba(99,102,241,0.3),0_0_12px_rgba(99,102,241,0.2),0_0_24px_rgba(99,102,241,0.1)]
                                            "
                                            >
                                                <div className="h-full w-full rounded-2xl flex flex-col justify-between
              ">
                                                    <div className="flex flex-col justify-evenly h-full rounded-2xl">
                                                        <img src={ele.url} alt="" className="rounded-2xl object-cover" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </>
                        )}

                    </AnimatePresence>
                </div>

            </div>
        </motion.div >
    );
}
