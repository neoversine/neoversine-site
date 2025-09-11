"use client"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

const posts = [
    {
        name: "Neo Post",
        desp: "Turn one prompt into powerful posters — elevate your brand visibility effortlessly.",
        imgSrc: "/works/neopost2.png",
        positionClassname: "left-[50%] top-[0%] -translate-[80px]",
        baseAngle: 0
    },
    {
        name: "Neo Crawl",
        desp: "Ultimate scrapper — gather data and insights effortlessly.",
        imgSrc: "/works/neocrawl.png",
        positionClassname: "left-[97.53%] top-[34.55%] -translate-[80px]",
        baseAngle: 72
    },
    {
        name: "Neo Bot",
        desp: "Ultimate WhatsApp ordering bot that takes your orders from WhatsApp.",
        imgSrc: "/works/neobot.png",
        positionClassname: "left-[79.39%] top-[90.45%] -translate-[80px]",
        baseAngle: 144
    },
    {
        name: "Neo Geo",
        desp: "Scrape all restaurants in your location — fast and automated.",
        imgSrc: "/works/neogeo.png",
        positionClassname: "left-[20.61%] top-[90.45%] -translate-[80px]",
        baseAngle: 216
    },
    {
        name: "Neo Content",
        desp: "Automated content generation — save time and stay consistent.",
        imgSrc: "/works/neocontent.png",
        positionClassname: "left-[2.45%] top-[34.55%] -translate-[80px]",
        baseAngle: 288
    },
];


function NeoBot({ post, parentRotation }) {
    const [hovered, setHovered] = useState(false)

    // Effective angle comes only from parent circle rotation
    const effectiveAngle = (post?.baseAngle + parentRotation) % 360
    // console.log(effectiveAngle);
    const isInFront = effectiveAngle >= 280 || effectiveAngle <= 55 // 72 ± 20

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
            <div
                className="relative"
            >
                {/* Details Div */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={
                        hovered
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: 20, scale: 0.9 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute w-[300px] bg-[#21212130] backdrop-blur-sm bottom-[100%] left-[100%] px-4 py-4 rounded-2xl border border-gray-300/30 
               pointer-events-none
               shadow-[0_0_2px_rgba(99,102,241,0.5),0_0_4px_rgba(99,102,241,0.3)]"
                >
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-gray-200">{post.name}</h1>
                        <p className="text-xs text-gray-400 mt-1">{post.desp}</p>
                        <div className="w-full h-32 mt-3">
                            <img
                                src={post.imgSrc}
                                alt={post.name}
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </motion.div>


                {/* Main Image with "coming out" effect */}
                {/* <motion.img
                    src="/works/neogen.png"
                    alt="neogen"
                    className="min-w-40 h-40 w-40 object-cover rounded-full"
                    initial={{ scale: 1 }}
                    animate={
                        hovered
                            ? { scale: 1.15, rotate: -2, y: -10 }
                            : { scale: 1, rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3, ease: "easeOut" }}
                /> */}

                <div className="relative h-40 w-40 bg-black/40 backdrop-blur-xs border border-white/40 shadow shadow-black p-2 rounded-full bg-[url('/works/Group10.png')] bg-cover bg-no-repeat bg-top">

                    <div class="flex justify-center items-center text-6xl h-full w-full rounded-full border border-white/70 
            text-white font-bold italic
            shadow-[0_0_3px_rgba(99,102,241,0.8),0_0_6px_rgba(99,102,241,0.6),0_0_12px_rgba(99,102,241,0.4),0_0_24px_rgba(99,102,241,0.2)] z-10 ">
                        {/* {post.name.split(" ")[0].split("")[0]}{post.name.split(" ")[1].split("")[0]} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const WorkHeroSection = () => {
    const [rotation, setRotation] = useState(0)

    // Track parent circle rotation only
    useEffect(() => {
        let start = performance.now()
        let frame
        const update = (time) => {
            let elapsed = (time - start) / 1500 // sec
            let newRotation = (elapsed * 36) % 360 // full 360° in 10s
            setRotation(newRotation)
            frame = requestAnimationFrame(update)
        }
        frame = requestAnimationFrame(update)
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <div className="relative flex justify-center items-center h-[120vh] max-h-[750px] overflow-hidden">
            <div className="circle absolute top-[50%] left-[50%] -translate-x-1/2 h-[900px] w-[900px] rounded-full border border-white animate-spin-slow
                shadow-[0_0_30px_rgba(99,102,241,0.6),0_0_60px_rgba(79,70,229,0.4),0_0_90px_rgba(67,56,202,0.2)]

                ">
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
