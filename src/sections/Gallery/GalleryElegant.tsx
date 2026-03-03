import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { Search, Heart } from 'lucide-react';

interface GalleryElegantProps {
  section: Section;
}

interface ImageItem {
  id: number;
  title: string;
  category: string;
  color: string;
  liked: boolean;
}

export default function GalleryElegant({ section }: GalleryElegantProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [images, setImages] = useState<ImageItem[]>([
    { id: 1, title: 'Minimalist Architecture', category: 'architecture', color: 'bg-slate-400', liked: false },
    { id: 2, title: 'Urban Landscape', category: 'landscape', color: 'bg-blue-400', liked: false },
    { id: 3, title: 'Modern Design', category: 'architecture', color: 'bg-gray-500', liked: false },
    { id: 4, title: 'Serene Nature', category: 'landscape', color: 'bg-emerald-400', liked: false },
    { id: 5, title: 'City Life', category: 'street', color: 'bg-amber-400', liked: false },
    { id: 6, title: 'Golden Hour', category: 'landscape', color: 'bg-orange-400', liked: false },
    { id: 7, title: 'Urban Geometry', category: 'architecture', color: 'bg-indigo-400', liked: false },
    { id: 8, title: 'Street Moments', category: 'street', color: 'bg-rose-400', liked: false },
    { id: 9, title: 'Industrial Style', category: 'architecture', color: 'bg-neutral-500', liked: false },
    { id: 10, title: 'Natural Beauty', category: 'landscape', color: 'bg-teal-400', liked: false },
    { id: 11, title: 'Urban Culture', category: 'street', color: 'bg-purple-400', liked: false },
    { id: 12, title: 'Sunset Views', category: 'landscape', color: 'bg-pink-400', liked: false },
  ]);

  const categories = ['all', 'architecture', 'landscape', 'street'];
  const filtered = selectedCategory === 'all' ? images : images.filter(img => img.category === selectedCategory);

  const toggleLike = (id: number) => {
    setImages(images.map(img => img.id === id ? { ...img, liked: !img.liked } : img));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Elegant Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated collection of refined visual moments captured through an elegant lens
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm text-gray-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((image, idx) => (
            <div key={image.id} className="group cursor-pointer">
              <div className={`${image.color} aspect-square rounded-lg mb-4 shadow-lg overflow-hidden relative transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <button
                    onClick={() => toggleLike(image.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart
                      size={28}
                      className={image.liked ? 'fill-red-500 text-red-500' : 'text-white'}
                    />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-serif text-gray-900">{image.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-lg px-6 py-3 border border-gray-200">
            <p className="text-gray-700">
              Showing <span className="font-semibold">{filtered.length}</span> of <span className="font-semibold">{images.length}</span> images
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
