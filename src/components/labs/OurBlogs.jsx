/* eslint-disable no-constant-condition */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GooeyNav from '../react-bits/GooeyNav';
import { Card } from './Card';
import ShuffleLoader2 from '../basic/SpecialLoader/ShuffleLoader2';
import { SparklesText } from '../magic-ui/SparklesText';
import { thoughtLeadershipPosts } from '../../constants/blogData';

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

const defaultArticles = {
    aiExperiment: [
        {
            fields: {
                title: "Synthetic Data for Computer Vision",
                description: "Generating 700 YOLO Images in an Hour with mAP50 0.96 — No Real Images Required.",
                category: "ai-experiments",
                mainImage: [{ url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&auto=format&fit=crop&q=80" }]
            }
        },
        {
            fields: {
                title: "Stop Paying for Scrapers (NeoCrawl)",
                description: "Why ScrapeGraphAI and adaptive crawling beat brittle selectors and third-party APIs.",
                category: "ai-experiments",
                mainImage: [{ url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80" }]
            }
        }
    ],
    llm: [
        {
            fields: {
                title: "Multi-Agent Orchestration Deep Dive",
                description: "How We Cut VRAM Usage from 92GB to Under 10GB Using Sakana Fugu-Inspired Techniques.",
                category: "llm",
                mainImage: [{ url: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80" }]
            }
        },
        {
            fields: {
                title: "Collective Intelligence as Next Paradigm",
                description: "How agent swarms outperform solo models on complex reasoning and constrained optimization.",
                category: "llm",
                mainImage: [{ url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80" }]
            }
        }
    ],
    research: [
        {
            fields: {
                title: "Why We MIT-Licensed Our Control Deck",
                description: "Event-driven visibility should be a right, not a subscription. Transparent AI runtime steering.",
                category: "research",
                mainImage: [{ url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" }]
            }
        },
        {
            fields: {
                title: "Agentic ARC Generalization",
                description: "Solving abstraction and reasoning benchmarks with self-reflective search trees under tight constraints.",
                category: "research",
                mainImage: [{ url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" }]
            }
        }
    ]
};

const OurBlogs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const [sections, setSections] = useState({
        aiExperiment: { data: defaultArticles.aiExperiment, hasFetched: false, expanded: false },
        llm: { data: defaultArticles.llm, hasFetched: false, expanded: false },
        research: { data: defaultArticles.research, hasFetched: false, expanded: false },
    });

    const activeKey = sectionKeys[activeIndex];

    useEffect(() => {
        const fetchInitialData = async (key) => {
            if (!import.meta.env.VITE_AIRTABLE_BASE_ID || !import.meta.env.VITE_AIRTABLE_API_KEY) {
                return;
            }
            if (sections[key].hasFetched) return;

            setIsLoading(true);
            try {
                const category = categoryMap[key];
                const url = `${API_URL}/Labs_Posts?filterByFormula={category}="${category}"&maxRecords=7&sort[0][field]=publishedDate&sort[0][direction]=desc&fields[]=title&fields[]=description&fields[]=category&fields[]=mainImage`;
                const response = await axios.get(url, config);

                if (response && response.data && response.data.records && response.data.records.length > 0) {
                    setSections(prev => ({
                        ...prev,
                        [key]: {
                            ...prev[key],
                            data: response.data.records,
                            hasFetched: true,
                            expanded: false,
                        },
                    }));
                }
                setTimeout(() => setIsLoading(false), 500);
            } catch (error) {
                console.error(`Error fetching data for ${key}:`, error);
                setIsLoading(false);
            }
        };

        fetchInitialData(activeKey);
    }, [activeIndex]);

    return (
        <div className='mt-20'>
            <div className="flex mb-10 mx-auto">
                <div className="flex items-end justify-center gap-2 md:gap-4 text-xl md:text-4xl font-semibold text-white text-center mx-auto mb-10">
                    Thought<SparklesText>LEADERSHIP</SparklesText>
                </div>
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
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6'>
                                {sections[activeKey].data.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        <Card item={item} />
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">No articles available</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurBlogs;
