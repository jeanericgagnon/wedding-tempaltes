import { Section } from '../../types/layoutConfig';

interface VenueModernProps {
  section: Section;
}

export default function VenueModern({ section }: VenueModernProps) {
  const venue = section.bindings?.venue || 'The Modern Estate';

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">The Celebration</span>
          <h2 className="text-6xl font-serif text-slate-900 mt-4 mb-4">{venue}</h2>
          <p className="text-lg text-slate-600">{section.bindings?.location || 'Somewhere Beautiful'}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              An exquisite venue designed for intimate celebrations. With elegant architecture and thoughtful details, our space provides the perfect backdrop for your special day.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Capacity</p>
                <p className="text-lg text-slate-900">Up to 250 guests</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-lg text-slate-900">4:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 h-80 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
