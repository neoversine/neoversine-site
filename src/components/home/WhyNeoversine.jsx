import React from "react";
import { cn } from "@/lib/utils";
import {
    IconCpu,
    IconBolt,
    IconBrain,
    IconDeviceDesktopAnalytics,
    IconShieldCheck,
    IconTerminal2,
    IconBinaryTree,
    IconTransform
} from "@tabler/icons-react";

export function WhyNeoversine() {
    const whyNeoversine = [
        {
            title: "Hermes Agent-OS Substrate",
            description:
                "Self-improving, memory-enabled, multi-platform gateway orchestrating parallel subagent swarms across environments.",
            icon: <IconCpu className="w-7 h-7 text-cyan-400" />,
        },
        {
            title: "vLLM Inference Economics",
            description:
                "PagedAttention, KV-cache reuse, and speculative decoding to slash compute costs and make swarms viable at scale.",
            icon: <IconBolt className="w-7 h-7 text-indigo-400" />,
        },
        {
            title: "Parallel Subagent Swarms",
            description:
                "Orchestrating dozens of specialized agents executing concurrently on lead enrichment, data synthesis, and workflows.",
            icon: <IconBinaryTree className="w-7 h-7 text-purple-400" />,
        },
        {
            title: "Live Event-Driven Control Deck",
            description:
                "Phone-first MIT-licensed control surface: watch reasoning in real-time, intervene instantly, tweak without redeploying.",
            icon: <IconDeviceDesktopAnalytics className="w-7 h-7 text-rose-400" />,
        },
        {
            title: "Adaptive Data & NeoCrawl",
            description:
                "Vision-guided scrapers and ScrapeGraphAI pipelines that adapt to site changes without brittle selectors or SaaS fees.",
            icon: <IconTerminal2 className="w-7 h-7 text-amber-400" />,
        },
        {
            title: "D8alytics Synthetic Data",
            description:
                "Computer vision pipelines generating 700 YOLO-formatted images in <1h achieving mAP50 0.96 with zero real images.",
            icon: <IconTransform className="w-7 h-7 text-emerald-400" />,
        },
        {
            title: "Persistent Memory Fabric",
            description:
                "Cross-task knowledge graphs so agents recall past runs, avoid repeated mistakes, and compound organizational intelligence.",
            icon: <IconBrain className="w-7 h-7 text-blue-400" />,
        },
        {
            title: "Architecture Ownership",
            description:
                "No wrappers, no reskinned LangChain, zero vendor lock-in. We build the foundational substrate you own end-to-end.",
            icon: <IconShieldCheck className="w-7 h-7 text-teal-400" />,
        },
    ];

    return (
        <section className="py-[clamp(64px,8vw,140px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full">
            <div className="text-center max-w-[640px] mx-auto mb-14">
                <span className="text-[11px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block mb-2">
                    CORE ARCHITECTURAL PILLARS
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight text-white">
                    We Build With Our{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                        Own Architecture.
                    </span>
                </h2>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                    The era of AI agencies stitching off-the-shelf wrappers is over. We build the substrate, not the souvenir.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 gap-4">
                {whyNeoversine.map((feature, index) => (
                    <div
                        key={feature.title}
                        className="rounded-[22px] bg-[#0C0E12] border border-white/[0.1] hover:border-white/20 p-6 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    >
                        <div>
                            <div className="mb-4 w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WhyNeoversine;