import { ParkingSquare, Zap, Users, Clock, AlertCircle, MapPin } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelParkingProps {
  section: Section;
}

export default function TravelParking({ section }: TravelParkingProps) {
  const parkingLots = [
    {
      name: 'Main Lot A',
      spaces: '300+',
      cost: 'FREE',
      location: 'Building entrance',
      features: ['Well-lit', 'Security patrol', 'Covered entry'],
      distance: 'Direct access'
    },
    {
      name: 'Valet Service',
      spaces: 'Premium',
      cost: '$10',
      location: 'Covered entrance',
      features: ['Professional valets', 'Fast service', 'In/Out passes'],
      distance: 'No walking'
    },
    {
      name: 'Street Parking',
      spaces: '50+',
      cost: 'Metered',
      location: '2 blocks away',
      features: ['First 2 hours free', 'Then $2/hour', '24/7 available'],
      distance: '5 min walk'
    },
    {
      name: 'Accessible Lot',
      spaces: '15',
      cost: 'FREE',
      location: 'Reserved',
      features: ['Wheelchair access', 'ADA compliant', 'Near elevator'],
      distance: 'Ground level'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <ParkingSquare className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">PARKING OPTIONS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            Convenient Parking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple parking options with easy access to the venue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {parkingLots.map((lot, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold">{lot.name}</h3>
                  <ParkingSquare className="w-6 h-6" />
                </div>
                <p className="text-orange-100 text-sm">{lot.location}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600 uppercase font-semibold">Spaces</p>
                    <p className="text-xl font-bold text-gray-900">{lot.spaces}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 uppercase font-semibold">Cost</p>
                    <p className="text-xl font-bold text-orange-600">{lot.cost}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Distance</p>
                    <p className="font-semibold text-gray-900">{lot.distance}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Features</p>
                  <ul className="space-y-1">
                    {lot.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Operating Hours</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Main Lot</p>
                <p className="text-gray-900">24/7 Open</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Valet Service</p>
                <p className="text-gray-900">7 AM - 11 PM</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Attendant</p>
                <p className="text-gray-900">On duty 8 AM - 10 PM</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">After Hours</p>
                <p className="text-gray-900">Auto gates open with parking pass</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Accessibility</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">ADA Spaces</p>
                <p className="text-gray-900">15 reserved spaces available</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Locations</p>
                <p className="text-gray-900">Ground level near main entrance</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Amenities</p>
                <p className="text-gray-900">Elevator access, accessible restrooms</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Assistance</p>
                <p className="text-gray-900">Staff available for assistance 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-8 mb-12">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Parking Guidelines</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Arrive early during peak hours (8-9 AM, 5-6 PM)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Validate parking ticket at reception desk for discounts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Keep valuables out of sight; security cameras monitor all areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>Maximum 72 hours in main lot; longer stays require approval</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span>EV charging stations available (free charging)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4">Parking FAQ</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Q: Is parking free?</h4>
              <p className="text-orange-100 text-sm">Main lot parking is completely free. Valet service is $10 per visit.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: Do I need to reserve?</h4>
              <p className="text-orange-100 text-sm">No reservations needed for standard parking. Arrive anytime!</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: Where can I charge my EV?</h4>
              <p className="text-orange-100 text-sm">EV charging stations on Level 2. Complimentary charging available.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Q: What if lot is full?</h4>
              <p className="text-orange-100 text-sm">Street parking available 2 blocks away. Real-time availability posted.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
