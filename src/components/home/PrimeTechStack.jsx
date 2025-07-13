import React from 'react'
import EpicWebCard from './EpicWebCard'

const PrimeTechStack = () => {
    return (
        <section>
            <div className="text-center font-bold mb-10 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8b41da] drop-shadow-[2px_2px_3px_rgba(0,0,0,0.7)] animate-gradient mt-20"
                data-aos="fade-up">
                Our Works
            </div>
            <div className='mb-20 grid gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl w-full mx-auto max-md:px-6'>
                <div className='max-md:hidden md:col-span-2'
                    data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom">
                    <EpicWebCard type={'row'} text={"Automation"} subtext={"Provide Full Automation Solutions."}
                        link={"/our-works/n8n"} imgurl={'/N8n.svg'} heading={"N8N Automation"} sidehead={"Ai Agents"} degree={160}
                    />
                </div>
                <div className='md:hidden'>
                    <EpicWebCard type={'col'} text={"Automation"} subtext={"Provide Full Automation Solutions."}
                        link={"/our-works/n8n"} imgurl={'/N8n.svg'} heading={"N8N Automation"} sidehead={"Ai Agents"}
                        degree={50}
                    />
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom">
                    <EpicWebCard
                        type="col"
                        text="Flutter"
                        subtext="Create mobile applications."
                        link="/our-works/js-automation"
                        imgurl="/slack.jpeg"
                        heading="Flutter Devs"
                        sidehead="Mobile App"
                        degree={50}
                    />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="center-bottom">
                    <EpicWebCard
                        type="col"
                        text="React"
                        subtext="Seamless Modern Looking Websites."
                        link="/our-works/js-automation"
                        imgurl="/react-logo.png"
                        heading="React"
                        sidehead="Websites"
                        degree={50}
                    />
                </div>
            </div>
        </section>
    )
}

export default PrimeTechStack