import React from 'react'

const LikesShare = () => {
    return (
        <div className="p-3 bg-gradient-to-br from-black/40 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg" >
            <div className="grid grid-cols-2 max-md:grid-cols-3 gap-2">
                <div className="max-md:hidden flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-default">
                    <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors">{'5 min'}</span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-default">
                    <svg className="w-3.5 h-3.5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors">{0}</span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-default">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors">{0}</span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-default">
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5 a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors">{0}</span>
                </div>
            </div>

            <div className="flex gap-1.5 mt-3 border-t border-white/5 pt-3">
                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                    <svg className="w-3.5 h-3.5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors">Tweet</span>
                </button>

                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                    <svg className="w-3.5 h-3.5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors">Facebook</span>
                </button>

                <button className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                    <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors">Instagram</span>
                </button>
            </div>
        </div >
    )
}

export default LikesShare