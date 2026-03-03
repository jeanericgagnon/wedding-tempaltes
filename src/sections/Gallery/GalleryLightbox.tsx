import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryLightboxProps {
  section: Section;
}

interface LightboxImage {
  id: number;
  title: string;
  description: string;
  color: string;
}

export default function GalleryLightbox({ section }: GalleryLightboxProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const images: LightboxImage[] = [
    { id: 1, title: 'Alpine Summit', description: 'Breathtaking mountain views at sunrise', color: 'bg-gradient-to-br from-blue-600 to-purple-600' },
    { id: 2, title: 'Urban Streets', description: 'City life captured in motion', color: 'bg-gradient-to-br from-gray-700 to-gray-900' },
    { id: 3, title: 'Forest Dreams', description: 'Walking through ancient woodlands', color: 'bg-gradient-to-br from-green-600 to-teal-600' },
    { id: 4, title: 'Coastal Paradise', description: 'Where the sea meets the shore', color: 'bg-gradient-to-br from-cyan-400 to-blue-500' },
    { id: 5, title: 'Desert Mirage', description: 'Sand dunes under starlight', color: 'bg-gradient-to-br from-orange-500 to-yellow-600' },
    { id: 6, title: 'Night City', description: 'Urban nightscape with neon lights', color: 'bg-gradient-to-br from-purple-700 to-pink-600' },
    { id: 7, title: 'Waterfall Flow', description: 'Cascading waters in jungle realm', color: 'bg-gradient-to-br from-emerald-500 to-cyan-500' },
    { id: 8, title: 'Cherry Blossom', description: 'Spring in full bloom', color: 'bg-gradient-to-br from-pink-400 to-purple-400' },
    { id: 9, title: 'Northern Lights', description: 'Aurora borealis dance', color: 'bg-gradient-to-br from-green-400 to-blue-600' },
    { id: 10, title: 'Silhouette Sunset', description: 'Perfect end of day', color: 'bg-gradient-to-br from-pink-500 to-orange-600' },
    { id: 11, title: 'Galaxy View', description: 'Cosmic wonder above', color: 'bg-gradient-to-br from-indigo-900 to-purple-900' },
    { id: 12, title: 'Misty Morning', description: 'Fog rolling through valleys', color: 'bg-gradient-to-br from-gray-400 to-blue-300' },
  ];

  const selected = images.find(img => img.id === selectedId);
  const selectedIndex = images.findIndex(img => img.id === selectedId);

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      setSelectedId(images[selectedIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedId(images[selectedIndex + 1].id);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-2">Lightbox Gallery</h2>
          <p className="text-gray-400">Click any image to open the lightbox viewer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="group text-left"
            >
              <div className={`${image.color} aspect-square rounded-lg shadow-lg overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <Maximize2
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <h3 className="mt-3 font-semibold text-white text-lg group-hover:text-gray-300 transition-colors">{image.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{image.description}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedId && selected && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedId(null)}
            className="absolute top-6 right-6 bg-white hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
          >
            <X size={24} className="text-gray-900" />
          </button>

          <button
            onClick={handlePrevious}
            disabled={selectedIndex === 0}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 disabled:bg-white/10 text-white p-2 rounded-full transition-all disabled:opacity-50"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex flex-col items-center max-w-4xl w-full">
            <div className={`${selected.color} w-full aspect-video rounded-lg shadow-2xl mb-8 overflow-hidden`} />

            <div className="bg-gray-900 rounded-lg p-8 w-full border border-gray-800">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selected.title}</h2>
                  <p className="text-gray-400 text-lg">{selected.description}</p>
                </div>
                <div className="text-right bg-gray-800 rounded-lg px-4 py-2">
                  <p className="text-gray-400 text-sm">Image</p>
                  <p className="text-white text-2xl font-bold">{selectedIndex + 1}/{images.length}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6">
                <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all"
                    style={{ width: `${((selectedIndex + 1) / images.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={selectedIndex === images.length - 1}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 disabled:bg-white/10 text-white p-2 rounded-full transition-all disabled:opacity-50"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
