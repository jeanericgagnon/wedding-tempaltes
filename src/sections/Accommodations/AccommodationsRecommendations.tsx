import { Section } from '../../types/layoutConfig';

interface AccommodationsRecommendationsProps {
  section: Section;
}

export default function AccommodationsRecommendations({ section }: AccommodationsRecommendationsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">
          Accommodations Recommendations
        </h2>
      </div>
    </section>
  );
}
