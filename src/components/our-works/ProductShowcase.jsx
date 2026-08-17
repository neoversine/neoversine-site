/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const products = [
    {
        title: "ARC Network",
        tagline: "Lead CRM + Outreach Engine with Collaboration Intelligence",
        stat: "+40% Conversion",
        desc: {
            "Core Capability": [
                "Agents dynamically adjust sequencing based on real-time engagement signals and intent data."
            ],
            "Human Handoff": [
                "Triggers sales follow-ups only when meaningful buyer engagement occurs."
            ],
            "Data Hygiene": [
                "Zero manual updates: records enrich autonomously from public signals."
            ],
            "Architecture": [
                "Hermes Agent-OS parallel delegation with intent-scoring decision trees."
            ]
        },
        img: "/works/neobot.png",
        gradient: "from-cyan-500 via-indigo-500 to-purple-500",
        imagesDesc: [
            { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80" },
        ]
    },
    {
        title: "NeoCrawl Scraping API",
        tagline: "Adaptive Vision-Guided Web Scraping Layer",
        stat: "Zero Brittle Selectors",
        desc: {
            "Core Capability": [
                "Vision-guided scrapers that adapt dynamically to DOM shifts, anti-bot walls, and dynamic SPAs."
            ],
            "Reliability": [
                "Eliminates dependency on third-party proxy subscriptions and brittle CSS selectors."
            ],
            "Output": [
                "Streams clean, validated JSON schemas straight into downstream agent loops."
            ],
            "Architecture": [
                "ScrapeGraphAI foundation with dynamic skill creation for unexpected layouts."
            ]
        },
        img: "/works/neocrawl.png",
        gradient: "from-purple-500 via-pink-400 to-red-400",
        imagesDesc: [
            { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80" },
        ]
    },
    {
        title: "Pocket Control Deck",
        tagline: "MIT-Licensed Phone-First AI Runtime Surface",
        stat: "100% Self-Hosted",
        desc: {
            "Core Capability": [
                "Real-time event streaming allowing operators to watch agents reason and step through tasks."
            ],
            "Intervention": [
                "Inject live steering prompts and modify runtime hyperparameters without redeploying."
            ],
            "Licensing": [
                "MIT-licensed open core — no SaaS seat tax, no vendor telemetry lock-in."
            ],
            "Architecture": [
                "WebSocket event dispatcher with responsive mobile-optimized UI."
            ]
        },
        img: "/works/neopost2.png",
        gradient: "from-blue-500 via-cyan-400 to-teal-400",
        imagesDesc: [
            { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80" },
        ]
    },
    {
        title: "D8alytics Synthetic Vision",
        tagline: "Computer Vision Domain Randomization Pipeline",
        stat: "mAP50 0.96",
        desc: {
            "Core Capability": [
                "Generates 700 YOLO-formatted images in <1 hour for custom detection tasks."
            ],
            "Performance": [
                "Achieves mAP50 0.96 trained entirely on synthetic data with zero real images required."
            ],
            "Speed": [
                "Reduces dataset preparation from weeks of manual labeling to under 60 minutes."
            ],
            "Architecture": [
                "Generative 3D domain randomization + automated bounding box synthesis."
            ]
        },
        img: "/works/neogeo.png",
        gradient: "from-amber-500 via-orange-400 to-rose-400",
        imagesDesc: [
            { url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
        ]
    },
    {
        title: "NeopostGen SaaS",
        tagline: "Automated Multi-Format Creative Generation Engine",
        stat: "10x Faster Creation",
        desc: {
            "Core Capability": [
                "Transforms brief inputs into brand-consistent social posts, ad creatives, and layouts."
            ],
            "Automation": [
                "Eliminates manual Figma/Photoshop overhead for high-velocity growth teams."
            ],
            "Consistency": [
                "Enforces typography, color tokens, and messaging constraints deterministically."
            ],
            "Architecture": [
                "Multi-agent layout planner with vector asset composition."
            ]
        },
        img: "/works/neocontent.png",
        gradient: "from-emerald-500 via-teal-400 to-cyan-400",
        imagesDesc: [
            { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80" },
            { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
        ]
    }
];

export default function ProductShowcase() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p, i) => {
                        return (
                            <ProductCard key={i} product={p} index={i} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product: p, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col bg-[#131313] border border-white/10 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10"
        >
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {p.stat}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                    PROD-SYSTEM-0{index + 1}
                </span>
            </div>

            <div className="h-44 w-full bg-black/50 border border-white/5 rounded-xl mb-5 flex items-center justify-center p-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                    src={p.img}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {p.title}
            </h2>
            <p className="text-xs text-gray-400 font-mono mt-1 mb-4">
                {p.tagline}
            </p>

            <div className="space-y-2 mt-auto pt-4 border-t border-white/10 text-xs text-gray-300">
                {Object.entries(p.desc).slice(0, 2).map(([key, val], idx) => (
                    <div key={idx} className="flex flex-col">
                        <span className="text-gray-500 font-mono text-[10px] uppercase tracking-wider">{key}</span>
                        <span className="text-gray-300 mt-0.5 leading-relaxed">{val[0]}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
