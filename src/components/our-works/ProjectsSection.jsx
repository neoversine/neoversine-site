import React from 'react'
import BentoGrid from './BentoGrid'
import ProductShowcase from './ProductShowcase'

const ProjectsSection = () => {
    return (
        <div className='flex mt-40 w-full'>
            <div className='flex w-full max-w-7xl mx-auto'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col'>
                        <h1
                            className="text-5xl font-bold text-center 
    bg-gradient-to-r from-gray-300/60 via-white to-gray-300/60 
    bg-clip-text text-transparent w-fit mx-auto"
                        >
                            Products
                        </h1>

                        <p className='text-center mt-3 text-gray-500'>Get market-ready with our proven products—built to launch your success today</p>
                    </div>

                    <ProductShowcase />
                    {/* <BentoGrid /> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection