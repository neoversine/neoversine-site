import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    IconCpu,
    IconBolt,
    IconBuildingFactory2,
    IconBriefcase,
    IconRss,
    IconBinaryTree,
    IconUsersGroup,
    IconShieldLock,
    IconWorldWww,
    IconTransform,
    IconBrain,
    IconArrowUpRight,
    IconCircleDot
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function IndustriesWeServe() {
    const navigate = useNavigate();
    const [hoveredIdx, setHoveredIdx] = useState(null);

    // 5 Left Systems
    const leftSystems = [
        {
            id: "01",
            title: "Agentic Era Operations",
            kpi: "100% Autonomous",
            desc: "Multi-turn specialist subagents handling end-to-end B2B operations.",
            icon: <IconCpu className="w-5 h-5" />
        },
        {
            id: "02",
            title: "Inference Economics",
            kpi: "-80% Token Cost",
            desc: "Custom vLLM bare-metal cluster with PagedAttention & KV-cache reuse.",
            icon: <IconBolt className="w-5 h-5" />
        },
        {
            id: "03",
            title: "Digital Twin Simulators",
            kpi: "Zero Real Risk",
            desc: "Agent-based modeling mirroring supply chains & manufacturing lines.",
            icon: <IconBuildingFactory2 className="w-5 h-5" />
        },
        {
            id: "04",
            title: "B2B Work Replacement",
            kpi: "24/7 Operations",
            desc: "Headcount replacement for invoice validation, compliance & triage.",
            icon: <IconBriefcase className="w-5 h-5" />
        },
        {
            id: "05",
            title: "RSS to Revenue Pipeline",
            kpi: "10x Speedup",
            desc: "Autonomous feed synthesis, thought leadership & multi-channel publishing.",
            icon: <IconRss className="w-5 h-5" />
        }
    ];

    // 5 Right Systems
    const rightSystems = [
        {
            id: "06",
            title: "Agentic CRM Intelligence",
            kpi: "+40% Conversion",
            desc: "Self-updating customer records with real-time intent shift triggers.",
            icon: <IconUsersGroup className="w-5 h-5" />
        },
        {
            id: "07",
            title: "SaaS Ownership Stack",
            kpi: "0% Lock-In",
            desc: "Self-hosted phone control deck, agent-OS & custom inference layer.",
            icon: <IconShieldLock className="w-5 h-5" />
        },
        {
            id: "08",
            title: "Adaptive NeoCrawl",
            kpi: "0 Selectors",
            desc: "Vision-guided web scrapers immune to site structure & DOM shifts.",
            icon: <IconWorldWww className="w-5 h-5" />
        },
        {
            id: "09",
            title: "Digital Transformation",
            kpi: "Full Migration",
            desc: "Autonomous agents refactoring legacy codebases with zero downtime.",
            icon: <IconTransform className="w-5 h-5" />
        },
        {
            id: "10",
            title: "Long-Term Memory Fabric",
            kpi: "Zero Amnesia",
            desc: "Persistent cross-task knowledge graphs preserving compounding context.",
            icon: <IconBrain className="w-5 h-5" />
        }
    ];

    // Unified SVG Topology Coordinates (ViewBox 0 0 900 520)
    // Left Hexagons: cx varies (130 / 155), cy = 52, 146, 240, 334, 428
    const leftHexagons = [
        { cx: 130, cy: 52, id: "01", icon: <IconCpu className="w-4 h-4" /> },
        { cx: 155, cy: 146, id: "02", icon: <IconBolt className="w-4 h-4" /> },
        { cx: 130, cy: 240, id: "03", icon: <IconBuildingFactory2 className="w-4 h-4" /> },
        { cx: 155, cy: 334, id: "04", icon: <IconBriefcase className="w-4 h-4" /> },
        { cx: 130, cy: 428, id: "05", icon: <IconRss className="w-4 h-4" /> }
    ];

    // Right Hexagons: cx varies (770 / 745), cy = 52, 146, 240, 334, 428
    const rightHexagons = [
        { cx: 770, cy: 52, id: "06", icon: <IconUsersGroup className="w-4 h-4" /> },
        { cx: 745, cy: 146, id: "07", icon: <IconShieldLock className="w-4 h-4" /> },
        { cx: 770, cy: 240, id: "08", icon: <IconWorldWww className="w-4 h-4" /> },
        { cx: 745, cy: 334, id: "09", icon: <IconTransform className="w-4 h-4" /> },
        { cx: 770, cy: 428, id: "10", icon: <IconBrain className="w-4 h-4" /> }
    ];

    // Precise Angled Circuit Traces connecting from Hexagons to Central Hub (Center at cx: 450, cy: 240, r: 68)
    const circuitTraces = [
        // Left Traces (from hex right edge to core)
        { key: "L-0", d: "M 175 52 L 270 52 L 360 200 L 400 200", pStart: [175, 52], pEnd: [400, 200] },
        { key: "L-1", d: "M 200 146 L 290 146 L 360 220 L 400 220", pStart: [200, 146], pEnd: [400, 220] },
        { key: "L-2", d: "M 175 240 L 390 240", pStart: [175, 240], pEnd: [390, 240] },
        { key: "L-3", d: "M 200 334 L 290 334 L 360 260 L 400 260", pStart: [200, 334], pEnd: [400, 260] },
        { key: "L-4", d: "M 175 428 L 270 428 L 360 280 L 400 280", pStart: [175, 428], pEnd: [400, 280] },
        // Right Traces (from core to right hex left edge)
        { key: "R-0", d: "M 500 200 L 540 200 L 630 52 L 725 52", pStart: [500, 200], pEnd: [725, 52] },
        { key: "R-1", d: "M 500 220 L 540 220 L 610 146 L 700 146", pStart: [500, 220], pEnd: [700, 146] },
        { key: "R-2", d: "M 510 240 L 725 240", pStart: [510, 240], pEnd: [725, 240] },
        { key: "R-3", d: "M 500 260 L 540 260 L 610 334 L 700 334", pStart: [500, 260], pEnd: [700, 334] },
        { key: "R-4", d: "M 500 280 L 540 280 L 630 428 L 725 428", pStart: [500, 280], pEnd: [725, 428] }
    ];

    // Hexagon points calculation helper (r = 44)
    const getHexPoints = (cx, cy, r = 44) => {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            points.push(`${x},${y}`);
        }
        return points.join(" ");
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="py-[clamp(56px,7vw,130px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full"
        >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="max-w-[680px]">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-xs font-mono text-[#6366F1] uppercase tracking-wider mb-4">
                        <IconCircleDot className="w-3.5 h-3.5" />
                        SYSTEM ARCHITECTURE TOPOLOGY
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                        10 Portfolio Systems.{" "}
                        <span className="text-cyan-300">
                            Priced by Outcome.
                        </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        Symmetrical honeycomb topology connecting our central Hermes OS substrate directly to verified client business deliverables.
                    </p>
                </div>

                <button
                    onClick={() => navigate("/services")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0C0E12] border border-white/[0.15] hover:border-white/30 text-white text-xs font-mono transition-colors flex-shrink-0 cursor-pointer self-start md:self-auto"
                >
                    <span>View All Systems Specs</span>
                    <IconArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>
            </div>

            {/* ================= UNIFIED HONEYCOMB TOPOLOGY CANVAS ================= */}
            <div className="relative rounded-[32px] bg-[#07090E] border border-white/[0.12] p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl">
                
                {/* DESKTOP VIEW: Unified 3-Column Layout with Synchronized SVG Core */}
                <div className="hidden lg:grid grid-cols-12 gap-4 items-center relative z-10">
                    
                    {/* LEFT FLANK: 5 Right-Aligned Text Blocks */}
                    <div className="col-span-3 flex flex-col justify-between h-[520px] py-1">
                        {leftSystems.map((item, idx) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredIdx(`L-${idx}`)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                className={`text-right transition-all cursor-pointer flex flex-col justify-center h-20 ${
                                    hoveredIdx === `L-${idx}` ? "translate-x-1" : ""
                                }`}
                            >
                                <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider block">
                                    {item.kpi}
                                </span>
                                <h4 className={`text-xs sm:text-sm font-bold transition-colors ${
                                    hoveredIdx === `L-${idx}` ? "text-cyan-300" : "text-white"
                                }`}>
                                    {item.title}
                                </h4>
                                <p className="text-[10px] text-[#94A3B8] font-light leading-snug line-clamp-2 mt-0.5">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CENTER COLUMN: Master Interactive SVG Circuit Canvas */}
                    <div className="col-span-6 flex items-center justify-center relative">
                        <svg
                            viewBox="0 0 900 520"
                            className="w-full h-[520px] overflow-visible select-none"
                        >
                            <defs>
                                {/* Gradient for Active Flow Lines */}
                                <linearGradient id="activeTraceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00C4B4" />
                                    <stop offset="50%" stopColor="#38BDF8" />
                                    <stop offset="100%" stopColor="#6366F1" />
                                </linearGradient>

                                {/* Cyan Glow Filter */}
                                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="6" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            {/* 1. ALL CIRCUIT TRACE LINES & ANIMATED PULSES */}
                            {circuitTraces.map((trace, idx) => {
                                const isActive = hoveredIdx === trace.key;
                                return (
                                    <g key={trace.key}>
                                        {/* Static Background Circuit Trace */}
                                        <path
                                            d={trace.d}
                                            fill="none"
                                            stroke={isActive ? "#38BDF8" : "#1E293B"}
                                            strokeWidth={isActive ? "2.5" : "1.5"}
                                            strokeDasharray={isActive ? "none" : "3 3"}
                                            className="transition-colors duration-300"
                                        />

                                        {/* Animated High-Speed Data Packet Pulse */}
                                        <motion.path
                                            d={trace.d}
                                            fill="none"
                                            stroke="url(#activeTraceGrad)"
                                            strokeWidth="3"
                                            strokeDasharray="20 120"
                                            animate={{ strokeDashoffset: [140, 0] }}
                                            transition={{
                                                duration: 2.2,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: idx * 0.18
                                            }}
                                        />

                                        {/* Endpoint Connection Dots */}
                                        <circle
                                            cx={trace.pStart[0]}
                                            cy={trace.pStart[1]}
                                            r={isActive ? "3.5" : "2.5"}
                                            fill={isActive ? "#38BDF8" : "#64748B"}
                                        />
                                        <circle
                                            cx={trace.pEnd[0]}
                                            cy={trace.pEnd[1]}
                                            r={isActive ? "3.5" : "2.5"}
                                            fill={isActive ? "#38BDF8" : "#64748B"}
                                        />
                                    </g>
                                );
                            })}

                            {/* 2. LEFT 5 HONEYCOMB HEXAGONS */}
                            {leftHexagons.map((hex, idx) => {
                                const isHovered = hoveredIdx === `L-${idx}`;
                                return (
                                    <g
                                        key={hex.id}
                                        onMouseEnter={() => setHoveredIdx(`L-${idx}`)}
                                        onMouseLeave={() => setHoveredIdx(null)}
                                        className="cursor-pointer"
                                    >
                                        <polygon
                                            points={getHexPoints(hex.cx, hex.cy, 44)}
                                            fill="#0B0F17"
                                            stroke={isHovered ? "#38BDF8" : "#00C4B4"}
                                            strokeWidth={isHovered ? "3.5" : "2"}
                                            className="transition-all duration-300"
                                        />
                                        {/* Embedded Icon & Number */}
                                        <foreignObject
                                            x={hex.cx - 20}
                                            y={hex.cy - 20}
                                            width="40"
                                            height="40"
                                            className="pointer-events-none"
                                        >
                                            <div className="w-full h-full flex flex-col items-center justify-center text-cyan-300">
                                                {hex.icon}
                                                <span className="text-[7px] font-mono text-gray-400 font-bold mt-0.5">
                                                    #{hex.id}
                                                </span>
                                            </div>
                                        </foreignObject>
                                    </g>
                                );
                            })}

                            {/* 3. RIGHT 5 HONEYCOMB HEXAGONS */}
                            {rightHexagons.map((hex, idx) => {
                                const isHovered = hoveredIdx === `R-${idx}`;
                                return (
                                    <g
                                        key={hex.id}
                                        onMouseEnter={() => setHoveredIdx(`R-${idx}`)}
                                        onMouseLeave={() => setHoveredIdx(null)}
                                        className="cursor-pointer"
                                    >
                                        <polygon
                                            points={getHexPoints(hex.cx, hex.cy, 44)}
                                            fill="#0B0F17"
                                            stroke={isHovered ? "#38BDF8" : "#00C4B4"}
                                            strokeWidth={isHovered ? "3.5" : "2"}
                                            className="transition-all duration-300"
                                        />
                                        {/* Embedded Icon & Number */}
                                        <foreignObject
                                            x={hex.cx - 20}
                                            y={hex.cy - 20}
                                            width="40"
                                            height="40"
                                            className="pointer-events-none"
                                        >
                                            <div className="w-full h-full flex flex-col items-center justify-center text-cyan-300">
                                                {hex.icon}
                                                <span className="text-[7px] font-mono text-gray-400 font-bold mt-0.5">
                                                    #{hex.id}
                                                </span>
                                            </div>
                                        </foreignObject>
                                    </g>
                                );
                            })}

                            {/* 4. ELEVATED CENTRAL CORE HUB (HERMES OS) */}
                            <g className="cursor-pointer" onClick={() => navigate("/services")}>
                                {/* Radial Ambient Back Pulse */}
                                <motion.circle
                                    cx="450"
                                    cy="240"
                                    r="80"
                                    fill="none"
                                    stroke="#38BDF8"
                                    strokeWidth="1.5"
                                    animate={{ r: [75, 95], opacity: [0.6, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                />

                                {/* Outer Rim */}
                                <circle
                                    cx="450"
                                    cy="240"
                                    r="68"
                                    fill="#0B0F17"
                                    stroke="#38BDF8"
                                    strokeWidth="3"
                                    className="drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                                />

                                {/* Inner Core Surface */}
                                <circle
                                    cx="450"
                                    cy="240"
                                    r="58"
                                    fill="#06080D"
                                    stroke="#1E293B"
                                    strokeWidth="1.5"
                                />

                                {/* Core Content Label */}
                                <foreignObject x="390" y="185" width="120" height="110" className="pointer-events-none">
                                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-1">
                                        <div className="w-6 h-6 rounded-full bg-[#6366F1]/20 border border-[#6366F1] flex items-center justify-center text-cyan-300 mb-0.5">
                                            <IconCpu className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="text-[9px] font-mono text-white font-bold uppercase tracking-wider leading-tight">
                                            HERMES OS
                                        </span>
                                        <span className="text-[7px] font-mono text-cyan-400 uppercase tracking-widest">
                                            CORE SUBSTRATE
                                        </span>
                                        <div className="mt-1 flex items-center gap-1">
                                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                                            <span className="text-[7px] font-mono text-emerald-400">10 SYSTEMS</span>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </svg>
                    </div>

                    {/* RIGHT FLANK: 5 Left-Aligned Text Blocks */}
                    <div className="col-span-3 flex flex-col justify-between h-[520px] py-1">
                        {rightSystems.map((item, idx) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredIdx(`R-${idx}`)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                className={`text-left transition-all cursor-pointer flex flex-col justify-center h-20 ${
                                    hoveredIdx === `R-${idx}` ? "-translate-x-1" : ""
                                }`}
                            >
                                <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider block">
                                    {item.kpi}
                                </span>
                                <h4 className={`text-xs sm:text-sm font-bold transition-colors ${
                                    hoveredIdx === `R-${idx}` ? "text-cyan-300" : "text-white"
                                }`}>
                                    {item.title}
                                </h4>
                                <p className="text-[10px] text-[#94A3B8] font-light leading-snug line-clamp-2 mt-0.5">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* MOBILE RESPONSIVE VIEW */}
                <div className="flex lg:hidden flex-col gap-4">
                    <div className="text-center py-2 mb-2 border-b border-white/[0.08]">
                        <span className="text-xs font-mono text-cyan-300 font-bold uppercase">HERMES AGENT-OS</span>
                        <p className="text-[10px] text-[#6B7280]">10 Symmetrical Production Systems</p>
                    </div>

                    {[...leftSystems, ...rightSystems].map((item) => (
                        <div
                            key={item.id}
                            className="p-3.5 rounded-[18px] bg-[#0C0E12] border border-white/[0.08] flex items-center gap-3.5"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#080A0E] border border-cyan-400/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[9px] font-mono text-[#6B7280]">#{item.id}</span>
                                    <span className="text-[9px] font-mono text-cyan-300 font-semibold">{item.kpi}</span>
                                </div>
                                <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                                <p className="text-[10px] text-[#94A3B8] font-light line-clamp-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Callout Bar */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="text-xs font-mono text-[#94A3B8]">
                        <span className="text-white font-semibold">10 Verified Systems</span> — Engineered by Arka &amp; Ankon. One flat architecture · Zero third-party SaaS tax.
                    </div>
                    <button
                        onClick={() => navigate("/contact")}
                        className="px-5 py-2 rounded-full bg-white text-black font-semibold font-mono text-xs hover:bg-gray-200 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                        <span>Schedule Build</span>
                        <IconArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                </div>

            </div>

        </motion.section>
    );
}

export default IndustriesWeServe;
