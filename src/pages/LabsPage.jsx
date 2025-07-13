import { useEffect } from 'react';

import OurBlogs from "../components/labs/OurBlogs";

import { SiteNavbar } from "../components/basic/SiteNavbar";
import { SparklesText } from "../components/magic-ui/SparklesText";
import TestimonialCarousel from "../components/labs/TestimonialCarousel";


import SiteFooter from '../components/basic/SiteFooter'

const LabsPage = () => {

    useEffect(() => {

    }, [])
    return (
        <main className="flex flex-col relative w-full min-h-screen bg-primary overflow-hidden">
            <SiteNavbar />
            {/* <div className="fixed inset-0 z-0 pointer-events-none">
                <Waves
                    lineColor="rgba(255, 255, 255, 0.1)"
                    backgroundColor="transparent"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={24}
                    yGap={40}
                />
            </div> */}

            {/* <FallingReactBits /> */}

            <div className="flex flex-col w-full">
                <div className="flex items-end justify-center gap-2 md:gap-4 text-xl md:text-4xl font-semibold text-white text-center md:pt-24 pt-28">
                    Today&apos;s <SparklesText>HIGHLIGHTS </SparklesText>
                </div>

                {/* <p className="mt-6 text-center text-gray-300">
                    Fresh insights and tutorials on React development, web design, and the latest in frontend technologies.
                </p> */}
            </div>

            <TestimonialCarousel />


            <OurBlogs />
            <SiteFooter />
        </main>
    );
};

export default LabsPage;

