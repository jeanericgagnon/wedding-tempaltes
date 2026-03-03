import { Sun } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeCasualProps {
  section: Section;
}

export default function DressCodeCasual({ section }: DressCodeCasualProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Sun className="w-12 h-12 mx-auto mb-6 text-amber-500" />
        <h2 className="text-5xl font-serif text-gray-900 mb-8">Dress Code</h2>

        <div className="bg-white rounded-2xl shadow-lg p-12">
          <h3 className="text-4xl font-serif text-gray-900 mb-6">Dressy Casual</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Celebrate with us in comfortable, stylish attire. Think garden party chic!
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Suggestions for Her</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Sundresses or midi dresses</li>
                <li>• Dressy separates</li>
                <li>• Comfortable sandals or wedges</li>
                <li>• Light layers for evening</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Suggestions for Him</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Dress shirts or polos</li>
                <li>• Chinos or dress pants</li>
                <li>• Loafers or dress shoes</li>
                <li>• Optional blazer or sport coat</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-gray-500">
            Ceremony and reception will be outdoors on grass
          </p>
        </div>
      </div>
    </section>
  );
}
