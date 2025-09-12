
import { SiteNavbar } from '../components/basic/SiteNavbar';
import CatbotSection from '../components/our-works/CatbotSection';
import SpecialButton2 from '../components/basic/SpecialButton/SpecialButton2';
// import OurLatestWorks from '../components/our-works/OurLatestWorks'

import SiteFooter from '../components/basic/SiteFooter'
import WorkHeroSection from '../components/our-works/WorkHeroSection';
import ProjectsSection from '../components/our-works/ProjectsSection';
import FallingText from '../components/our-works/FallingText';

const OurWorks = () => {
    // const [chatOpen, setChatOpen] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [start, setStart] = useState(false);


    return (
        <div className='relative w-full bg-black min-h-screen overflow-hidden'>
            <SiteNavbar />

            <WorkHeroSection />

            {/* <div className='min-h-screen md:h-screen pt-28'>
                <div className='max-w-6xl grid max-md:gap-8 grid-cols-1 md:grid-cols-2 mx-auto h-fit md:h-[500px] '>
                    <div className='h-[55vh] md:h-[70vh] flex md:p-6 px-4'>
                        <CatbotSection start={start} setStart={setStart} />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col px-8 md:px-14'>
                            <p className='text-gray-400 font-mono'>[ How it works ]</p>

                            <h1 className='text-5xl font-medium text-white font-sans mt-2'>
                                Connect with AI Neo Catbot
                            </h1>

                            <p className='mt-6 text-gray-400'>
                                Connect with the AI chatbot to start the conversation. The chatbot uses natural language processing to understand your queries and provide relevant responses.
                            </p>

                            <div className='mt-8'>
                                <SpecialButton2 text='Start' onClick={() => setStart(true)} />
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            {/* <div className='mt-10'>
                <OurLatestWorks />
            </div> */}
            <ProjectsSection />
            {/* <div className='h-screen bg-white'>
                <FallingText
                    text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
                    highlightWords={["React", "Bits", "animated", "components", "simplify"]}
                    highlightClass="highlighted"
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                />
            </div> */}
            <SiteFooter />
        </div>
    )
}

export default OurWorks