/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { SiteNavbar } from '../components/basic/SiteNavbar'
import { ConfettiSideCannons } from '../components/magic-ui/ConfettiSideCannons'
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pointerhighlight } from '../components/accernity/Pointerhighlight';
import SiteFooter from '../components/basic/SiteFooter'

const ContactPage = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");

    return (
        <div className='bg-primary w-full overflow-hidden'>
            <div className='w-full bg-gradient-to-r from-[#181818] via-[#181818] to-[#21195675] min-h-screen'>
                <SiteNavbar />
                <div className='w-full max-w-5xl mx-auto md:pt-32 pt-28 max-md:px-5'>
                    <div className='max-w-4xl'>
                        <h1 className='text-4xl md:text-7xl font-semibold leading-tight text-white'>
                            Foundational <Pointerhighlight><span className='bg-clip-text text-transparent bg-gradient-to-br from-indigo-300 to-cyan-400'>agent systems</span></Pointerhighlight> for teams that own their stack.
                        </h1>
                    </div>

                    <div className='w-full flex max-md:flex-col mt-20 md:mt-28'>
                        <div className='md:w-[35%] order-2 md:order-1 max-md:mb-10'>
                            <div className='flex flex-col gap-3 text-sm text-[#9e9e9e] font-mono'>
                                <p className='text-white font-semibold text-base'>Neoversine</p>
                                <p>neoversine@gmail.com</p>
                                <p>+91 8777293979</p>
                                <p>257/V, Taki Road, Barasat,<br /> Kolkata, West Bengal, India</p>
                                <div className='mt-4 pt-4 border-t border-white/10 text-xs text-cyan-400/80'>
                                    Open to long-term architectural builds &amp; foundational deployments.
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[60%] w-auto md:ml-auto flex flex-col order-1 md:order-2'>
                            <p className='text-xl md:text-2xl text-gray-300 font-light leading-relaxed'>
                                We don't take one-off consulting gigs. We partner on long-term builds where architecture ownership, vLLM inference economics, and Hermes agent-OS runtimes replace human labor at scale.
                            </p>

                            <div className='grid grid-cols-2 gap-5 mt-14 mb-20'>
                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    className='flex flex-col gap-1'>
                                    <label htmlFor="query-person-name" className='text-gray-400 text-sm font-mono'>Name <span className='text-red-500'>*</span></label>
                                    <input type="text" name="query-person-name" id="query-person-name" className='border-b-2 border-gray-600 focus:border-cyan-400 focus:outline-none py-2 text-gray-200 bg-transparent text-sm' required
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    className='flex flex-col gap-1'>
                                    <label htmlFor="query-person-email" className='text-gray-400 text-sm font-mono'>Work Email <span className='text-red-500'>*</span></label>
                                    <input type="email" name="query-person-email" id="query-person-email"
                                        className='border-b-2 border-gray-600 focus:border-cyan-400 focus:outline-none py-2 text-gray-200 bg-transparent text-sm' required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    className='flex flex-col col-span-2 gap-1 mt-4'>
                                    <label htmlFor="query-data" className='text-gray-400 text-sm font-mono'>System Requirements / Architecture Scope <span className='text-red-500'>*</span></label>
                                    <textarea name="query-data" id="query-data" rows={4} className='border-b-2 border-gray-600 focus:border-cyan-400 focus:outline-none py-2 text-gray-200 bg-transparent text-sm' required
                                        placeholder="Describe the workflow or labor hours you're aiming to replace with agent systems..."
                                        onChange={(e) => setData(e.target.value)}></textarea>
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    className='col-span-2'
                                >
                                    <ConfettiSideCannons name={name} email={email} data={data} className={`py-3 px-8 border border-white/60 bg-gradient-to-br from-purple-400 via-white to-sky-200 text-black font-semibold rounded-full shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer w-fit mt-5`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </div>
            <SiteFooter />
        </div>
    )
}

export default ContactPage