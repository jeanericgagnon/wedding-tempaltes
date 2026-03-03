import { Section } from '../../types/layoutConfig';

interface TravelMinimalProps {
  section: Section;
}

export default function TravelMinimal({ section }: TravelMinimalProps) {
  const location = section.bindings?.location || 'The Beautiful Garden, State';

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif text-gray-900 mb-4">
          Visit Us
        </h2>

        <div className="flex justify-center mb-12">
          <div className="h-px w-16 bg-gray-300" />
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-2xl font-serif text-gray-800 mb-4">
              {location}
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're easy to reach by car, train, or plane. Parking is available on-site.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 font-light tracking-wide">
              More details to be announced
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
