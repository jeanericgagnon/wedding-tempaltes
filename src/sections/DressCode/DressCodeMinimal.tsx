import { Section } from '../../types/layoutConfig';

interface DressCodeMinimalProps {
  section: Section;
}

export default function DressCodeMinimal({ section }: DressCodeMinimalProps) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-6xl font-serif text-gray-900 mb-12">Attire</h2>
        <p className="text-3xl font-light text-gray-700 mb-4">Black Tie Optional</p>
        <p className="text-xl text-gray-500">Dress to impress</p>
      </div>
    </section>
  );
}
