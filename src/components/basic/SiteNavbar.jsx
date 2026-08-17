"use client";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";

export function SiteNavbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Systems", link: "/our-works" },
        { name: "Labs", link: "/labs" },
        { name: "About", link: "/about-us" },
    ];

    return (
        <header className="fixed top-0 inset-x-0 z-50 pt-4 px-4 sm:px-6 md:px-10 w-full max-w-[1440px] mx-auto pointer-events-none">
            <div className="w-full flex items-center justify-between pointer-events-auto">
                
                {/* Left Brand & Subdomain */}
                <div className="flex items-center gap-3">
                    <NavLink to="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-full bg-[#141824] border border-white/20 p-1 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.3)]">
                            <img src="/logo.png" alt="Neoversine" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <span className="font-bold text-sm md:text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                            Neoversine
                        </span>
                    </NavLink>
                    <span className="hidden sm:inline-block text-[11px] font-mono text-[#6B7280] bg-[#0C0E12] px-3 py-1 rounded-full border border-white/[0.08]">
                        architecture.neoversine.in
                    </span>
                </div>

                {/* Center Segmented Capsule Navigation */}
                <nav className="hidden md:flex items-center p-1 rounded-full bg-[#0C0E12]/95 border border-white/[0.12] backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                    {navItems.map((item, idx) => {
                        const isActive = location.pathname === item.link;
                        return (
                            <NavLink
                                key={idx}
                                to={item.link}
                                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                                    isActive
                                        ? "bg-white text-black font-bold shadow-[0_2px_12px_rgba(255,255,255,0.4)]"
                                        : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                                }`}
                            >
                                {item.name}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Right Tagline & Action Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="text-[10px] font-mono text-[#6B7280] text-right leading-tight select-none">
                        <span>Sculpting Intelligence in</span>
                        <br />
                        <span>the Digital Sphere</span>
                    </div>
                    <NavLink
                        to="/contact"
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0C0E12] border border-white/[0.15] hover:border-[#6366F1] text-white text-xs font-mono font-medium shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all group"
                    >
                        <span>Start a build</span>
                        <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-xs shadow-[0_0_8px_#6366F1]">
                            <IconArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                        </div>
                    </NavLink>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="flex md:hidden items-center gap-2">
                    <NavLink
                        to="/contact"
                        className="px-3 py-1 rounded-full bg-white text-black text-xs font-semibold font-mono"
                    >
                        Build ↗
                    </NavLink>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-8 h-8 rounded-full bg-[#0C0E12] border border-white/[0.12] flex items-center justify-center text-white"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <IconX className="w-4 h-4" /> : <IconMenu2 className="w-4 h-4" />}
                    </button>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 p-4 rounded-[20px] bg-[#0C0E12]/95 border border-white/[0.12] backdrop-blur-2xl pointer-events-auto flex flex-col gap-2 shadow-2xl">
                    {navItems.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-3 py-2 rounded-xl text-xs font-mono text-gray-300 hover:text-white hover:bg-white/[0.04]"
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
}
