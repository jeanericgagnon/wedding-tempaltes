import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { ArrowRight, Eye } from 'lucide-react';

interface GalleryFeaturedProps {
  section: Section;
}

interface FeaturedImage {
  id: number;
  title: string;
  description: string;
  color: string;
  views: number;
  featured: boolean;
}

export default function GalleryFeatured({ section }: GalleryFeaturedProps) {
  const [images, setImages] = useState<FeaturedImage[]>([
    { id: 1, title: 'Featured Moment', description: 'Capturing the essence of light', color: 'bg-gradient-to-br from-purple-500 to-indigo-600', views: 2847, featured: true },
    { id: 2, title: 'Urban Canvas', description: 'City streets and life', color: 'bg-gradient-to-br from-red-500 to-pink-500', views: 1523, featured: false },
    { id: 3, title: 'Nature Call', description: 'Wilderness untamed', color: 'bg-gradient-to-br from-green-500 to-emerald-600', views: 1204, featured: false },
    { id: 4, title: 'Ocean Depths', description: 'Sea and serenity', color: 'bg-gradient-to-br from-blue-500 to-cyan-500', views: 945, featured: false },
    { id: 5, title: 'Mountain Vista', description: 'Peak perspectives', color: 'bg-gradient-to-br from-amber-500 to-orange-600', views: 812, featured: false },
    { id: 6, title: 'Urban Nights', description: 'City lights dancing', color: 'bg-gradient-to-br from-slate-600 to-slate-900', views: 1678, featured: false },
    { id: 7, title: 'Golden Fields', description: 'Summer harvest', color: 'bg-gradient-to-br from-yellow-400 to-amber-500', views: 723, featured: false },
    { id: 8, title: 'Forest Path', description: 'Walking through wilderness', color: 'bg-gradient-to-br from-teal-500 to-green-600', views: 1089, featured: false },
    { id: 9, title: 'Desert Dreams', description: 'Sand and shadows', color: 'bg-gradient-to-br from-orange-400 to-red-600', views: 634, featured: false },
    { id: 10, title: 'Northern Lights', description: 'Aurora borealis', color: 'bg-gradient-to-br from-green-400 to-cyan-500', views: 3421, featured: false },
    { id: 11, title: 'Coastal Beauty', description: 'Where land meets water', color: 'bg-gradient-to-br from-blue-400 to-purple-500', views: 876, featured: false },
    { id: 12, title: 'Starry Night', description: 'Cosmic wonder', color: 'bg-gradient-to-br from-indigo-900 to-purple-900', views: 2156, featured: false },
  ]);

  const featured = images.find(img => img.featured);
  const others = images.filter(img => !img.featured);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-2">Featured Collection</h2>
          <p className="text-gray-600">Discover our curated highlights and most viewed works</p>
        </div>

        {featured && (
          <div className="mb-16 group cursor-pointer">
            <div className={`${featured.color} aspect-video rounded-xl shadow-2xl mb-6 overflow-hidden relative`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-white/0 group-hover:text-white/80 text-sm mb-2 transition-all">Featured Image</p>
                  <h3 className="text-4xl font-bold text-white mb-2">{featured.title}</h3>
                  <p className="text-white/90 text-lg">{featured.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{featured.title}</h3>
                <p className="text-gray-600 mt-1">{featured.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Eye size={20} />
                  <span className="text-lg font-semibold">{featured.views.toLocaleString()}</span>
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                  View <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(image => (
              <div key={image.id} className="group cursor-pointer">
                <div className={`${image.color} aspect-video rounded-lg shadow-lg overflow-hidden relative mb-4 transition-transform duration-300 hover:shadow-xl hover:scale-105`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ArrowRight size={32} className="text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-lg group-hover:text-gray-700">{image.title}</h4>
                  <p className="text-sm text-gray-600">{image.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Eye size={16} />
                    <span>{image.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-700 text-lg">
            <span className="font-bold text-gray-900">{images.length}</span> total images in collection
          </p>
        </div>
      </div>
    </section>
  );
}
