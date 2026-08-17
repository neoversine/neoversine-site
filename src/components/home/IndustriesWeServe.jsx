import React from 'react';
import {
    IconRocket,
    IconBriefcase,
    IconShoppingCart,
    IconSearch,
    IconTransform,
    IconBuildingSkyscraper,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { HoverEffect } from "../accernity/card-hover-effect";

export function IndustriesWeServe() {
    const industries = [
        {
            title: "B2B SaaS & Tech Startups",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500"
                )}>
                    <IconRocket className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Deploy Hermes agent-OS runtimes, slash vLLM inference costs, and embed autonomous parallel agents directly into your software platform.",
        },
        {
            title: "Sales & Outbound Teams",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500"
                )}>
                    <IconBriefcase className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Boost lead conversion (+40%) with ARC Network CRM — agents dynamically research prospects, score fit, and trigger human intervention only upon engagement.",
        },
        {
            title: "E-Commerce & Brands",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500"
                )}>
                    <IconShoppingCart className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Eliminate manual creative work with NeopostGen SaaS while keeping competitor catalog and pricing intelligence synced via NeoCrawl.",
        },
        {
            title: "Research & Due Diligence",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500"
                )}>
                    <IconSearch className="w-8 h-8 text-white" />
                </div>
            ),
            description: "10x search and synthesis efficiency through custom retrieval-augmented pipelines, reducing technical diligence time from hours to minutes.",
        },
        {
            title: "Computer Vision & Robotics",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-yellow-500 to-amber-500"
                )}>
                    <IconTransform className="w-8 h-8 text-white" />
                </div>
            ),
            description: "D8alytics synthetic data generation creating thousands of annotated YOLO images with mAP50 0.96 for rapid model training without field collection.",
        },
        {
            title: "Enterprises & Operations",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-500"
                )}>
                    <IconBuildingSkyscraper className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Replace high-friction human processes (invoicing, compliance, verification) with self-hosted agent swarms monitored via real-time control decks.",
        },
    ];

    return (
        <section className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-10 py-12">
            <div className='mx-auto flex flex-col max-w-7xl w-full max-md:pt-16 pt-12 px-4'>
                <div className="mb-8 md:mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className='bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent'>
                            Work Replaced Across Verticals
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We don't sell tools; we sell outcomes measured in labor hours saved, error rates slashed, and revenue enabled.
                    </p>
                </div>
            </div>

            <HoverEffect items={industries} />
        </section>
    );
}

export default IndustriesWeServe;
