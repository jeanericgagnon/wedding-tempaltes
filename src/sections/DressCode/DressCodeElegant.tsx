import { Crown } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeElegantProps {
  section: Section;
}

export default function DressCodeElegant({ section }: DressCodeElegantProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Crown className="w-12 h-12 mx-auto mb-6 text-amber-600" />
          <h2 className="text-6xl font-serif text-stone-900 tracking-tight mb-8">Attire</h2>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-24 h-px bg-stone-300" />
            <div className="w-3 h-3 bg-amber-600 rounded-full" />
            <div className="w-24 h-px bg-stone-300" />
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center border-b border-stone-200 pb-12">
            <h3 className="text-4xl font-serif text-stone-900 mb-4">Black Tie Optional</h3>
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              We request the honor of your presence in formal evening attire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h4 className="text-2xl font-serif text-stone-900 mb-4">Ladies</h4>
              <p className="text-stone-600 leading-relaxed">
                Floor-length evening gowns or sophisticated cocktail dresses in colors of your choosing
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-serif text-stone-900 mb-4">Gentlemen</h4>
              <p className="text-stone-600 leading-relaxed">
                Tuxedos or formal dark suits with coordinating ties
              </p>
            </div>
          </div>

          <p className="text-center text-stone-500 italic text-lg pt-8">
            Please reserve white and ivory for the bride
          </p>
        </div>
      </div>
    </section>
  );
}
