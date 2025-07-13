import React from 'react'

const NewsLetterSubscribe = ({ className }) => {
    return (
        <div className={`p-3 bg-gradient-to-br from-black/40 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg ${className}`}>
            <h4 className="text-sm font-semibold text-white mb-1">Subscribe to Newsletter</h4>
            <p className="text-xs text-white/60 mb-2">Get the latest updates directly in your inbox.</p>
            <div className="space-y-1.5">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-1.5 bg-black/30 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <button className="w-full px-3 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg hover:opacity-90 transition-opacity">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default NewsLetterSubscribe