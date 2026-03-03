import { Sparkles, User } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeCardsProps {
  section: Section;
}

export default function DressCodeCards({ section }: DressCodeCardsProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-16">Dress Code</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-rose-50 rounded-xl p-12 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-rose-600" />
            <h3 className="text-3xl font-serif text-gray-900 mb-4">For Her</h3>
            <p className="text-lg text-gray-700 mb-4">Black Tie Optional</p>
            <ul className="space-y-2 text-gray-600">
              <li>Floor-length gowns</li>
              <li>Cocktail dresses</li>
              <li>Elegant jumpsuits</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-12 text-center">
            <User className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h3 className="text-3xl font-serif text-gray-900 mb-4">For Him</h3>
            <p className="text-lg text-gray-700 mb-4">Black Tie Optional</p>
            <ul className="space-y-2 text-gray-600">
              <li>Tuxedos</li>
              <li>Dark suits</li>
              <li>Dress shirts & slacks</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg">
          Please avoid wearing white or cream colors
        </p>
      </div>
    </section>
  );
}
