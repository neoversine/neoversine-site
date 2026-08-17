import InfiniteMenu from '../accernity/InfiniteMenu'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ISection = () => {
    const items = [
        {
            image: 'home/leadgen.jpg',
            link: '/our-works',
            title: 'ARC \nNetwork',
            description: '+40% lead conversion with dynamic intent sequencing'
        },
        {
            image: 'home/saas.jpg',
            link: '/our-works',
            title: 'NeopostGen \nSaaS',
            description: 'Automated brand-consistent creative & ad generation'
        },
        {
            image: 'home/chatbot1.jpg',
            link: '/our-works',
            title: 'NeoCrawl \nAPI',
            description: 'Adaptive vision-guided web data extraction layer'
        },
        {
            image: 'home/vertex.jpg',
            link: '/our-works',
            title: 'Pocket \nControl Deck',
            description: 'MIT-licensed phone-first live runtime steering deck'
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
                threshold: 0.5,
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <span className="bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                                Live Systems &amp; Products
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        id="star-products">
                        Production-grade architectures driving measurable outcomes for paying clients and internal systems
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <ISection />
                </div>
            </div>
        </div>
    )
}

export default TopProducts