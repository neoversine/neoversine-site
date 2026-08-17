// NeoversineShowcase.jsx
import React, { useEffect } from "react";
import { FaTerminal, FaBolt, FaLayerGroup, FaMobileAlt, FaDatabase, FaBrain } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const capabilities = [
    {
        title: "Hermes Agent-OS",
        icon: <FaTerminal />,
        desc: "Self-improving, long-term memory-enabled gateway orchestrating parallel subagents.",
    },
    {
        title: "vLLM Serving Economics",
        icon: <FaBolt />,
        desc: "PagedAttention, KV-cache reuse & speculative decoding to minimize cost-per-token.",
    },
    {
        title: "Multi-Agent Swarms",
        icon: <FaLayerGroup />,
        desc: "Parallel specialized agents working concurrently on lead research, drafting & pipelines.",
    },
    {
        title: "Pocket Control Deck",
        icon: <FaMobileAlt />,
        desc: "MIT-licensed event-driven surface to watch reasoning in real-time and intervene live.",
    },
    {
        title: "Adaptive Data & NeoCrawl",
        icon: <FaDatabase />,
        desc: "Vision-guided crawlers and ScrapeGraphAI that adapt to DOM shifts without brittle selectors.",
    },
    {
        title: "Synthetic Data Engines",
        icon: <FaBrain />,
        desc: "D8alytics pipeline: 700 YOLO images/hour with mAP50 0.96 — zero real images needed.",
    },
];

const NeoversineShowcase = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-[#181818] text-white py-20 max-md:pt-10 px-6 md:px-16 rounded-3xl overflow-hidden">
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-center pb-12 floating-text"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                        Foundational Capabilities
                    </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                    We don't reskin third-party APIs. We architect the substrate that makes agent swarms economically viable and operationally transparent.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {capabilities.map((item, i) => (
                    <div
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={`${(i % 3) * 150}`}
                        data-aos-anchor-placement="center-bottom"
                        className="relative min-h-[220px] cursor-pointer group"
                    >
                        <div className="absolute left-[5px] top-[3px] h-full w-full bg-[#bfbfbf]"
                            style={{
                                clipPath: "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)",
                                boxShadow: "white 0px 8px 0px 4px",
                            }}
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-[#2e2e2e] to-[#131313] group-hover:from-[#3a3a3a] group-hover:to-[#1a1a1a] transition-all duration-300 py-8 px-7 flex flex-col justify-start"
                            style={{
                                clipPath: "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)",
                                boxShadow: "black 0px 8px 0px 4px",
                            }}>
                            <div className="text-3xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeoversineShowcase;
