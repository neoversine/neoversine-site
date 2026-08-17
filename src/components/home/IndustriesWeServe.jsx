import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    IconCpu,
    IconBolt,
    IconTransform,
    IconWorldWww,
    IconArrowUpRight,
    IconCircleDot,
    IconTerminal2,
    IconActivity,
    IconScan
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function IndustriesWeServe() {
    const navigate = useNavigate();
    const [activeSwarmNode, setActiveNode] = useState(1);

    return (
        <section className="py-[clamp(48px,6vw,120px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="max-w-[680px]">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-xs font-mono text-[#6366F1] uppercase tracking-wider mb-4">
                        <IconCircleDot className="w-3.5 h-3.5" />
                        SYSTEMS THAT REPLACE WORK
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                        Production AI Systems.{" "}
                        <span className="text-cyan-300">
                            Priced by Outcome.
                        </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        We don't sell tools; we sell outcomes. Built on our own architecture — measured in human hours saved, GPU token costs eliminated, and revenue generated.
                    </p>
                </div>

                <button
                    onClick={() => navigate("/services")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0C0E12] border border-white/[0.15] hover:border-white/30 text-white text-xs font-mono transition-colors flex-shrink-0 cursor-pointer self-start md:self-auto"
                >
                    <span>View All 12 Systems Specs</span>
                    <IconArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>
            </div>

            {/* ================= 4 HIGH-IMPACT VISUAL SYSTEM SHOWCASE PANELS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                
                {/* 1. Autonomous Multi-Agent Swarms (Interactive Visual Swarm) */}
                <div className="rounded-[28px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-7 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                                    <IconCpu className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                                        ● ACTIVE · SWARM RUNTIME
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        Autonomous Multi-Agent Swarms
                                    </h3>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                10x Parallelism
                            </span>
                        </div>

                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-6">
                            Specialist subagent swarms deliberating and executing concurrently across B2B workflows, contract reviews, and live lead qualification without human bottlenecks.
                        </p>

                        {/* Interactive Visual Swarm Canvas */}
                        <div className="rounded-2xl bg-black/70 border border-white/[0.06] p-4 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-[#6B7280]">
                                <span>SWARM_TOPOLOGY_MAP</span>
                                <span className="text-cyan-400">HERMES AGENT-OS</span>
                            </div>

                            <svg viewBox="0 0 340 100" className="w-full h-24">
                                <defs>
                                    <linearGradient id="swarmLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#0D2B60" />
                                        <stop offset="50%" stopColor="#38BDF8" />
                                        <stop offset="100%" stopColor="#6366F1" />
                                    </linearGradient>
                                </defs>
                                
                                {/* Connecting Neural Lines */}
                                <line x1="40" y1="50" x2="140" y2="25" stroke="#1E293B" strokeWidth="1.5" />
                                <line x1="40" y1="50" x2="140" y2="75" stroke="#1E293B" strokeWidth="1.5" />
                                <line x1="140" y1="25" x2="260" y2="25" stroke="#1E293B" strokeWidth="1.5" />
                                <line x1="140" y1="75" x2="260" y2="75" stroke="#1E293B" strokeWidth="1.5" />
                                <line x1="140" y1="25" x2="260" y2="75" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />

                                {/* Moving Data Pulses */}
                                <motion.circle
                                    r="3"
                                    fill="#38BDF8"
                                    animate={{ cx: [40, 140, 260], cy: [50, 25, 25] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.circle
                                    r="3"
                                    fill="#818CF8"
                                    animate={{ cx: [40, 140, 260], cy: [50, 75, 75] }}
                                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                />

                                {/* Swarm Nodes */}
                                <circle cx="40" cy="50" r="10" fill="#0C0E12" stroke="#38BDF8" strokeWidth="2" />
                                <text x="40" y="53" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="monospace">OS</text>

                                <circle cx="140" cy="25" r="8" fill="#0C0E12" stroke="#6366F1" strokeWidth="1.5" />
                                <text x="140" y="28" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="monospace">A1</text>

                                <circle cx="140" cy="75" r="8" fill="#0C0E12" stroke="#6366F1" strokeWidth="1.5" />
                                <text x="140" y="78" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="monospace">A2</text>

                                <circle cx="260" cy="25" r="8" fill="#0C0E12" stroke="#34D399" strokeWidth="1.5" />
                                <text x="260" y="28" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="monospace">A3</text>

                                <circle cx="260" cy="75" r="8" fill="#0C0E12" stroke="#34D399" strokeWidth="1.5" />
                                <text x="260" y="78" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="monospace">A4</text>
                            </svg>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#6B7280]">Key Outcome:</span>
                        <span className="text-cyan-300 font-semibold">100% Headcount Replaced</span>
                    </div>
                </div>

                {/* 2. vLLM Inference Economics (Live Latency & Token Economics) */}
                <div className="rounded-[28px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-7 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#6366F1]">
                                    <IconBolt className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-[#6366F1] font-semibold uppercase tracking-wider block">
                                        HARDWARE-LEVEL SERVING
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        vLLM Inference Economics
                                    </h3>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-[#6366F1] bg-[#6366F1]/10 px-2.5 py-0.5 rounded-full border border-[#6366F1]/30">
                                -80% Token Cost
                            </span>
                        </div>

                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-6">
                            PagedAttention, continuous batching, and KV-cache reuse deployed on bare-metal clusters, dropping serving latency from 120ms to 18ms without third-party API rate limits.
                        </p>

                        {/* Interactive Latency & Memory Reduction Visual */}
                        <div className="rounded-2xl bg-black/70 border border-white/[0.06] p-4">
                            <div className="flex items-center justify-between text-[10px] font-mono text-[#6B7280] mb-3">
                                <span>PAGED_ATTENTION // VRAM EFFICIENCY</span>
                                <span className="text-emerald-400 font-semibold">92GB → &lt;10GB</span>
                            </div>

                            {/* Comparison Progress Bars */}
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-[9px] font-mono text-[#6B7280] mb-1">
                                        <span>Standard Unoptimized Stack</span>
                                        <span className="text-rose-400">92GB vRAM (High Cost)</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
                                        <div className="w-[92%] h-full bg-rose-500/80 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[9px] font-mono text-cyan-300 mb-1">
                                        <span>Neoversine vLLM Cluster</span>
                                        <span className="text-emerald-400 font-bold">&lt;10GB vRAM (-80% Cost)</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
                                        <div className="w-[12%] h-full bg-[#6366F1] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#6B7280]">Serving Speed:</span>
                        <span className="text-emerald-400 font-semibold">18ms Latency Lock</span>
                    </div>
                </div>

                {/* 3. D8alytics Synthetic Vision (Live YOLO Bounding Box Generator) */}
                <div className="rounded-[28px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-7 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                                    <IconScan className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                                        100% SYNTHETIC DATA
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        D8alytics Synthetic Vision
                                    </h3>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                mAP50 0.96
                            </span>
                        </div>

                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-6">
                            Generating 700 YOLO-annotated computer vision training images per hour with zero real-world photo collection, achieving production accuracy on complex object detection.
                        </p>

                        {/* Synthetic Vision Frame Artifact */}
                        <div className="rounded-2xl bg-black/70 border border-white/[0.06] p-4 relative overflow-hidden h-28 flex items-center justify-center">
                            <div className="absolute top-2 left-3 text-[9px] font-mono text-[#6B7280]">
                                SYNTH_VISION_FEED // YOLOv8_PREVIEW
                            </div>
                            
                            {/* Simulated Bounding Boxes */}
                            <div className="relative w-48 h-16 border border-dashed border-emerald-400/50 rounded-lg flex items-center justify-center">
                                <span className="absolute -top-2.5 left-2 px-1.5 py-0.2 rounded bg-emerald-500 text-[8px] font-mono text-black font-bold">
                                    OBJECT_DETECT: 96.4%
                                </span>
                                <span className="text-[10px] font-mono text-emerald-300">
                                    700 imgs / hr (0 real photos)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#6B7280]">Verification:</span>
                        <span className="text-emerald-400 font-semibold">mAP50 0.96 Benchmark</span>
                    </div>
                </div>

                {/* 4. Adaptive NeoCrawl (Selectorless Vision Web Scraper) */}
                <div className="rounded-[28px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-7 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400">
                                    <IconWorldWww className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-amber-400 font-semibold uppercase tracking-wider block">
                                        ZERO-SELECTOR ENGINE
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        Adaptive NeoCrawl Infrastructure
                                    </h3>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                                0 Selectors
                            </span>
                        </div>

                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-6">
                            Vision-guided scrapers and ScrapeGraphAI pipelines that adapt autonomously to site structure changes without brittle CSS selectors, CAPTCHA blockades, or paid third-party proxies.
                        </p>

                        {/* Live Scraper Visual Box */}
                        <div className="rounded-2xl bg-black/70 border border-white/[0.06] p-4 font-mono text-[11px] space-y-1.5">
                            <div className="flex items-center justify-between text-[9px] text-[#6B7280] pb-1 border-b border-white/[0.06]">
                                <span>NEOCRAWL_AUTONOMOUS_PARSER</span>
                                <span className="text-emerald-400">READY</span>
                            </div>
                            <div className="text-gray-300 text-[10px] flex items-center gap-2">
                                <span className="text-amber-400">&gt;</span>
                                <span>Anti-Bot Evasion: Active (Dynamic Vision Parsing)</span>
                            </div>
                            <div className="text-gray-300 text-[10px] flex items-center gap-2">
                                <span className="text-emerald-400">&gt;</span>
                                <span>DOM Mutation Tolerance: 100% (Zero Selectors)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#6B7280]">Proxy Tax:</span>
                        <span className="text-amber-400 font-semibold">$0 / month</span>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default IndustriesWeServe;
