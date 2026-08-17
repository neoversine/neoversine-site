import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function LiquidGlassSphere() {
    const navigate = useNavigate();

    return (
        <div
            className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[480px] lg:h-[480px] rounded-full flex flex-col items-center justify-center p-6 cursor-pointer select-none group"
            onClick={() => navigate("/contact")}
        >
            {/* ================= Deep Crisp Architectural Glass Orb ================= */}
            <div className="absolute inset-0 rounded-full bg-[#0C0E12] border border-white/[0.15] overflow-hidden">
                
                {/* 3D Deep Ocean Blue to Cobalt Base Gradient (Non-glowing, crisp) */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_35%_30%,#0D2B60_0%,#081736_45%,#050505_90%)]" />

                {/* ================= Spiraling Molten Fluid Ribbon 1 (Clockwise) ================= */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[15%] pointer-events-none opacity-60"
                >
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                        <defs>
                            <linearGradient id="crispRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
                                <stop offset="50%" stopColor="#0284C7" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 250 60 C 360 80, 440 160, 430 260 C 420 360, 330 430, 230 420 C 130 410, 70 320, 80 220 C 90 120, 160 60, 250 60 Z"
                            fill="none"
                            stroke="url(#crispRibbon1)"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeDasharray="280 140"
                        />
                    </svg>
                </motion.div>

                {/* ================= Spiraling Fluid Ribbon 2 (Counter-Clockwise) ================= */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[10%] pointer-events-none opacity-50"
                >
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                        <defs>
                            <linearGradient id="crispRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                                <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#0D2B60" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 140 190 Q 250 100 360 190 T 360 330 Q 250 420 140 330 T 140 190 Z"
                            fill="none"
                            stroke="url(#crispRibbon2)"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeDasharray="200 120"
                        />
                    </svg>
                </motion.div>

                {/* Crisp Specular Light Reflection (Sharp 1px border contour, zero blur halo) */}
                <div className="absolute top-4 left-10 right-10 h-28 rounded-[100%] border-t border-white/20 pointer-events-none" />

                {/* Dark Center Core for Text Readability */}
                <div className="absolute inset-5 rounded-full bg-[#050505]/85 border border-white/[0.08]" />

            </div>

            {/* Sharp Outer Ring Stroke */}
            <div className="absolute inset-0 rounded-full border border-white/[0.15] pointer-events-none" />

            {/* ================= Foreground Content ================= */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[320px] sm:max-w-xs md:max-w-sm px-4">
                
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0C0E12] border border-white/[0.12] text-[10px] font-mono text-cyan-300 uppercase tracking-widest mb-3.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    ARCHITECTURE-OWNED
                </div>

                {/* Hero Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.15] mb-4">
                    We build AI systems that{" "}
                    <span className="text-cyan-300">
                        replace work.
                    </span>
                </h1>

                {/* Action Button */}
                <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-bold text-base hover:scale-105 active:scale-95 transition-all my-1 cursor-pointer">
                    <IconArrowUpRight className="w-5 h-5 text-black stroke-[2.5]" />
                </div>

                {/* Slogan Capsule */}
                <div className="px-3.5 py-1 rounded-full bg-[#0C0E12] border border-white/[0.1] text-[10px] text-[#94A3B8] font-mono mt-3">
                    Where Data Shapes The Future
                </div>
            </div>

        </div>
    );
}
