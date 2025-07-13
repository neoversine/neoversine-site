// NeoversineShowcase.jsx
import React, { useEffect } from "react";
import { FaRobot, FaBolt, FaCogs, FaGlobe, FaComments } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    {
        title: "AI-Powered Content",
        icon: <FaRobot />,
        desc: "Auto-generate blogs, SEO, and meta tags using GPT-4 & Perplexity.",
    },
    {
        title: "Social Automation",
        icon: <FaBolt />,
        desc: "Schedule personalized posts & automate WhatsApp follow-ups.",
    },
    {
        title: "Ecommerce Ops",
        icon: <FaCogs />,
        desc: "Sync orders, manage inventory, and fulfill faster via automation.",
    },
    {
        title: "Smart CRM & Leads",
        icon: <FaComments />,
        desc: "Scrape, enrich & convert leads with AI-powered flows.",
    },
    {
        title: "Visual Dashboards",
        icon: <FaGlobe />,
        desc: "Real-time sync to Airtable, Notion, Google Sheets & Data Studio.",
    },
];


const NeoversineShowcase = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-[#181818] text-white py-20 max-md:pt-10 px-6 md:px-16 rounded-3xl overflow-hidden">
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="text-center pb-12  floating-text"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                        Automate Everything. Grow Faster.
                    </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                    At Neoversine, we craft intelligent automation flows — so your content, leads,
                    support, and sales run on autopilot.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {services.map((service, i) => (
                    <React.Fragment
                        key={i}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay={`${(i % 3) * 150}`}
                            data-aos-anchor-placement="center-bottom"
                            className="max-md:hidden relative h-[218px] cursor-pointer"

                        >
                            <div className="absolute left-[5px] top-[3px] h-full w-full bg-[#bfbfbf]"
                                style={{
                                    clipPath: window.innerWidth < 640
                                        ? "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)"
                                        : "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
                                    boxShadow: "white 0px 8px 0px 4px",
                                }}
                            >
                            </div>
                            <div
                                className="absolute top-0 active:top-0 hover:-top-[2px] left-0 active:left-0 hover:-left-[2px] bg-gradient-to-br from-[#2e2e2e] to-[#131313]  hover:bg-[#343434] py-10 px-8"
                                style={{
                                    clipPath: window.innerWidth < 640
                                        ? "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)"
                                        : "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
                                    boxShadow: "black 0px 8px 0px 4px",
                                }}>
                                <div className="text-4xl text-purple-400 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.desc}</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            className="md:hidden relative h-[218px] cursor-pointer"

                        >
                            <div className="absolute left-[5px] top-[3px] h-full w-full bg-[#bfbfbf]"
                                style={{
                                    clipPath: window.innerWidth < 640
                                        ? "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)"
                                        : "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
                                    boxShadow: "white 0px 8px 0px 4px",
                                }}
                            >
                            </div>
                            <div
                                className="absolute top-0 active:top-0 hover:-top-[2px] left-0 active:left-0 hover:-left-[2px] bg-gradient-to-br from-[#2e2e2e] to-[#131313]  hover:bg-[#343434] py-10 px-8"
                                style={{
                                    clipPath: window.innerWidth < 640
                                        ? "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)"
                                        : "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
                                    boxShadow: "black 0px 8px 0px 4px",
                                }}>
                                <div className="text-4xl text-purple-400 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-400">{service.desc}</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>


        </div>
    );
};

export default NeoversineShowcase;
