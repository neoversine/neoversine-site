import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    IconArrowUpRight,
    IconTerminal2,
    IconDeviceDesktopAnalytics,
    IconTransform,
    IconBolt,
    IconUsersGroup,
    IconBroadcast,
    IconCircleDot,
    IconShieldCheck,
    IconCpu,
    IconLayersLinked
} from "@tabler/icons-react";

export default function TopProducts() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("native");

    const nativeBusinesses = [
        {
            num: "01",
            title: "Agent-OS (Hermes)",
            tagline: "Our Foundation",
            status: "Live",
            badge: "Core OS",
            icon: <IconCpu className="w-5 h-5 text-cyan-400" />,
            colSpan: "lg:col-span-6",
            metrics: "Self-Improving Memory",
            bars: [35, 55, 75, 90, 95, 100],
            description: "Self-improving long-term memory runtime that autonomously creates dynamic skills and delegates parallel workflows to specialist subagents."
        },
        {
            num: "02",
            title: "vLLM Inference Engine",
            tagline: "Cost-Per-Token Economics",
            status: "Live",
            badge: "92GB → <10GB vRAM",
            icon: <IconBolt className="w-5 h-5 text-[#6366F1]" />,
            colSpan: "lg:col-span-6",
            metrics: "80% Cost Reduction",
            bars: [45, 60, 75, 85, 90, 100],
            description: "Hardware-level serving stack utilizing PagedAttention, KV-cache reuse, and speculative decoding to slash multi-agent compute costs."
        },
        {
            num: "03",
            title: "Multi-Agent Orchestration",
            tagline: "Concurrent Specialist Swarms",
            status: "Live",
            badge: "Swarm Intelligence",
            icon: <IconUsersGroup className="w-5 h-5 text-purple-400" />,
            colSpan: "lg:col-span-4",
            metrics: "10x Concurrency",
            bars: [30, 45, 60, 80, 95, 100],
            description: "Specialized subagent swarms that deliberate, parallelize, and verify complex technical and analytical tasks without bottlenecking."
        },
        {
            num: "04",
            title: "Control Deck",
            tagline: "Phone-First Runtime Control",
            status: "Live",
            badge: "MIT Licensed",
            icon: <IconDeviceDesktopAnalytics className="w-5 h-5 text-rose-400" />,
            colSpan: "lg:col-span-4",
            metrics: "Zero Lock-In",
            bars: [50, 65, 80, 70, 85, 100],
            description: "Event-driven mobile dashboard allowing operators to inspect live reasoning steps, inject steering prompts, and alter parameters in real-time."
        },
        {
            num: "05",
            title: "NeoCrawl & Data Infrastructure",
            tagline: "Adaptive Scraping Layer",
            status: "Live",
            badge: "Zero Selectors",
            icon: <IconTerminal2 className="w-5 h-5 text-amber-400" />,
            colSpan: "lg:col-span-4",
            metrics: "Anti-Bot Resilient",
            bars: [40, 55, 70, 85, 90, 100],
            description: "Vision-guided crawlers that survive DOM shifts, anti-bot barriers, and JavaScript execution without brittle CSS selectors or third-party proxies."
        },
        {
            num: "06",
            title: "ARC Network",
            tagline: "Lead CRM + Outreach Engine",
            status: "Live",
            badge: "+40% Conversion",
            icon: <IconUsersGroup className="w-5 h-5 text-emerald-400" />,
            colSpan: "lg:col-span-4",
            metrics: "+40% Conversion",
            bars: [25, 40, 60, 75, 90, 100],
            description: "Collaboration-intelligence outreach where agents score buying signals, auto-enrich records, and trigger sales follow-ups upon active engagement."
        },
        {
            num: "07",
            title: "NeopostGen",
            tagline: "Brand-Consistent Content Automation",
            status: "Live",
            badge: "10x Creation Speed",
            icon: <IconBroadcast className="w-5 h-5 text-indigo-400" />,
            colSpan: "lg:col-span-4",
            metrics: "Multi-Format Output",
            bars: [30, 50, 70, 85, 95, 100],
            description: "Generates on-brand social assets, ad creatives, and structured layouts from plain text briefs with strict design token adherence."
        },
        {
            num: "08",
            title: "D8alytics",
            tagline: "Computer Vision Synthetic Data",
            status: "Live",
            badge: "mAP50 0.96",
            icon: <IconTransform className="w-5 h-5 text-cyan-400" />,
            colSpan: "lg:col-span-4",
            metrics: "700 imgs / hr",
            bars: [30, 50, 70, 85, 95, 100],
            description: "Synthetic data generation pipeline producing 700 YOLO-annotated images per hour for custom object detection models with mAP50 0.96."
        },
        {
            num: "09",
            title: "Agentic CRM / ERP / B2B Work",
            tagline: "Headcount Replacement Agents",
            status: "Live / In build",
            badge: "Headcount Core",
            icon: <IconShieldCheck className="w-5 h-5 text-teal-400" />,
            colSpan: "lg:col-span-6",
            metrics: "24/7 Operations",
            bars: [40, 60, 75, 85, 95, 100],
            description: "Specialized agents performing invoice reconciliation, regulatory audits, customer triage, and data entry independently."
        },
        {
            num: "10",
            title: "Digital Twin Simulators & ARC Generalization",
            tagline: "Reasoning & Simulation Models",
            status: "Concept",
            badge: "Frontier Labs",
            icon: <IconLayersLinked className="w-5 h-5 text-pink-400" />,
            colSpan: "lg:col-span-6",
            metrics: "Inductive Synthesis",
            bars: [20, 35, 50, 70, 85, 100],
            description: "Agent-based simulation engines for physical systems alongside constraint-solving search trees tested on abstract reasoning problems."
        }
    ];

    const referencePromises = [
        {
            refName: "Blotato",
            promise: "Social-media API so AI agents post/schedule/reply/DMs/analytics across 9+ platforms, no code",
            weProvideAs: "Unified Social API + Content Pipeline + NeopostGen",
            tag: "Social Automation Stack"
        },
        {
            refName: "Crisp",
            promise: "The one complete AI-first customer-support suite (chat, chatbot, inbox, CRM, KB, campaigns, ticketing, analytics)",
            weProvideAs: "Omnichannel AI Support Suite + AI Helpdesk + AI Agent Platform",
            tag: "Customer Support Suite"
        },
        {
            refName: "Postproxy",
            promise: "One API for the whole social workflow for agencies/SaaS/agents",
            weProvideAs: "Social Media API for Agencies + Unified Social API",
            tag: "Agency / Agent API"
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-[clamp(64px,8vw,140px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center max-w-[640px] mx-auto mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-xs font-mono text-[#6366F1] uppercase tracking-wider mb-4">
                    <IconCircleDot className="w-3.5 h-3.5" />
                    The Combined Framework — "We Provide ALL Of It"
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Neoversine Native Products &amp;{" "}
                    <span className="text-cyan-300">
                        Architecture.
                    </span>
                </h2>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                    Neoversine is not one product. It is one architecture (agent-OS) that ships every business the reference sites sell — plus our own native stack. Two people, one substrate, everything on it.
                </p>
            </motion.div>

            {/* Toggle Tabs */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4 }}
                className="flex justify-center mb-10"
            >
                <div className="inline-flex p-1 rounded-full bg-[#0C0E12] border border-white/[0.12]">
                    <button
                        onClick={() => setActiveTab("native")}
                        className={`px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                            activeTab === "native"
                                ? "bg-white text-black font-semibold shadow"
                                : "text-[#94A3B8] hover:text-white"
                        }`}
                    >
                        Native Businesses (10 Systems)
                    </button>
                    <button
                        onClick={() => setActiveTab("reference")}
                        className={`px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                            activeTab === "reference"
                                ? "bg-white text-black font-semibold shadow"
                                : "text-[#94A3B8] hover:text-white"
                        }`}
                    >
                        Reference Solutions (Blotato · Crisp · Postproxy)
                    </button>
                </div>
            </motion.div>

            {activeTab === "native" ? (
                /* Native Businesses Bento Grid */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
                    {nativeBusinesses.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                            className={`${item.colSpan} rounded-[24px] bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 p-6 md:p-7 flex flex-col justify-between transition-colors group relative overflow-hidden`}
                        >
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#6366F1] font-semibold block">
                                            {item.badge} · {item.status}
                                        </span>
                                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-[#6B7280]">#{item.num}</span>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs text-cyan-400 font-mono mb-2">{item.tagline}</p>
                                <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-white/[0.08] flex items-end justify-between gap-4">
                                <div>
                                    <span className="text-[9px] uppercase font-mono text-[#6B7280] block">Key Benchmark</span>
                                    <span className="text-xs font-semibold font-mono text-white">{item.metrics}</span>
                                </div>
                                <div className="flex items-end gap-1.5 h-5">
                                    {item.bars.map((height, bIdx) => (
                                        <div
                                            key={bIdx}
                                            style={{ height: `${height}%` }}
                                            className={`w-1.5 rounded-full ${
                                                bIdx === item.bars.length - 1
                                                    ? "bg-[#6366F1]"
                                                    : "bg-white/10"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                /* Reference Comparison Matrix */
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-6 md:p-10 shadow-xl"
                >
                    <div className="mb-8">
                        <span className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block mb-1">
                            REFERENCE EQUIVALENCE
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                            What Reference Sites Sell → We Provide On Our Stack
                        </h3>
                        <p className="text-xs text-[#94A3B8] mt-1 font-light">
                            Whatever Blotato, Crisp, or Postproxy automate, Neoversine builds and owns on our agent-OS — one system, one team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {referencePromises.map((ref, idx) => (
                            <div key={idx} className="rounded-[20px] bg-black/50 border border-white/[0.08] p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-lg font-bold text-white">{ref.refName}</h4>
                                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                                            {ref.tag}
                                        </span>
                                    </div>
                                    <div className="text-xs text-[#94A3B8] mb-4">
                                        <p className="font-mono text-[10px] text-[#6B7280] uppercase mb-1">Their Promise:</p>
                                        <p className="italic bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">{ref.promise}</p>
                                    </div>
                                    <div className="text-xs text-white">
                                        <p className="font-mono text-[10px] text-emerald-400 uppercase mb-1 font-semibold">We Provide It As:</p>
                                        <p className="font-medium text-emerald-300">{ref.weProvideAs}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Bottom Section Callout */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="mt-10 p-6 md:p-8 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] text-center flex flex-col sm:flex-row items-center justify-between gap-4"
            >
                <div className="text-left">
                    <p className="text-sm md:text-base text-white font-medium">
                        "You think you need Blotato for publishing, Crisp for support, and Postproxy for a social API?"
                    </p>
                    <p className="text-xs text-[#94A3B8] font-light mt-1">
                        We build you one system that does all of it — on our own architecture. No stitching, no glue, no third-party subscriptions. One suite, one API, one team.
                    </p>
                </div>
                <button
                    onClick={() => navigate("/contact")}
                    className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all cursor-pointer whitespace-nowrap"
                >
                    Start a Build ↗
                </button>
            </motion.div>
        </motion.section>
    );
}