import { Section } from '../../types/layoutConfig';
import { Play, Star, Clapperboard } from 'lucide-react';

interface StoryCinematicProps {
  section: Section;
}

const cinematicScenes = [
  {
    act: 'ACT I: DESTINY',
    scene: 'The Gallery',
    time: 'Summer Evening, 2021',
    narrative: 'In the soft glow of gallery lights, two strangers exchange glances that spark something eternal. A conversation begins—casual at first, then deeper. Time disappears.',
    imageGradient: 'from-indigo-500/20 to-purple-500/20',
    accentColor: 'text-indigo-600',
    borderColor: 'border-indigo-200'
  },
  {
    act: 'ACT II: ADVENTURE',
    scene: 'Coastal Highway',
    time: 'Autumn Morning, 2021',
    narrative: 'With no destination in mind, they drive toward the horizon. Wind in their hair, endless ocean before them. At sunset, Marcus sees forever in Sofia\'s eyes as they dance on the clifftop.',
    imageGradient: 'from-amber-500/20 to-orange-500/20',
    accentColor: 'text-amber-600',
    borderColor: 'border-amber-200'
  },
  {
    act: 'ACT III: COMMITMENT',
    scene: 'Their Overlook',
    time: 'Spring Day, 2023',
    narrative: 'Marcus orchestrates the perfect moment beneath their favorite tree. As Sofia turns, he presents his grandmother\'s diamond ring, asking the question that would change everything. Her answer is yes—forever yes.',
    imageGradient: 'from-rose-500/20 to-pink-500/20',
    accentColor: 'text-rose-600',
    borderColor: 'border-rose-200'
  },
  {
    act: 'ACT IV: FOREVER',
    scene: 'Our Wedding Day',
    time: 'Today',
    narrative: 'Before everyone who matters most, Sofia and Marcus become one. This is not the end of the story, but rather its greatest beginning. Their love has written this moment into history.',
    imageGradient: 'from-red-500/20 to-rose-500/20',
    accentColor: 'text-red-600',
    borderColor: 'border-red-200'
  }
];

export default function StoryCinematic({ section }: StoryCinematicProps) {
  const bride = section.bindings?.bride || 'Sofia';
  const groom = section.bindings?.groom || 'Marcus';

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clapperboard size={24} className="text-amber-400" />
            <span className="text-sm font-mono text-amber-400 tracking-widest">A LOVE STORY</span>
          </div>
          <h2 className="text-6xl font-serif text-center mb-2">
            {bride} & {groom}
          </h2>
          <p className="text-center text-gray-400 font-light">Directed by Fate • Starring True Love</p>
        </div>

        <div className="space-y-8">
          {cinematicScenes.map((scene, index) => (
            <div
              key={index}
              className={`border-l-4 ${scene.borderColor} pl-8 py-6 relative group hover:bg-white/5 transition-colors duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={16} className={scene.accentColor} fill="currentColor" />
                    <h3 className={`text-sm font-mono tracking-widest ${scene.accentColor}`}>
                      {scene.act}
                    </h3>
                  </div>
                  <h4 className="text-3xl font-serif mb-2">
                    {scene.scene}
                  </h4>
                  <p className="text-gray-500 text-sm italic">{scene.time}</p>
                </div>
                <div className="hidden md:block">
                  <Play size={24} className="text-gray-600 group-hover:text-amber-400 transition-colors" fill="currentColor" />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed font-light max-w-3xl mb-6">
                {scene.narrative}
              </p>

              <div className={`h-48 bg-gradient-to-br ${scene.imageGradient} rounded-lg border border-gray-700 flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                    <Play size={32} className="text-white/40" fill="currentColor" />
                  </div>
                  <p className="text-sm text-white/40 font-light">Scene {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm font-light">
            A timeless tale. One moment. Forever.
          </p>
          <div className="mt-4 text-xl font-serif text-gray-400">
            ~ The End, The Beginning ~
          </div>
        </div>
      </div>
    </section>
  );
}
