import { TreePine } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeRusticProps {
  section: Section;
}

export default function DressCodeRustic({ section }: DressCodeRusticProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-100 to-amber-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <TreePine className="w-14 h-14 mx-auto mb-6 text-green-700" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">What to Wear</h2>
          <p className="text-xl text-gray-600">Rustic Elegance</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">Semi-Formal Barn Chic</h3>
            <p className="text-lg text-gray-600">
              Dress up, but keep it comfortable for a celebration in the countryside
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 bg-amber-50 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">For Her</h4>
              <p className="text-gray-700 mb-4">
                Flowy dresses in soft colors, floral prints, or lace details. Knee to midi length perfect for a barn setting.
              </p>
              <p className="text-sm text-gray-600">
                Footwear tip: Wedges or block heels work best for uneven terrain
              </p>
            </div>

            <div className="p-6 bg-stone-100 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">For Him</h4>
              <p className="text-gray-700 mb-4">
                Dress shirts with suspenders, vests, or blazers. Khakis, chinos, or dress pants in earth tones.
              </p>
              <p className="text-sm text-gray-600">
                Ties optional, boots welcome!
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-green-50 rounded-xl text-center">
            <p className="text-gray-700">
              <strong>Venue Note:</strong> Our celebration will be on a working farm. Dress accordingly!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
