import React, { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';
import { highlightCode } from '../../utils/codeHighlighter';



const CodeSnippets = ({ snippets }) => {
    console.log(snippets)
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = (code, index) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="space-y-4">
            {snippets.map((snippet, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-gray-700">
                    <div className="bg-[#242424] px-4 py-2 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">{snippet.language}</span>
                        <button
                            onClick={() => copyToClipboard(snippet.code, index)}
                            className="text-gray-400 hover:text-indigo-400 transition-colors p-1"
                            aria-label="Copy code"
                        >
                            {copiedIndex === index ? (
                                <div className="flex items-center gap-1 text-green-400">
                                    <Check size={16} />
                                    <span className="text-xs">Copied!</span>
                                </div>
                            ) : (
                                <ClipboardCopy size={16} />
                            )}
                        </button>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300">
                            <code
                                dangerouslySetInnerHTML={{
                                    __html: highlightCode(snippet.code, snippet.language)
                                }}
                            />
                        </pre>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CodeSnippets;