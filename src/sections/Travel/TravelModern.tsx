import { MapPin, CheckCircle, Info } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelModernProps {
  section: Section;
}

export default function TravelModern({ section }: TravelModernProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-6xl font-serif text-slate-900 mb-6">Travel & Directions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-900 to-slate-500" />
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-slate-600" />
                Location
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {section.bindings?.location || 'Somewhere Beautiful, State 12345'}
              </p>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle className="w-5 h-5" />
                <span>Ample parking available</span>
              </div>
            </div>
            <div className="bg-slate-200 h-64 rounded-lg" />
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <div className="flex gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Getting There</h4>
                <p className="text-slate-700">Accessible by car, public transit, and taxi services. Please allow extra time for parking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
