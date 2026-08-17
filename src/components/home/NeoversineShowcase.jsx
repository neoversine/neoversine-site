import React from "react";
import { IconCheck, IconX, IconLayersLinked } from "@tabler/icons-react";

export default function NeoversineShowcase() {
    return (
        <section className="py-[clamp(48px,6vw,120px)] px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full">
            <div className="rounded-[28px] bg-[#0C0E12] border border-white/[0.12] p-8 md:p-12 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[640px] mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-4">
                        <IconLayersLinked className="w-3.5 h-3.5" />
                        One Stack vs Fragmented SaaS
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                        The End of Stitching Off-the-Shelf AI Wrappers.
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        You think you need Blotato for publishing, Crisp for customer support, and Postproxy for a social API? We build you one system that does all of it — on our own architecture. No stitching, no glue, no third-party subscriptions.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* The Old Fragmented Way */}
                    <div className="rounded-[20px] bg-black/40 border border-white/[0.08] p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
                                <IconX className="w-4 h-4" />
                                Fragmented Agency Stacking
                            </div>
                            <ul className="space-y-3 text-xs text-[#94A3B8]">
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-500 font-bold">✕</span>
                                    <span>Paying 5+ separate SaaS subscriptions (Make.com, Zapier, scraping proxies, vector DBs).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-500 font-bold">✕</span>
                                    <span>Brittle prompt wrappers and n8n workflows that break on minor DOM changes.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-500 font-bold">✕</span>
                                    <span>GPU memory bloat and massive cost-per-token from unoptimized LLM calls.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-500 font-bold">✕</span>
                                    <span>Zero code ownership — locked into third-party closed platforms.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#6B7280]">
                            Result: High ongoing seat costs &amp; fragile execution
                        </div>
                    </div>

                    {/* The Neoversine Agent-OS Way */}
                    <div className="rounded-[20px] bg-gradient-to-br from-[#6366F1]/15 via-[#0C0E12] to-cyan-500/10 border border-[#6366F1]/40 p-6 flex flex-col justify-between relative shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                                <IconCheck className="w-4 h-4" />
                                Neoversine Agent-OS Architecture
                            </div>
                            <ul className="space-y-3 text-xs text-white">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong className="text-white">100% Architecture Ownership</strong> — We design, ship, and own the full stack end-to-end.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong className="text-white">Hermes Agent-OS</strong> — Self-improving memory, parallel subagent swarms, and runtime skill creation.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong className="text-white">vLLM Inference Economics</strong> — PagedAttention and speculative decoding to slash token serving costs.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong className="text-white">MIT Phone-First Control Deck</strong> — Real-time event streaming and live intervention without vendor lock-in.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/[0.1] text-[11px] font-mono text-cyan-300 font-medium">
                            Result: One suite. One API. One architecture.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
