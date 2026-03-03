import { MapPin, Route, Clock, AlertTriangle, TrendingUp, Gauge } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelRoutesProps {
  section: Section;
}

export default function TravelRoutes({ section }: TravelRoutesProps) {
  const routes = [
    {
      name: 'Express Route',
      type: 'Fastest',
      distance: '11.7 mi',
      time: '22-25 min',
      status: 'Best in light traffic',
      description: 'I-95 North → Exit 22 → Main Street (recommended for peak hours)',
      icon: TrendingUp,
      color: 'emerald',
      difficulty: 'Easy',
      traffic: 'Moderate',
      details: [
        'Take I-95 North from downtown',
        'Watch for Exit 22 signage',
        'One main highway transition',
        'Direct access to parking'
      ]
    },
    {
      name: 'Scenic Route',
      type: 'Scenic',
      distance: '14.2 mi',
      time: '28-32 min',
      status: 'Beautiful neighborhoods',
      description: 'Route 8 South → Riverside Drive → Main Street (see the city)',
      icon: Route,
      color: 'blue',
      difficulty: 'Moderate',
      traffic: 'Light',
      details: [
        'Scenic downtown views',
        'Pass through historic district',
        'More local attractions',
        'Slower but interesting'
      ]
    },
    {
      name: 'Surface Streets',
      type: 'Local',
      distance: '12.5 mi',
      time: '35-40 min',
      status: 'Avoid highways',
      description: 'Spring Valley → Park Avenue → Main (all surface streets)',
      icon: Gauge,
      color: 'orange',
      difficulty: 'Moderate',
      traffic: 'Variable',
      details: [
        'No highway driving',
        'Multiple traffic lights',
        'Good for local knowledge',
        'Several route variations'
      ]
    },
    {
      name: 'Bypass Route',
      type: 'Alternative',
      distance: '15.8 mi',
      time: '30-35 min',
      status: 'Avoid I-95 construction',
      description: 'I-90 East → Route 2 South → Downtown (avoid main highway)',
      icon: MapPin,
      color: 'purple',
      difficulty: 'Complex',
      traffic: 'Light',
      details: [
        'Longer but avoids congestion',
        'Use during I-95 incidents',
        'More turns to navigate',
        'Backup route when needed'
      ]
    }
  ];

  const colorStyles = {
    emerald: { light: 'bg-emerald-50', border: 'border-emerald-200', header: 'from-emerald-500 to-emerald-600', icon: 'text-emerald-600' },
    blue: { light: 'bg-blue-50', border: 'border-blue-200', header: 'from-blue-500 to-blue-600', icon: 'text-blue-600' },
    orange: { light: 'bg-orange-50', border: 'border-orange-200', header: 'from-orange-500 to-orange-600', icon: 'text-orange-600' },
    purple: { light: 'bg-purple-50', border: 'border-purple-200', header: 'from-purple-500 to-purple-600', icon: 'text-purple-600' }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            Route Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the route that works best for your situation. All roads lead to the venue!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {routes.map((route, idx) => {
            const Icon = route.icon;
            const colors = colorStyles[route.color as keyof typeof colorStyles];

            return (
              <div key={idx} className={`${colors.light} border-2 ${colors.border} rounded-xl overflow-hidden hover:shadow-lg transition-all`}>
                <div className={`bg-gradient-to-r ${colors.header} text-white p-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold">{route.name}</h3>
                      <p className="text-white/90 text-sm">{route.type}</p>
                    </div>
                    <Icon className="w-8 h-8 opacity-80" />
                  </div>
                  <p className="text-white/80 text-sm">{route.status}</p>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-700 font-medium">{route.description}</p>

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 uppercase font-semibold">Distance</p>
                      <p className="text-xl font-bold text-gray-900">{route.distance}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 uppercase font-semibold">Time</p>
                      <p className="text-xl font-bold text-gray-900">{route.time}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 uppercase font-semibold">Traffic</p>
                      <p className="text-xl font-bold text-gray-900">{route.traffic}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 uppercase font-semibold">Difficulty</p>
                      <p className="text-gray-900 font-medium">{route.difficulty}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase font-semibold">Best For</p>
                      <p className="text-gray-900 font-medium">{route.type}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-3">Turn-by-turn</p>
                    <ul className="space-y-2">
                      {route.details.map((detail, didx) => (
                        <li key={didx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className={`${colors.icon} font-bold mt-0.5`}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors">
                    View on Map
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-8 mb-8">
          <div className="flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Current Conditions</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>I-95 North: Minor congestion near Exit 22 area</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Main Street: Construction in one lane (9 AM - 4 PM only)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Peak hours: 7-10 AM and 4-7 PM (add 15+ minutes)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Travel Time Tips</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Morning: 8-9 AM has heaviest traffic</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Afternoon: 4-7 PM is busy, avoid if possible</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Best times: 10-11 AM, 2-3 PM, after 8 PM</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Always add 10-15 min buffer for unexpected delays</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Navigation Tools</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">1.</span>
                <span className="text-gray-700"><span className="font-semibold">Google Maps</span> - Real-time traffic updates</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">2.</span>
                <span className="text-gray-700"><span className="font-semibold">Apple Maps</span> - Download offline navigation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">3.</span>
                <span className="text-gray-700"><span className="font-semibold">Waze</span> - Community-based traffic reporting</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">4.</span>
                <span className="text-gray-700"><span className="font-semibold">Printed Directions</span> - Backup option always helpful</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
