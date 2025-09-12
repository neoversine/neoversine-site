"use client";
import React from "react";
import FallingText from "./FallingText";

function BentoGrid() {
    return (
        <div className="relative grid grid-cols-2 gap-4 p-6 w-full max-w-4xl mx-auto my-10">

            <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-white">

                <img src="/works-grid/gemini.png" alt="text" className="h-32" />
            </div>
            {/* Top Left Circle Card */}
            {/* <div className="col-span-2 row-span-1 bg-gray-400/10 backdrop-blur-3xl border border-white rounded-t-full rounded-l-full flex items-center justify-center h-[16rem] relative overflow-hidden group">
                <div className="flex flex-col items-center z-10">
                    <div className="h-10">
                        <img src="/works/neogeopin.png" alt="" className="object-cover h-full" />
                    </div>
                    <h1 className="text-4xl font-bold text-orange-400">NeoGeo</h1>
                </div>

                Hover overlay
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-2">NeoGeo</h1>
                <p className="text-white text-sm max-w-md">
                    NeoGeo brings location intelligence to your business, helping you
                    visualize, analyze, and leverage geospatial data seamlessly.
                </p>
            </div>
        </div> */}

            {/* Top Middle (NeoContent) */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-white/30 via-gray-200 to-purple-600 rounded-tl-[7rem] rounded-br-[7rem] flex items-center justify-center space-x-4 overflow-hidden p-1 relative group h-[16rem] hover:shadow-[0_0_15px_3px_rgba(255,165,0,0.6)] transition duration-300">

                <img src="/works-grid/finnobot.png" alt="neocrawl" className="object-cover h-full" />

                {/* Background image */}
                {/* <video
                        src="/works-grid/neogeodisplay.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover transition-all"
                    /> */}


                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center translate-y-full group-hover:translate-y-[0] transition-transform duration-500 ease-in-out p-6 rounded-br-[7rem] rounded-tl-[7rem]">
                    <h1 className="text-3xl font-bold text-black mb-2">NeoGeo</h1>
                    <p className="text-black text-center text-sm">
                        NeoGeo brings location intelligence to your business, helping you
                        visualize, analyze, and leverage geospatial data seamlessly.
                    </p>
                </div>

            </div>

            {/* Top Right Blue Card */}
            <div className="col-span-1 row-span-1 bg-black rounded-bl-[7rem] rounded-tr-[7rem] relative overflow-hidden shadow-inner shadow-black group h-[16rem] border-3 border-white/30">
                {/* <img
                    src="/works/neocrawl.png"
                    alt="NeoCrawl"
                    className="object-cover h-[110%] w-full bottom-0 z-0"
                /> */}

                <FallingText
                    text={`Neoversine provides automated solutions to businesses`}
                    highlightWords={[
                        "Neoversine",
                        "solutions",
                        "businesses",
                        "simplify"
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

            {/* Bottom Left Tall Card */}
            {/* <div className="col-span-2 row-span-1 border border-white/30 rounded-tl-[7rem] flex items-center justify-center h-[24rem] overflow-hidden relative group">
                <div className="flex flex-col gap-4 h-full py-4 z-10">
                    <div className="mr-5">
                        <h1 className="text-right text-3xl font-bold leading-12 bg-gradient-to-r from-teal-300 via-cyan-200 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
                            E-com WhatsappBot
                        </h1>
                    </div>
                    <div className="mt-2">
                        <img src="/works/finnobot2.png" alt="WhatsappBot" />
                    </div>
                </div>

                Hover overlay
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-2">E-com WhatsappBot</h1>
                <p className="text-white text-sm max-w-md">
                    Automate customer interactions, sales, and support directly on WhatsApp
                    with our intelligent e-commerce bot designed for seamless engagement.
                </p>
            </div>
        </div> */}

            {/* Bottom Middle (NeoPost) */}
            <div className="col-span-1 row-span-1 bg-black rounded-tr-[7rem] relative overflow-hidden shadow-inner shadow-black group h-[16rem] border-3 border-white/30">

                <FallingText
                    text={`Neoversine provides automated solutions to businesses`}
                    highlightWords={[
                        "Neoversine",
                        "solutions",
                        "businesses",
                        "simplify"
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

            {/* Bottom Right Gray Pattern */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-white via-white to-gray-400/10 rounded-tl-[7rem] rounded-br-[7rem] flex items-center justify-center space-x-4 overflow-hidden p-1 relative group h-[16rem]">

                <div className="relative w-full h-full rounded-tl-[7rem] bg-white rounded-br-[7rem] overflow-hidden">
                    {/* Circle */}
                    {/* <div className="absolute w-24 h-24 border-2 border-gray-500 rounded-full z-10"></div> */}

                    <img src="/works-grid/neopost2.png" alt="neocrawl" className="object-cover h-full" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 text-center rounded-tl-[7rem] rounded-br-[7rem]">
                        <h1 className="text-2xl font-bold text-black mb-3">Seamless Automation</h1>
                        <p className="text-black text-sm text-justify font-medium">
                            We provide seamless <span className="font-extrabold">n8n automation products</span>
                            and services to streamline your workflows. From <span className="font-semibold">custom integrations </span>
                            and <span className="font-semibold">AI-powered automations</span> to <span className="font-semibold">real-time data sync</span>,
                            we help businesses save time, reduce manual effort, and boost productivity.
                            Whether you’re a startup or an enterprise, our solutions are tailored to scale with your needs.
                        </p>

                    </div>
                </div>
            </div>
        </div >

    );
}

export default BentoGrid;
