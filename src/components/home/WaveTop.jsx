import React from 'react'
import Wave from 'react-wavify'

const WaveTop = ({ location = 'bottom' }) => {
    return (
        <div className={`${location == 'top' ? 'rotate-180' : ''}`}>
            <Wave fill='#000000'
                paused={false}
                style={{ display: 'flex' }}
                options={{
                    height: 30,
                    amplitude: 40,
                    speed: 0.25,
                    points: 3
                }}
            />
        </div>
    )
}

export default WaveTop