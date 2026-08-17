import React from "react";
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
    IconCodeDots
} from "@tabler/icons-react";
import { HoverEffect } from "../accernity/card-hover-effect";

export function IndustriesWeServe() {
    const portfolioTopics = [
        {
            title: "1. Agentic Era Operations",
            icon: <IconCpu className="w-6 h-6 text-cyan-400" />,
            description: "Autonomous agents handling end-to-end workflows from lead generation to contract drafting — the agent team pattern behind our B2B work.",
        },
        {
            title: "2. Inference Economics Engine",
            icon: <IconBolt className="w-6 h-6 text-[#6366F1]" />,
            description: "Custom vLLM deployments — PagedAttention, speculative decoding, continuous batching — that keep agent swarms economically viable without bleeding on GPU memory.",
        },
        {
            title: "3. Digital Twin Simulators",
            icon: <IconBuildingFactory2 className="w-6 h-6 text-purple-400" />,
            description: "Agent-based models that mirror physical systems (supply chains, manufacturing lines) to test scenarios and optimize parameters without real-world risk.",
        },
        {
            title: "4. B2B Work Replacement Agents",
            icon: <IconBriefcase className="w-6 h-6 text-rose-400" />,
            description: "Specialized agents that perform invoice processing, compliance checks, and technical support independently — the headcount-replacement core behind our client work.",
        },
        {
            title: "5. Content Infrastructure: RSS to Revenue",
            icon: <IconRss className="w-6 h-6 text-amber-400" />,
            description: "Agents that monitor niche RSS feeds, synthesize insights, generate LinkedIn threads and newsletters, and drive inbound leads — turning passive feeds into active revenue streams.",
        },
        {
            title: "6. Agentic ARC Generalization",
            icon: <IconBinaryTree className="w-6 h-6 text-emerald-400" />,
            description: "Reasoning-under-constraint systems, trained on ARC-style problems, that signal frontier thinking — not glue-code.",
        },
        {
            title: "7. Agentic CRM",
            icon: <IconUsersGroup className="w-6 h-6 text-blue-400" />,
            description: "Self-updating customer records where agents enrich data from public sources, detect intent shifts, and trigger personalized outreach — eliminating manual data hygiene.",
        },
        {
            title: "8. SaaS Ownership Stack",
            icon: <IconShieldLock className="w-6 h-6 text-teal-400" />,
            description: "Full control over your AI runtime — self-hosted control deck, agent-OS, and inference layer — with zero ongoing vendor fees beyond infrastructure.",
        },
        {
            title: "9. Scraping at Scale (NeoCrawl)",
            icon: <IconWorldWww className="w-6 h-6 text-indigo-400" />,
            description: "Adaptive crawlers that handle JavaScript, CAPTCHAs, and site updates using vision-guided agents and dynamic skill creation — staying reliable where brittle selectors and paid scrapers fail.",
        },
        {
            title: "10. Digital Transformation Agents",
            icon: <IconTransform className="w-6 h-6 text-pink-400" />,
            description: "End-to-end agents that migrate legacy systems, refactor codebases, and deploy modern architectures autonomously.",
        },
        {
            title: "11. Long-Term Memory Fabric",
            icon: <IconBrain className="w-6 h-6 text-cyan-300" />,
            description: "Persistent, cross-task knowledge graphs that allow agents to recall past solutions, avoid repeated mistakes, and build expertise over time — turning transient interactions into cumulative intelligence.",
        },
        {
            title: "12. Skill Creation Loops",
            icon: <IconCodeDots className="w-6 h-6 text-violet-400" />,
            description: "Agents that observe human experts, infer underlying procedures, and generate reusable skills — expanding capability without retraining.",
        },
    ];

    return (
        <section className="py-[clamp(64px,8vw,140px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full">
            <div className="text-center max-w-[640px] mx-auto mb-14">
                <span className="text-[11px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block mb-2">
                    SYSTEMS THAT REPLACE WORK
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    12 Portfolio Systems.{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-white to-cyan-400 bg-clip-text text-transparent">
                        Priced by Problem Solved.
                    </span>
                </h2>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                    We don't sell tools; we sell outcomes. Measured in labor hours replaced, error rates reduced, and revenue enabled — not in lines of code or model parameters.
                </p>
            </div>

            <HoverEffect items={portfolioTopics} />
        </section>
    );
}

export default IndustriesWeServe;
