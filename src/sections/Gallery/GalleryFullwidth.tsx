import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryFullwidthProps {
  section: Section;
}

export default function GalleryFullwidth({ section }: GalleryFullwidthProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = section.bindings?.images || [
    'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg',
    'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg',
  ];

  const captions = section.bindings?.captions || [
    'Our beautiful journey begins',
    'Moments of connection',
    'Love in every frame',
  ];

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedIndex !== null) {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    }
  };

  return (
    <section className="py-0">
      <div className="space-y-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative h-screen w-full overflow-hidden cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image}
              alt={captions[index] || `Gallery ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-300" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 hover:bg-white transition-colors">
                <span className="text-sm font-light text-gray-900">View</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-serif font-light mb-2">{captions[index]}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span>{index + 1}</span>
                <div className="h-0.5 w-8 bg-white/30" />
                <span>{images.length}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          tabIndex={0}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors transform hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <img
              src={images[selectedIndex]}
              alt={captions[selectedIndex] || `Gallery ${selectedIndex + 1}`}
              className="max-w-4xl max-h-96 md:max-h-[80vh] object-contain animate-fade-in"
            />

            <button
              onClick={handleNext}
              className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors transform hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <h3 className="text-xl font-serif font-light text-white mb-4">{captions[selectedIndex]}</h3>
              <div className="flex items-center justify-center gap-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(i);
                    }}
                    className={`h-2 transition-all duration-300 ${
                      i === selectedIndex
                        ? 'bg-white w-8'
                        : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
