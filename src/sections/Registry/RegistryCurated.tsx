import { Section } from '../../types/layoutConfig';

interface RegistryCuratedProps {
  section: Section;
}

export default function RegistryCurated({ section }: RegistryCuratedProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">
          Registry Curated
        </h2>
      </div>
    </section>
  );
}
