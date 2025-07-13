import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const TechStack = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div
            className="text-center md:my-20 floating-text"
        // data-aos="fade-up"
        // data-aos-delay="500"
        // data-aos-anchor-placement="bottom-bottom"
        >
            <p className="text-gray-400 mb-3 text-2xl"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom"
            >We build with</p>
            <div className="flex justify-center gap-1">
                {["GPT-4 ",
                    "Make.com ",
                    "WhatsApp API ",
                    "Notion ",
                    "Airtable ",
                    "Google Sheets "].map((tech, i) => (
                        <p
                            key={tech}
                            data-aos="fade-up"
                            data-aos-delay={i * 200}
                            className={`text-sm md:text-2xl xl:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-br from-green-600 via-sky-200 py-2 ${i > 3 && 'max-md:hidden'}`}
                        >
                            {tech}•
                        </p>
                    ))}
            </div>
        </div >
    )
}

export default TechStack