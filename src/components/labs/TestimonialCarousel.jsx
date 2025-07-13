import React, { useState } from "react";
import { highlights } from "../../constants/testimonials";

const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(Math.floor(highlights.length / 2)); // center one by default

    const prevSlide = () => {
        if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
    };

    const nextSlide = () => {
        if (activeIndex < highlights.length - 1) setActiveIndex((prev) => prev + 1);
    };

    return (
        <div className="relative w-full h-[500px] md:h-[540px] flex justify-center pt-16 md:pt-20 overflow-hidden mt-5">
            <div className="flex items-center justify-center space-x-6 relative">
                {highlights.map((t, index) => {
                    const offset = index - activeIndex;
                    const isActive = offset === 0;
                    return (
                        <div
                            key={index}
                            className={`cursor-pointer border-4 transition-all duration-500 ease-in-out absolute top-0 transform  ${activeIndex === index ? ` translate-x-0 -translate-y-8 md:-translate-y-10` : offset < 0 ? '-translate-x-10' : 'translate-x-10'} ${activeIndex === index ? `rotate-0  border-teal-800 border-4 hover:scale-[105%] active:scale-[100%]` : (index - activeIndex) % 2 ? `border-gray-500 translate-y-2 md:translate-y-3 rotate-2` : `border-gray-500  -rotate-2 -translate-y-2 md:-translate-y-3 `}  `}
                            style={{
                                clipPath: window.innerWidth < 640
                                    ? "polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0px 100%, 0px 0px)"
                                    : "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0px 100%, 0px 0px)",
                                boxShadow: "white 0px 8px 0px 4px",
                                left: window.innerWidth < 640
                                    ? `calc(50% + ${(activeIndex - index) * 200}px - 120px)`
                                    : `calc(50% + ${(activeIndex - index) * 225}px - 120px)`,
                                zIndex: activeIndex == index ? 10 : highlights.length - index,
                                // opacity: Math.abs(offset) > 2 ? 0 : 1,
                            }}
                        >

                            <span className={`absolute block origin-top-right rotate-45 ${activeIndex == index ? 'bg-teal-800' : 'bg-gray-500'} object-cover transition-all duration-500 ease-in-out`}
                                style={{
                                    right: window.innerWidth < 640 ? "-2px" : "-3.5px",
                                    top: window.innerWidth < 640 ? "24px" : "46px",
                                    width: window.innerWidth < 640 ? "50px" : "70px",
                                    height: window.innerWidth < 640 ? "3px" : "4px"
                                }}></span>
                            <div className={`object-cover transition-all duration-500 ease-in-out min-h-[280px] w-[240px] md:min-h-[340px] md:w-[300px] p-4 md:p-7 shadow ${isActive ? 'bg-[#ffffff] text-black' : 'bg-[#000000] text-gray-300'
                                }`}>
                                <div className={`border-2 ${index == activeIndex ? 'border-black' : 'border-white'} w-full md:h-[174px] overflow-hidden`}>
                                    {
                                        t.type == 'video' ?
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                                poster={t.thumbnail} // 👈 This is the thumbnail
                                            >
                                                <source src={t.src} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video> :
                                            <img src="/labs/n8n_75.jpg" alt="n8n" className="object-cover" />
                                    }
                                </div>

                                <p className="leading-normal mt-2 md:mt-3 text-base md:text-lg">{t.title}</p>
                                <p className="leading-normal text-sm text-gray-500">{t.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Buttons */}
            <div className="absolute bottom-10 flex gap-4">
                <button
                    onClick={prevSlide}
                    disabled={activeIndex === 0}
                    className="w-10 h-10 flex items-center justify-center bg-black text-white rounded 
                    hover:bg-gray-100 hover:text-black hover:-translate-y-[1px] active:translate-0 disabled:opacity-30 disabled:cursor-no-drop disabled:hover:bg-black disabled:hover:text-white disabled:hover:translate-0  border border-white"
                >
                    ←
                </button>
                <button
                    onClick={nextSlide}
                    disabled={activeIndex === highlights.length - 1}
                    className="w-10 h-10 flex items-center justify-center bg-black text-white rounded hover:bg-gray-100 hover:text-black hover:-translate-y-[1px] active:translate-0 disabled:opacity-30 disabled:cursor-no-drop disabled:hover:bg-black disabled:hover:text-white disabled:hover:translate-0  border border-white"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
