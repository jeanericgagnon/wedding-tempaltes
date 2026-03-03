import { List } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyRosterProps {
  section: Section;
}

export default function WeddingPartyRoster({ section }: WeddingPartyRosterProps) {
  const bridalParty = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', relation: 'Best Friend' },
    { name: 'Emily Chen', role: 'Bridesmaid', relation: 'College Friend' },
    { name: 'Rachel Green', role: 'Bridesmaid', relation: 'Coworker' },
    { name: 'Lisa Park', role: 'Bridesmaid', relation: 'Cousin' },
  ];

  const groomsmen = [
    { name: 'Michael Smith', role: 'Best Man', relation: 'Brother' },
    { name: 'David Lee', role: 'Groomsman', relation: 'Childhood Friend' },
    { name: 'James Wilson', role: 'Groomsman', relation: 'College Buddy' },
    { name: 'Robert Taylor', role: 'Groomsman', relation: 'Work Friend' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <List className="w-12 h-12 mx-auto mb-4 text-gray-700" />
          <h2 className="text-5xl font-serif text-gray-900">Wedding Party Roster</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-serif text-rose-700 mb-8 pb-4 border-b-2 border-rose-200">Bridal Party</h3>
            <div className="space-y-4">
              {bridalParty.map((person, idx) => (
                <div key={idx} className="p-4 hover:bg-rose-50 transition-colors rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-xl font-semibold text-gray-900">{person.name}</h4>
                    <span className="text-sm text-gray-500">{person.relation}</span>
                  </div>
                  <p className="text-rose-600">{person.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-serif text-blue-700 mb-8 pb-4 border-b-2 border-blue-200">Groomsmen</h3>
            <div className="space-y-4">
              {groomsmen.map((person, idx) => (
                <div key={idx} className="p-4 hover:bg-blue-50 transition-colors rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-xl font-semibold text-gray-900">{person.name}</h4>
                    <span className="text-sm text-gray-500">{person.relation}</span>
                  </div>
                  <p className="text-blue-600">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
