import { Gem } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeLuxuryProps {
  section: Section;
}

export default function DressCodeLuxury({ section }: DressCodeLuxuryProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <Gem className="w-16 h-16 mx-auto mb-8 text-amber-400" />
          <h2 className="text-7xl font-serif mb-6 tracking-tight">Dress Code</h2>
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
          <p className="text-3xl font-light text-amber-100">Black Tie</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <p className="text-center text-2xl text-gray-300 mb-16 leading-relaxed">
            An evening of elegance and celebration awaits. We invite you to join us in your most refined formal attire.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">✨</span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">For Her</h3>
              <p className="text-gray-400 leading-relaxed">
                Full-length evening gowns in luxurious fabrics with elegant accessories
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🎩</span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">For Him</h3>
              <p className="text-gray-400 leading-relaxed">
                Traditional tuxedos with bow ties and formal accessories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
