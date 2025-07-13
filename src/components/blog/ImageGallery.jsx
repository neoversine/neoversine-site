import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images }) => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollContainerRef.current) return;

        const { current: container } = scrollContainerRef;
        const scrollAmount = container.clientWidth * 0.8;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group">
            {images.length > 1 && (
                <>
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white shadow-md rounded-full p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white shadow-md rounded-full p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}

            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-[260px] h-40 md:h-52 flex-shrink-0 rounded-lg overflow-hidden snap-start"
                    >
                        <img
                            src={image.url}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;