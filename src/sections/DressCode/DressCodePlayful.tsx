import { Sparkles } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodePlayfulProps {
  section: Section;
}

export default function DressCodePlayful({ section }: DressCodePlayfulProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-purple-600 animate-pulse" />
          <h2 className="text-6xl font-serif text-gray-900 mb-4">What to Wear?</h2>
          <p className="text-2xl text-gray-700">Let's get fancy!</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
              Black Tie Optional
            </h3>
            <p className="text-xl text-gray-600">Dress up and dance the night away</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-pink-50 rounded-2xl">
              <div className="text-6xl mb-4">💃</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Guests Who Slay</h4>
              <p className="text-gray-600">Gowns, dresses, jumpsuits - anything that makes you feel amazing!</p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-2xl">
              <div className="text-6xl mb-4">🕺</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Dapper Attendees</h4>
              <p className="text-gray-600">Tuxes, suits, or your sharpest formal look!</p>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 italic">
            Pro tip: Comfortable shoes for dancing recommended!
          </p>
        </div>
      </div>
    </section>
  );
}
