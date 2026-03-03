import { MapPin, Palmtree, DollarSign, Calendar } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryHoneymoonProps {
  section: Section;
}

const honeymoonData = {
  destination: 'Bora Bora & Fiji',
  duration: '10 days',
  date: 'June 2025',
  totalBudget: 8000,
  raised: 6200,
  description: 'We\'re dreaming of turquoise waters, overwater bungalows, and unforgettable island adventures.',
  activities: [
    { name: 'Overwater Bungalow', cost: 3500, booked: true },
    { name: 'Scuba Diving Trips', cost: 1200, booked: false },
    { name: 'Spa & Wellness', cost: 800, booked: false },
    { name: 'Local Experiences', cost: 900, booked: true },
    { name: 'Flights & Transport', cost: 1600, booked: true },
  ],
};

export default function RegistryHoneymoon({ section }: RegistryHoneymoonProps) {
  const progressPercent = (honeymoonData.raised / honeymoonData.totalBudget) * 100;
  const bookedCost = honeymoonData.activities
    .filter(a => a.booked)
    .reduce((sum, a) => sum + a.cost, 0);

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Palmtree className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Our Honeymoon Fund
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us on our dream tropical adventure. Help us create the perfect honeymoon memories.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border-2 border-cyan-200 shadow-md">
            <MapPin className="w-8 h-8 text-cyan-600 mb-3" />
            <p className="text-sm text-gray-600 font-semibold mb-1">Destination</p>
            <p className="text-2xl font-bold text-gray-900">{honeymoonData.destination}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-md">
            <Calendar className="w-8 h-8 text-blue-600 mb-3" />
            <p className="text-sm text-gray-600 font-semibold mb-1">Duration</p>
            <p className="text-2xl font-bold text-gray-900">{honeymoonData.duration}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-teal-200 shadow-md">
            <DollarSign className="w-8 h-8 text-teal-600 mb-3" />
            <p className="text-sm text-gray-600 font-semibold mb-1">Total Budget</p>
            <p className="text-2xl font-bold text-gray-900">${honeymoonData.totalBudget.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-cyan-200 shadow-md">
            <Palmtree className="w-8 h-8 text-cyan-600 mb-3" />
            <p className="text-sm text-gray-600 font-semibold mb-1">Departure</p>
            <p className="text-2xl font-bold text-gray-900">{honeymoonData.date}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-cyan-200 shadow-lg">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-gray-900">Progress to Paradise</h3>
              <span className="text-3xl font-bold text-cyan-600">${honeymoonData.raised} / ${honeymoonData.totalBudget}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-teal-500 h-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-right text-sm text-gray-600 mt-2">{progressPercent.toFixed(0)}% funded - ${(honeymoonData.totalBudget - honeymoonData.raised).toLocaleString()} to go</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Honeymoon Breakdown</h3>
            <div className="space-y-4">
              {honeymoonData.activities.map((activity) => {
                const percentage = (activity.cost / honeymoonData.totalBudget) * 100;
                return (
                  <div key={activity.name} className={`p-4 rounded-lg border ${activity.booked ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{activity.name}</h4>
                      {activity.booked && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Booked</span>}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                        <div
                          className="bg-cyan-500 h-full"
                          style={{ width: '100%' }}
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-900">${activity.cost}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We're Excited</h3>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <ul className="space-y-4">
                {[
                  'Crystal clear turquoise waters',
                  'Overwater bungalow experience',
                  'World-class diving & snorkeling',
                  'Tropical island adventures',
                  'Romantic sunset moments',
                  'Time to relax & reconnect',
                ].map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <span className="text-cyan-600 mt-1">✓</span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-3">Help Us Make Our Dream Real</h3>
          <p className="text-cyan-100 max-w-2xl mx-auto mb-8 text-lg">
            Any contribution helps us create the perfect honeymoon. Every dollar gets us closer to paradise!
          </p>
          <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            Contribute to Honeymoon Fund
          </button>
        </div>
      </div>
    </section>
  );
}
