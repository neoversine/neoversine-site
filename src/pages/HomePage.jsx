import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import { SiteNavbar } from "../components/basic/SiteNavbar";
import SiteFooter from "../components/basic/SiteFooter";
import AOS from "aos";
import "aos/dist/aos.css";
import NeoversineShowcase from "../components/home/NeoversineShowcase";
import WaveTop from "../components/home/WaveTop";
import TopProducts from "../components/home/TopProducts";
import TechStack from "../components/home/TechStack";
import IndustriesWeServe from "../components/home/IndustriesWeServe";

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-[#050505] min-h-screen text-white">
            <SiteNavbar />

            {/* 1. Hero Section: Spatial AI Dashboard with Liquid Glass Center Sphere */}
            <HeroSection />

            <WaveTop location="top" />

            {/* 2. One Stack vs Fragmented SaaS Comparison with Spaghetti vs Monolith Diagrams */}
            <NeoversineShowcase />

            {/* 3. Combined Framework: 10 Native Systems & Reference Equivalence Matrix */}
            <TopProducts />

            {/* 4. 12 Portfolio Systems Priced by Problem Solved */}
            <IndustriesWeServe />

            {/* 5. Foundational Architecture Stack */}
            <TechStack />

            <SiteFooter />
        </div>
    );
};

export default HomePage;