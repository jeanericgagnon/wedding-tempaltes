import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface GalleryInstagramProps {
  section: Section;
}

interface InstagramImage {
  id: number;
  title: string;
  likes: number;
  comments: number;
  color: string;
  liked: boolean;
  caption: string;
}

export default function GalleryInstagram({ section }: GalleryInstagramProps) {
  const [images, setImages] = useState<InstagramImage[]>([
    { id: 1, title: 'Golden Hour', likes: 2847, comments: 156, color: 'bg-gradient-to-br from-yellow-300 to-orange-500', liked: false, caption: 'Chasing sunsets and dreams' },
    { id: 2, title: 'City Vibes', likes: 1923, comments: 98, color: 'bg-gradient-to-br from-slate-600 to-slate-900', liked: false, caption: 'Urban exploration' },
    { id: 3, title: 'Nature Walk', likes: 3102, comments: 234, color: 'bg-gradient-to-br from-green-500 to-emerald-600', liked: false, caption: 'Find peace in nature' },
    { id: 4, title: 'Beach Life', likes: 2456, comments: 167, color: 'bg-gradient-to-br from-blue-400 to-cyan-400', liked: false, caption: 'Salt life' },
    { id: 5, title: 'Night Out', likes: 1834, comments: 112, color: 'bg-gradient-to-br from-purple-600 to-indigo-700', liked: false, caption: 'City lights' },
    { id: 6, title: 'Coffee Art', likes: 2103, comments: 189, color: 'bg-gradient-to-br from-amber-700 to-amber-900', liked: false, caption: 'Morning essentials' },
    { id: 7, title: 'Mountain Peak', likes: 3421, comments: 267, color: 'bg-gradient-to-br from-gray-700 to-gray-900', liked: false, caption: 'On top of the world' },
    { id: 8, title: 'Sunset Silhouette', likes: 2678, comments: 198, color: 'bg-gradient-to-br from-pink-500 to-orange-600', liked: false, caption: 'End of a perfect day' },
    { id: 9, title: 'Forest Green', likes: 1945, comments: 143, color: 'bg-gradient-to-br from-teal-600 to-green-700', liked: false, caption: 'Lost in the woods' },
    { id: 10, title: 'Neon Dreams', likes: 2589, comments: 201, color: 'bg-gradient-to-br from-pink-600 to-purple-700', liked: false, caption: 'Retro vibes' },
    { id: 11, title: 'Desert Dunes', likes: 1756, comments: 134, color: 'bg-gradient-to-br from-orange-400 to-red-500', liked: false, caption: 'Sand and sun' },
    { id: 12, title: 'Starry Sky', likes: 3345, comments: 289, color: 'bg-gradient-to-br from-indigo-900 to-purple-900', liked: false, caption: 'Under the stars' },
  ]);

  const toggleLike = (id: number) => {
    setImages(images.map(img =>
      img.id === id ? { ...img, liked: !img.liked, likes: img.liked ? img.likes - 1 : img.likes + 1 } : img
    ));
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-2">@gallery</h2>
          <p className="text-gray-600 text-lg">Follow our latest visual stories</p>
          <p className="text-sm text-gray-500 mt-3">{images.length} Posts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${image.color} aspect-square relative group cursor-pointer`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-6 text-white">
                    <div className="flex flex-col items-center">
                      <Heart size={28} className="fill-white mb-2" />
                      <span className="text-sm font-semibold">{image.likes}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MessageCircle size={28} className="mb-2" />
                      <span className="text-sm font-semibold">{image.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-3 border-b pb-3">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.caption}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => toggleLike(image.id)}
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Heart
                      size={20}
                      className={image.liked ? 'fill-red-600 text-red-600' : ''}
                    />
                    <span className="text-sm font-medium">{image.likes}</span>
                  </button>

                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle size={20} />
                    <span className="text-sm font-medium">{image.comments}</span>
                  </button>

                  <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>

                <div className="flex gap-1">
                  <div className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">#photo</div>
                  <div className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">#gallery</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
