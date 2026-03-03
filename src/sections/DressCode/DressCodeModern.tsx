import { Palette } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeModernProps {
  section: Section;
}

export default function DressCodeModern({ section }: DressCodeModernProps) {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <Palette className="w-10 h-10 mb-4" />
          <h2 className="text-7xl font-bold mb-4">DRESS CODE</h2>
          <div className="w-32 h-1 bg-white" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-bold mb-4">ATTIRE</h3>
            <p className="text-xl mb-2">Black Tie Optional</p>
            <p className="text-gray-400">Formal evening wear requested</p>
          </div>

          <div className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-bold mb-4">COLORS</h3>
            <p className="text-xl mb-2">Your Choice</p>
            <p className="text-gray-400">Please avoid white and cream</p>
          </div>

          <div className="border-l-4 border-white pl-6">
            <h3 className="text-2xl font-bold mb-4">STYLE</h3>
            <p className="text-xl mb-2">Formal & Elegant</p>
            <p className="text-gray-400">Dress to celebrate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
