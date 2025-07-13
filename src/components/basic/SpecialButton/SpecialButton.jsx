import React from 'react';


const SpecialButton = (height, width, text = 'connect', className) => {
    return (
        <div className={`group h-[43px] w-[135px] my-20 relative flex justify-center items-center hover:-translate-0.5 active:translate-0 transition-all`}>
            {/* Top gradient border SVG */}
            <svg
                width='135'
                height='43'
                viewBox="0 0 135 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 "
            >
                <path
                    className="path-anim path-anim-2"
                    d="M3 43V11L10 4H132V36L125 43H3Z"
                    stroke="url(#gradient)"
                    stroke-width="2.5"
                    stroke-linecap="round"
                />
                <path
                    className="path-anim path-anim-1"
                    d="M39.375 23.5H100.564C100.763 23.5 100.954 23.420975 101.095 23.280325L104.75 19.625"
                    stroke="url(#paint1_linear_2309_6568)"
                    stroke-width="2.5"
                    stroke-linecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_2309_6568" x1="67.5" y1="101" x2="428.5" y2="75" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F8CF3E"></stop>
                        <stop offset="1" stop-color="#FC6756"></stop>
                        <stop offset="1" stop-color="#FC6756"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2309_6568" x1="416.5" y1="-9.50001" x2="25.7657" y2="-140.863" gradientUnits="userSpaceOnUse">
                        <stop offset="0.236372" stop-color="#724CE8"></stop>
                        <stop offset="1" stop-color="#26F4D0"></stop>
                    </linearGradient>

                    <linearGradient id="gradient" x1="0" y1="0" x2="135" y2="43" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF0000" />   {/* Red */}
                        <stop offset="20%" stopColor="#FFA500" />  {/* Orange */}
                        <stop offset="40%" stopColor="#FFFF00" />  {/* Yellow */}
                        <stop offset="60%" stopColor="#00FF00" />  {/* Green */}
                        <stop offset="80%" stopColor="#0000FF" />  {/* Blue */}
                        <stop offset="100%" stopColor="#800080" /> {/* Purple */}
                    </linearGradient>
                </defs>
            </svg>

            <div className={`text-4xl text-white ${className}`}>{text}</div>
        </div>
    );
};

export default SpecialButton;
