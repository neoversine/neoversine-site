import React from 'react'
import ProductShowcase from './ProductShowcase'
import PortfolioSection from './PortfolioSection'

const ProjectsSection = () => {
    return (
        <div className='flex mt-40 w-full'>
            <div className='flex w-full max-w-7xl mx-auto'>
                <div className='flex flex-col w-full px-4'>
                    <div className='flex flex-col text-center'>
                        <h1
                            className="text-4xl sm:text-5xl font-bold text-center 
                            bg-gradient-to-r from-cyan-400 via-white to-purple-400 
                            bg-clip-text text-transparent w-fit mx-auto"
                        >
                            Production Systems &amp; Runtimes
                        </h1>

                        <p className='text-center mt-3 text-gray-400 max-w-2xl mx-auto text-sm md:text-base'>
                            Autonomous architectures built on Hermes agent-OS, vLLM inference economics, and real-time control decks
                        </p>
                    </div>

                    <ProductShowcase />
                    {/* <BentoGrid /> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection