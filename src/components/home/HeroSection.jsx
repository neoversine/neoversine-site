import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    IconArrowUpRight,
    IconBolt,
    IconCpu,
    IconTerminal2,
    IconUsersGroup,
    IconSparkles,
    IconAdjustments,
    IconCircleDot,
    IconShieldCheck,
    IconChartBar,
    IconRefresh
} from "@tabler/icons-react";

export default function HeroSection() {
    const navigate = useNavigate();
    const [sphereHovered, setSphereHovered] = useState(false);

    return (
        <section className="relative w-full min-h-[90vh] min-h-[700px] bg-[#050505] text-white pt-28 pb-16 px-[clamp(20px,4vw,64px)] overflow-hidden flex flex-col justify-center">
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#6366F1]/10 via-cyan-500/10 to-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Main Spatial Grid Container (Max 1280px cap as per 2026 standard) */}
            <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch relative z-10">
                
                {/* ================= LEFT COLUMN: 3 STACKED GLASS CARDS ================= */}
                <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
                    
                    {/* Card 1: ARC Network Lead Conversion (+40%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-[24px] bg-[#0C0E12]/90 border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#6366F1]">
                                <IconUsersGroup className="w-4 h-4" />
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold font-mono text-[#6366F1]">+40%</span>
                                <span className="text-[9px] text-[#6B7280] font-mono block uppercase">Conversion Lift</span>
                            </div>
                        </div>
                        <p className="text-xs text-white font-medium mb-1">ARC Network CRM</p>
                        <p className="text-[11px] text-[#94A3B8] leading-relaxed font-light mb-4 max-w-[640px]">
                            Intent-driven subagent sequencing replacing manual B2B outreach loops.
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                            <button
                                onClick={() => navigate("/services")}
                                className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] hover:border-[#6366F1] text-[10px] font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
                            >
                                Details ↗
                            </button>
                            <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[9px] font-mono text-emerald-400">Live Client Proof</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: 10x Research Speed & Telemetry Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-[24px] bg-[#0C0E12]/90 border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <span className="text-xl font-bold font-mono text-cyan-400">10x</span>
                                <span className="text-[10px] text-gray-400 font-mono block">Faster Research</span>
                            </div>
                            <span className="text-[10px] font-mono text-[#6366F1] bg-[#6366F1]/10 px-2 py-0.5 rounded-full border border-[#6366F1]/20">
                                Custom RAG
                            </span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-[#6B7280] mb-3">
                            <span>Diligence: Hours → Min</span>
                            <span className="text-gray-300">0% Hallucination</span>
                        </div>

                        {/* Mini Bar Chart with Highlighted Electric Indigo bar */}
                        <div className="h-16 flex items-end gap-2 pt-2 pb-1 px-1 bg-black/40 rounded-xl border border-white/[0.04]">
                            {[25, 40, 55, 35, 70, 45, 95].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                                    <div
                                        style={{ height: `${h}%` }}
                                        className={`w-full rounded-full transition-all duration-500 ${
                                            i === 6
                                                ? "bg-[#6366F1] shadow-[0_0_12px_#6366F1]"
                                                : "bg-white/10 group-hover:bg-white/20"
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 3: Hermes Agent-OS & Substrate */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-[24px] bg-[#0C0E12]/90 border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                    >
                        <div className="flex items-center gap-2.5 mb-2">
                            <div className="w-6 h-6 rounded-full bg-[#6366F1]/20 border border-[#6366F1]/40 flex items-center justify-center text-[#6366F1]">
                                <IconCpu className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-bold text-white tracking-wide">Hermes Agent-OS ®</span>
                        </div>
                        <p className="text-[11px] text-[#94A3B8] leading-relaxed font-light">
                            Persistent memory graph with dynamic runtime skill compilation.
                        </p>
                    </motion.div>

                </div>

                {/* ================= CENTER COLUMN: 3D IRIDESCENT SPHERE HERO ================= */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[460px] text-center p-4">
                    
                    {/* Glowing Iridescent 3D Sphere Core */}
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onMouseEnter={() => setSphereHovered(true)}
                        onMouseLeave={() => setSphereHovered(false)}
                        className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-full flex flex-col items-center justify-center p-6 cursor-pointer transition-transform duration-700 hover:scale-[1.02]"
                    >
                        {/* 3D Iridescent Liquid Ring & Glass Refraction */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6366F1]/40 via-cyan-400/30 to-rose-400/40 p-[1.5px] shadow-[0_0_60px_rgba(99,102,241,0.25),inset_0_0_40px_rgba(255,255,255,0.15)] animate-pulse-slow">
                            <div className="w-full h-full rounded-full bg-[#050505]/85 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none" />
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#6366F1]/20 rounded-full blur-2xl pointer-events-none" />
                                
                                <span className="absolute text-[110px] font-bold text-white/[0.02] select-none font-mono">
                                    N
                                </span>
                            </div>
                        </div>

                        {/* Content Floating Inside Sphere */}
                        <div className="relative z-10 flex flex-col items-center max-w-sm px-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-[10px] font-mono text-cyan-300 uppercase tracking-widest mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                                Architecture-Owned
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight mb-3">
                                We build AI systems that{" "}
                                <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
                                    replace work.
                                </span>
                            </h1>

                            <button
                                onClick={() => navigate("/contact")}
                                className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-bold text-base hover:scale-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)] my-1.5 cursor-pointer"
                                aria-label="Start a build"
                            >
                                <IconArrowUpRight className="w-5 h-5 text-black" />
                            </button>

                            <div className="px-3 py-1 rounded-full bg-black/60 border border-white/[0.1] text-[10px] text-[#94A3B8] font-mono mt-1">
                                Where Data Shapes The Future
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Subtitle / Thesis Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 max-w-[640px] text-center"
                    >
                        <p className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold mb-1">
                            SUPERVISED LEARNING &amp; INFERENCE ECONOMICS
                        </p>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                            Full stack ownership: Hermes agent-OS, custom vLLM inference economics, and MIT control decks engineered by Arka &amp; Ankon.
                        </p>
                    </motion.div>
                </div>

                {/* ================= RIGHT COLUMN: 2 STACKED GLASS CARDS ================= */}
                <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
                    
                    {/* Card 1: D8alytics Synthetic Vision (mAP50 0.96) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-[24px] bg-[#0C0E12]/90 border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider font-semibold">
                                D8alytics Synthetic CV
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                mAP50 0.96
                            </span>
                        </div>

                        <h3 className="text-base font-bold text-white mb-1">Exploring New Horizons</h3>
                        <p className="text-xs font-mono text-[#6B7280] mb-2">
                            Throughput: <strong className="text-gray-200">700 imgs / hr</strong>
                        </p>
                        <p className="text-[11px] text-[#94A3B8] leading-relaxed font-light mb-4 max-w-[640px]">
                            100% synthetic YOLO dataset generation for custom object detection without real-world photo collection.
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                            <div className="flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[10px] text-gray-300">⚙</div>
                                <div className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[10px] text-gray-300">⚡</div>
                                <div className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[10px] text-gray-300">👁</div>
                            </div>
                            <button
                                onClick={() => navigate("/services")}
                                className="px-3 py-1 rounded-full bg-white text-black font-semibold text-[10px] font-mono hover:bg-gray-200 transition-all cursor-pointer"
                            >
                                More ↗
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2: vLLM Inference Matrix (Interactive Node Grid) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-[24px] bg-[#0C0E12]/90 border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                    >
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="text-xs font-bold text-white">Masters of the Data Sphere</h3>
                            <span className="text-[9px] font-mono text-[#6366F1]">PagedAttention</span>
                        </div>
                        <p className="text-[9px] font-mono text-[#6B7280] mb-3">
                            vLLM Inference Matrix &amp; Swarm Kernels
                        </p>

                        <div className="grid grid-cols-4 gap-1.5 my-1">
                            {[
                                { val: "20%", active: true, color: "bg-[#6366F1] text-white" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "45%", active: true, color: "border border-white/25 text-gray-300" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "1%", active: false, color: "border border-white/15 text-[#6B7280]" },
                                { val: "", active: false, color: "border border-white/10 bg-white/[0.02]" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "0%", active: false, color: "border border-white/10 text-[#6B7280]" },
                                { val: "", active: false, color: "border border-white/10 bg-white/[0.02]" },
                                { val: "", active: false, color: "border border-white/10" },
                                { val: "✕", active: false, color: "border border-rose-500/30 text-rose-400" },
                            ].map((node, nIdx) => (
                                <div
                                    key={nIdx}
                                    className={`w-full aspect-square rounded-full flex items-center justify-center text-[7px] font-mono transition-all duration-300 hover:scale-110 cursor-pointer ${node.color}`}
                                >
                                    {node.val}
                                </div>
                            ))}
                        </div>

                        <div className="mt-2.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[9px] font-mono text-[#6B7280]">
                            <span>VRAM Footprint:</span>
                            <span className="text-emerald-400 font-semibold">92GB → &lt;10GB</span>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
