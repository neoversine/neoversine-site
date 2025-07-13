/* eslint-disable no-constant-condition */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GooeyNav from '../react-bits/GooeyNav';
import { Car } from 'lucide-react';
import { Card } from './Card';
import ShuffleLoader2 from '../basic/SpecialLoader/ShuffleLoader2';
import { SparklesText } from '../magic-ui/SparklesText';

const API_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}`;

const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    },
};

const sectionKeys = ['aiExperiment', 'llm', 'research'];
const categoryMap = {
    aiExperiment: 'ai-experiments',
    llm: 'llm',
    research: 'research',
};

const OurBlogs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [sections, setSections] = useState({
        aiExperiment: { data: [], hasFetched: false, expanded: false },
        llm: { data: [], hasFetched: false, expanded: false },
        research: { data: [], hasFetched: false, expanded: false },
    });

    const activeKey = sectionKeys[activeIndex];

    // Fetch initial 7 on component/tab load
    useEffect(() => {
        const fetchInitialData = async (key) => {

            if (sections[key].hasFetched) return;

            setIsLoading(true);
            try {
                const category = categoryMap[key];
                console.log(category)
                const url = `${API_URL}/Labs_Posts?filterByFormula={category}="${category}"&maxRecords=7&sort[0][field]=publishedDate&sort[0][direction]=desc&fields[]=title&fields[]=description&fields[]=category&fields[]=mainImage`;
                const response = await axios.get(url, config);
                console.log(response);

                if (response) {
                    setSections(prev => ({
                        ...prev,
                        [key]: {
                            ...prev[key],
                            data: response.data.records,
                            hasFetched: true,
                            expanded: false,
                        },
                    }));
                    setTimeout(() => setIsLoading(false), 1000);
                }
            } catch (error) {
                console.error(`Error fetching data for ${key}:`, error);
                setIsLoading(false);
            }
        };

        fetchInitialData(activeKey);
    }, [activeIndex]);

    // Handle See More toggle and fetch full data if needed
    const handleSeeMore = async (key) => {
        // If already expanded, just collapse
        if (sections[key].expanded) {
            setSections(prev => ({
                ...prev,
                [key]: { ...prev[key], expanded: false }
            }));
            return;
        }

        // If already has all data (more than 7), just expand
        if (sections[key].data.length > 7) {
            setSections(prev => ({
                ...prev,
                [key]: { ...prev[key], expanded: true }
            }));
            return;
        }

        // Fetch full data
        setIsLoading(true);
        try {
            const category = categoryMap[key];
            const url = `${API_URL}/Labs_Posts?filterByFormula={category}="${category}"&sort[0][field]=publishedDate&sort[0][direction]=desc&fields[]=title&fields[]=description&fields[]=category&fields[]=mainImage`;

            const response = await axios.get(url, config);

            if (response) {
                setSections(prev => ({
                    ...prev,
                    [key]: {
                        ...prev[key],
                        data: response.data.records,
                        expanded: true,
                    },
                }));
                setTimeout(() => setIsLoading(false), 1000);
            }
        } catch (error) {
            console.error(`Error fetching full data for ${key}:`, error);
            setIsLoading(false);
        }
    };

    return (
        <div className='mt-20'>
            <div className="flex mb-10 mx-auto">
                <div className="flex items-end justify-center gap-2 md:gap-4 text-xl md:text-4xl font-semibold text-white text-center mx-auto mb-10">
                    Our<SparklesText>BLOGS </SparklesText>
                </div>
                {/* <div className="absolute right-0">
                        <SpecialButton2 text="Vote" onClick={() => setIsVoteOpen(true)} />
                    </div> */}
            </div>

            {/* section tabs  */}
            <div className="w-full max-w-[290px] sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto max-md:h-[40px] h-[70px]" style={{ position: 'relative' }}>
                <GooeyNav
                    items={sectionKeys}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </div>

            {/* Section content */}
            <div className="w-full max-w-7xl mx-auto min-h-[300px] mb-20">
                {isLoading ? (
                    <div className='h-[300px] w-full flex justify-center items-center'>
                        <ShuffleLoader2 />
                    </div>
                ) : (
                    <div className='w-full max-w-7xl mx-auto'>
                        {sections[activeKey]?.data?.length > 0 ? (
                            <div className='grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-6 mx-6'>
                                {(sections[activeKey].expanded
                                    ? sections[activeKey].data
                                    : sections[activeKey].data.slice(0, 7)
                                ).map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        <Card
                                            item={item}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                            <p>No data available</p>
                        )}

                        {/* {sections[activeKey]?.data?.length > 0 && (
                            <div className='flex justify-center w-full'>
                                <button className='bg-white py-2 px-4 rounded-lg' onClick={() => handleSeeMore(activeKey)}>
                                    {sections[activeKey].expanded ? 'See Less' : 'See More'}
                                </button>
                            </div>
                        )} */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurBlogs;
