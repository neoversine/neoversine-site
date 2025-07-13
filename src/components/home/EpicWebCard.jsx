import { CardContainer } from "../accernity/3d-card";

export default function EpicWebCard({ type, text, subtext, link, imgurl, heading, sidehead, degree }) {
    return (
        <CardContainer className="inter-var w-full" degree={degree}>
            <div className={`flex ${type == "row" ? 'flex-row' : 'flex-col'} justify-between items-center text-white rounded-2xl p-6 md:p-10 shadow-lg shadow-black  w-full mx-auto bento-bg-img`}
                style={{
                    backgroundImage: "url('./bg-img.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    /* Prevents tiling */
                    backgroundPosition: 'center',
                    /* Center aligns the image */
                }}>
                {/* Left Content */}
                <div className={`flex flex-col mb-6 md:mb-0  font-mono ${type == 'col' ? 'order-2 gap-2 mt-5 mr-auto' : 'order-1 gap-20 md:mr-10'}`}>
                    <div>
                        <h2 className="text-3xl font-semibold mb-2">{text}</h2>
                        <p className="text-gray-400 mb-4">{subtext}</p>
                    </div>
                    <button className="bg-[#262d34] shadow shadow-black text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-[#373a4a] transition font-mono w-fit bento-bg-img"
                        style={{
                            backgroundImage: "url('./bg-img.png')",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            /* Prevents tiling */
                            backgroundPosition: 'center',
                            /* Center aligns the image */
                        }}>
                        {type == 'row' &&
                            <div>Our Works</div>
                        }
                        <span className="text-xl">↗</span>
                    </button>
                </div>

                {/* Right Graphic */}
                <div className={`relative rounded-xl border-2 border-black p-4 aspect-[2/1] w-full md:max-w-md shadow-inner shadow-black ${type == 'col' ? 'order-1 ' : 'order-2'}`}>
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity pointer-events-none">
                        {Array.from({ length: 24 }).map((_, i) => {
                            if (i == 5) {
                                return (
                                    <div key={i} className=""></div>
                                )
                            }
                            if ([0, 1, 2, 3, 4, 5].includes(i))
                                return (
                                    <div key={i} className="border-r-2 border-black/40"></div>
                                )

                            if ([11, 17, 23].includes(i))
                                return (
                                    <div key={i} className="border-t-2 border-black/40"></div>
                                )

                            return (
                                <div key={i} className="border-t-2 border-r-2 border-black/40"></div>
                            )
                        })}

                    </div>

                    <div className="relative z-10 flex flex-col justify-center items-center h-full">
                        <img
                            src={imgurl} // Replace with your logo path
                            alt="Epic Web Logo"
                            className={`w-44 h-16 ${(text == 'Flutter' || text == "React") && 'h-44 '} mb-2`}
                        />
                        <span className="text-xl tracking-widest text-gray-300 text-shadow-lg text-shadow-black">{heading}</span>
                    </div>

                    <span className={`absolute  right-2 top-1/2 -translate-y-1/2 rotate-90 text-sm tracking-widest text-gray-300 uppercase`}>
                        {sidehead}
                    </span>
                </div>
            </div>
        </CardContainer>
    );
}
