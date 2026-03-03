import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { RotateCcw, Trash2 } from 'lucide-react';

interface GalleryPolaroidProps {
  section: Section;
}

interface PolaroidPhoto {
  id: number;
  title: string;
  date: string;
  color: string;
  rotation: number;
}

export default function GalleryPolaroid({ section }: GalleryPolaroidProps) {
  const [photos, setPhotos] = useState<PolaroidPhoto[]>([
    { id: 1, title: 'Summer Days', date: 'July 2024', color: 'bg-gradient-to-br from-yellow-300 to-orange-400', rotation: -2 },
    { id: 2, title: 'Ocean Blue', date: 'August 2024', color: 'bg-gradient-to-br from-blue-400 to-cyan-300', rotation: 3 },
    { id: 3, title: 'Forest Path', date: 'June 2024', color: 'bg-gradient-to-br from-green-500 to-emerald-400', rotation: -1 },
    { id: 4, title: 'City Lights', date: 'September 2024', color: 'bg-gradient-to-br from-purple-600 to-indigo-500', rotation: 2 },
    { id: 5, title: 'Mountain Peak', date: 'May 2024', color: 'bg-gradient-to-br from-gray-500 to-gray-700', rotation: -3 },
    { id: 6, title: 'Desert Rose', date: 'April 2024', color: 'bg-gradient-to-br from-red-400 to-pink-500', rotation: 1 },
    { id: 7, title: 'Night Stars', date: 'October 2024', color: 'bg-gradient-to-br from-indigo-900 to-purple-800', rotation: -2 },
    { id: 8, title: 'Morning Glory', date: 'March 2024', color: 'bg-gradient-to-br from-pink-300 to-purple-400', rotation: 2 },
    { id: 9, title: 'Autumn Leaves', date: 'November 2024', color: 'bg-gradient-to-br from-orange-500 to-yellow-600', rotation: -1 },
    { id: 10, title: 'Snowy Day', date: 'December 2024', color: 'bg-gradient-to-br from-blue-200 to-cyan-200', rotation: 3 },
    { id: 11, title: 'Spring Bloom', date: 'February 2024', color: 'bg-gradient-to-br from-pink-400 to-rose-300', rotation: -2 },
    { id: 12, title: 'Sunset Gold', date: 'January 2024', color: 'bg-gradient-to-br from-yellow-500 to-orange-600', rotation: 1 },
  ]);

  const rotatePhoto = (id: number) => {
    setPhotos(photos.map(photo =>
      photo.id === id ? { ...photo, rotation: (photo.rotation + 90) % 360 } : photo
    ));
  };

  const deletePhoto = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-2">Instant Memories</h2>
          <p className="text-gray-600 text-lg">A collection of polaroid-style moments</p>
          <p className="text-sm text-gray-500 mt-3">Right-click each photo for options</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-start">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <div className="bg-white rounded-sm shadow-xl p-3 w-72 hover:shadow-2xl transition-shadow">
                <div className={`${photo.color} aspect-square rounded-sm mb-4 overflow-hidden relative`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 flex items-center justify-center gap-4">
                    <button
                      onClick={() => rotatePhoto(photo.id)}
                      className="bg-white hover:bg-gray-100 text-gray-900 p-2 rounded-full transition-colors"
                      title="Rotate"
                    >
                      <RotateCcw size={20} />
                    </button>
                    <button
                      onClick={() => deletePhoto(photo.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="space-y-1 px-1">
                  <h3 className="font-serif text-xl text-gray-900 handwriting" style={{ fontFamily: 'cursive' }}>
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'cursive' }}>
                    {photo.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {photos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">All photos deleted. Start fresh!</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-700 font-medium">
            <span className="text-2xl text-gray-900">{photos.length}</span> Photos in Collection
          </p>
        </div>
      </div>
    </section>
  );
}
