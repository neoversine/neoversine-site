/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
    IconArrowUpRight,
    IconCircleCheck,
    IconCpu,
    IconTerminal2,
    IconDeviceDesktopAnalytics,
    IconTransform,
    IconBolt,
    IconUsersGroup,
    IconBroadcast,
    IconShieldCheck,
    IconLayersLinked
} from "@tabler/icons-react";

const products = [
    {
        title: "Agent-OS (Hermes)",
        tagline: "Our Core Foundation",
        stat: "Live",
        badge: "Core OS",
        clientBadge: "Foundational Architecture",
        desc: {
            "Core Promise": [
                "Self-improving memory runtime that dynamically creates execution skills and delegates parallel tasks."
            ],
            "Architecture": [
                "Cross-task persistent memory graph with autonomous skill compilation."
            ]
        },
        img: "/works/neobot.png",
    },
    {
        title: "vLLM Inference Engine",
        tagline: "Cost-Per-Token Economics Stack",
        stat: "Live",
        badge: "80% Savings",
        clientBadge: "vRAM: 92GB → <10GB",
        desc: {
            "Core Promise": [
                "PagedAttention, KV-cache reuse, and speculative decoding to slash multi-agent serving costs."
            ],
            "Architecture": [
                "Custom hardware-level continuous batching serving cluster."
            ]
        },
        img: "/works/neobot.png",
    },
    {
        title: "Multi-Agent Orchestration",
        tagline: "Concurrent Specialist Swarms",
        stat: "Live",
        badge: "Swarm Intelligence",
        clientBadge: "10x Concurrency",
        desc: {
            "Core Promise": [
                "Parallel subagents that deliberate, execute, and verify complex technical and analytical workflows."
            ],
            "Architecture": [
                "Hermes subagent dispatching with self-correcting validation loops."
            ]
        },
        img: "/works/neobot.png",
    },
    {
        title: "Control Deck",
        tagline: "MIT-Licensed Phone-First Runtime Control",
        stat: "Live",
        badge: "MIT Open Source",
        clientBadge: "0 Lock-In",
        desc: {
            "Core Promise": [
                "Event-driven mobile dashboard to monitor live reasoning steps and inject runtime steering prompts."
            ],
            "Architecture": [
                "WebSocket streaming runtime surface without third-party vendor lock-in."
            ]
        },
        img: "/works/neopost2.png",
    },
    {
        title: "NeoCrawl & Data Infrastructure",
        tagline: "Adaptive Scraping Layer",
        stat: "Live",
        badge: "0 Selectors",
        clientBadge: "Postproxy-style API",
        desc: {
            "Core Promise": [
                "Vision-guided scrapers that survive anti-bot walls, dynamic JS, and site layout mutations."
            ],
            "Architecture": [
                "ScrapeGraphAI foundation with dynamic skill creation for unexpected DOMs."
            ]
        },
        img: "/works/neocrawl.png",
    },
    {
        title: "ARC Network",
        tagline: "Lead CRM + Outreach Engine",
        stat: "Live",
        badge: "+40% Conversion",
        clientBadge: "Crisp-style Suite",
        desc: {
            "Core Promise": [
                "Collaboration-intelligence CRM where agents dynamically adapt sequencing based on intent signals."
            ],
            "Architecture": [
                "Dynamic intent scoring decision trees with autonomous data hygiene."
            ]
        },
        img: "/works/neobot.png",
    },
    {
        title: "NeopostGen",
        tagline: "Brand-Consistent Content Automation",
        stat: "Live",
        badge: "10x Speed",
        clientBadge: "Blotato-style Publishing",
        desc: {
            "Core Promise": [
                "Transforms brief inputs into brand-consistent social posts, ad creatives, and layouts."
            ],
            "Architecture": [
                "Multi-agent layout planner with vector asset composition."
            ]
        },
        img: "/works/neocontent.png",
    },
    {
        title: "D8alytics",
        tagline: "Computer Vision Synthetic Pipeline",
        stat: "Live",
        badge: "mAP50 0.96",
        clientBadge: "700 imgs/1h",
        desc: {
            "Core Promise": [
                "Generates 700 YOLO-formatted images in <1 hour achieving mAP50 0.96 with zero real-world photos."
            ],
            "Architecture": [
                "Generative 3D domain randomization + automated bounding box synthesis."
            ]
        },
        img: "/works/neogeo.png",
    },
    {
        title: "Agentic CRM / ERP / B2B Work",
        tagline: "Headcount Replacement Agents",
        stat: "Live / In build",
        badge: "Headcount Core",
        clientBadge: "Enterprise Operations",
        desc: {
            "Core Promise": [
                "Specialized agents dedicated to invoice validation, regulatory compliance audits, and customer triage."
            ],
            "Architecture": [
                "Deterministic rule validation with automated database synchronization."
            ]
        },
        img: "/works/neobot.png",
    },
    {
        title: "Digital Twin Simulators & ARC",
        tagline: "Simulation & Reasoning Models",
        stat: "Concept",
        badge: "Frontier Labs",
        clientBadge: "Research Core",
        desc: {
            "Core Promise": [
                "Agent-based simulation engines for physical systems and reasoning-under-constraint solvers."
            ],
            "Architecture": [
                "Discrete-event agent models with inductive program synthesis."
            ]
        },
        img: "/works/neogeo.png",
    }
];

export default function ProductShowcase() {
    return (
        <section className="py-[clamp(48px,6vw,96px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p, i) => (
                    <ProductCard key={i} product={p} index={i} />
                ))}
            </div>
        </section>
    );
}

function ProductCard({ product: p, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="relative flex flex-col bg-[#0C0E12] border border-white/[0.12] hover:border-white/25 rounded-[24px] p-6 transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
            <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30 font-semibold">
                    {p.badge}
                </span>
                <span className="text-[10px] text-[#6B7280] font-mono">
                    SYS-0{index + 1}
                </span>
            </div>

            <div className="h-40 w-full bg-black/50 border border-white/[0.06] rounded-[18px] mb-5 flex items-center justify-center p-3 overflow-hidden relative">
                <img
                    src={p.img}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 block">
                {p.clientBadge}
            </span>
            <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                {p.title}
            </h2>
            <p className="text-xs text-[#94A3B8] font-mono mt-1 mb-4">
                {p.tagline}
            </p>

            <div className="space-y-2 mt-auto pt-4 border-t border-white/[0.08] text-xs text-[#94A3B8]">
                {Object.entries(p.desc).map(([key, val], idx) => (
                    <div key={idx} className="flex flex-col">
                        <span className="text-[#6B7280] font-mono text-[9px] uppercase tracking-wider">{key}</span>
                        <span className="text-gray-200 mt-0.5 leading-relaxed text-[11px] font-light">{val[0]}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
