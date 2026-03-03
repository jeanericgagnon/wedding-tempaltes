import { Section } from '../../types/layoutConfig';

interface RegistrySimpleProps {
  section: Section;
}

export default function RegistrySimple({ section }: RegistrySimpleProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">
          Registry Simple
        </h2>
      </div>
    </section>
  );
}
