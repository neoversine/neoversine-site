import React from 'react'
import { SiteNavbar } from '../components/basic/SiteNavbar'
import SiteFooter from '../components/basic/SiteFooter'

const ComingSoon = () => {
    return (
        <div className='relative w-full overflow-hidden bg-primary min-h-screen'>
            <SiteNavbar />
            <div className='h-[60vh] flex justify-center items-center'>
                <img src="comingsoon.png" alt="Coming Soon" />
            </div>
            <SiteFooter />
        </div>
    )
}

export default ComingSoon;