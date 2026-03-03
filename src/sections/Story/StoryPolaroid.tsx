import { Section } from '../../types/layoutConfig';
import { Camera } from 'lucide-react';

interface StoryPolaroidProps {
  section: Section;
}

const polaroidPhotos = [
  {
    title: 'The First Night',
    date: 'June 2021',
    caption: 'Meeting at the gallery. Eyes across the room. Everything changed.',
    rotation: -3,
    gradient: 'from-rose-300/40 to-pink-300/40'
  },
  {
    title: 'Sunday Morning',
    date: 'August 2021',
    caption: 'Coffee in bed, lazy conversations, forever plans being whispered.',
    rotation: 2,
    gradient: 'from-amber-300/40 to-orange-300/40'
  },
  {
    title: 'Mountain Views',
    date: 'September 2021',
    caption: 'First trip. Hiking to the summit. Finding our place in the world together.',
    rotation: -1,
    gradient: 'from-green-300/40 to-emerald-300/40'
  },
  {
    title: 'The Question',
    date: 'April 2023',
    caption: 'Proposing under our favorite tree. A yes that felt like forever.',
    rotation: 3,
    gradient: 'from-purple-300/40 to-pink-300/40'
  },
  {
    title: 'Getting Ready',
    date: 'Today',
    caption: 'Last moments before we become one. Butterflies and pure joy.',
    rotation: -2,
    gradient: 'from-blue-300/40 to-indigo-300/40'
  },
  {
    title: 'Forever Begins',
    date: 'Today',
    caption: 'Vowing our love before everyone who matters. This is our story.',
    rotation: 2,
    gradient: 'from-red-300/40 to-rose-300/40'
  }
];

export default function StoryPolaroid({ section }: StoryPolaroidProps) {
  const bride = section.bindings?.bride || 'Olivia';
  const groom = section.bindings?.groom || 'Daniel';

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="text-yellow-400" size={32} />
            <span className="text-sm font-mono text-yellow-400 tracking-widest">POLAROID MEMORIES</span>
          </div>
          <h2 className="text-5xl font-serif text-white mb-4">
            Moments in Time
          </h2>
          <p className="text-gray-400 font-light text-lg">
            A collection of our favorite memories from {bride} & {groom}'s journey
          </p>
        </div>

        <div className="relative min-h-screen flex items-center">
          {/* Scattered polaroid cards */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-12">
              {polaroidPhotos.map((photo, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10`}
                  style={{
                    transform: `rotate(${photo.rotation}deg)`,
                  }}
                >
                  <div className="bg-white rounded-sm shadow-xl overflow-hidden" style={{ width: '280px' }}>
                    {/* Photo area */}
                    <div
                      className={`h-64 bg-gradient-to-br ${photo.gradient} flex items-center justify-center border-8 border-white relative overflow-hidden`}
                    >
                      <Camera className="text-white/30 opacity-50" size={64} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Caption area (polaroid style) */}
                    <div className="bg-white pt-4 px-4 pb-6">
                      <h3 className="text-sm font-serif text-gray-900 mb-2">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-gray-600 font-light mb-2 leading-relaxed">
                        {photo.caption}
                      </p>
                      <p className="text-xs text-gray-500 italic text-right">
                        {photo.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm font-light mb-4">
            "In every picture, a thousand words. In every moment, a lifetime of love."
          </p>
          <p className="text-gray-600 italic">
            {bride} & {groom} — Together, always
          </p>
        </div>
      </div>
    </section>
  );
}
