import React from 'react';
import { Clock, Eye, Calendar } from 'lucide-react';
import { TextGenerateEffect } from '../accernity/text-generate-effect';
import { TypingAnimation } from '../magic-ui/TypingAnimation';



const BlogHeader = ({ blog }) => {
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            compactDisplay: 'short'
        }).format(num);
    };

    return (
        <div className="max-md:mb-2 mb-8">
            <div className="h-80 md:h-96 w-full rounded-xl overflow-hidden relative mb-6">
                <img
                    src={blog.mainImage[0].url}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                    <div className="flex gap-2 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-900 text-indigo-200">
                            {blog.category}
                        </span>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${blog.status === 'Published'
                            ? 'bg-green-900 text-green-200'
                            : 'bg-yellow-900 text-yellow-200'
                            }`}>
                            {blog.status}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        <TypingAnimation>{blog.title}</TypingAnimation>
                    </h1>
                </div>
            </div>

            <p className=" text-gray-300 mb-4">
                {blog.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                    <Clock size={16} className="text-indigo-400" />
                    <span>{blog.readingTime} min read</span>
                </div>

                <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-indigo-400" />
                    <span>Published {formatDate(blog.publishedDate)}</span>
                </div>

                {blog.lastUpdated !== blog.publishedDate && (
                    <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-indigo-400" />
                        <span>Updated {formatDate(blog.lastUpdated)}</span>
                    </div>
                )}

                <div className="flex items-center gap-1">
                    <Eye size={16} className="text-indigo-400" />
                    <span>{formatNumber(blog.views)} views</span>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;