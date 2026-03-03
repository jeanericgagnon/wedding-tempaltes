import { Snowflake } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeWinterProps {
  section: Section;
}

export default function DressCodeWinter({ section }: DressCodeWinterProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 via-blue-50 to-cyan-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Snowflake className="w-16 h-16 mx-auto mb-6 text-cyan-600" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Winter Formal</h2>
          <p className="text-xl text-gray-600">Elegant attire for a winter celebration</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-700 to-blue-900 py-12 px-8 text-white text-center">
            <p className="text-2xl font-light leading-relaxed">
              Join us for an enchanting winter evening in formal attire
            </p>
          </div>

          <div className="p-12">
            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-6">Dress Code</h3>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Black Tie Preferred</strong>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Formal evening wear appropriate for a winter celebration. Rich jewel tones and elegant fabrics encouraged.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-6">Weather Note</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our venue is climate-controlled, but please bring appropriate outerwear for the chilly weather.
                </p>
                <p className="text-sm text-gray-600">
                  Coat check will be available
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 bg-slate-50 rounded-xl">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">For Her</h4>
                <p className="text-gray-700">
                  Evening gowns in rich fabrics like velvet or satin. Elegant wraps or shawls welcome.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">For Him</h4>
                <p className="text-gray-700">
                  Tuxedos or dark formal suits. Classic winter formal attire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
