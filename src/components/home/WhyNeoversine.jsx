import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    IconCpu,
    IconBolt,
    IconBrain,
    IconDeviceDesktopAnalytics,
    IconShieldCheck,
    IconTerminal2,
    IconBinaryTree,
    IconTransform,
    IconCheck,
    IconArrowUpRight,
    IconCircleDot
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function WhyNeoversine() {
    const navigate = useNavigate();

    // Live terminal log simulator for Hermes Agent-OS
    const [termLogs, setTermLogs] = useState([
        "init: runtime.hermes_core",
        "memory_graph: cross-task sync complete",
        "dispatch: subagent_04 (intent_extraction)",
        "skill_compile: dynamic_sql_ast v2.4"
    ]);

    useEffect(() => {
        const stream = [
            "vllm: paged_attention kv_reuse active",
            "telemetry: 18ms latency lock",
            "swarm: 12 subagents concurrent",
            "mit_deck: ws_stream synced (0ms drop)",
            "memory: persistent graph node linked",
            "neocrawl: dom_vision adapt successful"
        ];
        let idx = 0;
        const interval = setInterval(() => {
            setTermLogs((prev) => [...prev.slice(1), stream[idx % stream.length]]);
            idx++;
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-[clamp(64px,8vw,140px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full">
            
            {/* Section Header */}
            <div className="text-center max-w-[680px] mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-xs font-mono text-[#6366F1] uppercase tracking-wider mb-4">
                    <IconCircleDot className="w-3.5 h-3.5" />
                    CORE ARCHITECTURAL PILLARS
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight text-white">
                    We Build With Our{" "}
                    <span className="text-cyan-300">
                        Own Architecture.
                    </span>
                </h2>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                    The era of AI agencies stitching off-the-shelf wrappers is over. We build the substrate, not the souvenir.
                </p>
            </div>

            {/* Kinetic 2x4 Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
                
                {/* ================= PANEL 1 (Wide span-6): Hermes Agent-OS Substrate ================= */}
                <div className="lg:col-span-6 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 sm:p-7 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                                    <IconCpu className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                                        ● ONLINE · CORE OS
                                    </span>
                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        Hermes Agent-OS Substrate
                                    </h3>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                Self-Improving
                            </span>
                        </div>

                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-5">
                            Self-improving, memory-enabled runtime gateway orchestrating parallel specialist subagents and dynamic runtime skill compilation.
                        </p>

                        {/* Interactive Terminal Stream Artifact */}
                        <div className="rounded-xl bg-black/70 border border-white/[0.06] p-3.5 font-mono text-[11px] space-y-1.5 overflow-hidden">
                            <div className="flex items-center justify-between text-[9px] text-[#6B7280] pb-1.5 mb-1.5 border-b border-white/[0.06]">
                                <span>HERMES_EVENT_BUS // REALTIME STREAM</span>
                                <span className="text-cyan-400">LIVE</span>
                            </div>
                            {termLogs.map((log, lIdx) => (
                                <div key={lIdx} className="flex items-center gap-2 text-gray-300">
                                    <span className="text-cyan-400 select-none">&gt;</span>
                                    <span className={lIdx === termLogs.length - 1 ? "text-cyan-300 font-semibold" : "text-gray-400"}>
                                        {log}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                        <span>Key Metric:</span>
                        <span className="text-cyan-400 font-semibold">Autonomous Skill Generation</span>
                    </div>
                </div>

                {/* ================= PANEL 2 (Wide span-6): vLLM Inference Economics ================= */}
                <div className="lg:col-span-6 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 sm:p-7 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#6366F1]">
                                    <IconBolt className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6366F1] font-semibold block">
                                        HARDWARE-LEVEL SERVING
                                    </span>
                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        vLLM Inference Economics
                                    </h3>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono text-[#6366F1] bg-[#6366F1]/10 px-2.5 py-0.5 rounded-full border border-[#6366F1]/30">
                                -80% Compute Cost
                            </span>
                        </div>

                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-5">
                            PagedAttention, continuous batching, KV-cache reuse, and speculative decoding to slash multi-agent serving costs at scale.
                        </p>

                        {/* Interactive Latency Graph Artifact (120ms -> 18ms) */}
                        <div className="rounded-xl bg-black/70 border border-white/[0.06] p-3.5">
                            <div className="flex items-center justify-between text-[10px] font-mono text-[#6B7280] mb-2">
                                <span>Serving Latency Reduction</span>
                                <span className="text-emerald-400 font-semibold">120ms → 18ms</span>
                            </div>
                            <svg viewBox="0 0 300 50" className="w-full h-12">
                                <defs>
                                    <linearGradient id="vllmGraph" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#ef4444" />
                                        <stop offset="40%" stopColor="#f59e0b" />
                                        <stop offset="80%" stopColor="#6366F1" />
                                        <stop offset="100%" stopColor="#34D399" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M 10 10 Q 80 15, 130 35 T 290 42"
                                    fill="none"
                                    stroke="url(#vllmGraph)"
                                    strokeWidth="2.5"
                                />
                                <circle cx="10" cy="10" r="4" fill="#ef4444" />
                                <circle cx="290" cy="42" r="5" fill="#34D399" />
                            </svg>
                            <div className="flex justify-between text-[9px] font-mono text-[#6B7280] mt-1">
                                <span>Unoptimized APIs (120ms)</span>
                                <span>vLLM Kernel Cluster (18ms)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                        <span>VRAM Footprint:</span>
                        <span className="text-emerald-400 font-semibold">92GB → &lt;10GB</span>
                    </div>
                </div>

                {/* ================= PANEL 3 (span-4): Parallel Subagent Swarms ================= */}
                <div className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-purple-400">
                                <IconBinaryTree className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                                10x Parallelism
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            Parallel Subagent Swarms
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-4">
                            Orchestrating dozens of specialized agents executing concurrently on lead enrichment, data synthesis, and workflows.
                        </p>

                        {/* Mini Swarm Pulse Visual */}
                        <div className="rounded-xl bg-black/60 border border-white/[0.04] p-3 flex items-center justify-around py-3">
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-[9px] font-mono text-white font-bold">OS</div>
                                <span className="text-[8px] font-mono text-[#6B7280]">Dispatch</span>
                            </div>
                            <span className="text-cyan-400 font-mono text-xs">➔</span>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-[9px] font-mono text-black font-bold">A1</div>
                                <span className="text-[8px] font-mono text-[#6B7280]">Research</span>
                            </div>
                            <span className="text-cyan-400 font-mono text-xs">➔</span>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] font-mono text-black font-bold">A2</div>
                                <span className="text-[8px] font-mono text-[#6B7280]">Verify</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-cyan-300">
                        Zero bottleneck queuing
                    </div>
                </div>

                {/* ================= PANEL 4 (span-4): Live Event-Driven Control Deck ================= */}
                <div className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-rose-400">
                                <IconDeviceDesktopAnalytics className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                                MIT Licensed
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            Live Control Deck
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-4">
                            Phone-first control surface: watch reasoning in real-time, intervene instantly, and tweak runtime parameters without redeploying.
                        </p>

                        {/* Mini Control Deck Indicator */}
                        <div className="rounded-xl bg-black/60 border border-white/[0.04] p-3 flex items-center justify-between text-xs font-mono">
                            <span className="text-gray-300 text-[10px]">WebSocket Stream:</span>
                            <span className="text-emerald-400 font-bold text-[10px]">0ms Latency</span>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-rose-400">
                        100% Self-Hosted Runtime
                    </div>
                </div>

                {/* ================= PANEL 5 (span-4): Adaptive Data & NeoCrawl ================= */}
                <div className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400">
                                <IconTerminal2 className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                                0 Selectors
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            Adaptive NeoCrawl
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-4">
                            Vision-guided scrapers and ScrapeGraphAI pipelines that adapt to site changes without brittle selectors or SaaS fees.
                        </p>

                        {/* Mini Scraper Status */}
                        <div className="rounded-xl bg-black/60 border border-white/[0.04] p-3 flex items-center justify-between text-xs font-mono">
                            <span className="text-gray-300 text-[10px]">Anti-Bot Bypass:</span>
                            <span className="text-cyan-300 font-bold text-[10px]">Vision-Guided</span>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-amber-400">
                        Zero third-party scraping proxy tax
                    </div>
                </div>

                {/* ================= PANEL 6 (span-4): D8alytics Synthetic Data ================= */}
                <div className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400">
                                <IconTransform className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                mAP50 0.96
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            D8alytics Synthetic CV
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-4">
                            Computer vision pipelines generating 700 YOLO-formatted images in &lt;1h achieving mAP50 0.96 with zero real images.
                        </p>

                        {/* Mini Bounding Box Artifact */}
                        <div className="rounded-xl bg-black/60 border border-white/[0.04] p-3 flex items-center justify-between text-xs font-mono">
                            <span className="text-gray-300 text-[10px]">Dataset Speed:</span>
                            <span className="text-emerald-400 font-bold text-[10px]">700 imgs / hr</span>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-emerald-400">
                        100% Synthetic Object Detection
                    </div>
                </div>

                {/* ================= PANEL 7 (span-4): Persistent Memory Fabric ================= */}
                <div className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-blue-400">
                                <IconBrain className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                                Persistent Graph
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            Persistent Memory Fabric
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-4">
                            Cross-task knowledge graphs so agents recall past runs, avoid repeated mistakes, and compound organizational intelligence.
                        </p>

                        {/* Mini Memory Link Artifact */}
                        <div className="rounded-xl bg-black/60 border border-white/[0.04] p-3 flex items-center justify-between text-xs font-mono">
                            <span className="text-gray-300 text-[10px]">Recall Accuracy:</span>
                            <span className="text-cyan-400 font-bold text-[10px]">Zero Amnesia</span>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-blue-400">
                        Compound agent intelligence
                    </div>
                </div>

                {/* ================= PANEL 8 (span-4): Architecture Ownership ================= */}
                <div className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 flex flex-col justify-between transition-colors group">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-teal-400">
                                <IconShieldCheck className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/20">
                                100% Owned
                            </span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            Architecture Ownership
                        </h3>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light mb-4">
                            No wrappers, no reskinned LangChain, zero vendor lock-in. We build the foundational substrate you own end-to-end.
                        </p>

                        {/* Mini Code Ownership Artifact */}
                        <div className="rounded-xl bg-black/60 border border-white/[0.04] p-3 flex items-center justify-between text-xs font-mono">
                            <span className="text-gray-300 text-[10px]">Vendor Lock-In:</span>
                            <span className="text-teal-400 font-bold text-[10px]">0% (Full Code Export)</span>
                        </div>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-teal-400">
                        Two builders · One substrate
                    </div>
                </div>

            </div>

            {/* Bottom Section Action Pill */}
            <div className="mt-12 text-center">
                <button
                    onClick={() => navigate("/services")}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-mono font-semibold text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                >
                    <span>Explore 12 Architectural Systems</span>
                    <IconArrowUpRight className="w-4 h-4" />
                </button>
            </div>

        </section>
    );
}

export default WhyNeoversine;