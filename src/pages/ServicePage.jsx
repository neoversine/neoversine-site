import React, { useEffect, useState } from 'react';
import { SiteNavbar } from '../components/basic/SiteNavbar';
import SiteFooter from '../components/basic/SiteFooter';
import TrueFocus from '../components/accernity/TrueFocus';
import AOS from 'aos';
import { services } from '../constants/services';

// Import service detail components
import ServiceTechStack from '../components/service-details/ServiceTechStack';

// Import tech stack data
import serviceTechStacks from '../constants/serviceTechStacks.json';

// SVG Icons - Neon line style
const WebsiteIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M2 9h20" />
        <path d="M6 19h12" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="15" cy="19" r="1" />
    </svg>
);

const MobileIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 19h.01" />
        <line x1="5" y1="5" x2="19" y2="5" />
    </svg>
);

const DesignIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="1" />
        <path d="M9 2h6v6h-6V2z" />
        <path d="M2 9v6h6V9H2z" />
        <path d="M16 9v6h6V9h-6z" />
        <path d="M9 16v6h6v-6H9z" />
    </svg>
);

const ChatbotIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="12" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
    </svg>
);

const AutomationIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="1" />
        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
    </svg>
);

const AIIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        <path d="M12 9v6M9 12h6" />
    </svg>
);

const EcommerceIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
);

const SaaSIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
    </svg>
);

const MarketingIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
);

const CloudIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
);

// Icon mapping for services (icons can't be stored in JSON)
const iconMap = {
    'website-development': WebsiteIcon,
    'app-development': MobileIcon,
    'branding-design': DesignIcon,
    'chatbots-ai-assistants': ChatbotIcon,
    'ai-automation': AutomationIcon,
    'ai-integrated-software': AIIcon,
    'ecommerce-solutions': EcommerceIcon,
    'saas-product-development': SaaSIcon,
    'digital-marketing-automation': MarketingIcon,
    'cloud-infrastructure': CloudIcon
};

// Merge icon components with service data
const servicesWithIcons = services.map(service => ({
    ...service,
    icon: iconMap[service.id]
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
                        sentence="Neoversine Services"
                        manualMode={true}
                        blurAmount={4}
                        borderColor="cyan"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                    />
                </div>
                <div className='text-white md:hidden'>
                    <TrueFocus
                        sentence="Services"
                        manualMode={false}
                        blurAmount={4}
                        borderColor="cyan"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                    />
                </div>
            </div>

            <div className="relative z-10">
                {/* Two Column Layout - Categories + Service Details */}
                <section className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left Side - Categories List */}
                        <div className="lg:col-span-3 space-y-2">
                            <h3 className="text-xl font-bold text-white mb-4 px-4">Categories</h3>
                            {servicesWithIcons.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedService(service)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                                        selectedService.id === service.id
                                            ? 'bg-cyan-500/20 border border-cyan-500/50 text-white'
                                            : 'bg-slate-900/30 border border-slate-800/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
                                    }`}
                                    data-aos="fade-right"
                                >
                                    <span className={`${
                                        selectedService.id === service.id ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'
                                    } transition-colors`}>
                                        {service.icon && React.createElement(service.icon)}
                                    </span>
                                    <span className="text-sm font-medium">{service.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Right Side - Service Detail Components */}
                        <div className="lg:col-span-9">
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
                        className="relative rounded-3xl bg-gradient-to-r from-slate-900/60 via-slate-950/60 to-black/60 border border-white/10 p-12 md:p-16 text-center overflow-hidden"
                        data-aos="fade-up"
                    >
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                                Join hundreds of companies leveraging Neoversine to automate, innovate, and scale.
                            </p>
                            <a 
                                href="/contact"
                                className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300 hover:-translate-y-1"
                            >
                                Get Started Today
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
