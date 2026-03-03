import { Martini } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeCocktailProps {
  section: Section;
}

export default function DressCodeCocktail({ section }: DressCodeCocktailProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 to-fuchsia-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Martini className="w-14 h-14 mx-auto mb-6 text-violet-600" />
          <h2 className="text-6xl font-serif text-gray-900 mb-4">Attire</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 py-12 px-8 text-center text-white">
            <h3 className="text-4xl font-serif mb-4">Cocktail Attire</h3>
            <p className="text-xl">Dress to impress for an evening of elegance</p>
          </div>

          <div className="p-12">
            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h4 className="text-2xl font-serif text-gray-900 mb-4">Ladies</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cocktail dresses, dressy separates, or midi-length gowns. Think party-ready and sophisticated.
                </p>
                <p className="text-sm text-gray-600">
                  Cocktail length typically hits just above or below the knee
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-serif text-gray-900 mb-4">Gentlemen</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Suits with ties or dress shirts with dress pants. Sport coats welcome. Darker colors preferred.
                </p>
                <p className="text-sm text-gray-600">
                  No need for tuxedos, but dress sharp!
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 text-center">
              <p className="text-gray-600 text-lg">
                This is a chance to dress up and celebrate - have fun with it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
