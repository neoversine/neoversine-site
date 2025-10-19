import React from 'react';
import {
    IconRocket,
    IconHandMove,
    IconShoppingCart,
    IconHeartbeat,
    IconBuilding,
    IconSchool,
    IconBuildingSkyscraper,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { HoverEffect } from "../accernity/card-hover-effect";

export function IndustriesWeServe() {
    const industries = [
        {
            title: "For Startups",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500"
                )}>
                    <IconRocket className="w-8 h-8 text-white" />
                </div>
            ),
            description: "From idea to launch — we build your digital foundation with scalable websites, apps, and AI automations designed for early growth.",
        },
        {
            title: "For Agencies",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500"
                )}>
                    <IconHandMove className="w-8 h-8 text-white" />
                </div>
            ),
            description: "We power your client delivery with white-label development, automation systems, and design support that scales with your workload.",
        },
        {
            title: "For Retail & E-Commerce",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500"
                )}>
                    <IconShoppingCart className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Transform online shopping with lightning-fast stores, smart chatbots, and personalized AI-driven recommendations.",
        },
        {
            title: "For Healthcare",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500"
                )}>
                    <IconHeartbeat className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Secure, reliable systems that automate patient management, bookings, and engagement — built with compliance in mind.",
        },
        {
            title: "For Real Estate",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500"
                )}>
                    <IconBuilding className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Showcase properties with interactive maps, automation for lead nurturing, and elegant, mobile-friendly websites.",
        },
        {
            title: "For Education & Training",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500"
                )}>
                    <IconSchool className="w-8 h-8 text-white" />
                </div>
            ),
            description: "Learning platforms, AI tutors, and automation tools to manage admissions, lessons, and student progress effortlessly.",
        },
        {
            title: "For Corporates & Enterprises",
            icon: (
                <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-500"
                )}>
                    <IconBuildingSkyscraper className="w-8 h-8 text-white" />
                </div>
            ),
            description: "End-to-end digital transformation with AI-integrated dashboards, workflows, and internal tools that improve team efficiency.",
        },
    ];

    return (
        <section className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-10 py-12">
            <div className='mx-auto flex flex-col max-w-7xl w-full max-md:pt-16 pt-12 px-4'>
                <div className="mb-8 md:mb-12 text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className='bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent'>
                            Industries We Serve
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We don&apos;t just build tech — we build solutions tailored to your industry&apos;s unique challenges
                    </p>
                </div>
            </div>

            <HoverEffect items={industries} />
        </section>
    );
}

export default IndustriesWeServe;
