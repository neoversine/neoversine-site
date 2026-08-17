import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    IconCheck,
    IconX,
    IconLayersLinked,
    IconArrowUpRight,
    IconBug
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function NeoversineShowcase() {
    const navigate = useNavigate();

    // Dynamic error simulator for left card
    const [currentErrorIdx, setCurrentErrorIdx] = useState(0);
    const simulatedErrors = [
        "⚠️ Make.com Webhook 504 Gateway Timeout",
        "⚠️ DOM Changed: CSS Selector #btn-checkout not found",
        "⚠️ Vector DB Sync Failure: OpenAI Rate Limit 429",
        "⚠️ Zapier Task Cap Exceeded (Paused execution)"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentErrorIdx((prev) => (prev + 1) % simulatedErrors.length);
        }, 2600);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-[clamp(48px,6vw,120px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full"
        >
            <div className="rounded-[32px] bg-[#0A0C10] border border-white/[0.12] p-6 sm:p-8 md:p-12 relative overflow-hidden">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-[720px] mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-4">
                        <IconLayersLinked className="w-3.5 h-3.5" />
                        ONE STACK VS FRAGMENTED SAAS
                    </div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
                        The End of Stitching{" "}
                        <span className="text-cyan-300">
                            Off-the-Shelf AI Wrappers.
                        </span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-[640px]">
                        You think you need Blotato for publishing, Crisp for customer support, and Postproxy for a social API? We build you one system that does all of it — on our own architecture. No stitching, no glue, no third-party subscriptions.
                    </p>
                </motion.div>

                {/* Side-by-Side Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* ================= LEFT CARD: THE FRAGMENTED STACK (DEPRECATED) ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-5 rounded-[24px] bg-[#0D0F14] border border-dashed border-rose-500/30 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity"
                    >
                        <div>
                            {/* Card Status Pill */}
                            <div className="flex items-center justify-between gap-2 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-[10px] font-mono font-semibold text-rose-400 uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                    DEPRECATED / HIGH RISK
                                </span>
                                <span className="text-[10px] font-mono text-[#6B7280]">Old Agency Model</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-300 mb-1 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs">✕</span>
                                Fragmented Agency Stacking
                            </h3>
                            <p className="text-xs text-[#6B7280] mb-5 font-mono">
                                5+ Unstable APIs stitched with glue-code
                            </p>

                            {/* "Spaghetti Wire" Animated Visual Diagram */}
                            <div className="rounded-2xl bg-black/60 border border-white/[0.04] p-4 mb-6 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[9px] font-mono text-[#6B7280] uppercase tracking-wider">
                                        Tangled Failure Points
                                    </span>
                                    <span className="text-[9px] font-mono text-rose-400">
                                        ● Packet Loss: 42%
                                    </span>
                                </div>
                                
                                <svg viewBox="0 0 320 90" className="w-full h-20">
                                    {/* Tangled Animated Dashed Spaghetti Wires */}
                                    <motion.path
                                        d="M 20 45 Q 80 10, 150 70 T 300 35"
                                        fill="none"
                                        stroke="#ef4444"
                                        strokeWidth="1.5"
                                        strokeDasharray="5 5"
                                        animate={{ strokeDashoffset: [0, -30] }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                        opacity="0.75"
                                    />
                                    <motion.path
                                        d="M 20 25 Q 100 85, 180 15 T 300 65"
                                        fill="none"
                                        stroke="#f59e0b"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                        animate={{ strokeDashoffset: [0, 30] }}
                                        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                                        opacity="0.65"
                                    />
                                    <motion.path
                                        d="M 20 70 Q 140 10, 220 80 T 300 20"
                                        fill="none"
                                        stroke="#64748b"
                                        strokeWidth="1"
                                        strokeDasharray="3 5"
                                        animate={{ strokeDashoffset: [0, -25] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        opacity="0.4"
                                    />

                                    {/* Failing / Blinking Nodes */}
                                    <circle cx="20" cy="45" r="5" fill="#ef4444" />
                                    
                                    <motion.circle
                                        cx="95"
                                        cy="28"
                                        r="4"
                                        fill="#ef4444"
                                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    <motion.circle
                                        cx="150"
                                        cy="70"
                                        r="5"
                                        fill="#f59e0b"
                                        animate={{ opacity: [1, 0.4, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    <motion.circle
                                        cx="225"
                                        cy="30"
                                        r="4"
                                        fill="#ef4444"
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    <circle cx="300" cy="45" r="5" fill="#ef4444" />

                                    {/* Glitching Error Packet Running on Path */}
                                    <motion.circle
                                        r="3"
                                        fill="#ef4444"
                                        animate={{
                                            cx: [20, 80, 150, 220, 300],
                                            cy: [45, 15, 70, 40, 35],
                                            opacity: [0, 1, 1, 0.5, 0]
                                        }}
                                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </svg>

                                {/* Dynamic Error Log Simulator */}
                                <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center gap-2">
                                    <IconBug className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                                    <span className="text-[10px] font-mono text-rose-300/90 truncate">
                                        {simulatedErrors[currentErrorIdx]}
                                    </span>
                                </div>
                            </div>

                            {/* Strikethrough Bullet Flaws */}
                            <div className="space-y-2.5 text-xs text-[#94A3B8]">
                                <div className="flex items-start gap-2 line-through text-gray-500">
                                    <span className="text-rose-500 font-bold text-xs">✕</span>
                                    <span>$2,800/mo in 6 separate SaaS seats (Make, Zapier, scraping proxies, vector DBs)</span>
                                </div>
                                <div className="flex items-start gap-2 line-through text-gray-500">
                                    <span className="text-rose-500 font-bold text-xs">✕</span>
                                    <span>Fragile prompt wrappers that crash on minor DOM mutations</span>
                                </div>
                                <div className="flex items-start gap-2 line-through text-gray-500">
                                    <span className="text-rose-500 font-bold text-xs">✕</span>
                                    <span>Massive cost-per-token from unoptimized LLM calls</span>
                                </div>
                                <div className="flex items-start gap-2 line-through text-gray-500">
                                    <span className="text-rose-500 font-bold text-xs">✕</span>
                                    <span>Zero code ownership — locked into closed third-party silos</span>
                                </div>
                            </div>
                        </div>

                        {/* Strikethrough Cost Footer */}
                        <div className="mt-8 pt-4 border-t border-dashed border-rose-500/20 flex items-center justify-between text-xs font-mono">
                            <span className="text-[#6B7280]">Total Annual Drain:</span>
                            <span className="text-rose-400 line-through font-semibold">$33,600+ / yr</span>
                        </div>
                    </motion.div>

                    {/* ================= RIGHT CARD: NEOVERSINE AGENT-OS (RUNNING LIVE FLOW) ================= */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-7 rounded-[28px] bg-[#0C101A] border border-[#6366F1]/50 relative p-7 sm:p-8 flex flex-col justify-between transition-colors overflow-hidden"
                    >
                        <div>
                            {/* Card Status & Health Pill */}
                            <div className="flex items-center justify-between gap-2 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    ENTERPRISE PRODUCTION · ARCHITECTURE-OWNED
                                </span>
                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    100% Health
                                </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</span>
                                Neoversine Agent-OS Architecture
                            </h3>
                            <p className="text-xs text-cyan-300 font-mono mb-6">
                                One Substrate · Hermes OS · Custom vLLM Runtimes
                            </p>

                            {/* "Unified Monolith" Live Running Flow Visual Diagram */}
                            <div className="rounded-2xl bg-black/60 border border-white/[0.08] p-4 mb-6 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                                        Unified Agent Substrate Flow
                                    </span>
                                    <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        Swarm Sync Active
                                    </span>
                                </div>

                                <svg viewBox="0 0 360 80" className="w-full h-18">
                                    <defs>
                                        <linearGradient id="liveBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#6366F1" />
                                            <stop offset="50%" stopColor="#38BDF8" />
                                            <stop offset="100%" stopColor="#34D399" />
                                        </linearGradient>
                                    </defs>
                                    
                                    {/* Static Guide Rail Lines */}
                                    <path d="M 30 40 L 140 40 Q 180 40 210 20 L 330 20" fill="none" stroke="#1E293B" strokeWidth="2" />
                                    <path d="M 140 40 L 330 40" fill="none" stroke="#1E293B" strokeWidth="2" />
                                    <path d="M 140 40 Q 180 40 210 60 L 330 60" fill="none" stroke="#1E293B" strokeWidth="2" />

                                    {/* Running Animated Light Pulses on Branches */}
                                    <motion.path
                                        d="M 30 40 L 140 40 Q 180 40 210 20 L 330 20"
                                        fill="none"
                                        stroke="url(#liveBeamGrad)"
                                        strokeWidth="2.5"
                                        strokeDasharray="25 70"
                                        animate={{ strokeDashoffset: [95, 0] }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.path
                                        d="M 140 40 L 330 40"
                                        fill="none"
                                        stroke="url(#liveBeamGrad)"
                                        strokeWidth="2.5"
                                        strokeDasharray="25 60"
                                        animate={{ strokeDashoffset: [85, 0] }}
                                        transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: 0.2 }}
                                    />
                                    <motion.path
                                        d="M 140 40 Q 180 40 210 60 L 330 60"
                                        fill="none"
                                        stroke="url(#liveBeamGrad)"
                                        strokeWidth="2.5"
                                        strokeDasharray="25 70"
                                        animate={{ strokeDashoffset: [95, 0] }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.4 }}
                                    />

                                    {/* Central Operating Core (Left) with Pulse Ring */}
                                    <circle cx="30" cy="40" r="9" fill="#0C0E12" stroke="#38BDF8" strokeWidth="2" />
                                    <circle cx="30" cy="40" r="4" fill="#38BDF8" />
                                    <motion.circle
                                        cx="30"
                                        cy="40"
                                        r="9"
                                        fill="none"
                                        stroke="#38BDF8"
                                        strokeWidth="1.5"
                                        animate={{ r: [9, 15], opacity: [0.8, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                    />

                                    {/* Central Router Hub (Center) */}
                                    <circle cx="140" cy="40" r="6" fill="#6366F1" />
                                    <motion.circle
                                        cx="140"
                                        cy="40"
                                        r="6"
                                        fill="none"
                                        stroke="#6366F1"
                                        strokeWidth="1.5"
                                        animate={{ r: [6, 12], opacity: [0.8, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                    />

                                    {/* Running Data Packets Traveling from Core to Subagents */}
                                    <motion.circle
                                        r="3.5"
                                        fill="#FFFFFF"
                                        animate={{
                                            cx: [30, 140, 210, 330],
                                            cy: [40, 40, 20, 20],
                                            opacity: [0, 1, 1, 0]
                                        }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.circle
                                        r="3.5"
                                        fill="#34D399"
                                        animate={{
                                            cx: [30, 140, 330],
                                            cy: [40, 40, 40],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                    />
                                    <motion.circle
                                        r="3.5"
                                        fill="#818CF8"
                                        animate={{
                                            cx: [30, 140, 210, 330],
                                            cy: [40, 40, 60, 60],
                                            opacity: [0, 1, 1, 0]
                                        }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                                    />

                                    {/* Subagent Specialist Endpoint Nodes */}
                                    <circle cx="330" cy="20" r="5" fill="#38BDF8" />
                                    <circle cx="330" cy="40" r="6" fill="#34D399" />
                                    <circle cx="330" cy="60" r="5" fill="#818CF8" />
                                </svg>
                            </div>

                            {/* Structured Metric Badges & Pills */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                                <div className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] flex flex-col">
                                    <span className="text-[10px] font-mono text-cyan-400">⚡ 0ms Bottleneck</span>
                                    <span className="text-[9px] text-[#6B7280]">Direct Kernel Execution</span>
                                </div>
                                <div className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] flex flex-col">
                                    <span className="text-[10px] font-mono text-emerald-400">📉 -80% Token Cost</span>
                                    <span className="text-[9px] text-[#6B7280]">vLLM PagedAttention</span>
                                </div>
                                <div className="px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] flex flex-col col-span-2 sm:col-span-1">
                                    <span className="text-[10px] font-mono text-indigo-300">🛡️ 100% Owned</span>
                                    <span className="text-[9px] text-[#6B7280]">Zero Third-Party Tax</span>
                                </div>
                            </div>

                            {/* Core Feature Deliverables */}
                            <div className="space-y-2 text-xs text-gray-200">
                                <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong className="text-white">Full Stack Ownership</strong> — Hermes agent-OS, vLLM inference clusters, and synthetic data.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong className="text-white">MIT Phone-First Control Deck</strong> — Live runtime event streaming, steering prompts, and no vendor lock-in.</span>
                                </div>
                            </div>
                        </div>

                        {/* Real-time Flat Cost & Action Footer */}
                        <div className="mt-8 pt-4 border-t border-white/[0.1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider block">Unified Architecture Pricing</span>
                                <span className="text-base font-bold text-white font-mono">1 Flat System · 0 SaaS Taxes</span>
                            </div>
                            <button
                                onClick={() => navigate("/contact")}
                                className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs font-mono hover:bg-gray-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                            >
                                <span>Deploy Stack</span>
                                <IconArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>

                </div>

            </div>
        </motion.section>
    );
}
