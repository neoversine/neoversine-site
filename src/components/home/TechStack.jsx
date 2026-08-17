import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
    const architectureStack = [
        "Hermes Agent-OS",
        "vLLM PagedAttention",
        "KV-Cache Reuse",
        "Multi-Agent Swarms",
        "NeoCrawl Engine",
        "MIT Control Deck",
        "D8alytics Vision"
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-[clamp(48px,6vw,96px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto text-center"
        >
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="text-[11px] text-[#6366F1] font-mono uppercase tracking-widest font-semibold mb-6"
            >
                FOUNDATIONAL ARCHITECTURE STACK
            </motion.p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                {architectureStack.map((tech, i) => (
                    <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="inline-flex items-center text-sm sm:text-base md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08]"
                    >
                        {tech}
                    </motion.span>
                ))}
            </div>
        </motion.section>
    );
};

export default TechStack;