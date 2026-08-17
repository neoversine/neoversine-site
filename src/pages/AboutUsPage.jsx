/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiteNavbar } from "../components/basic/SiteNavbar";
import { HiOutlineArrowTurnRightDown } from "react-icons/hi2";
import TrueFocus from "../components/accernity/TrueFocus";
import { BsTwitterX, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SiteFooter from "../components/basic/SiteFooter";
import { useNavigate } from "react-router-dom";
import { IconShieldCheck, IconCpu, IconBolt, IconArrowUpRight } from "@tabler/icons-react";

const HeroText = ({ value }) => (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-cyan-300">
        {value}
    </span>
);

const AboutUsPage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const navigate = useNavigate();

    return (
        <main className="flex flex-col relative w-full bg-[#050505] text-white overflow-hidden min-h-screen">
            <SiteNavbar />

            {/* Hero Header */}
            <div className="pt-32 pb-16 px-4 md:px-6 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-xs font-mono text-[#6366F1] uppercase tracking-wider mb-6">
                    <IconShieldCheck className="w-3.5 h-3.5" />
                    Foundational Ownership
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                    About <HeroText value="Neoversine" />
                </h1>
                <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl mx-auto font-light">
                    The agent-operating-system company. We build AI systems that replace work — designed, shipped, and owned end-to-end by two builders.
                </p>
            </div>

            {/* Thesis Section */}
            <div className="w-full pb-20 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-8 md:gap-16 mx-auto items-center">
                    <div className="flex flex-col gap-3">
                        <div className="flex text-[#94A3B8] items-center gap-2 text-xs font-mono">
                            <p>OUR POSITIONING THESIS</p>
                            <HiOutlineArrowTurnRightDown />
                        </div>
                        <div className="flex gap-4">
                            <div className="h-32 bg-gradient-to-b from-[#6366F1] via-cyan-400 to-[#0C0E12] w-1.5 rounded-full mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-xl sm:text-2xl font-bold text-white tracking-wide leading-snug">
                                    We build the <HeroText value="Substrate" />, not the <HeroText value="Souvenir." />
                                    <br />
                                    Agent-first. <HeroText value="Architecture-owned." /> Economically grounded.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed shadow-lg">
                        <p className="mb-3 text-white font-medium">
                            "We don't build AI wrappers. We don't reskin LangChain or bolt together n8n workflows."
                        </p>
                        <p>
                            At Neoversine, the two of us build agent systems on our own architecture. Our foundation is Hermes agent-OS. Beneath it, we've mastered vLLM inference economics — PagedAttention, KV-cache reuse, speculative decoding, and cost-per-token. Every system ships with a live control deck.
                        </p>
                    </div>
                </div>

                {/* Verified Production Proof Matrix */}
                <div className="max-w-5xl mx-auto mt-16">
                    <div className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-6 md:p-10 shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <div>
                                <span className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block mb-1">
                                    VERIFIED PRODUCTION BENCHMARKS
                                </span>
                                <h2 className="text-xl sm:text-2xl font-bold text-white">
                                    Real Results Only. Never Invented.
                                </h2>
                            </div>
                            <span className="text-xs font-mono text-[#94A3B8] bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08] w-fit">
                                4 Live Client Deployments
                            </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            <div className="p-4 rounded-[18px] bg-black/40 border border-white/[0.08] text-center">
                                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#6366F1]">+40%</span>
                                <span className="text-[10px] text-[#94A3B8] font-mono block mt-1 uppercase">Lead Conversion</span>
                                <span className="text-[9px] text-[#6B7280]">ARC Network CRM</span>
                            </div>
                            <div className="p-4 rounded-[18px] bg-black/40 border border-white/[0.08] text-center">
                                <span className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">10x</span>
                                <span className="text-[10px] text-[#94A3B8] font-mono block mt-1 uppercase">Faster Research</span>
                                <span className="text-[9px] text-[#6B7280]">Custom RAG Pipelines</span>
                            </div>
                            <div className="p-4 rounded-[18px] bg-black/40 border border-white/[0.08] text-center">
                                <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">0.96</span>
                                <span className="text-[10px] text-[#94A3B8] font-mono block mt-1 uppercase">mAP50 YOLO</span>
                                <span className="text-[9px] text-[#6B7280]">700 imgs/1h (D8alytics)</span>
                            </div>
                            <div className="p-4 rounded-[18px] bg-black/40 border border-white/[0.08] text-center">
                                <span className="text-2xl sm:text-3xl font-bold font-mono text-rose-400">0</span>
                                <span className="text-[10px] text-[#94A3B8] font-mono block mt-1 uppercase">Vendor Lock-In</span>
                                <span className="text-[9px] text-[#6B7280]">MIT Control Deck</span>
                            </div>
                        </div>

                        {/* Benchmark Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs font-mono border border-white/[0.08] rounded-xl overflow-hidden">
                                <thead className="bg-white/[0.04] text-gray-300">
                                    <tr className="border-b border-white/[0.08]">
                                        <th className="py-2.5 px-3">Metric / Proof Point</th>
                                        <th className="py-2.5 px-3">System / Architecture</th>
                                        <th className="py-2.5 px-3">Scope / Dataset</th>
                                        <th className="py-2.5 px-3">Verification</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/[0.04] text-[#94A3B8]">
                                    <tr className="hover:bg-white/[0.02]">
                                        <td className="py-2.5 px-3 text-[#6366F1] font-bold">+40% Conversion</td>
                                        <td className="py-2.5 px-3 text-white">ARC Network CRM</td>
                                        <td className="py-2.5 px-3">Intent-driven subagent sequencing</td>
                                        <td className="py-2.5 px-3 text-emerald-400">Live B2B client production</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02]">
                                        <td className="py-2.5 px-3 text-cyan-400 font-bold">10x Speedup</td>
                                        <td className="py-2.5 px-3 text-white">Custom RAG Pipelines</td>
                                        <td className="py-2.5 px-3">Technical due diligence &amp; market reports</td>
                                        <td className="py-2.5 px-3 text-emerald-400">Hours reduced to minutes</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02]">
                                        <td className="py-2.5 px-3 text-emerald-400 font-bold">mAP50 0.96 Accuracy</td>
                                        <td className="py-2.5 px-3 text-white">D8alytics Vision Engine</td>
                                        <td className="py-2.5 px-3">700 YOLO images / hour</td>
                                        <td className="py-2.5 px-3 text-emerald-400">100% synthetic dataset</td>
                                    </tr>
                                    <tr className="hover:bg-white/[0.02]">
                                        <td className="py-2.5 px-3 text-rose-400 font-bold">Zero Lock-In</td>
                                        <td className="py-2.5 px-3 text-white">MIT Control Deck</td>
                                        <td className="py-2.5 px-3">Self-hosted, phone-first runtime</td>
                                        <td className="py-2.5 px-3 text-emerald-400">Open-source runtime steering</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B7280] font-mono">
                            <span>Clients: DGC • Ai agenti • Brunch Italiano • MaisonRoseLifestyle</span>
                            <button
                                onClick={() => navigate("/contact")}
                                className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all cursor-pointer"
                            >
                                Start a Build ↗
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Team (Two People Only: Arka & Ankon) */}
            <div className="w-full max-w-5xl mx-auto px-4 pb-28">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block mb-2">
                        THE TWO OF US
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                        Core Builders
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto">
                        No middle managers. No invented titles. We built it and we own it end to end.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Arka's Card */}
                    <div className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-8 flex flex-col justify-between shadow-xl">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#6366F1] p-0.5 flex-shrink-0">
                                    <img
                                        src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752006741/arka-profile_m9eaqd.jpg"
                                        alt="Arka"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block">
                                        FOUNDER · HARNESS
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">Arka</h3>
                                    <p className="text-xs text-cyan-300 font-mono">Agent-OS Architecture &amp; Inference Economics</p>
                                </div>
                            </div>
                            <p className="text-xs italic text-gray-300 font-mono mb-4 bg-white/[0.02] p-3 rounded-xl border border-white/[0.06]">
                                "We build the substrate, not the souvenir."
                            </p>
                            <p className="text-xs text-[#94A3B8] leading-relaxed">
                                Founded Neoversine in Jan 2024 to build agent operating systems from first principles. Currently serving as CTO at HypeX (Jan 2025–present), owning tech vision, architecture, and AI systems. Previously delivered full-stack architectures at Ditinex and directed industrial embedded control systems as Tech Lead at IEI ECE. Based in Kolkata.
                            </p>
                        </div>
                        <div className="flex gap-3 text-white text-base mt-6 pt-4 border-t border-white/[0.08]">
                            <a href="https://x.com/neoversine" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-[#6366F1] hover:border-[#6366F1] transition-colors"><BsTwitterX /></a>
                            <a href="https://github.com/neoversine" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-[#6366F1] hover:border-[#6366F1] transition-colors"><BsGithub /></a>
                            <a href="mailto:neoversine@gmail.com" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-[#6366F1] hover:border-[#6366F1] transition-colors"><MdEmail /></a>
                        </div>
                    </div>

                    {/* Ankon's Card */}
                    <div className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-8 flex flex-col justify-between shadow-xl">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400 p-0.5 flex-shrink-0">
                                    <img
                                        src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752091606/ankon-profile_zgbdjp.jpg"
                                        alt="Ankon"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                                        CO-FOUNDER
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">Ankon</h3>
                                    <p className="text-xs text-indigo-300 font-mono">Engineering &amp; Delivery</p>
                                </div>
                            </div>
                            <p className="text-xs italic text-gray-300 font-mono mb-4 bg-white/[0.02] p-3 rounded-xl border border-white/[0.06]">
                                "High-throughput runtimes and cross-platform runtime reliability."
                            </p>
                            <p className="text-xs text-[#94A3B8] leading-relaxed">
                                Leads engineering execution and full-stack systems delivery across Neoversine's agent platforms. Architecting high-concurrency client layers, event dispatchers, real-time control deck synchronization, and scalable deployment pipelines spanning desktop, web, and mobile gateways.
                            </p>
                        </div>
                        <div className="flex gap-3 text-white text-base mt-6 pt-4 border-t border-white/[0.08]">
                            <a href="https://x.com/neoversine" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 transition-colors"><BsTwitterX /></a>
                            <a href="https://github.com/neoversine" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 transition-colors"><BsGithub /></a>
                            <a href="mailto:neoversine@gmail.com" className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 transition-colors"><MdEmail /></a>
                        </div>
                    </div>
                </div>
            </div>

            <SiteFooter />
        </main>
    );
};

export default AboutUsPage;