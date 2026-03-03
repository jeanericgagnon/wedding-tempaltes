import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface GalleryFilmstripProps {
  section: Section;
}

interface FilmstripImage {
  id: number;
  title: string;
  duration: string;
  color: string;
}

export default function GalleryFilmstrip({ section }: GalleryFilmstripProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedId, setSelectedId] = useState(1);

  const images: FilmstripImage[] = [
    { id: 1, title: 'Scene One', duration: '2:34', color: 'bg-red-500' },
    { id: 2, title: 'Scene Two', duration: '1:45', color: 'bg-blue-500' },
    { id: 3, title: 'Scene Three', duration: '3:12', color: 'bg-purple-500' },
    { id: 4, title: 'Scene Four', duration: '2:08', color: 'bg-green-500' },
    { id: 5, title: 'Scene Five', duration: '2:56', color: 'bg-yellow-500' },
    { id: 6, title: 'Scene Six', duration: '1:32', color: 'bg-pink-500' },
    { id: 7, title: 'Scene Seven', duration: '2:41', color: 'bg-indigo-500' },
    { id: 8, title: 'Scene Eight', duration: '3:05', color: 'bg-orange-500' },
    { id: 9, title: 'Scene Nine', duration: '2:19', color: 'bg-teal-500' },
    { id: 10, title: 'Scene Ten', duration: '2:47', color: 'bg-cyan-500' },
    { id: 11, title: 'Scene Eleven', duration: '1:58', color: 'bg-amber-500' },
    { id: 12, title: 'Scene Twelve', duration: '3:33', color: 'bg-emerald-500' },
  ];

  const selected = images.find(img => img.id === selectedId);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('filmstrip-container');
    if (!container) return;
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-2">Film Gallery</h2>
          <p className="text-gray-400">Browse through our collection frame by frame</p>
        </div>

        {selected && (
          <div className="mb-12">
            <div className={`${selected.color} aspect-video rounded-lg shadow-2xl mb-6 overflow-hidden relative flex items-center justify-center`}>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all">
                <Play size={40} className="text-white fill-white" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white">{selected.title}</h3>
                <p className="text-gray-400 mt-2 text-lg">Duration: {selected.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm mb-2">Image {selectedId} of {images.length}</p>
                <div className="bg-gray-800 rounded-lg px-4 py-2">
                  <p className="text-white font-mono">{selectedId.toString().padStart(2, '0')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-900" />
          </button>

          <div
            id="filmstrip-container"
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedId(image.id)}
                className={`flex-shrink-0 cursor-pointer group relative transition-all ${
                  selectedId === image.id ? 'ring-4 ring-white' : 'hover:ring-2 hover:ring-gray-500'
                }`}
              >
                <div className={`${image.color} w-32 h-24 rounded-lg shadow-lg overflow-hidden relative flex items-center justify-center`}>
                  <Play size={20} className="text-white/60 fill-white/60" />
                </div>
                <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/30 rounded-lg transition-colors flex items-end p-2 ${selectedId === image.id ? 'bg-black/40' : ''}`}>
                  <span className="text-white text-xs font-mono">{image.duration}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-colors"
          >
            <ChevronRight size={24} className="text-gray-900" />
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Total Scenes</p>
            <p className="text-3xl font-bold text-white">{images.length}</p>
          </div>
          <div className="w-px h-12 bg-gray-700"></div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Selected</p>
            <p className="text-3xl font-bold text-white">{selectedId}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
