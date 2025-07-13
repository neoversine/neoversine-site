"use client";
import React from "react";
import ColourfulText from "./Colourfultext";
import { motion } from "motion/react";

export function ColourfulTextDemo() {
    return (
        <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-center text-white relative z-2 font-sans">
            Revolutionizing Startup Growth <br />with AI Agents by <ColourfulText text="Neoversine" />
        </h1>
    );
}
