import React from 'react';
import { ExternalLink } from 'lucide-react';

const ResearchLinks = ({ links }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-[#242424] hover:bg-[#2a2a2a] text-gray-300 rounded-lg transition-colors duration-200 group border border-gray-700"
                >
                    <span>{link.label}</span>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-indigo-400 transition-colors" />
                </a>
            ))}
        </div>
    );
};

export default ResearchLinks;