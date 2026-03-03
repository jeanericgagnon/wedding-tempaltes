import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GallerySplitProps {
  section: Section;
}

interface SplitImage {
  id: number;
  leftTitle: string;
  rightTitle: string;
  leftColor: string;
  rightColor: string;
  leftDesc: string;
  rightDesc: string;
}

export default function GallerySplit({ section }: GallerySplitProps) {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const pairs: SplitImage[] = [
    {
      id: 1,
      leftTitle: 'Day Light',
      rightTitle: 'Night Sky',
      leftColor: 'bg-gradient-to-br from-yellow-300 to-orange-400',
      rightColor: 'bg-gradient-to-br from-indigo-900 to-purple-900',
      leftDesc: 'Bright and vibrant daylight hours',
      rightDesc: 'Calm and serene night moments',
    },
    {
      id: 2,
      leftTitle: 'Ocean',
      rightTitle: 'Mountain',
      leftColor: 'bg-gradient-to-br from-cyan-400 to-blue-600',
      rightColor: 'bg-gradient-to-br from-gray-600 to-gray-900',
      leftDesc: 'Flowing waters and horizons',
      rightDesc: 'Towering peaks and valleys',
    },
    {
      id: 3,
      leftTitle: 'Urban',
      rightTitle: 'Rural',
      leftColor: 'bg-gradient-to-br from-slate-700 to-slate-900',
      rightColor: 'bg-gradient-to-br from-green-500 to-emerald-700',
      leftDesc: 'City streets and buildings',
      rightDesc: 'Fields and open countryside',
    },
    {
      id: 4,
      leftTitle: 'Fire',
      rightTitle: 'Ice',
      leftColor: 'bg-gradient-to-br from-red-600 to-orange-700',
      rightColor: 'bg-gradient-to-br from-blue-200 to-cyan-300',
      leftDesc: 'Warm and passionate tones',
      rightDesc: 'Cool and peaceful vibes',
    },
    {
      id: 5,
      leftTitle: 'Summer',
      rightTitle: 'Winter',
      leftColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      rightColor: 'bg-gradient-to-br from-blue-300 to-cyan-200',
      leftDesc: 'Warm season memories',
      rightDesc: 'Cold season beauty',
    },
    {
      id: 6,
      leftTitle: 'Garden',
      rightTitle: 'Desert',
      leftColor: 'bg-gradient-to-br from-green-400 to-emerald-600',
      rightColor: 'bg-gradient-to-br from-yellow-600 to-orange-700',
      leftDesc: 'Lush and colorful vegetation',
      rightDesc: 'Vast empty landscapes',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-2">Contrast Gallery</h2>
          <p className="text-gray-400 text-lg">Click to explore the contrast between two worlds</p>
        </div>

        <div className="space-y-6">
          {pairs.map((pair) => (
            <div key={pair.id}>
              <button
                onClick={() => setExpandedId(expandedId === pair.id ? null : pair.id)}
                className="w-full"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer">
                  <div className={`${pair.leftColor} aspect-video rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105`} />
                  <div className={`${pair.rightColor} aspect-video rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105`} />
                </div>
              </button>

              {expandedId === pair.id && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 rounded-lg p-8 border border-gray-700 animate-in fade-in slide-in-from-top-2">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`${pair.leftColor} w-3 h-3 rounded-full`}></div>
                      <h3 className="text-xl font-bold text-white">{pair.leftTitle}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{pair.leftDesc}</p>
                    <button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm">
                      Explore {pair.leftTitle}
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`${pair.rightColor} w-3 h-3 rounded-full`}></div>
                      <h3 className="text-xl font-bold text-white">{pair.rightTitle}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{pair.rightDesc}</p>
                    <button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm">
                      Explore {pair.rightTitle}
                    </button>
                  </div>
                </div>
              )}

              <div className="flex justify-center mt-2">
                {expandedId === pair.id ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Total Pairs</p>
            <p className="text-3xl font-bold text-white">{pairs.length}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Total Comparisons</p>
            <p className="text-3xl font-bold text-white">{pairs.length * 2}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Current View</p>
            <p className="text-3xl font-bold text-white">{expandedId ? `Pair ${expandedId}` : 'All'}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Theme</p>
            <p className="text-3xl font-bold text-white">Contrasts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
