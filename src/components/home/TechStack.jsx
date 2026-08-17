import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

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
        <section className="py-[clamp(48px,6vw,96px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto text-center">
            <p
                className="text-[11px] text-[#6366F1] font-mono uppercase tracking-widest font-semibold mb-6"
                data-aos="zoom-in"
            >
                FOUNDATIONAL ARCHITECTURE STACK
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                {architectureStack.map((tech, i) => (
                    <span
                        key={tech}
                        data-aos="fade-up"
                        data-aos-delay={i * 80}
                        className="inline-flex items-center text-sm sm:text-base md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06]"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default TechStack;