import { useState, useEffect } from 'react';
import { Section } from '../../types/layoutConfig';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface GallerySlideshowProps {
  section: Section;
}

interface SlideshowImage {
  id: number;
  title: string;
  subtitle: string;
  color: string;
}

export default function GallerySlideshow({ section }: GallerySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const images: SlideshowImage[] = [
    { id: 1, title: 'Ethereal Landscapes', subtitle: 'Capturing nature\'s beauty', color: 'bg-gradient-to-br from-blue-500 to-purple-600' },
    { id: 2, title: 'Urban Pulse', subtitle: 'City life unfolds', color: 'bg-gradient-to-br from-gray-800 to-gray-900' },
    { id: 3, title: 'Serene Forests', subtitle: 'Quiet moments in nature', color: 'bg-gradient-to-br from-green-600 to-teal-700' },
    { id: 4, title: 'Coastal Wonders', subtitle: 'Where waves meet shore', color: 'bg-gradient-to-br from-cyan-400 to-blue-500' },
    { id: 5, title: 'Desert Horizons', subtitle: 'Golden dunes under sky', color: 'bg-gradient-to-br from-yellow-500 to-orange-600' },
    { id: 6, title: 'Neon Nights', subtitle: 'City lights and stars', color: 'bg-gradient-to-br from-purple-700 to-pink-600' },
    { id: 7, title: 'Mountain Majesty', subtitle: 'Peaks touch the clouds', color: 'bg-gradient-to-br from-gray-600 to-gray-800' },
    { id: 8, title: 'Cherry Blossoms', subtitle: 'Spring\'s delicate beauty', color: 'bg-gradient-to-br from-pink-400 to-rose-500' },
    { id: 9, title: 'Aurora Dance', subtitle: 'Northern lights display', color: 'bg-gradient-to-br from-green-400 to-blue-600' },
    { id: 10, title: 'Golden Hour', subtitle: 'Perfect light captured', color: 'bg-gradient-to-br from-orange-400 to-red-500' },
    { id: 11, title: 'Starry Skies', subtitle: 'Cosmic wonder above', color: 'bg-gradient-to-br from-indigo-900 to-purple-900' },
    { id: 12, title: 'Misty Valleys', subtitle: 'Cloud-covered peaks', color: 'bg-gradient-to-br from-gray-400 to-blue-300' },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const current = images[currentIndex];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div className={`${current.color} aspect-video w-full`} />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-center">{current.title}</h1>
            <p className="text-2xl text-white/80 text-center">{current.subtitle}</p>
          </div>

          <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
            title="Previous"
          >
            <SkipBack size={24} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white hover:bg-gray-100 text-black p-4 rounded-full transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
          </button>

          <button
            onClick={goToNext}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
            title="Next"
          >
            <SkipForward size={24} />
          </button>
        </div>

        <div className="mt-12">
          <div className="flex gap-3 justify-center flex-wrap">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-12'
                    : 'bg-gray-600 hover:bg-gray-500 w-3'
                }`}
                title={image.title}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-gray-400 text-sm mb-2">Current Slide</p>
              <p className="text-4xl font-bold text-white">{currentIndex + 1}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Total Slides</p>
              <p className="text-4xl font-bold text-white">{images.length}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Status</p>
              <p className="text-2xl font-bold text-white">{isPlaying ? 'Playing' : 'Paused'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
