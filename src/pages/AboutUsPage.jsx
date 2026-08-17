/* eslint-disable no-unused-vars */
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SiteNavbar } from '../components/basic/SiteNavbar';
import { HiOutlineArrowTurnRightDown } from "react-icons/hi2";
import TrueFocus from '../components/accernity/TrueFocus';
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
                    backgroundPosition: 'center',
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

                    <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-10 md:gap-28 mx-auto'>
                        <div className='flex flex-col gap-2 max-md:px-4'>
                            <div className='flex pl-10 text-gray-500 items-center gap-2'>
                                <p className='font-mono'>OUR THESIS</p>
                                <HiOutlineArrowTurnRightDown />
                            </div>
                            <div className='flex gap-5'>
                                <div className='h-36 bg-gradient-to-b from-indigo-500 to-[#181818] w-10 mt-[10px]'></div>
                                <div>
                                    <p className='text-2xl sm:text-3xl font-bold text-white tracking-wide leading-relaxed'>
                                        We build the <HeroText value={'Substrate'} />, not the <HeroText value={'Souvenir.'} />
                                        <br />
                                        Agent-first. <HeroText value={'Architecture-owned.'} /> Economically grounded.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 max-md:px-4'>
                            <div className='w-1/2 rounded-xl overflow-hidden my-auto'
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom">
                                <img src="/about/about1.jpg" alt="Neoversine Lab" className='cover object-cover h-full w-full' />
                            </div>
                            <div className='w-1/2 rounded-xl overflow-hidden my-auto'
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom">
                                <img src="/about/about2.jpg" alt="Neoversine Engineering" className='cover object-cover h-full w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='max-w-5xl mx-auto mt-16 px-4'>
                        <div className='bg-[#131313] border border-white/10 rounded-2xl p-8 md:p-12' data-aos="fade-up">
                            <p className='text-base md:text-lg text-gray-200 leading-relaxed font-normal'>
                                Neoversine builds agent architectures from first principles on owned codebases rather than stitching together off-the-shelf wrappers like LangChain, Make.com, or n8n. By controlling the runtime via <span className='text-cyan-400 font-medium'>Hermes Agent-OS</span> and reducing token serving costs through custom <span className='text-indigo-400 font-medium'>vLLM deployments</span> (PagedAttention, KV-cache reuse, speculative decoding), Neoversine maintains full stack ownership, zero vendor lock-in, and sustainable inference economics.
                            </p>

                            {/* Verified Proof Numbers */}
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-white/10'>
                                <div className='flex flex-col'>
                                    <p className='text-3xl sm:text-4xl font-bold font-mono text-cyan-400'>+40%</p>
                                    <p className='text-xs text-gray-400 mt-1 uppercase tracking-wider'>Lead Conversion (ARC)</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-3xl sm:text-4xl font-bold font-mono text-purple-400'>10x</p>
                                    <p className='text-xs text-gray-400 mt-1 uppercase tracking-wider'>Research Speedup</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-3xl sm:text-4xl font-bold font-mono text-emerald-400'>0.96</p>
                                    <p className='text-xs text-gray-400 mt-1 uppercase tracking-wider'>mAP50 YOLO (D8alytics)</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-3xl sm:text-4xl font-bold font-mono text-rose-400'>4</p>
                                    <p className='text-xs text-gray-400 mt-1 uppercase tracking-wider'>Live Deployments</p>
                                </div>
                            </div>

                            {/* Structured Verified Proof Matrix for Search & AI Overview Citations */}
                            <div className="mt-8 pt-6 border-t border-white/10 overflow-x-auto">
                                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">Verified Production Benchmark Matrix</p>
                                <table className="w-full text-left text-xs font-mono border border-white/10 rounded-lg overflow-hidden">
                                    <thead className="bg-white/5 text-gray-300">
                                        <tr className="border-b border-white/10">
                                            <th className="py-2.5 px-3">Metric / Proof Point</th>
                                            <th className="py-2.5 px-3">System / Architecture</th>
                                            <th className="py-2.5 px-3">Scope / Dataset</th>
                                            <th className="py-2.5 px-3">Production Verification</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5 text-gray-400">
                                        <tr className="hover:bg-white/[0.02]">
                                            <td className="py-2.5 px-3 text-cyan-400 font-bold">+40% Lead Conversion</td>
                                            <td className="py-2.5 px-3 text-gray-200">ARC Network CRM</td>
                                            <td className="py-2.5 px-3">Intent-driven subagent sequencing</td>
                                            <td className="py-2.5 px-3 text-emerald-400">Live B2B production client results</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02]">
                                            <td className="py-2.5 px-3 text-purple-400 font-bold">10x Research Diligence</td>
                                            <td className="py-2.5 px-3 text-gray-200">Custom RAG Pipelines</td>
                                            <td className="py-2.5 px-3">Technical due diligence &amp; market reports</td>
                                            <td className="py-2.5 px-3 text-emerald-400">Hours reduced to minutes</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02]">
                                            <td className="py-2.5 px-3 text-emerald-400 font-bold">mAP50 0.96 Accuracy</td>
                                            <td className="py-2.5 px-3 text-gray-200">D8alytics Vision Engine</td>
                                            <td className="py-2.5 px-3">700 YOLO images / hour</td>
                                            <td className="py-2.5 px-3 text-emerald-400">100% synthetic dataset (zero real photos)</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02]">
                                            <td className="py-2.5 px-3 text-blue-400 font-bold">Zero SaaS Subscriptions</td>
                                            <td className="py-2.5 px-3 text-gray-200">MIT-Licensed Control Deck</td>
                                            <td className="py-2.5 px-3">Self-hosted, phone-first runtime</td>
                                            <td className="py-2.5 px-3 text-emerald-400">Open-source operational steering</td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02]">
                                            <td className="py-2.5 px-3 text-rose-400 font-bold">Memory Optimization</td>
                                            <td className="py-2.5 px-3 text-gray-200">vLLM PagedAttention Stack</td>
                                            <td className="py-2.5 px-3">Multi-agent concurrency</td>
                                            <td className="py-2.5 px-3 text-emerald-400">VRAM reduced from 92GB to &lt;10GB</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='mt-8 pt-4 flex flex-wrap items-center justify-between gap-4'>
                                <p className='text-xs text-gray-500 font-mono'>Verified Deployments: DGC • Ai agenti • Brunch Italiano • MaisonRoseLifestyle</p>
                                <button
                                    className="py-2.5 px-6 border border-white/40 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-cyan-500/30 hover:border-white text-white rounded-full font-medium text-sm transition-all"
                                    onClick={() => navigate('/contact')}
                                >
                                    Work With Us
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Team Section */}
            <div className='bg-[#181818] flex flex-col max-w-7xl w-full mx-auto mt-10'>
                <div className='text-center text-6xl font-bold pb-10 w-full text-white mb-14'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    <div className='text-white max-md:hidden'>
                        <TrueFocus
                            sentence="CORE TEAM"
                            manualMode={true}
                            blurAmount={4}
                            borderColor="blue"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    <div className='text-white md:hidden'>
                        <TrueFocus
                            sentence="CORE TEAM"
                            manualMode={false}
                            blurAmount={4}
                            borderColor="blue"
                            animationDuration={0.5}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-24 w-full max-w-5xl mb-32 mx-auto px-4'>

                    {/* Arka's Profile  */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'>
                        <div className='flex flex-col gap-5'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white/80 p-1'
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752006741/arka-profile_m9eaqd.jpg" alt="Arka" className='object-cover rounded-full h-full w-full' />
                            </div>

                            <div data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>
                                <a href="https://x.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsTwitterX /></a>
                                <a href="https://github.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsGithub /></a>
                                <a href="mailto:neoversine@gmail.com" className="hover:text-cyan-400 transition-colors"><MdEmail className='text-2xl' /></a>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full md:w-[70%]'
                            data-aos="fade-left"
                            data-aos-anchor-placement="center-bottom">
                            <p className='text-gray-400 font-mono text-sm'>Founder &amp; HARNESS</p>
                            <h1 className='text-white text-4xl sm:text-5xl font-bold mt-1 mb-2'>Arka Probha Roy</h1>
                            <p className='text-cyan-300 font-mono text-sm mb-4'>
                                "We build the substrate, not the souvenir."
                            </p>
                            <p className='text-gray-300 text-sm md:text-base leading-relaxed text-justify'>
                                Founded Neoversine in Jan 2024 to build agent operating systems from first principles. Currently serving as CTO at HypeX (Jan 2025–present), owning tech vision, architecture, and AI systems. Previously delivered end-to-end full-stack architectures at Ditinex and directed industrial embedded control systems as Tech Lead at IEI ECE.
                                <br /><br />
                                Based in Kolkata. Open to foundational agent systems where architecture ownership matters.
                            </p>
                        </div>
                    </div>

                    {/* Ankon's Profile */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'>
                        <div className='flex flex-col justify-center w-full md:w-[70%] order-2 md:order-1'
                            data-aos="fade-right"
                            data-aos-anchor-placement="center-bottom">
                            <p className='text-gray-400 font-mono text-sm'>Core Engineering</p>
                            <h1 className='text-white text-4xl sm:text-5xl font-bold mt-1 mb-2'>Ankon Karak</h1>
                            <p className='text-cyan-300 font-mono text-sm mb-4'>
                                "High-throughput runtimes and cross-platform runtime reliability."
                            </p>
                            <p className='text-gray-300 text-sm md:text-base leading-relaxed text-justify'>
                                Architects cross-platform runtime interfaces and high-performance client layers for Neoversine's agent systems. Focuses on seamless multi-environment execution spanning desktop, web, and mobile gateways, ensuring responsive state management and low-latency interaction loops.
                            </p>
                        </div>

                        <div className='flex flex-col gap-5 order-1 md:order-2'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white/80 p-1'
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752091606/ankon-profile_zgbdjp.jpg" alt="Ankon" className='object-cover rounded-full h-full w-full' />
                            </div>
                            <div data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>
                                <a href="https://x.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsTwitterX /></a>
                                <a href="https://github.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsGithub /></a>
                                <a href="mailto:neoversine@gmail.com" className="hover:text-cyan-400 transition-colors"><MdEmail className='text-2xl' /></a>
                            </div>
                        </div>
                    </div>

                    {/* Ujjwaini's Profile  */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'>
                        <div className='flex flex-col gap-5'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white/80 p-1'
                                data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1752091604/ujjwaini-profile_af0swh.jpg" alt="Ujjwaini" className='object-cover rounded-full h-full w-full' />
                            </div>

                            <div data-aos="fade-right"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>
                                <a href="https://x.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsTwitterX /></a>
                                <a href="https://github.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsGithub /></a>
                                <a href="mailto:neoversine@gmail.com" className="hover:text-cyan-400 transition-colors"><MdEmail className='text-2xl' /></a>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center w-full md:w-[70%]'
                            data-aos="fade-left"
                            data-aos-anchor-placement="center-bottom">
                            <p className='text-gray-400 font-mono text-sm'>Agent Cognition</p>
                            <h1 className='text-white text-4xl sm:text-5xl font-bold mt-1 mb-2'>Ujjwaini Saha</h1>
                            <p className='text-purple-300 font-mono text-sm mb-4'>
                                "Engineering precise reasoning chains and structured context distillation."
                            </p>
                            <p className='text-gray-300 text-sm md:text-base leading-relaxed text-justify'>
                                Leads prompt architecture, cognitive routing, and multi-turn persona alignment. Specializes in transforming fuzzy operational requirements into deterministic agent decision trees, anti-hallucination guardrails, and automated evaluation benchmarks.
                            </p>
                        </div>
                    </div>

                    {/* Jyotirmoy's Profile */}
                    <div className='flex max-md:flex-col gap-6 md:gap-12 items-center'>
                        <div className='flex flex-col justify-center w-full md:w-[70%] order-2 md:order-1'
                            data-aos="fade-right"
                            data-aos-anchor-placement="center-bottom">
                            <p className='text-gray-400 font-mono text-sm'>Full-Stack &amp; Infrastructure</p>
                            <h1 className='text-white text-4xl sm:text-5xl font-bold mt-1 mb-2'>Jyotirmoy Baidya</h1>
                            <p className='text-cyan-300 font-mono text-sm mb-4'>
                                "Robust backend architecture, real-time sync, and scalable event loops."
                            </p>
                            <p className='text-gray-300 text-sm md:text-base leading-relaxed text-justify'>
                                Builds resilient backend infrastructure, event-driven data streaming layers, and high-concurrency API integrations powering Neoversine's control decks and scraping engines. Specializes in full-stack performance and real-time operational visibility.
                            </p>
                        </div>

                        <div className='flex flex-col gap-5 order-1 md:order-2'>
                            <div className='h-60 w-60 rounded-full overflow-hidden border-4 border-white/80 p-1'
                                data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom">
                                <img src="https://res.cloudinary.com/dxbszkdhk/image/upload/v1751914404/jb-profile3_oq7acj.jpg" alt="Jyotirmoy" className='object-cover rounded-full h-full w-full' />
                            </div>
                            <div data-aos="fade-left"
                                data-aos-anchor-placement="center-bottom"
                                className='flex gap-4 text-white items-center mx-auto text-xl'>
                                <a href="https://x.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsTwitterX /></a>
                                <a href="https://github.com/neoversine" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><BsGithub /></a>
                                <a href="mailto:neoversine@gmail.com" className="hover:text-cyan-400 transition-colors"><MdEmail className='text-2xl' /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <SiteFooter />
        </main>
    )
}

export default AboutUsPage