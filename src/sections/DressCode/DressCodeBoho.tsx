import { Feather } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeBohoProps {
  section: Section;
}

export default function DressCodeBoho({ section }: DressCodeBohoProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Feather className="w-14 h-14 mx-auto mb-6 text-orange-600" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Dress Code</h2>
          <p className="text-2xl text-orange-700 font-light">Boho Chic</p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-12">
          <p className="text-center text-xl text-gray-700 mb-12 leading-relaxed">
            Embrace your free spirit! Flowing fabrics, earthy tones, and natural textures welcome.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Style Inspiration</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Flowing maxi dresses or skirts</li>
                <li>• Lace, crochet, and embroidery</li>
                <li>• Earthy colors: terracotta, sage, mustard</li>
                <li>• Natural fabrics like linen and cotton</li>
                <li>• Layered jewelry and accessories</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">What to Avoid</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Overly formal or structured pieces</li>
                <li>• Neon or synthetic-heavy fabrics</li>
                <li>• White or ivory (reserved for bride)</li>
              </ul>
              <p className="text-gray-600 italic mt-6">
                Think garden party meets music festival vibes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
