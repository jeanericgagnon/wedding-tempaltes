import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { Zap, Maximize2 } from 'lucide-react';

interface GalleryGridProps {
  section: Section;
}

interface GridImage {
  id: number;
  title: string;
  color: string;
  category: string;
}

export default function GalleryGrid({ section }: GalleryGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const images: GridImage[] = [
    { id: 1, title: 'Geometric Form', color: 'bg-gradient-to-br from-slate-600 to-slate-800', category: 'abstract' },
    { id: 2, title: 'Vibrant Energy', color: 'bg-gradient-to-br from-pink-500 to-red-600', category: 'colorful' },
    { id: 3, title: 'Cool Tone', color: 'bg-gradient-to-br from-blue-600 to-cyan-500', category: 'nature' },
    { id: 4, title: 'Warm Light', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', category: 'landscape' },
    { id: 5, title: 'Deep Forest', color: 'bg-gradient-to-br from-emerald-600 to-teal-700', category: 'nature' },
    { id: 6, title: 'Midnight Sky', color: 'bg-gradient-to-br from-indigo-900 to-purple-900', category: 'abstract' },
    { id: 7, title: 'Sunset Glow', color: 'bg-gradient-to-br from-orange-400 to-pink-600', category: 'landscape' },
    { id: 8, title: 'Ocean Wave', color: 'bg-gradient-to-br from-blue-400 to-purple-500', category: 'nature' },
    { id: 9, title: 'Urban Color', color: 'bg-gradient-to-br from-red-500 to-yellow-500', category: 'colorful' },
    { id: 10, title: 'Soft Pastels', color: 'bg-gradient-to-br from-purple-300 to-pink-300', category: 'abstract' },
    { id: 11, title: 'Nature Scene', color: 'bg-gradient-to-br from-green-500 to-blue-500', category: 'landscape' },
    { id: 12, title: 'Cosmic View', color: 'bg-gradient-to-br from-purple-600 to-blue-700', category: 'abstract' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Photo Grid</h2>
          <p className="text-gray-600 text-lg">Browse our complete collection in a classic grid layout</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-gray-700">
            <Zap size={20} className="text-yellow-500" />
            <span className="text-sm font-medium">{images.length} High-Quality Photos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
            >
              <div
                className={`${image.color} aspect-square rounded-lg shadow-md overflow-hidden relative transition-all duration-300 ${
                  hoveredId === image.id ? 'shadow-2xl scale-105' : 'hover:shadow-lg'
                }`}
              >
                <div className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${hoveredId === image.id ? 'bg-black/40' : 'group-hover:bg-black/20'}`} />

                <div className={`absolute inset-0 flex flex-col items-end justify-end p-4 transition-all duration-300 ${
                  hoveredId === image.id ? 'translate-x-0' : 'translate-x-2'
                }`}>
                  <button className={`bg-white hover:bg-gray-100 text-gray-900 rounded-full p-2 shadow-lg transition-all duration-300 ${
                    hoveredId === image.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <Maximize2 size={18} />
                  </button>
                </div>

                <div className={`absolute inset-0 flex flex-col items-start justify-end p-4 transition-all duration-300 ${
                  hoveredId === image.id ? 'translate-y-0' : 'translate-y-4'
                }`}>
                  <h3 className={`font-semibold transition-all duration-300 ${hoveredId === image.id ? 'text-white' : 'text-white/0'}`}>
                    {image.title}
                  </h3>
                  <p className={`text-sm transition-all duration-300 ${hoveredId === image.id ? 'text-white/80' : 'text-white/0'}`}>
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></div>
          <span className="text-gray-500 font-medium">All {images.length} Images</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
