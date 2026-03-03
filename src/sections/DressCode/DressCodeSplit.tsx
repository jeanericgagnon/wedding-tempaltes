import { Section } from '../../types/layoutConfig';

interface DressCodeSplitProps {
  section: Section;
}

export default function DressCodeSplit({ section }: DressCodeSplitProps) {
  return (
    <section className="min-h-screen flex">
      <div className="flex-1 bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <span className="text-6xl">👗</span>
          </div>
          <h3 className="text-4xl font-serif text-gray-900 mb-6">For Her</h3>
          <p className="text-xl text-gray-700 mb-6">Formal Evening Wear</p>
          <p className="text-gray-600 leading-relaxed">
            Floor-length gowns, elegant cocktail dresses, or sophisticated separates in your favorite colors
          </p>
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <span className="text-6xl">🤵</span>
          </div>
          <h3 className="text-4xl font-serif text-gray-900 mb-6">For Him</h3>
          <p className="text-xl text-gray-700 mb-6">Black Tie Optional</p>
          <p className="text-gray-600 leading-relaxed">
            Tuxedos preferred, dark suits welcome, dress shirts with formal trousers
          </p>
        </div>
      </div>
    </section>
  );
}
