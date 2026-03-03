import { Navigation, MapPin, Hotel, Utensils, ShoppingBag, Wifi, Coffee, ParkingSquare } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelGridProps {
  section: Section;
}

export default function TravelGrid({ section }: TravelGridProps) {
  const gridItems = [
    {
      icon: Navigation,
      title: 'Main Venue',
      description: '742 Main Street',
      details: ['Downtown location', 'Accessible parking', 'ADA compliant']
    },
    {
      icon: MapPin,
      title: 'Central Station',
      description: '0.5 miles away',
      details: ['Walking distance', 'Multiple transit lines', 'Real-time info']
    },
    {
      icon: Hotel,
      title: 'Grand Hotel',
      description: 'Partner hotel',
      details: ['0.5 miles', 'Group rates', 'Room blocks available']
    },
    {
      icon: Hotel,
      title: 'Riverside Inn',
      description: 'Budget friendly',
      details: ['1.2 miles', 'Free parking', 'Airport shuttle']
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'The Riverside',
      details: ['3 blocks away', 'Upscale cuisine', 'Reservations recommended']
    },
    {
      icon: Coffee,
      title: 'Café Central',
      description: 'Quick bites',
      details: ['2 blocks', 'WiFi available', 'Open early']
    },
    {
      icon: ParkingSquare,
      title: 'Parking Lot A',
      description: 'Main facility',
      details: ['300+ spaces', 'Free', 'ADA accessible']
    },
    {
      icon: Wifi,
      title: 'Public WiFi',
      description: 'Downtown network',
      details: ['Free access', 'High speed', 'Secured connection']
    },
    {
      icon: ShoppingBag,
      title: 'Shopping District',
      description: 'Nearby shops',
      details: ['Walking distance', 'Multiple retailers', 'Parking available']
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Around the Venue
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need is within close proximity. Explore all nearby amenities and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{item.description}</p>

                <ul className="space-y-2">
                  {item.details.map((detail, didx) => (
                    <li key={didx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-400 font-bold mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-8 border border-emerald-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation Times</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">From Airport</span>
                <span className="font-semibold text-gray-900">35-45 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">From Train Station</span>
                <span className="font-semibold text-gray-900">10 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">From Downtown</span>
                <span className="font-semibold text-gray-900">15 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">From Highway</span>
                <span className="font-semibold text-gray-900">20 min</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-8 border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Parking Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Main Lot</p>
                <p className="text-gray-900">300+ spaces • FREE</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Valet Service</p>
                <p className="text-gray-900">$10 • Recommended</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Street Parking</p>
                <p className="text-gray-900">2 blocks • Metered</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold uppercase">Accessible</p>
                <p className="text-gray-900">15 spaces • Near entrance</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-xl p-8 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-blue-600 hover:text-blue-700 font-semibold">Get Directions</a>
              <a href="#" className="block text-blue-600 hover:text-blue-700 font-semibold">Book Hotel</a>
              <a href="#" className="block text-blue-600 hover:text-blue-700 font-semibold">Reserve Parking</a>
              <a href="#" className="block text-blue-600 hover:text-blue-700 font-semibold">Contact Info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
