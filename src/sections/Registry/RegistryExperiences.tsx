import { Section } from '../../types/layoutConfig';

interface RegistryExperiencesProps {
  section: Section;
}

export default function RegistryExperiences({ section }: RegistryExperiencesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">
          Registry Experiences
        </h2>
      </div>
    </section>
  );
}
