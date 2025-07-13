import React from 'react'
import './button.css'
const SpecialButton2 = ({ text = 'Connect', onClick = () => { } }) => {
    return (
        <div className='relative w-[100px] cursor-pointer' onClick={() => onClick()}>
            <div className='btn-primary ml-auto w-inline-block'>
                <div className='btn-primary-lines btn-primary-lines-1'>
                    <div className='btn-primary-lines btn-primary-lines-2'>
                        <div className='btn-primary-text text-white text-center uppercase text-xs'>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialButton2