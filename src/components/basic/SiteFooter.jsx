import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { AnimatedToolTip } from "../accernity/AnimatedToolTip";
import WaveTop from "../home/WaveTop";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaGithub } from "react-icons/fa";

const people = [
    {
        id: 1,
        name: "Arka Probha Roy",
        designation: "Founder · HARNESS · Agent-OS & Inference",
        image: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752006741/arka-profile_m9eaqd.jpg",
    },
    {
        id: 2,
        name: "Ankon Karak",
        designation: "Co-founder · Engineering & Delivery",
        image: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752091606/ankon-profile_zgbdjp.jpg",
    }
];

function Developers() {
    return (
        <div className="flex flex-row items-center max-lg:ml-4 mb-6 w-full">
            <AnimatedToolTip items={people} />
        </div>
    );
}

const SiteFooter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubscribe = async () => {
        if (!email || !email.includes("@")) {
            setStatus("error");
            return;
        }

        try {
            const res = await fetch("https://n8n.finnofarms.in/webhook/c0a45f84-8436-45e4-8e91-60350cf18f13", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Email: email }),
            });

            if (res.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <>
            <WaveTop />
            <footer className="py-20 pb-10 text-gray-300 bg-[#050505] border-t border-white/[0.08] backdrop-blur-md">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-bold text-white mb-2">Neoversine</h3>
                            <p className="text-xs text-cyan-400 font-mono mb-4">AGENT-OPERATING-SYSTEMS &amp; vLLM INFERENCE ECONOMICS</p>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                We build AI systems that replace work. Owned architecture, zero wrapper tax, and real-time control decks. Built and owned end-to-end by Arka &amp; Ankon.
                            </p>
                            <div className="flex space-x-4 text-lg">
                                <a href="https://x.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Neoversine on X">
                                    <RiTwitterXFill />
                                </a>
                                <a href="https://github.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Neoversine on GitHub">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/neoversine/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Neoversine on Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-white mb-4 font-mono">Foundational Systems</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="/services" className="hover:text-cyan-400 transition-colors">Hermes Agent-OS</a></li>
                                <li><a href="/services" className="hover:text-cyan-400 transition-colors">Inference Economics</a></li>
                                <li><a href="/services" className="hover:text-cyan-400 transition-colors">ARC Network CRM</a></li>
                                <li><a href="/services" className="hover:text-cyan-400 transition-colors">NeoCrawl API</a></li>
                                <li><a href="/services" className="hover:text-cyan-400 transition-colors">Pocket Control Deck</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-white mb-4 font-mono">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a aria-label="To go to About us" href="/about-us" className="hover:text-cyan-400 transition-colors">About Us &amp; Thesis</a></li>
                                <li><a aria-label="To go to Labs Section" href="/labs" className="hover:text-cyan-400 transition-colors">Labs &amp; Open Source</a></li>
                                <li><a aria-label="To go to Works Section" href="/our-works" className="hover:text-cyan-400 transition-colors">Production Systems</a></li>
                                <li><a aria-label="To go to Contact" href="/contact" className="hover:text-cyan-400 transition-colors">Schedule Build Review</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <Developers />
                            <h4 className="text-base font-semibold text-white mb-2 font-mono">Research Dispatch</h4>
                            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                                Get our latest architectural breakthroughs on vLLM optimization and agent orchestration.
                            </p>
                            <div className="flex w-full">
                                <input
                                    type="email"
                                    placeholder="Work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[#151515] text-white text-xs px-4 py-2.5 rounded-l-md border border-white/10 focus:outline-none focus:border-cyan-500 w-full"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="bg-cyan-600 px-4 rounded-r-md text-white hover:bg-cyan-500 transition-colors cursor-pointer"
                                    aria-label="Subscribe"
                                >
                                    <MoveRight className="h-4 w-4" />
                                </button>
                            </div>
                            {status === "success" && (
                                <p className="text-xs text-green-400 mt-2">Subscribed to research dispatches.</p>
                            )}
                            {status === "error" && (
                                <p className="text-xs text-red-400 mt-2">Failed to subscribe. Try again.</p>
                            )}
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>
                            &copy; {new Date().getFullYear()} Neoversine. Architecture-owned agent operating systems by Arka &amp; Ankon.
                        </p>
                        <div className="mt-4 md:mt-0 flex gap-6">
                            <span>Kolkata, India</span>
                            <span>•</span>
                            <span>MIT-Licensed Open Core</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default SiteFooter;
