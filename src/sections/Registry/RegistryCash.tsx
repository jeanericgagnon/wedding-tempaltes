import { Section } from '../../types/layoutConfig';

interface RegistryCashProps {
  section: Section;
}

export default function RegistryCash({ section }: RegistryCashProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">
          Registry Cash
        </h2>
      </div>
    </section>
  );
}
