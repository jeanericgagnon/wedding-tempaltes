import { Section } from '../../types/layoutConfig';

interface WeddingPartyMinimalProps {
  section: Section;
}

export default function WeddingPartyMinimal({ section }: WeddingPartyMinimalProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor' },
    { name: 'Michael Smith', role: 'Best Man' },
    { name: 'Emily Chen', role: 'Bridesmaid' },
    { name: 'David Lee', role: 'Groomsman' },
    { name: 'Rachel Green', role: 'Bridesmaid' },
    { name: 'James Wilson', role: 'Groomsman' },
    { name: 'Lisa Park', role: 'Bridesmaid' },
    { name: 'Robert Taylor', role: 'Groomsman' },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-6xl font-serif text-center text-gray-900 mb-20">Wedding Party</h2>

        <div className="space-y-8">
          {party.map((person, idx) => (
            <div key={idx} className="flex justify-between items-baseline border-b border-gray-200 pb-4">
              <span className="text-2xl font-light text-gray-900">{person.name}</span>
              <span className="text-lg text-gray-500">{person.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
