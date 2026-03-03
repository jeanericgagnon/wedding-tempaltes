import { Palmtree } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeTropicalProps {
  section: Section;
}

export default function DressCodeTropical({ section }: DressCodeTropicalProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-100 via-teal-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Palmtree className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Tropical Formal</h2>
          <p className="text-xl text-gray-600">Paradise awaits in elegant island style</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Celebrate with us in tropical elegance - formal attire with an island twist
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center p-6 bg-gradient-to-b from-pink-50 to-rose-50 rounded-2xl">
              <div className="text-5xl mb-4">🌺</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Colors</h4>
              <p className="text-gray-600">
                Vibrant tropical colors welcome - think coral, turquoise, and sunset hues
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-cyan-50 rounded-2xl">
              <div className="text-5xl mb-4">👗</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Fabrics</h4>
              <p className="text-gray-600">
                Light, breathable materials perfect for warm tropical weather
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-b from-emerald-50 to-green-50 rounded-2xl">
              <div className="text-5xl mb-4">🌴</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Style</h4>
              <p className="text-gray-600">
                Tropical prints and floral patterns encouraged for this island celebration
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 border-l-4 border-pink-400">
              <h4 className="text-2xl font-serif text-gray-900 mb-3">For Her</h4>
              <p className="text-gray-700">
                Tropical maxi dresses, formal sundresses with bold prints, or elegant resort wear
              </p>
            </div>

            <div className="p-6 border-l-4 border-blue-400">
              <h4 className="text-2xl font-serif text-gray-900 mb-3">For Him</h4>
              <p className="text-gray-700">
                Linen suits, tropical print shirts with dress pants, or guayabera shirts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
