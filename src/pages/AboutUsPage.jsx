/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SiteNavbar } from '../components/basic/SiteNavbar';
import { HiOutlineArrowTurnRightDown } from "react-icons/hi2";
import TrueFocus from '../components/accernity/TrueFocus';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import SiteFooter from '../components/basic/SiteFooter';
import { useNavigate } from 'react-router-dom';

const HeroText = ({ value }) => (
    <span className='bg-clip-text text-transparent bg-gradient-to-br from-indigo-300 to-blue-400'>
        {value}
    </span>
)


const AboutUsPage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const navigate = useNavigate();

    return (
        <main className='flex flex-col relative w-full bg-primary overflow-hidden'>
            <SiteNavbar />
            <div className='bg-primary'>
                <div className='flex justify-center items-center h-[380px] md:h-[400px] sticky top-0 w-full z-0' style={{
                    backgroundImage: "url('./about-bg2.jpg')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    /* Prevents tiling */
                    backgroundPosition: 'center',
                    /* Center aligns the image */
                }}>
                    <div className='text-white max-md:hidden'>
                        <TrueFocus
                            sentence="About Neoversine"
                            manualMode={true}
                            blurAmount={4}
                            borderColor="blue"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    <div className='text-white md:hidden'>
                        <TrueFocus
                            sentence="About Neoversine"
                            manualMode={false}
                            blurAmount={4}
                            borderColor="blue"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                </div>

                <div className='w-full bg-primary sticky top-0 pb-20 pt-20 md:pt-28'>

                    <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-10 md:gap-28 mx-auto'
                    >
                        <div className='flex flex-col gap-2 max-md:px-4'>
                            <div className='flex pl-10 text-gray-500  items-center gap-2'>
                                <p className='font-mono'>OUR STORY</p>
                                <HiOutlineArrowTurnRightDown />
                            </div>
                            <div className='flex gap-5'>
                                <div className='h-36 bg-gradient-to-b from-indigo-500 to-[#181818] w-10 mt-[10px]'></div>
                                <div>
                                    <p className='text-3xl font-bold text-white tracking-wide leading-relaxed'>
                                        Your Idea. Our Automation.
                                        Build <HeroText value={'Faster'} /> Work <HeroText value={'Smarter'} /> Scale <HeroText value={'Bigger.'} />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 max-md:px-4'>
                            <div className='w-1/2 rounded-xl overflow-hidden my-auto'
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom">
                                <img src="/about/about1.jpg" alt="" className='cover' />
                            </div>
                            <div className='w-1/2 rounded-xl overflow-hidden my-auto'
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom">
                                <img src="/about/about2.jpg" alt="" className='cover' />
                            </div>
                        </div>
                    </div>

                    <div className='max-md:hidden max-w-5xl grid grid-cols-2 gap-20 mt-14 px-4 md:mx-auto'
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">

                        <div className='rounded-lg overflow-hidden my-auto '>
                            <img src="https://st2.depositphotos.com/1017228/11098/i/950/depositphotos_110986888-stock-photo-businesspeople-making-business-plan-on.jpgs" alt="" />
                        </div>


                        <div className='flex flex-col py-10 '>
                            <p className='max-md:hidden text-sm text-[#eae9e7]'>
                                Neoversine, founded in Jan 2025, empowers startups with AI-driven automation. We build smart agents and workflows to simplify, scale, and supercharge business operations.
                            </p>

                            <p className='md:hidden text-sm text-[#eae9e7]'
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                Neoversine, founded in Jan 2025, empowers startups with AI-driven automation. We build smart agents and workflows to simplify, scale, and supercharge business operations.
                            </p>

                            <div className='flex mt-8 gap-12'>
                                <div className='flex flex-col max-md:items-center gap-1'>
                                    <p className='text-3xl font-bold font-sans text-white'>480+</p>
                                    <p className='text-xs text-gray-300'>n8n Agents</p>
                                </div>
                                <div className='flex flex-col max-md:items-center gap-1 '>
                                    <p className='text-3xl font-bold font-sans text-white'>2</p>
                                    <p className='text-xs text-gray-300'>Active Clients</p>
                                </div>
                            </div>

                            <div className='mt-10'>
                                <button className="py-2 px-5 border-4 border-white bg-gradient-to-br from-purple-300 via-white to-sky-200 rounded-full shadow-inner hover:shadow-none active:shadow-inner shadow-gray-400 cursor-pointer"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                    onClick={() => navigate('/contact')}>Book a call</button>
                            </div>

                        </div>
                    </div>

                    <div className='md:hidden max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 mt-10 md:mt-14 px-4 md:mx-auto'>

                        <div className='flex flex-col max-md:items-center py-10 order-1 md:order-2'>
                            <p className='text-sm text-[#eae9e7]'
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                Neoversine, founded in Jan 2025, empowers startups with AI-driven automation. We build smart agents and workflows to simplify, scale, and supercharge business operations.
                            </p>

                            <div className='flex mt-8 gap-12'>
                                <div className='flex flex-col max-md:items-center gap-1'
                                    data-aos="fade-right"
                                    data-aos-anchor-placement="center-bottom">
                                    <p className='text-3xl font-bold font-sans text-white'>480+</p>
                                    <p className='text-xs text-gray-300'>n8n Agents</p>
                                </div>
                                <div className='flex flex-col max-md:items-center gap-1 '
                                    data-aos="fade-left"
                                    data-aos-anchor-placement="center-bottom">
                                    <p className='text-3xl font-bold font-sans text-white'>2</p>
                                    <p className='text-xs text-gray-300'>Active Clients</p>
                                </div>
                            </div>

                            <div className='mt-10'>
                                <button className="py-2 px-5 border-4 border-white bg-gradient-to-br from-purple-300 via-white to-sky-200 rounded-full shadow-inner hover:shadow-none active:shadow-inner shadow-gray-400 cursor-pointer"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                    onClick={() => navigate('/contact')}>Book a call</button>
                            </div>



                        </div>
                        <div className='md:hidden rounded-lg overflow-hidden my-auto order-2 md:order-1'
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <img src="https://st2.depositphotos.com/1017228/11098/i/950/depositphotos_110986888-stock-photo-businesspeople-making-business-plan-on.jpgs" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            {/* <hr className='stroke-4 text-gray-400 w-full max-w-5xl mx-auto' /> */}

            <div className='bg-[#181818] flex flex-col max-w-7xl w-full mx-auto mt-10'>
                <div className='text-center text-6xl font-bold pb-10 w-full text-white mb-14'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className='text-white max-md:hidden'>
                        <TrueFocus
                            sentence="OUR TEAM"
                            manualMode={true}
                            blurAmount={4}
                            borderColor="blue"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    <div className='text-white md:hidden'>
                        <TrueFocus
                            sentence="OUR TEAM"
                            manualMode={false}
                            blurAmount={4}
                            borderColor="blue"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-24 w-full max-w-5xl mb-32 mx-auto'
                >

                    {/* Jb's Profile */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'
                    >

                        {/* Desccription animation diff in mobile and desktop  */}
                        <div className='hidden md:flex flex-col justify-center w-[80%] md:w-[70%] order-2 md:order-1'
                            data-aos="fade-right"
                            data-aos-anchor-placement="center-bottom">

                            <p className='text-gray-400'>Hie, I am</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Hyperbola</h1>
                            <p className='text-gray-400'>
                                "I turn coffee into code, bugs into features, and ideas into shipped products."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                A <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-green-400'>full-stack developer</span>, part-time bug hunter, and full-time chai enthusiast.
                                <br />
                                At Neoversine, I handle everything from frontend finesse to backend wizardry. I’ve built platforms with live video calls, e-commerce sites with 3D product views.
                                <br />

                                I love clean UI, fast UX, and solving problems that make users go “whoa” <span className='font-mono text-yellow-100'>and not “why isn&apos;t this working?”</span> .

                                Let’s just say: if it involves logic, pixels, or late-night commits — I’m all in.
                            </p>
                        </div>

                        <div className='flex md:hidden flex-col justify-center w-[80%] md:w-[70%] order-2 md:order-1'
                            data-aos="fade-right"
                            data-aos-anchor-placement="top-bottom">

                            <p className='text-gray-400'>Hie, I am</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Hyperbola</h1>
                            <p className='text-gray-400'>
                                "I turn coffee into code, bugs into features, and ideas into shipped products."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                A <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-green-400'>full-stack developer</span>, part-time bug hunter, and full-time chai enthusiast.
                                <br />
                                At Neoversine, I handle everything from frontend finesse to backend wizardry. I’ve built platforms with live video calls, e-commerce sites with 3D product views.
                                <br />

                                I love clean UI, fast UX, and solving problems that make users go “whoa” <span className='font-mono text-yellow-100'>and not “why isn&apos;t this working?”</span> .

                                Let’s just say: if it involves logic, pixels, or late-night commits — I’m all in.
                            </p>
                        </div>


                        <div className='flex flex-col gap-5  order-1 md:order-2'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white p-1'
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1751914404/jb-profile3_oq7acj.jpg" alt="JB's_Image" className='object-cover rounded-full' />
                            </div>

                            <div data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>

                                <FaFacebook />
                                <BsTwitterX />
                                <RiInstagramFill className='text-2xl' />
                                <MdEmail className='text-2xl mr-3' />

                            </div>
                        </div>

                    </div>



                    {/* Arka's Profile  */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'
                    >
                        {/* Profile and links */}
                        <div className='flex flex-col gap-5'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white p-1'
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752006741/arka-profile_m9eaqd.jpg" alt="JB's_Image" className='object-cover rounded-full' />
                            </div>

                            <div data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>

                                <FaFacebook />
                                <BsTwitterX />
                                <RiInstagramFill className='text-2xl' />
                                <MdEmail className='text-2xl mr-3' />

                            </div>
                        </div>

                        {/* Desccription animation diff in mobile and desktop  */}
                        <div className='max-md:hidden flex flex-col justify-center w-[80%] md:w-[70%]'
                            data-aos="fade-left"
                            data-aos-anchor-placement="center-bottom">

                            <p className='text-gray-400'>Hey, I’m</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Arka</h1>
                            <p className='text-gray-400'>
                                "From whiteboard scribbles to working features — I bridge the gap, one semicolon at a time."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                Your <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-orange-400'>automation nomad </span>on a mission.
                                <br />
                                When I’m not breaking tools like Flowise or going full galaxy-brain on n8n workflows, I’m busy turning real-world chaos into smooth, zero-bloat automation.
                                <br />
                                I thrive on product-led growth, spicy Reddit threads, and building tools people actually use.
                                <br />
                                Neoversine is my playground — <span className='font-mono text-purple-300'>scaling your startup is the game</span>.


                            </p>
                        </div>

                        <div className='flex md:hidden flex-col justify-center w-[80%] md:w-[70%]'
                            data-aos="fade-left"
                            data-aos-anchor-placement="top-bottom">

                            <p className='text-gray-400'>Hey, I’m</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Arka</h1>
                            <p className='text-gray-400'>
                                "From whiteboard scribbles to working features — I bridge the gap, one semicolon at a time."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                Your <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-orange-400'>automation nomad </span>on a mission.
                                <br />
                                When I’m not breaking tools like Flowise or going full galaxy-brain on n8n workflows, I’m busy turning real-world chaos into smooth, zero-bloat automation.
                                <br />
                                I thrive on product-led growth, spicy Reddit threads, and building tools people actually use.
                                <br />
                                Neoversine is my playground — <span className='font-mono text-purple-300'>scaling your startup is the game</span>.


                            </p>
                        </div>


                    </div>


                    {/* Ankon's Profile */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'
                    >

                        {/* Desccription animation diff in mobile and desktop  */}
                        <div className='hidden md:flex flex-col justify-center w-[80%] md:w-[70%] order-2 md:order-1'
                            data-aos="fade-right"
                            data-aos-anchor-placement="center-bottom">

                            <p className='text-gray-400'>Hie, I am</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Ankon</h1>
                            <p className='text-gray-400'>
                                "Fluttering between pixels and performance, I craft apps that feel like magic and run like clockwork."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                I’m your <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-green-400'>MOBILE MAVERICK</span> at Neoversine — part architect, part artist, and all-in on clean code.
                                <br />
                                From buttery-smooth animations to rock-solid state management, I build Flutter apps that don’t just look sleek — they perform like a dream across platforms.

                                Flutter isn’t just my playground — <span className='font-mono text-yellow-100'>it’s my theme park </span>.
                            </p>
                        </div>

                        <div className='flex md:hidden flex-col justify-center w-[80%] md:w-[70%] order-2 md:order-1'
                            data-aos="fade-right"
                            data-aos-anchor-placement="top-bottom">

                            <p className='text-gray-400'>Hie, I am</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Ankon</h1>
                            <p className='text-gray-400'>
                                "Fluttering between pixels and performance, I craft apps that feel like magic and run like clockwork."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                I’m your <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-green-400'>MOBILE MAVERICK</span> at Neoversine — part architect, part artist, and all-in on clean code.
                                <br />
                                From buttery-smooth animations to rock-solid state management, I build Flutter apps that don’t just look sleek — they perform like a dream across platforms.
                                <br />

                                Flutter isn’t just my playground — <span className='font-mono text-yellow-100'>it’s my theme park </span> .

                                I turn bold ideas into smooth, snappy apps — with just the right mix of pixels, performance, and a little Flutter magic.
                            </p>
                        </div>


                        <div className='flex flex-col gap-5  order-1 md:order-2'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white p-1'
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752091606/ankon-profile_zgbdjp.jpg" alt="Ankon's_Image" className='object-cover rounded-full' />
                            </div>

                            <div data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>

                                <FaFacebook />
                                <BsTwitterX />
                                <RiInstagramFill className='text-2xl' />
                                <MdEmail className='text-2xl mr-3' />

                            </div>
                        </div>

                    </div>

                    {/* Ujjwaini's Profile  */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'
                    >
                        {/* Profile and links */}
                        <div className='flex flex-col gap-5'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white p-1'
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752091604/ujjwaini-profile_af0swh.jpg" alt="JB's_Image" className='object-cover rounded-full' />
                            </div>

                            <div data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>

                                <FaFacebook />
                                <BsTwitterX />
                                <RiInstagramFill className='text-2xl' />
                                <MdEmail className='text-2xl mr-3' />

                            </div>
                        </div>

                        {/* Desccription animation diff in mobile and desktop  */}
                        <div className='max-md:hidden flex flex-col justify-center w-[80%] md:w-[70%]'
                            data-aos="fade-left"
                            data-aos-anchor-placement="center-bottom">

                            <p className='text-gray-400'>Hey, I’m</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Ujjwaini</h1>
                            <p className='text-gray-400'>
                                "I speak fluent AI — and I make sure it speaks human back."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                I’m Neoversine’s <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-orange-400'>Prompt Engineer</span>, which basically means I convince machines to do exactly what we imagine — in words, visuals, and vibes.
                                <br />
                                If it’s about context, clarity, or getting an AI to <span className='font-mono text-purple-300'>“just get it”</span> — that’s my zone. I'm part logic, part instinct, and part <span className='font-mono text-purple-300'>“nah, do it better.”</span> And yes, I’ve probably rewritten this intro in my head 7 times already.
                            </p>
                        </div>

                        <div className='flex md:hidden flex-col justify-center w-[80%] md:w-[70%]'
                            data-aos="fade-left"
                            data-aos-anchor-placement="top-bottom">

                            <p className='text-gray-400'>Hey, I’m</p>
                            <h1 className='text-white text-5xl font-medium mt-1 mb-2'>Ujjwaini</h1>
                            <p className='text-gray-400'>
                                "I speak fluent AI — and I make sure it speaks human back."
                            </p>
                            <p className='text-gray-200 mt-2 text-justify'>
                                I’m Neoversine’s <span className='text-xl mx-1 uppercase font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-orange-400'>Prompt Engineer </span>, which basically means I convince machines to do exactly what we imagine — in words, visuals, and vibes.
                                <br />
                                If it’s about context, clarity, or getting an AI to <span className='font-mono text-purple-300'>“just get it”</span> — that’s my zone. I'm part logic, part instinct, and part <span className='font-mono text-purple-300'>“nah, do it better.”</span> And yes, I’ve probably rewritten this intro in my head 7 times already.
                            </p>
                        </div>


                    </div>


                </div>

            </div>
            <SiteFooter />
        </main>
    )
}

export default AboutUsPage