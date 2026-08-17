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

            <div className="flex flex-col w-full px-4">
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center md:pt-28 pt-24">
                    Open Source &amp; Research <SparklesText>HIGHLIGHTS</SparklesText>
                </div>

                <p className="mt-3 text-center text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    Distilled insights, open benchmarks, and architectural breakthroughs from building foundational agent systems in production.
                </p>
            </div>

            <TestimonialCarousel />

            <OurBlogs />
            <SiteFooter />
        </main>
    );
};

export default LabsPage;
