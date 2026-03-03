import { ArrowRight, Compass, Check } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelDirectionsProps {
  section: Section;
}

export default function TravelDirections({ section }: TravelDirectionsProps) {
  const routeSteps = [
    { label: 'START', description: 'Downtown City Center', distance: '0 mi' },
    { label: 'I-95 North Exit', description: 'Merge onto Interstate 95 heading north', distance: '2.3 mi' },
    { label: 'Exit 22', description: 'Spring Street exit - take the right lane', distance: '8.5 mi' },
    { label: 'Spring Valley Rd', description: 'Continue east for 2 miles on Spring Valley Road', distance: '10.7 mi' },
    { label: 'Left Turn', description: 'Turn left onto Riverside Drive at traffic light #3', distance: '12.9 mi' },
    { label: 'Right Turn', description: 'Turn right onto Main Street - Destination on right', distance: '14.1 mi' },
    { label: 'ARRIVAL', description: 'Event Center - Turn right into parking lot', distance: '14.2 mi' }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-6 h-6 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest">ROUTE GUIDE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Step-by-Step Navigation
          </h2>
          <p className="text-lg text-gray-600">
            Easy to follow directions from city center to our venue
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="space-y-0">
            {routeSteps.map((step, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-6 py-6">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-white text-lg ${
                      step.label === 'START' ? 'bg-green-500' :
                      step.label === 'ARRIVAL' ? 'bg-red-500' :
                      'bg-indigo-600'
                    }`}>
                      {idx + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{step.label}</h3>
                      <span className="text-sm font-semibold text-gray-500">{step.distance}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  {step.label === 'ARRIVAL' && (
                    <div className="flex-shrink-0 ml-4">
                      <Check className="w-6 h-6 text-green-500" />
                    </div>
                  )}
                </div>

                {idx < routeSteps.length - 1 && (
                  <div className="flex items-center gap-6 py-2">
                    <div className="flex-shrink-0">
                      <div className="w-1 h-12 bg-gradient-to-b from-indigo-300 to-indigo-100 ml-6" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-indigo-600 mb-2">14.2 mi</div>
            <p className="text-gray-600">Total distance</p>
            <p className="text-sm text-gray-500 mt-2">From city center to event venue</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-indigo-600 mb-2">30 min</div>
            <p className="text-gray-600">Estimated time</p>
            <p className="text-sm text-gray-500 mt-2">During normal traffic conditions</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-indigo-600 mb-2">7 stops</div>
            <p className="text-gray-600">Major waypoints</p>
            <p className="text-sm text-gray-500 mt-2">Easy to remember route markers</p>
          </div>
        </div>

        <div className="mt-12 bg-indigo-50 border-l-4 border-indigo-600 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Navigation Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Have GPS active on your phone in addition to these directions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Allow 15 minutes extra time during rush hours (7-10 AM, 4-7 PM)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Spring Street exit can get congested; consider earlier arrival time</span>
            </li>
            <li className="flex gap-3">
              <span className="text-indigo-600 font-bold">•</span>
              <span>Parking lot has 300+ spaces; arrive anytime without reservation needed</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
