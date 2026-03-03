import { Shirt } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeClassicProps {
  section: Section;
}

export default function DressCodeClassic({ section }: DressCodeClassicProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Shirt className="w-12 h-12 mx-auto mb-6 text-slate-700" />
        <h2 className="text-5xl font-serif text-gray-900 mb-8">Dress Code</h2>
        <div className="bg-white rounded-lg shadow-lg p-12">
          <h3 className="text-3xl font-serif text-gray-900 mb-4">Black Tie Optional</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We invite you to dress in your finest attire. Formal wear is encouraged but not required.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">For Her</h4>
              <p className="text-gray-600">Floor-length gowns, cocktail dresses, or elegant separates</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">For Him</h4>
              <p className="text-gray-600">Tuxedos, dark suits, or dress shirts with slacks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
