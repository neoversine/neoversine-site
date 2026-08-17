import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiteNavbar } from "../components/basic/SiteNavbar";
import SiteFooter from "../components/basic/SiteFooter";
import { services } from "../constants/services";
import ServiceTechStack from "../components/service-details/ServiceTechStack";
import serviceTechStacks from "../constants/serviceTechStacks.json";
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
    IconCodeDots,
    IconArrowUpRight
} from "@tabler/icons-react";

const iconMap = {
    "agentic-era-operations": IconCpu,
    "inference-economics-engine": IconBolt,
    "digital-twin-simulators": IconBuildingFactory2,
    "b2b-work-replacement": IconBriefcase,
    "rss-to-revenue": IconRss,
    "agentic-arc-generalization": IconBinaryTree,
    "agentic-crm": IconUsersGroup,
    "saas-ownership-stack": IconShieldLock,
    "scraping-at-scale": IconWorldWww,
    "digital-transformation-agents": IconTransform,
    "long-term-memory-fabric": IconBrain,
    "skill-creation-loops": IconCodeDots
};

const servicesWithIcons = services.map(service => ({
    ...service,
    icon: iconMap[service.id] || IconCpu
}));

const ServicePage = () => {
    const [selectedService, setSelectedService] = useState(servicesWithIcons[0]);
    const selectedServiceDetail = serviceTechStacks[selectedService.id];

    return (
        <main className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden">
            <SiteNavbar />

            {/* Hero Header */}
            <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="pt-32 pb-12 px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto text-center"
            >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-xs font-mono text-[#6366F1] uppercase tracking-wider mb-4">
                    <IconCpu className="w-3.5 h-3.5" />
                    FOUNDATIONAL ARCHITECTURE
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                    Systems That{" "}
                    <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
                        Replace Work.
                    </span>
                </h1>
                <p className="text-sm md:text-base text-[#94A3B8] max-w-[640px] mx-auto font-light leading-relaxed">
                    12 foundational systems designed, shipped, and owned end-to-end on Hermes agent-OS and custom vLLM inference economics.
                </p>
            </motion.div>

            {/* Interactive System Explorer */}
            <div className="px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Column: 12 System Selector List */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-4 rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-4 shadow-xl"
                    >
                        <span className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold px-3 pt-2 pb-3 block">
                            12 ARCHITECTURAL SYSTEMS
                        </span>
                        <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
                            {servicesWithIcons.map((service) => {
                                const isSelected = selectedService.id === service.id;
                                return (
                                    <button
                                        key={service.id}
                                        onClick={() => setSelectedService(service)}
                                        className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                                            isSelected
                                                ? "bg-white/[0.08] border border-white/20 text-white shadow-md"
                                                : "bg-transparent border border-transparent text-[#94A3B8] hover:text-white hover:bg-white/[0.03]"
                                        }`}
                                    >
                                        <span className={`p-1.5 rounded-lg ${isSelected ? "bg-[#6366F1] text-white" : "bg-white/[0.04] text-[#6B7280]"}`}>
                                            {service.icon && React.createElement(service.icon, { className: "w-4 h-4" })}
                                        </span>
                                        <span className="text-xs font-medium leading-snug">{service.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column: Active System Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-8 flex flex-col gap-6"
                    >
                        {selectedService && (
                            <div className="rounded-[24px] bg-[#0C0E12] border border-white/[0.12] p-6 md:p-8 shadow-xl">
                                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/[0.08]">
                                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-[#6366F1]">
                                        {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedService.title}</h2>
                                        <p className="text-[10px] text-[#6366F1] font-mono uppercase tracking-wider">
                                            Hermes Agent-OS Substrate Specification
                                        </p>
                                    </div>
                                </div>

                                {/* Direct Answer */}
                                <div className="rounded-xl bg-black/40 border border-white/[0.06] p-4 mb-4">
                                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
                                        Architectural Purpose
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                                        {selectedService.directAnswer || selectedService.description}
                                    </p>
                                </div>

                                {/* Engineering Proof */}
                                {selectedService.engineeringProof && (
                                    <div className="rounded-xl bg-black/40 border border-white/[0.06] p-4 mb-5">
                                        <span className="text-[10px] font-mono text-[#6366F1] uppercase tracking-wider font-semibold block mb-1">
                                            Engineering &amp; Outcome Proof
                                        </span>
                                        <p className="text-xs text-[#94A3B8] leading-relaxed font-light">
                                            {selectedService.engineeringProof}
                                        </p>
                                    </div>
                                )}

                                {/* Key Deliverables */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                                    {selectedService.benefits.map((benefit, idx) => (
                                        <div key={idx} className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3 text-[11px] text-gray-300">
                                            <span className="text-emerald-400 font-bold mr-1">✓</span> {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {selectedServiceDetail && (
                            <ServiceTechStack techStack={selectedServiceDetail} />
                        )}
                    </motion.div>

                </div>
            </div>

            {/* Bottom CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-12 px-[clamp(20px,4vw,64px)] max-w-[1280px] mx-auto"
            >
                <div className="rounded-[28px] bg-[#0C0E12] border border-white/[0.12] p-8 md:p-12 text-center flex flex-col items-center shadow-2xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Ready to Deploy Your Owned AI Substrate?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94A3B8] max-w-[640px] mx-auto mb-6 font-light leading-relaxed">
                        No ongoing SaaS seat taxes. No fragile wrappers. Build agent systems directly on your owned infrastructure.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all shadow-lg"
                    >
                        <span>Schedule Architecture Review</span>
                        <IconArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>

            <SiteFooter />
        </main>
    );
};

export default ServicePage;
