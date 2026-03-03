import { MapPin, Plane, Bus, Car, Bike, DollarSign } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelGettingProps {
  section: Section;
}

export default function TravelGetting({ section }: TravelGettingProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Getting Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Located in the heart of downtown with excellent access from multiple transportation hubs. We've made it easy to reach us no matter your starting point.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-10 border border-red-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Air</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Primary Airport</p>
                <p className="text-gray-900 font-semibold">Metropolitan International Airport (MIA)</p>
                <p className="text-sm text-gray-600">25 miles | 35-45 min by car | Taxi: $55-75</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Alternative Airport</p>
                <p className="text-gray-900 font-semibold">Regional Airport (RGN)</p>
                <p className="text-sm text-gray-600">12 miles | 20-30 min by car | Taxi: $40-50</p>
              </div>
              <div className="pt-4 border-t border-red-200">
                <p className="text-sm font-semibold text-red-600 mb-2">From Airport:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Taxi/Rideshare: Direct to venue</li>
                  <li>Rental car: Available on-site</li>
                  <li>Shuttle: Book in advance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-10 border border-blue-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Train</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Main Station</p>
                <p className="text-gray-900 font-semibold">Central Railroad Station</p>
                <p className="text-sm text-gray-600">0.5 miles | 10 min walk | 5 min by taxi</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Amenities</p>
                <p className="text-gray-900 font-semibold">Direct Metro Access</p>
                <p className="text-sm text-gray-600">Express service to downtown, WiFi, restaurants</p>
              </div>
              <div className="pt-4 border-t border-blue-200">
                <p className="text-sm font-semibold text-blue-600 mb-2">From Station:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Walking: 10 minutes</li>
                  <li>Taxi: 5-10 minutes</li>
                  <li>Bus: Downtown express route</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-10 border border-green-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Car</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Venue Address</p>
                <p className="text-gray-900 font-semibold">742 Main Street, Suite 200</p>
                <p className="text-sm text-gray-600">Springfield, CA 95032</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">From Downtown</p>
                <p className="text-gray-900 font-semibold">11.7 miles • 25 minutes</p>
                <p className="text-sm text-gray-600">Take I-95 North to Exit 22 (Spring Street)</p>
              </div>
              <div className="pt-4 border-t border-green-200">
                <p className="text-sm font-semibold text-green-600 mb-2">Parking:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>300+ free parking spaces</li>
                  <li>Valet service available ($10)</li>
                  <li>Accessible parking nearby</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-10 border border-purple-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">By Bike / Other</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Cycling</p>
                <p className="text-gray-900 font-semibold">Bike-Friendly Routes Available</p>
                <p className="text-sm text-gray-600">Protected bike lanes on Main Street corridor</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 uppercase font-semibold mb-1">Bike Parking</p>
                <p className="text-gray-900 font-semibold">Secure Racks</p>
                <p className="text-sm text-gray-600">Located at building entrance, free access</p>
              </div>
              <div className="pt-4 border-t border-purple-200">
                <p className="text-sm font-semibold text-purple-600 mb-2">Other Options:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Scooter/skateboard friendly</li>
                  <li>Accessible entry for mobility aids</li>
                  <li>Rest areas inside</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-10 md:p-14">
          <h3 className="text-3xl font-bold mb-8">Distance & Cost Summary</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <p className="text-sm text-gray-300">From Airport</p>
              </div>
              <p className="text-2xl font-bold">25 mi</p>
              <p className="text-sm text-gray-400 mt-1">45 min drive</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-5 h-5 text-amber-300" />
                <p className="text-sm text-gray-300">Taxi Cost</p>
              </div>
              <p className="text-2xl font-bold">$55-75</p>
              <p className="text-sm text-gray-400 mt-1">Standard fare</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Bus className="w-5 h-5 text-amber-300" />
                <p className="text-sm text-gray-300">Public Transit</p>
              </div>
              <p className="text-2xl font-bold">$3.50</p>
              <p className="text-sm text-gray-400 mt-1">Daily pass available</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Plane className="w-5 h-5 text-amber-300" />
                <p className="text-sm text-gray-300">From Train</p>
              </div>
              <p className="text-2xl font-bold">0.5 mi</p>
              <p className="text-sm text-gray-400 mt-1">10 min walk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
