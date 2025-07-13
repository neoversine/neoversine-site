import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
    {
        company: "Finnochatbot",
        description:
            "FinnoFarms chatbot is a Telegram bot that lets users order farm products directly from chat. It uses AI to generate responses and track orders with live cart.",
        stat: "47% increase in new customers.",
        image: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752157061/finno-farms_qt9gcg.jpg",
        logo: "FinnoFarms",
    },
    {
        company: "ImagenNeo",
        description:
            "Can generate stunning images using powerful models like Imagen 4.0. Users create custom images by simply typing their requirements in chat.",
        stat: "60% better typography and design.",
        image: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752157497/main-agent_wt0j3w.jpg",
        logo: "ImagenNeo",
    },
    {
        company: "Neomailer",
        description:
            "Neomailer is an AI-powered email bot that automates personalized email creation and management based on user preferences and past interactions.",
        stat: "80% faster email responses.",
        image: "https://res.cloudinary.com/dxbszkdhk/image/upload/v1752158475/email-bot_lk1cja.jpg",
        logo: "Neomailer",

    },
];

export default function OurLatestWorks() {
    const [loaded, setLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeImage = caseStudies[activeIndex].image;

    useEffect(() => {
        setLoaded(false); // always hide before switching

        const img = new Image();
        img.src = activeImage;

        const handleLoad = () => setLoaded(true);

        if (img.complete) {
            // image is cached and already loaded
            setLoaded(true);
        } else {
            img.onload = handleLoad;
        }

        // Clean up in case component unmounts
        return () => {
            img.onload = null;
        };
    }, [activeImage]);


    return (
        <div className="flex flex-col max-w-6xl mx-auto ">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center mb-20">
                <span className='bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent font-sans'>
                    Our Latest Work
                </span>
            </h2>
            <div className=" text-white flex gap-6 max-w-6xl mx-auto mb-20">

                <div className="w-1/2">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className={`relative group flex items-start gap-6 overflow-hidden transition-all duration-500 ease-in-out  ${activeIndex === index ? "h-[200px]" : "h-[100px]"
                                } cursor-pointer `}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className={`w-full border-l-[1px] group-hover:border-purple-500  ${activeIndex === index ? 'border-purple-500' : 'border-gray-400'} h-full px-8 py-8`}>
                                <div className={`flex ${activeIndex === index ? 'flex-col gap-3' : 'items-center justify-between'}`}>
                                    <h2 className="text-2xl font-bold font-sans">{study.company}</h2>
                                    <p className="text-xl text-gray-400 mt-1 font-sans">
                                        {activeIndex === index ? study.description : study.stat}
                                    </p>
                                </div>
                            </div>
                            {
                                index != 2 &&
                                <div className="absolute w-full h-[1px] bottom-0 bg-gradient-to-r from-gray-400 to-transparent"></div>
                            }
                        </div>
                    ))}
                </div>
                <div className="w-1/2">
                    <AnimatePresence>
                        <motion.div
                            className="h-full w-full relative rounded-xl bg-gradient-to-br from-[#343434d0] to-[#0f0f0f] overflow-hidden p-8 shadow-lg shadow-black/40"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={activeImage}
                                alt={caseStudies[activeIndex].company}
                                className={`w-full h-full object-cover rounded-lg shadow-lg shadow-black/40 transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"
                                    }`}
                                loading="eager"
                            />
                            {/* <div className="absolute bottom-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                            80%
                        </div>
                        <div className="absolute bottom-4 left-4 text-white font-medium opacity-80">
                            {caseStudies[activeIndex].logo}
                        </div> */}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
