import { Waves } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeBeachProps {
  section: Section;
}

export default function DressCodeBeach({ section }: DressCodeBeachProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Waves className="w-16 h-16 mx-auto mb-6 text-cyan-600" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Beach Formal</h2>
          <p className="text-xl text-gray-600">Celebrate with us seaside in elegant beach attire</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Attire</h3>
            <p className="text-gray-700 leading-relaxed">
              Beach formal means dressy yet appropriate for sand. Light fabrics and breathable materials recommended.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Colors</h3>
            <p className="text-gray-700 leading-relaxed">
              Light, coastal colors preferred - think blues, seafoam, coral, and sandy neutrals. Avoid heavy dark colors.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Footwear</h3>
            <p className="text-gray-700 leading-relaxed">
              Wedges, dressy sandals, or go barefoot! Stilettos and closed-toe shoes not recommended for sand.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-cyan-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">For Her</h4>
              <p className="text-gray-700">Flowing maxi dresses, light sundresses, or elegant beach coordinates</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">For Him</h4>
              <p className="text-gray-700">Linen suits, dress shirts with khakis, or guayabera shirts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
