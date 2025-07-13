/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import ImageGallery from './ImageGallery';
import ResearchLinks from './ResearchLinks';
import RelatedPosts from './RelatedPosts';
import CodeSnippets from './CodeSnippets';
import EngagementSection from './EngagementSection';
import NewsLetterSubscribe from './rigthSectionComponents/NewsLetterSubscribe';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ShuffleLoader2 from '../basic/SpecialLoader/ShuffleLoader2';

const API_URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}`;
const TABLE_NAME = "Labs_Posts"
const config = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    },
};

const BlogDetails = ({ blog }) => {
    const { id } = useParams();
    const [postData, setPostData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}/${TABLE_NAME}/${id}`, config);
                setPostData(res.data.fields);
                console.log(res.data.fields)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className='h-screen'>
                <ShuffleLoader2 />
            </div>
        )
    }

    if (error) {
        return (
            <div className='h-screen'>
                <p className='text-white'>
                    Error Occured
                </p>
            </div>
        )
    }

    return (
        <div className="max-w-7xl w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <BlogHeader blog={postData} />

            <div className='grid grid-cols-8 max-md:gap-2 gap-4 mt-8'>
                <div className="max-md:order-2 col-span-8  md:col-span-5 lg:col-span-6 rounded shadow-black overflow-hidden border  shadow-inner px-4">
                    <BlogContent content={postData.content} />

                    {postData.galleryImages.length > 0 && (
                        <div className="py-6 px-2 border-t border-gray-800">
                            <h2 className="text-xl font-semibold text-gray-200 mb-4">Gallery</h2>
                            <ImageGallery images={postData.galleryImages} />
                        </div>
                    )}

                    {postData.codeSnippets && (
                        <div className="py-6 px-2 border-t border-gray-800">
                            <h2 className="text-xl font-semibold text-gray-200 mb-4">Code Snippets</h2>
                            <CodeSnippets snippets={[{
                                language: 'javascript',
                                code: postData.codeSnippets
                            }]} />
                        </div>
                    )}

                    {blog.researchLinks.length > 0 && (
                        <div className="py-6 px-2 border-t border-gray-800">
                            <h2 className="text-xl font-semibold text-gray-200 mb-4">Research Links</h2>
                            <ResearchLinks links={blog.researchLinks} />
                        </div>
                    )}

                    {blog.relatedPosts.length > 0 && (
                        <div className="py-6 px-2 border-t border-gray-800">
                            <h2 className="text-xl font-semibold text-gray-200 mb-4">Related Topics</h2>
                            <RelatedPosts posts={blog.relatedPosts} />
                        </div>
                    )}
                </div>
                <div className='max-md:order-1 col-span-8 md:col-span-3 lg:col-span-2'>
                    <EngagementSection />
                </div>
                <NewsLetterSubscribe className={'md:hidden col-span-8 order-3'} />
            </div>
        </div>
    );
};

export default BlogDetails;