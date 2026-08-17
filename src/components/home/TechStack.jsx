import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechStack = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const architectureStack = [
        "Hermes Agent-OS",
        "vLLM",
        "PagedAttention",
        "KV-Cache Reuse",
        "Multi-Agent Swarms",
        "ScrapeGraphAI",
        "Control Deck"
    ];

    return (
        <div className="text-center md:my-20 my-12 px-4 floating-text">
            <p
                className="text-gray-400 mb-4 text-xl md:text-2xl font-mono"
                data-aos="zoom-in"
                data-aos-delay="200"
            >
                Our Architecture Stack
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 max-w-5xl mx-auto">
                {architectureStack.map((tech, i) => (
                    <span
                        key={tech}
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                        className="inline-flex items-center text-sm sm:text-lg md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400 py-1 px-2"
                    >
                        {tech} {i < architectureStack.length - 1 && <span className="text-gray-600 ml-2 md:ml-3">•</span>}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default TechStack