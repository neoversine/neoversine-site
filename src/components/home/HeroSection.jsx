import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    IconArrowUpRight,
    IconBolt,
    IconCpu,
    IconUsersGroup
} from "@tabler/icons-react";
import LiquidGlassSphere from "./LiquidGlassSphere";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="relative w-full min-h-[90vh] min-h-[700px] bg-[#050505] text-white pt-28 pb-16 px-[clamp(20px,4vw,64px)] overflow-hidden flex flex-col justify-center">

            {/* Main Spatial Grid Container (Max 1280px cap) */}
            <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch relative z-10">

                {/* ================= LEFT COLUMN: 3 STACKED MATTE GLASS CARDS ================= */}
                <div className="lg:col-span-3 flex flex-col gap-4 justify-between">

                    {/* Card 1: ARC Network Lead Conversion (+40%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-colors"
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
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span className="text-[9px] font-mono text-emerald-400">Live Client Proof</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: 10x Research Speed & Telemetry Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-colors"
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

                        {/* Mini Bar Chart */}
                        <div className="h-16 flex items-end gap-2 pt-2 pb-1 px-1 bg-black/40 rounded-xl border border-white/[0.04]">
                            {[25, 40, 55, 35, 70, 45, 95].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                                    <div
                                        style={{ height: `${h}%` }}
                                        className={`w-full rounded-full transition-all duration-300 ${i === 6
                                                ? "bg-[#6366F1]"
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
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-colors"
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

                {/* ================= CENTER COLUMN: 3D CRISP LIQUID GLASS SPHERE ================= */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[480px] text-center p-2">

                    <LiquidGlassSphere />

                    {/* Bottom Subtitle / Thesis Note */}
                    <div className="mt-3 max-w-[640px] text-center">
                        <p className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold mb-1">
                            SUPERVISED LEARNING &amp; INFERENCE ECONOMICS
                        </p>
                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                            Full stack ownership: Hermes agent-OS, custom vLLM inference economics, and MIT control decks engineered by Arka &amp; Ankon.
                        </p>
                    </div>
                </div>

                {/* ================= RIGHT COLUMN: 2 STACKED MATTE GLASS CARDS ================= */}
                <div className="lg:col-span-3 flex flex-col gap-4 justify-between">

                    {/* Card 1: D8alytics Synthetic Vision (mAP50 0.96) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-colors"
                    >
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
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-5 relative overflow-hidden group hover:border-white/25 transition-colors"
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
                                    className={`w-full aspect-square rounded-full flex items-center justify-center text-[7px] font-mono transition-transform duration-200 hover:scale-105 cursor-pointer ${node.color}`}
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
