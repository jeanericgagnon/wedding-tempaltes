import { Flower } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeGardenProps {
  section: Section;
}

export default function DressCodeGarden({ section }: DressCodeGardenProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Flower className="w-16 h-16 mx-auto mb-6 text-green-600" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Garden Party Attire</h2>
          <p className="text-xl text-gray-600">Join us in the garden dressed in your spring best</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">Semi-Formal Garden Style</h3>
            <p className="text-lg text-gray-600">
              Light, flowy fabrics and florals encouraged
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-serif text-green-700 mb-4">For Her</h4>
              <p className="text-gray-700 leading-relaxed">
                Floral dresses, light-colored gowns, or elegant garden party attire.
                Flowing fabrics and botanical patterns welcome. Consider wedges or block heels for grass.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-serif text-green-700 mb-4">For Him</h4>
              <p className="text-gray-700 leading-relaxed">
                Light-colored suits, linen blazers, or dress shirts with chinos.
                Pastel tones and light fabrics perfect for an outdoor celebration.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-green-50 rounded-xl">
            <p className="text-center text-gray-700">
              <strong>Note:</strong> The ceremony and cocktail hour will be on lawn. Consider footwear accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
