import { Sparkle } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeCreativeProps {
  section: Section;
}

export default function DressCodeCreative({ section }: DressCodeCreativeProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Sparkle className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h2 className="text-6xl font-serif text-gray-900 mb-4">Express Yourself</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-6">
              Creative Formal
            </h3>
            <p className="text-2xl text-gray-700 leading-relaxed">
              We celebrate individuality! Wear formal attire that expresses your unique style.
            </p>
          </div>

          <div className="space-y-8 mb-10">
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">The Vibe</h4>
              <p className="text-gray-700 leading-relaxed">
                Think formal, but make it you. Whether that's bold patterns, unique silhouettes, vintage finds,
                or avant-garde pieces - we want to see your personality shine through.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-pink-50 rounded-xl text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h5 className="font-semibold text-gray-900 mb-2">Be Bold</h5>
                <p className="text-sm text-gray-600">Statement pieces encouraged</p>
              </div>

              <div className="p-6 bg-orange-50 rounded-xl text-center">
                <div className="text-4xl mb-3">✨</div>
                <h5 className="font-semibold text-gray-900 mb-2">Be Unique</h5>
                <p className="text-sm text-gray-600">Express your style</p>
              </div>

              <div className="p-6 bg-purple-50 rounded-xl text-center">
                <div className="text-4xl mb-3">👗</div>
                <h5 className="font-semibold text-gray-900 mb-2">Be Formal</h5>
                <p className="text-sm text-gray-600">Still a dressy occasion</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-lg text-gray-700">
              <strong>One rule:</strong> Make it formal, make it you, have fun with it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
