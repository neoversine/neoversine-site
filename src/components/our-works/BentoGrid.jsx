"use client";
import React from "react";
import FallingText from "./FallingText";

function BentoGrid() {
    return (
        <div className="relative grid grid-cols-2 gap-4 p-6 w-full max-w-4xl mx-auto my-10">

            <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-white">
                <img src="/works-grid/gemini.png" alt="text" className="h-32" />
            </div>

            {/* Top Middle (NeoCrawl) */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-white/30 via-gray-200 to-purple-600 rounded-tl-[7rem] rounded-br-[7rem] flex items-center justify-center space-x-4 overflow-hidden p-1 relative group h-[16rem] hover:shadow-[0_0_15px_3px_rgba(6,182,212,0.6)] transition duration-300">
                <img src="/works-grid/finnobot.png" alt="NeoCrawl" className="object-cover h-full" />

                <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center translate-y-full group-hover:translate-y-[0] transition-transform duration-500 ease-in-out p-6 rounded-br-[7rem] rounded-tl-[7rem]">
                    <h1 className="text-3xl font-bold text-black mb-2">NeoCrawl</h1>
                    <p className="text-black text-center text-sm">
                        Adaptive scraping infrastructure handling anti-bot measures and dynamic DOMs without brittle selectors.
                    </p>
                </div>
            </div>

            {/* Top Right Blue Card */}
            <div className="col-span-1 row-span-1 bg-black rounded-bl-[7rem] rounded-tr-[7rem] relative overflow-hidden shadow-inner shadow-black group h-[16rem] border-3 border-white/30">
                <FallingText
                    text={`Neoversine builds foundational agent systems that replace work`}
                    highlightWords={[
                        "Neoversine",
                        "foundational",
                        "agent",
                        "systems",
                        "replace"
                    ]}
                    highlightClass="highlighted"
                    trigger="scroll"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                />
            </div>

            {/* Bottom Middle */}
            <div className="col-span-1 row-span-1 bg-black rounded-tr-[7rem] relative overflow-hidden shadow-inner shadow-black group h-[16rem] border-3 border-white/30">
                <FallingText
                    text={`Hermes Agent-OS orchestrates parallel specialized subagent swarms`}
                    highlightWords={[
                        "Hermes",
                        "Agent-OS",
                        "parallel",
                        "subagent",
                        "swarms"
                    ]}
                    highlightClass="highlighted"
                    trigger="scroll"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                />
            </div>

            {/* Bottom Right */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-white via-white to-gray-400/10 rounded-tl-[7rem] rounded-br-[7rem] flex items-center justify-center space-x-4 overflow-hidden p-1 relative group h-[16rem]">
                <div className="relative w-full h-full rounded-tl-[7rem] bg-white rounded-br-[7rem] overflow-hidden">
                    <img src="/works-grid/neopost2.png" alt="Architecture" className="object-cover h-full" />

                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 text-center rounded-tl-[7rem] rounded-br-[7rem]">
                        <h1 className="text-2xl font-bold text-black mb-3">Architecture Ownership</h1>
                        <p className="text-black text-sm text-justify font-medium">
                            We architect <span className="font-extrabold">Hermes Agent-OS runtimes</span> and vLLM inference pipelines that replace human labor. From <span className="font-semibold">parallel subagent swarms</span> to <span className="font-semibold">real-time control decks</span>, we deliver foundational systems built to scale.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BentoGrid;
