import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { Star, Camera } from 'lucide-react';

interface GallerySpotlightProps {
  section: Section;
}

interface SpotlightImage {
  id: number;
  title: string;
  description: string;
  color: string;
  featured: boolean;
  rating: number;
}

export default function GallerySpotlight({ section }: GallerySpotlightProps) {
  const [selectedId, setSelectedId] = useState(1);

  const images: SpotlightImage[] = [
    { id: 1, title: 'Ethereal Light', description: 'A moment of pure magic captured in time', color: 'bg-gradient-to-br from-purple-500 to-indigo-600', featured: true, rating: 5 },
    { id: 2, title: 'Urban Rhythm', description: 'The pulse of the city', color: 'bg-gradient-to-br from-gray-700 to-gray-900', featured: false, rating: 4.5 },
    { id: 3, title: 'Nature Whispers', description: 'Secrets of the forest', color: 'bg-gradient-to-br from-green-600 to-teal-700', featured: false, rating: 4.8 },
    { id: 4, title: 'Coastal Dreams', description: 'Where sea meets sky', color: 'bg-gradient-to-br from-blue-400 to-cyan-500', featured: false, rating: 4.7 },
    { id: 5, title: 'Desert Fire', description: 'Burning horizons', color: 'bg-gradient-to-br from-orange-500 to-red-600', featured: false, rating: 4.6 },
    { id: 6, title: 'Aurora Magic', description: 'Dancing lights from the north', color: 'bg-gradient-to-br from-green-400 to-blue-600', featured: false, rating: 4.9 },
    { id: 7, title: 'Midnight Dreams', description: 'City sleeps but beauty wakes', color: 'bg-gradient-to-br from-purple-700 to-pink-600', featured: false, rating: 4.4 },
    { id: 8, title: 'Golden Hour', description: 'Perfect light at perfect time', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', featured: false, rating: 4.8 },
    { id: 9, title: 'Mountain Echo', description: 'Peaks calling out to sky', color: 'bg-gradient-to-br from-gray-600 to-gray-800', featured: false, rating: 4.5 },
    { id: 10, title: 'Misty Valley', description: 'Lost in the fog', color: 'bg-gradient-to-br from-blue-300 to-purple-400', featured: false, rating: 4.7 },
    { id: 11, title: 'Tropical Paradise', description: 'Island life captured', color: 'bg-gradient-to-br from-emerald-500 to-cyan-600', featured: false, rating: 4.6 },
    { id: 12, title: 'Silhouette Story', description: 'When darkness tells a tale', color: 'bg-gradient-to-br from-orange-600 to-red-700', featured: false, rating: 4.8 },
  ];

  const selected = images.find(img => img.id === selectedId);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-2">Gallery Spotlight</h2>
          <p className="text-gray-400">Featuring the finest moments in our collection</p>
        </div>

        {selected && (
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className={`${selected.color} aspect-video w-full`} />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-end justify-end p-8">
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(selected.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'}
                      />
                    ))}
                  </div>
                  <h1 className="text-5xl font-bold text-white mb-3">{selected.title}</h1>
                  <p className="text-gray-200 text-lg max-w-2xl ml-auto">{selected.description}</p>
                </div>
              </div>

              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 text-white">
                <Camera size={18} />
                <span className="text-sm font-semibold">Featured</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div>
                <p className="text-gray-400 text-sm mb-1">Rating</p>
                <p className="text-3xl font-bold text-white">{selected.rating} / 5.0</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Image ID</p>
                <p className="text-3xl font-bold text-white">#{selected.id.toString().padStart(2, '0')}</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Status</p>
                <p className="text-lg font-bold text-white">Highlighted</p>
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Browse Collection</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className={`group relative rounded-lg overflow-hidden transition-all ${
                  selectedId === image.id ? 'ring-4 ring-white scale-105' : 'hover:scale-110'
                }`}
              >
                <div className={`${image.color} aspect-square`} />

                <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center ${
                  selectedId === image.id ? 'bg-black/20' : ''
                }`}>
                  {selectedId === image.id && (
                    <div className="flex items-center justify-center">
                      <Star size={28} className="fill-white text-white" />
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 flex flex-col items-end justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 rounded px-2 py-1">
                    <p className="text-xs font-semibold text-gray-900">{image.rating}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Total Images</p>
            <p className="text-4xl font-bold text-white">{images.length}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Avg Rating</p>
            <p className="text-4xl font-bold text-yellow-400">
              {(images.reduce((sum, img) => sum + img.rating, 0) / images.length).toFixed(1)}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Currently Viewing</p>
            <p className="text-4xl font-bold text-white">#{selectedId}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
