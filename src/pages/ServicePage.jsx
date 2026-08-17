import React, { useEffect, useState } from 'react';
import { SiteNavbar } from '../components/basic/SiteNavbar';
import SiteFooter from '../components/basic/SiteFooter';
import TrueFocus from '../components/accernity/TrueFocus';
import AOS from 'aos';
import { services } from '../constants/services';
import ServiceTechStack from '../components/service-details/ServiceTechStack';
import serviceTechStacks from '../constants/serviceTechStacks.json';
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
} from '@tabler/icons-react';

const iconMap = {
    'agentic-era-operations': IconCpu,
    'inference-economics-engine': IconBolt,
    'digital-twin-simulators': IconBuildingFactory2,
    'b2b-work-replacement': IconBriefcase,
    'rss-to-revenue': IconRss,
    'agentic-arc-generalization': IconBinaryTree,
    'agentic-crm': IconUsersGroup,
    'saas-ownership-stack': IconShieldLock,
    'scraping-at-scale': IconWorldWww,
    'digital-transformation-agents': IconTransform,
    'long-term-memory-fabric': IconBrain,
    'skill-creation-loops': IconCodeDots
};

const servicesWithIcons = services.map(service => ({
    ...service,
    icon: iconMap[service.id] || IconCpu
}));

const ServicePage = () => {
    const [selectedService, setSelectedService] = useState(servicesWithIcons[0]);
    const selectedServiceDetail = serviceTechStacks[selectedService.id];

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
        });
        AOS.refresh();
    }, []);

    return (
        <main className="relative w-full min-h-screen bg-primary overflow-hidden">
            {/* Background gradient mesh */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
            </div>

            <SiteNavbar />

            {/* TrueFocus Hero Section */}
            <div className='flex justify-center items-center h-[380px] md:h-[400px] sticky top-0 w-full z-10' style={{
                backgroundImage: "linear-gradient(135deg, rgba(15, 20, 25, 0.9) 0%, rgba(26, 31, 46, 0.9) 50%, rgba(13, 17, 23, 0.9) 100%)",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <div className='text-white max-md:hidden'>
                    <TrueFocus
                        sentence="Systems That Replace Work"
                        manualMode={true}
                        blurAmount={4}
                        borderColor="cyan"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                    />
                </div>
                <div className='text-white md:hidden'>
                    <TrueFocus
                        sentence="Systems"
                        manualMode={false}
                        blurAmount={4}
                        borderColor="cyan"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                    />
                </div>
            </div>

            <div className="relative z-10">
                {/* Two Column Layout - Systems List + Architecture Details */}
                <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left Side - Systems List */}
                        <div className="lg:col-span-4 space-y-2">
                            <h3 className="text-xl font-bold text-white mb-4 px-4 font-mono text-cyan-400">
                                12 Foundational Systems
                            </h3>
                            <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
                                {servicesWithIcons.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setSelectedService(service)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group cursor-pointer ${
                                            selectedService.id === service.id
                                                ? 'bg-cyan-500/20 border border-cyan-500/60 text-white shadow-lg shadow-cyan-500/10'
                                                : 'bg-slate-900/40 border border-slate-800/60 text-slate-400 hover:bg-slate-800/60 hover:text-white'
                                        }`}
                                    >
                                        <span className={`${
                                            selectedService.id === service.id ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400'
                                        } transition-colors flex-shrink-0`}>
                                            {service.icon && React.createElement(service.icon, { className: "w-5 h-5" })}
                                        </span>
                                        <span className="text-sm font-medium leading-tight">{service.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - System Details & Architecture Stack */}
                        <div className="lg:col-span-8">
                            {selectedService && (
                                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 mb-6" data-aos="fade-up">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                                            {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                                            <p className="text-xs text-cyan-400/80 font-mono">OWNED ARCHITECTURE SPECIFICATION</p>
                                        </div>
                                    </div>

                                    {/* Direct Answer Block */}
                                    <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-4 mb-4">
                                        <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">Direct Answer</p>
                                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                            {selectedService.directAnswer || selectedService.description}
                                        </p>
                                    </div>

                                    {/* Engineering & Proof Block */}
                                    {selectedService.engineeringProof && (
                                        <div className="bg-black/50 border border-white/10 rounded-xl p-4 mb-6">
                                            <p className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">Engineering &amp; Outcome Proof</p>
                                            <p className="text-gray-300 text-sm leading-relaxed font-light">
                                                {selectedService.engineeringProof}
                                            </p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                                        {selectedService.benefits.map((benefit, idx) => (
                                            <div key={idx} className="bg-black/40 border border-white/5 rounded-lg p-3 text-xs text-gray-300">
                                                <span className="text-cyan-400 mr-1.5 font-bold">✓</span> {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedServiceDetail && (
                                <div data-aos="fade-up">
                                    <ServiceTechStack techStack={selectedServiceDetail} />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                    <div 
                        className="relative rounded-3xl bg-gradient-to-r from-slate-900/80 via-slate-950/80 to-black/80 border border-white/10 p-10 md:p-16 text-center overflow-hidden"
                        data-aos="fade-up"
                    >
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Ready to Own Your AI Substrate?
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                No SaaS seat taxes. No fragile wrappers. Build agent systems directly on your owned infrastructure.
                            </p>
                            <a 
                                href="/contact"
                                className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-0.5 text-sm"
                            >
                                Schedule Architecture Review
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <SiteFooter />
        </main>
    );
};

export default ServicePage;
