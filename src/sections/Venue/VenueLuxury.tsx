import { MapPin, Clock, Users, Leaf } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface VenueLuxuryProps {
  section: Section;
}

export default function VenueLuxury({ section }: VenueLuxuryProps) {
  const venue = section.bindings?.venue || 'The Grand Estate';

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
            {venue}
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-lg h-96 border border-amber-200/50" />

          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Set amongst manicured gardens and timeless architecture, our venue provides
              the perfect backdrop for an unforgettable celebration of love.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Location', value: '1234 Grand Avenue, Estate City, ST 12345' },
                { icon: Clock, label: 'Ceremony Time', value: '4:00 PM - Reception 6:00 PM' },
                { icon: Users, label: 'Capacity', value: '300 Guests' },
                { icon: Leaf, label: 'Setting', value: 'Outdoor & Indoor Spaces' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <Icon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide">
                      {label}
                    </p>
                    <p className="text-gray-700 font-light">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-12 text-center border border-amber-100">
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            Accessibility & Amenities
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Our venue is fully accessible with ample parking, climate-controlled indoor spaces,
            and beautiful outdoor gardens. Restrooms and coat check are available throughout.
          </p>
        </div>
      </div>
    </section>
  );
}
