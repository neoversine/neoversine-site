import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiteNavbar } from "../components/basic/SiteNavbar";
import { ConfettiSideCannons } from "../components/magic-ui/ConfettiSideCannons";
import { ToastContainer } from "react-toastify";
import { Pointerhighlight } from "../components/accernity/Pointerhighlight";
import SiteFooter from "../components/basic/SiteFooter";
import { IconShieldCheck, IconCpu, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");

    return (
        <main className="bg-[#050505] text-white w-full overflow-hidden min-h-screen">
            <SiteNavbar />

            <div className="pt-32 pb-20 px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto w-full">
                
                {/* Header Title */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-[800px] mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-xs font-mono text-[#6366F1] uppercase tracking-wider mb-4">
                        <IconCpu className="w-3.5 h-3.5" />
                        DIRECT ARCHITECTURE PARTNERSHIP
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        Foundational <Pointerhighlight><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-cyan-300">agent systems</span></Pointerhighlight> for teams that own their stack.
                    </h1>
                </motion.div>

                {/* Two-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Column: Direct Builder Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-6 md:p-8 shadow-xl"
                    >
                        <span className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block mb-2">
                            THE TWO BUILDERS
                        </span>
                        <h3 className="text-xl font-bold text-white mb-4">Arka &amp; Ankon</h3>
                        
                        <div className="space-y-4 text-xs text-[#94A3B8] font-mono mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#6366F1]">
                                    <IconMail className="w-4 h-4" />
                                </div>
                                <span>neoversine@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                                    <IconPhone className="w-4 h-4" />
                                </div>
                                <span>+91 8777293979</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-purple-400">
                                    <IconMapPin className="w-4 h-4" />
                                </div>
                                <span>Kolkata, West Bengal, India</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/[0.08] text-[11px] text-[#6B7280] font-light leading-relaxed">
                            We partner on long-term builds where architecture ownership, vLLM inference economics, and Hermes agent-OS runtimes replace human labor at scale.
                        </div>
                    </motion.div>

                    {/* Right Column: Build Scope Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-8 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-6 md:p-10 shadow-xl"
                    >
                        <div className="mb-8">
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
                                SCHEDULE A BUILD REVIEW
                            </span>
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                Describe What Work Needs Replacing
                            </h2>
                            <p className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-[640px]">
                                We review every proposal directly within 24 hours. No sales reps, straight to architectural scoping.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="query-person-name" className="text-xs text-[#94A3B8] font-mono">
                                        Your Name <span className="text-rose-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="query-person-name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-xs font-mono focus:border-[#6366F1] focus:outline-none transition-colors"
                                        placeholder="Arka Roy"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="query-person-email" className="text-xs text-[#94A3B8] font-mono">
                                        Work Email <span className="text-rose-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="query-person-email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-xs font-mono focus:border-[#6366F1] focus:outline-none transition-colors"
                                        placeholder="founder@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="query-data" className="text-xs text-[#94A3B8] font-mono">
                                    System Requirements / Architecture Scope <span className="text-rose-400">*</span>
                                </label>
                                <textarea
                                    id="query-data"
                                    rows={4}
                                    value={data}
                                    onChange={(e) => setData(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-xs font-mono focus:border-[#6366F1] focus:outline-none transition-colors leading-relaxed"
                                    placeholder="Describe the workflow or labor hours you're aiming to replace with agent systems..."
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <ConfettiSideCannons
                                    name={name}
                                    email={email}
                                    data={data}
                                    className="py-2.5 px-8 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-200 active:scale-95 transition-all cursor-pointer shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <ToastContainer />
            <SiteFooter />
        </main>
    );
};

export default ContactPage;