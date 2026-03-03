import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../../types/layoutConfig';

interface GalleryMinimalProps {
  section: Section;
}

const images = [
  'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg',
  'https://images.pexels.com/photos/1721933/pexels-photo-1721933.jpeg',
  'https://images.pexels.com/photos/2577282/pexels-photo-2577282.jpeg',
  'https://images.pexels.com/photos/2696060/pexels-photo-2696060.jpeg',
];

export default function GalleryMinimal({ section }: GalleryMinimalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">
          Our Moments
        </h2>

        <div className="flex justify-center mb-16">
          <div className="h-px w-16 bg-gray-300" />
        </div>

        <div className="relative w-full h-96 md:h-[600px] bg-gray-100 rounded-sm overflow-hidden mb-8">
          <img
            src={images[currentIndex]}
            alt={`Wedding moment ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </section>
  );
}
