import React from 'react';
import { renderMarkdown } from '../../utils/markdown';



const BlogContent = ({ content }) => {
    return (
        <div className="py-6 px-2">
            <div
                className=" prose max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-p:leading-7 prose-strong:font-semibold prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
        </div>
    );
};

export default BlogContent;