/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Circle } from "lucide-react";
import { ColourfulTextDemo } from "../accernity/ColourfulTextDemo";
import { useNavigate } from "react-router-dom";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                    )}
                />
            </motion.div>
        </motion.div>
    )
}

export default function HeroSection({
    badge = "Innovation. Automation. Growth.",
    title1 = "Empowering Startups with",
    title2 = "AI-Driven Automation",
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    }
    const navigate = useNavigate();
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-1"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-white">
                            {/* <ColourfulTextDemo /> */}
                            Revolutionizing Startup Growth <br />with AI Agents by <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 via-sky-200 to-rose-300">
                                Neoversine
                            </span>
                            {/* <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                <DecryptedText
                                    text={title1}
                                    animateOn="view"
                                    revealDirection="center"
                                    speed={50}
                                    maxIterations={15}
                                    sequential={true}
                                    className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                                    encryptedClassName="bg-clip-text text-transparent bg-gradient-to-b from-white/60 to-white/40"
                                />
                            </span>
                            <br />
                            <span className={cn("bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300")}>
                                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Empowering Startups with AI Automation</h1>
                                <DecryptedText
                                    text={title2}
                                    animateOn="view"
                                    revealDirection="center"
                                    speed={50}
                                    maxIterations={15}
                                    sequential={true}
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                                    encryptedClassName="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300/60 via-white/50 to-rose-300/60"
                                />
                            </span> */}
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-lg text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            Crafting exceptional digital experiences through innovative design and cutting-edge technology.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <button className="py-2 px-5 border-4 border-white bg-gradient-to-br from-purple-300 via-white to-sky-200 rounded-full shadow-inner hover:shadow-none active:shadow-inner shadow-gray-400 cursor-pointer" onClick={() => navigate('/contact')}>Book a call</button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    )
}
