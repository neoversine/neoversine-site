
import InfiniteMenu from '../accernity/InfiniteMenu'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const ISection = () => {
    const items = [{
        image: 'home/leadgen.jpg',
        link: 'https://google.com/',
        title: 'Smart \nLeadGen',
        description: 'Map-based targeting with automated emails'
    },
    {
        image: 'home/chatbot1.jpg',
        link: 'https://google.com/',
        title: 'Custom \nChatbot',
        description: 'Replacing ManyChat with seamless automation'
    },
    {
        image: 'home/saas.jpg',
        link: 'https://google.com/',
        title: 'Smooth \nSaaS',
        description: 'Exceptionally fluid and fast user experience'
    },
    {
        image: 'home/vertex.jpg',
        link: 'https://google.com/',
        title: 'Auto \nGraphics',
        description: 'Generated intelligently with Vertex AI tools'
    }
    ];

    const scrollToNextSection = () => {
        const next = document.getElementById('next-section');
        if (next) next.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="product-infinite-scroll" style={{ height: '100vh', position: 'relative' }}>
            <InfiniteMenu items={items} onScrollDown={scrollToNextSection} />
        </div>
    )
}


const TopProducts = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const scrollToStarProducts = () => {
        // Only scroll if device width is less than or equal to 768px (Tailwind md breakpoint)
        if (window.innerWidth <= 768) {
            const next = document.getElementById('product-infinite-scroll');
            if (next) {
                next.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const target = document.getElementById('product-infinite-scroll');
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    scrollToStarProducts();
                }
            },
            {
                threshold: 0.5, // Adjust based on when you want it to trigger
            }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, []);


    return (
        <div className='min-h-screen mt-10 md:mt-20'>
            <div className='w-full mx-auto'>
                <div className="text-center mb-20">
                    <div className="inline-block relative mb-2">
                        {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-lg blur-md"></div> */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <span className="bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                                In Demand
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-3xl mx-auto dark:text-gray-300 text-gray-600"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        id="star-products">
                        Our approach delivers measurable business impact through intelligent
                        automation
                    </p>
                </div>
                <div

                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <ISection />
                </div>
            </div>
        </div >
    )
}

export default TopProducts