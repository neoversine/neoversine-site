import HeroSection from '../components/home/HeroSection'
import { WhyNeoversine } from '../components/home/WhyNeoversine'
import { ClientTestimonial } from '../components/home/ClientTestimonial'
import SpecialButton2 from '../components/basic/SpecialButton/SpecialButton2'
import { SiteNavbar } from '../components/basic/SiteNavbar'
import SiteFooter from '../components/basic/SiteFooter'
import EpicWebCard from '../components/home/EpicWebCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import NeoversineShowcase from '../components/home/NeoversineShowcase'
import WaveTop from '../components/home/WaveTop'
import TopProducts from '../components/home/TopProducts'
import TechStack from '../components/home/TechStack'
import IndustriesWeServe from '../components/home/IndustriesWeServe'

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='relative w-full overflow-hidden bg-primary min-h-screen'>
            <SiteNavbar />

            <HeroSection />

            <WaveTop location='top' />

            <NeoversineShowcase />

            <TopProducts />

            <WhyNeoversine />

            <IndustriesWeServe />

            {/* <ClientTestimonial /> */}

            <TechStack />



            <SiteFooter />
        </div >
    )
}

export default HomePage