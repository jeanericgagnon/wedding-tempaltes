import { PartyPopper } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeFestiveProps {
  section: Section;
}

export default function DressCodeFestive({ section }: DressCodeFestiveProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <PartyPopper className="w-16 h-16 mx-auto mb-6 text-fuchsia-600" />
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Dress Code</h2>
          <p className="text-2xl text-fuchsia-700">Festive Formal</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif text-gray-900 mb-6">Come Celebrate in Color!</h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We want this to be a vibrant, joyful celebration. Wear your boldest colors, your favorite patterns,
              and anything that makes you feel fabulous!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-serif text-gray-900 mb-4">Encouraged</h4>
              <ul className="space-y-3 text-gray-700">
                <li>✨ Bold, vibrant colors</li>
                <li>✨ Statement accessories</li>
                <li>✨ Fun patterns and prints</li>
                <li>✨ Sequins and sparkle</li>
                <li>✨ Your most festive outfit</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-serif text-gray-900 mb-4">Formality</h4>
              <p className="text-gray-700 leading-relaxed">
                While we love color and personality, this is still a formal event.
                Think gowns, suits, cocktail dresses - just in your most exciting colors!
              </p>
            </div>
          </div>

          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <p className="text-lg text-gray-700">
              <strong>Bottom line:</strong> Dress formally, but make it fun! This is a party!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
