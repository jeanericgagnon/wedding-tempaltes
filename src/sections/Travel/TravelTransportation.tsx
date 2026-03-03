import { Plane, Train, Bus, Car, Bike, Zap, MapPin, DollarSign, Clock } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelTransportationProps {
  section: Section;
}

export default function TravelTransportation({ section }: TravelTransportationProps) {
  const modes = [
    {
      icon: Plane,
      name: 'Flying',
      pros: ['Fastest from distance', 'Multiple airports', 'Direct flights available'],
      cons: ['Higher cost', 'Need ground transport', 'Airport wait time'],
      time: '2-4 hours total',
      cost: '$150-400',
      distance: '25 miles',
      suitable: 'Long distance'
    },
    {
      icon: Train,
      name: 'Rail',
      pros: ['Scenic route', 'Direct downtown', 'Comfortable seating'],
      cons: ['Fixed schedule', 'Some transfers', 'Longer journey'],
      time: '55-65 min',
      cost: '$25-35',
      distance: '0.5 miles',
      suitable: 'Regional'
    },
    {
      icon: Bus,
      name: 'Bus',
      pros: ['Most affordable', 'Frequent routes', 'Environmental'],
      cons: ['Slower speeds', 'Multiple stops', 'Less comfort'],
      time: '45-90 min',
      cost: '$5-15',
      distance: '0.5 miles',
      suitable: 'Budget-conscious'
    },
    {
      icon: Car,
      name: 'Driving',
      pros: ['Flexible schedule', 'Door to door', 'Most control'],
      cons: ['Parking needed', 'Gas cost', 'Traffic delays'],
      time: '20-45 min',
      cost: '$35-50',
      distance: '11.7 miles',
      suitable: 'Families'
    },
    {
      icon: Zap,
      name: 'Rideshare',
      pros: ['Point-to-point', 'No parking stress', 'Professional driver'],
      cons: ['Surge pricing', 'Less control', 'Availability'],
      time: '20-40 min',
      cost: '$30-50',
      distance: '11.7 miles',
      suitable: 'Convenience'
    },
    {
      icon: Bike,
      name: 'Cycling',
      pros: ['Health & fitness', 'Free service', 'Eco-friendly'],
      cons: ['Weather dependent', 'Luggage limited', 'Physical effort'],
      time: '45-60 min',
      cost: 'Free',
      distance: '8-12 miles',
      suitable: 'Local visitors'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            Transportation Modes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare all available transportation options to reach our venue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modes.map((mode, idx) => {
            const IconComponent = mode.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 overflow-hidden group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">{mode.suitable}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{mode.name}</h3>
                </div>

                <div className="p-6 space-y-5">
                  <div className="grid grid-cols-2 gap-3 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600 uppercase font-semibold">Duration</p>
                      <p className="text-sm font-bold text-gray-900">{mode.time}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase font-semibold">Cost</p>
                      <p className="text-sm font-bold text-blue-600">{mode.cost}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Advantages</p>
                    <ul className="space-y-1">
                      {mode.pros.map((pro, pidx) => (
                        <li key={pidx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 font-bold">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Considerations</p>
                    <ul className="space-y-1">
                      {mode.cons.map((con, cidx) => (
                        <li key={cidx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-orange-500 font-bold">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <button className="w-full text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8 text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Fastest</p>
              <p className="text-2xl font-bold text-gray-900">Flying</p>
              <p className="text-sm text-gray-600 mt-2">35-45 min</p>
            </div>
            <div className="p-8 text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Most Affordable</p>
              <p className="text-2xl font-bold text-gray-900">Cycling</p>
              <p className="text-sm text-gray-600 mt-2">Free</p>
            </div>
            <div className="p-8 text-center">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Direct Access</p>
              <p className="text-2xl font-bold text-gray-900">Rideshare</p>
              <p className="text-sm text-gray-600 mt-2">Door-to-door</p>
            </div>
            <div className="p-8 text-center">
              <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
              <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Most Popular</p>
              <p className="text-2xl font-bold text-gray-900">Driving</p>
              <p className="text-sm text-gray-600 mt-2">Flexible</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ground Transportation Tips</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Book taxis/rideshare in advance during peak times</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Check real-time transit schedules on your phone</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Arrive 15 minutes early to account for delays</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Keep printed directions as backup</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly Options</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Public transit (bus, train, metro) reduces emissions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Cycling or walking for short distances</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Rideshare pooling options available</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Electric vehicle charging stations on-site</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
