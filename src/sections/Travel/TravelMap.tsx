import { MapPin, Plane, Hotel, Navigation, Phone, Clock, Map } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelMapProps {
  section: Section;
}

export default function TravelMap({ section }: TravelMapProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            Venue Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conveniently located with excellent access to transportation and accommodations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
              {/* Street grid background */}
              <rect x="0" y="0" width="400" height="500" fill="url(#streetGradient)" />
              <defs>
                <linearGradient id="streetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bfdbfe" />
                  <stop offset="100%" stopColor="#93c5fd" />
                </linearGradient>
              </defs>

              {/* Grid lines representing streets */}
              <line x1="50" y1="0" x2="50" y2="500" stroke="#64748b" strokeWidth="2" opacity="0.3" />
              <line x1="150" y1="0" x2="150" y2="500" stroke="#64748b" strokeWidth="2" opacity="0.3" />
              <line x1="250" y1="0" x2="250" y2="500" stroke="#64748b" strokeWidth="2" opacity="0.3" />
              <line x1="350" y1="0" x2="350" y2="500" stroke="#64748b" strokeWidth="2" opacity="0.3" />

              <line x1="0" y1="100" x2="400" y2="100" stroke="#64748b" strokeWidth="2" opacity="0.3" />
              <line x1="0" y1="200" x2="400" y2="200" stroke="#64748b" strokeWidth="2" opacity="0.3" />
              <line x1="0" y1="300" x2="400" y2="300" stroke="#64748b" strokeWidth="2" opacity="0.3" />
              <line x1="0" y1="400" x2="400" y2="400" stroke="#64748b" strokeWidth="2" opacity="0.3" />

              {/* Main streets (thicker) */}
              <line x1="100" y1="0" x2="100" y2="500" stroke="#475569" strokeWidth="3" />
              <line x1="0" y1="250" x2="400" y2="250" stroke="#475569" strokeWidth="3" />

              {/* Venue marker */}
              <circle cx="200" cy="250" r="25" fill="#dc2626" />
              <circle cx="200" cy="250" r="20" fill="#ef4444" />
              <text x="200" y="260" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">V</text>

              {/* Nearby landmarks */}
              <rect x="80" y="150" width="30" height="30" fill="#3b82f6" opacity="0.7" />
              <rect x="280" y="320" width="30" height="30" fill="#10b981" opacity="0.7" />
              <circle cx="100" cy="420" r="15" fill="#f59e0b" opacity="0.7" />
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 backdrop-blur-sm">
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full" />
                  <span>Venue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500" />
                  <span>Hotel</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Flying In</h3>
                  <p className="text-sm text-gray-600">Metropolitan International Airport (MIA)</p>
                </div>
              </div>
              <div className="ml-16 space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Distance:</span>
                  <span className="font-semibold">25 miles</span>
                </div>
                <div className="flex justify-between">
                  <span>Travel Time:</span>
                  <span className="font-semibold">35-45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxi/Rideshare:</span>
                  <span className="font-semibold">$55-75</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hotel className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Accommodations</h3>
                  <p className="text-sm text-gray-600">Multiple hotel options nearby</p>
                </div>
              </div>
              <div className="ml-16 space-y-2 text-sm text-gray-700">
                <div><span className="font-semibold">The Grand Hotel</span> - 0.5 miles (5-star)</div>
                <div><span className="font-semibold">Riverside Inn</span> - 1.2 miles (mid-range)</div>
                <div><span className="font-semibold">Lakeside Resort</span> - 3.5 miles (luxury)</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Transportation</h3>
                  <p className="text-sm text-gray-600">Multiple options available</p>
                </div>
              </div>
              <div className="ml-16 space-y-2 text-sm text-gray-700">
                <div>Shuttle service from hotels</div>
                <div>Public transit & metro access</div>
                <div>Free parking on-site</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-2">Venue Address</p>
                <p className="text-blue-100">742 Main Street, Suite 200</p>
                <p className="text-blue-100">Springfield, CA 95032</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-2">Contact & Hours</p>
                <p className="text-blue-100">Phone: (555) 123-4567</p>
                <p className="text-blue-100">Hours: 9 AM - 6 PM Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
