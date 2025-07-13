import React from 'react'

const ServicesGrid = ({ image1, image2, image3, image4 }) => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-9 h-[360px]max-md:h-[250px] gap-4 max-md:gap-2 mx-20 max-md:mx-0'>
                <div className='col-span-7 max-md:col-span-7 overflow-hidden rounded-xl'>
                    <video
                        src={image1} // e.g., "/videos/sample.mp4" or an online URL
                        className='w-full h-full object-cover'
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className='col-span-2 max-md:col-span-2 overflow-hidden rounded-xl'>
                    <img src={image2} alt="Image 2" className='w-full h-full object-cover' />
                </div>
                <div className='col-span-2 max-md:col-span-2 overflow-hidden rounded-xl'>
                    <img src={image3} alt="Image 3" className='w-full h-full object-cover' />
                </div>
                <div className='col-span-7 overflow-hidden rounded-xl'>
                    <video
                        src={image4} // e.g., "/videos/sample.mp4" or an online URL
                        className='w-full h-full object-cover'
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicesGrid