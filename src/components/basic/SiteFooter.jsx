
import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { AnimatedToolTip } from "../accernity/AnimatedToolTip";
import WaveTop from "../home/WaveTop";
import { IconBrandTwitter } from "@tabler/icons-react";
import { RiTwitterXFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa"
const people = [

    {
        id: 2,
        name: "Arka Probha Roy",
        designation: "AI Expert",
        image:
            "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752006741/arka-profile_m9eaqd.jpg",
    },
    {
        id: 3,
        name: "Ankon Karak",
        designation: "App Developer",
        image:
            "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752163440/ankon-profile2_f6lned.jpg",
    },
    {
        id: 4,
        name: "Ujjwaini Saha",
        designation: "Promt Engineer",
        image:
            "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752163664/ujjwaini-profile2_mg1w0n.jpg",
    },
    {
        id: 1,
        name: "Jyotirmoy Baidya",
        designation: "Web Developer",
        image:
            "https://res.cloudinary.com/dxbszkdhk/image/upload/v1751610621/jb-profile2_hbjx1s.jpg",
    },
];

function Developers() {
    return (
        <div className="flex flex-row items-center max-lg:ml-4 mb-10 w-full">
            <AnimatedToolTip items={people} />
        </div>
    );
}



const SiteFooter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null); // success | error | null

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
            <footer className="py-20 pb-10 text-gray-300 bg-[#000000] backdrop-blur-md">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-bold text-white mb-4">Neoversine</h3>
                            <p className="text-sm text-gray-400 mb-6">
                                Empowering businesses with innovative AI solutions for growth and efficiency.
                            </p>
                            <div className="flex space-x-4">

                                <a href="https://x.com/neoversine" target="_blank" className="hover:text-white transition-colors">
                                    <RiTwitterXFill />
                                </a>
                                <a href="https://www.instagram.com/neoversine/" className="hover:text-white transition-colors">
                                    <FaInstagram />
                                </a>
                                {/* <a href="" className="hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a> */}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><a href="/our-works" className="hover:text-white transition-colors">AI Development</a></li>
                                <li><a href="/coming-soon" className="hover:text-white transition-colors">Web Development</a></li>
                                <li><a href="/coming-soon" className="hover:text-white transition-colors">Mobile Apps</a></li>
                                <li><a href="/coming-soon" className="hover:text-white transition-colors">UI/UX Design</a></li>
                                <li><a href="/coming-soon" className="hover:text-white transition-colors">Data Analytics</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a aria-label="To go to About us" href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a aria-label="To go to Labs Section" href="/labs" className="hover:text-white transition-colors">Labs</a></li>
                                {/* <li><a href="/coming" className="hover:text-white transition-colors">Privacy Policy</a></li> */}
                                {/* <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li> */}
                            </ul>
                        </div>

                        <div className="flex flex-col">
                            <Developers />
                            <h4 className="text-lg font-semibold text-white mb-4">Subscribe</h4>
                            <p className="text-sm text-gray-400 mb-4">
                                Subscribe to our newsletter for the latest updates and insights.
                            </p>
                            <div className="flex w-full">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[#151515] text-white px-4 py-2 rounded-l-md border border-white/10 focus:outline-none focus:border-neoversine-purple w-full"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="bg-neoversine-purple px-4 rounded-r-md text-white hover:bg-purple-700 transition-colors"
                                    aria-label="Subscribe"
                                >
                                    <MoveRight className="h-5 w-5" />
                                </button>
                            </div>
                            {status === "success" && (
                                <p className="text-sm text-green-400 mt-2">Subscribed successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-sm text-red-400 mt-2">Failed to subscribe. Try again.</p>
                            )}
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} Neoversine. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex space-x-6 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default SiteFooter;
