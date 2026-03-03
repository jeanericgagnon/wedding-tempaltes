import { Section } from '../../types/layoutConfig';

interface WeddingPartyCompactProps {
  section: Section;
}

export default function WeddingPartyCompact({ section }: WeddingPartyCompactProps) {
  const bridalParty = ['Sarah Johnson (Maid of Honor)', 'Emily Chen', 'Rachel Green', 'Lisa Park'];
  const groomsmen = ['Michael Smith (Best Man)', 'David Lee', 'James Wilson', 'Robert Taylor'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">Wedding Party</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-rose-700 mb-6 text-center">Bridal Party</h3>
            <ul className="space-y-3">
              {bridalParty.map((name, idx) => (
                <li key={idx} className="text-center text-gray-700 text-lg">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-blue-700 mb-6 text-center">Groomsmen</h3>
            <ul className="space-y-3">
              {groomsmen.map((name, idx) => (
                <li key={idx} className="text-center text-gray-700 text-lg">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
