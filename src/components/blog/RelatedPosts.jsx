import React from 'react';



const RelatedPosts = ({ posts }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {posts.map((post, index) => (
                <a
                    key={index}
                    href="#"
                    className="px-4 py-2 bg-indigo-900/30 hover:bg-indigo-800/50 text-indigo-300 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 border border-indigo-800/50"
                >
                    {post}
                </a>
            ))}
        </div>
    );
};

export default RelatedPosts;