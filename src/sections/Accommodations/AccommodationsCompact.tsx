import { Section } from '../../types/layoutConfig';

interface AccommodationsCompactProps {
  section: Section;
}

export default function AccommodationsCompact({ section }: AccommodationsCompactProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">
          Accommodations Compact
        </h2>
      </div>
    </section>
  );
}
