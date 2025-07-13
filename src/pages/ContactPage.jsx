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
                <div className='w-full max-w-5xl mx-auto md:pt-32 pt-28  max-md:px-5'>
                    <div className='max-w-4xl'>
                        <h1 className='text-5xl md:text-7xl font-semibold leading-14 md:leading-16 text-white'><Pointerhighlight><span className='bg-clip-text text-transparent bg-gradient-to-br from-indigo-300 to-blue-400'>automation</span></Pointerhighlight> solutions for your <br />business.</h1>
                    </div>

                    <div className='w-full flex max-md:flex-col mt-28'>
                        <div className='md:w-[30%] order-2 md:order-1 max-md:mb-10'>
                            <div className='flex flex-col gap-3 text-sm text-[#9e9e9e]'>
                                <p>neoversine@gmail.com</p>
                                <p>8777293979</p>
                                <p>257/V, Taki Road, Barasat,<br /> Kolkata</p>
                            </div>
                        </div>
                        <div className='md:w-[60%] w-auto md:ml-auto flex flex-col order-1 md:order-2'>
                            <p className='text-2xl text-gray-300 font-light'>At Neoversine, we help startups streamline their operations through AI-driven automation — whether you're building from scratch, scaling an existing workflow, or integrating smart agents into your system.</p>

                            <div className='grid grid-cols-2 gap-5 mt-20 mb-20'
                            >
                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    className='flex flex-col gap-1'>
                                    <label htmlFor="query-person-name" className='text-gray-400'>Name <span className='text-red-500'>*</span></label>
                                    <input type="text" name="query-person-name" id="query-person-name" className='border-b-2 border-gray-500 focus:outline-none py-2  text-gray-300 focus:shadow-inner focus:shadow-black/40 focus:px-2' required
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    className='flex flex-col gap-1'>
                                    <label htmlFor="query-person-email" className='text-gray-400'>Email <span className='text-red-500'>*</span></label>
                                    <input type="email" name="query-person-email" id="query-person-email"
                                        className='border-b-2 border-gray-500 focus:outline-none py-2  text-gray-300 bg-transparent input-transparent focus:shadow-inner focus:shadow-black/40 focus:px-2' required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    className='flex flex-col col-span-2 gap-1'>
                                    <label htmlFor="query-data" className='text-gray-400'>Your query <span className='text-red-500'>*</span></label>
                                    <textarea name="query-data" id="query-data" rows={5} className='border-b-2 border-gray-500 focus:outline-none focus:shadow-inner focus:shadow-black/40 focus:px-2 py-2  text-gray-300 bg-transparent input-transparent' required
                                        onChange={(e) => setData(e.target.value)}></textarea>
                                </div>


                                <div
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom" >
                                    <ConfettiSideCannons name={name} email={email} data={data} className={`py-2 px-5 border-4 border-white bg-gradient-to-br from-purple-300 via-white to-sky-200 rounded-full shadow-inner hover:shadow-none active:shadow-inner shadow-gray-400 cursor-pointer w-fit mt-5`} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </div>
            <SiteFooter />
        </div >
    )
}

export default ContactPage