import React, { useState } from "react";
import { highlights } from "../../constants/testimonials";

const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(Math.floor(highlights.length / 2));

    const prevSlide = () => {
        if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
    };

    const nextSlide = () => {
        if (activeIndex < highlights.length - 1) setActiveIndex((prev) => prev + 1);
    };

    return (
        <div className="relative w-full h-[520px] md:h-[560px] flex justify-center pt-16 md:pt-20 overflow-hidden mt-5">
            <div className="flex items-center justify-center space-x-6 relative">
                {highlights.map((t, index) => {
                    const offset = index - activeIndex;
                    const isActive = offset === 0;
                    return (
                        <div
                            key={index}
                            className={`cursor-pointer border-4 transition-all duration-500 ease-in-out absolute top-0 transform ${activeIndex === index ? ` translate-x-0 -translate-y-8 md:-translate-y-10` : offset < 0 ? '-translate-x-10' : 'translate-x-10'} ${activeIndex === index ? `rotate-0 border-cyan-500 border-4 hover:scale-[105%] active:scale-[100%]` : (index - activeIndex) % 2 ? `border-gray-700 translate-y-2 md:translate-y-3 rotate-2 opacity-60` : `border-gray-700 -rotate-2 -translate-y-2 md:-translate-y-3 opacity-60`} `}
                            style={{
                                clipPath: "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)",
                                boxShadow: "white 0px 8px 0px 4px",
                                left: window.innerWidth < 640
                                    ? `calc(50% + ${(activeIndex - index) * 200}px - 120px)`
                                    : `calc(50% + ${(activeIndex - index) * 240}px - 140px)`,
                                zIndex: activeIndex === index ? 10 : highlights.length - index,
                            }}
                        >
                            <span className={`absolute block origin-top-right rotate-45 ${activeIndex === index ? 'bg-cyan-500' : 'bg-gray-700'} object-cover transition-all duration-500 ease-in-out`}
                                style={{
                                    right: "-2px",
                                    top: "24px",
                                    width: "50px",
                                    height: "3px"
                                }}></span>
                            <div className={`object-cover transition-all duration-500 ease-in-out min-h-[300px] w-[260px] md:min-h-[340px] md:w-[320px] p-5 md:p-7 shadow ${isActive ? 'bg-[#151515] text-white border-b-4 border-cyan-500' : 'bg-[#0a0a0a] text-gray-400'}`}>
                                <div className={`border ${index === activeIndex ? 'border-cyan-500/60' : 'border-white/20'} w-full h-[150px] md:h-[180px] overflow-hidden rounded-lg`}>
                                    <img src={t.thumbnail} alt={t.title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                                </div>

                                <p className="leading-snug mt-3 md:mt-4 text-base md:text-lg font-bold text-white">{t.title}</p>
                                <p className="leading-relaxed text-xs md:text-sm text-gray-400 mt-1">{t.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Buttons */}
            <div className="absolute bottom-6 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    disabled={activeIndex === 0}
                    aria-label="Previous highlight"
                    className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full 
                    hover:bg-cyan-500 hover:text-black active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed border border-white/30 transition-all"
                >
                    ←
                </button>
                <button
                    onClick={nextSlide}
                    disabled={activeIndex === highlights.length - 1}
                    aria-label="Next highlight"
                    className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full 
                    hover:bg-cyan-500 hover:text-black active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed border border-white/30 transition-all"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
