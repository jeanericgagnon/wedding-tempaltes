import { MapPin, ArrowUpRight, Sparkles, Clock } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelElegantProps {
  section: Section;
}

export default function TravelElegant({ section }: TravelElegantProps) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-widest">Premium Travel Experience</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Arrive in Style
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover elegant ways to reach our prestigious venue with curated luxury options
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-blue-100 to-blue-200 p-12 flex flex-col justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-gray-900 mb-3">Concierge Airport Transfer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Premium sedan service with complimentary WiFi, refreshments, and professional drivers fluent in multiple languages.
                  </p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-semibold">Duration</p>
                      <p className="text-gray-900">45-50 minutes from airport</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-semibold">Service</p>
                      <p className="text-gray-900">Available 24/7, advance booking recommended</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Book Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-purple-100 to-purple-200 p-12 flex flex-col justify-center overflow-hidden md:order-last">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-gray-900 mb-3">Private Luxury Car</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Exclusive access to premium vehicles including Mercedes, BMW, or Audi for the ultimate comfort and style.
                  </p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-semibold">Duration</p>
                      <p className="text-gray-900">35-40 minutes from airport</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-semibold">Amenities</p>
                      <p className="text-gray-900">Climate control, premium sound system, complimentary beverages</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Reserve</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-green-100 to-green-200 p-12 flex flex-col justify-center overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-gray-900 mb-3">First Class Train Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Direct rail service with first-class seating, gourmet refreshments, and direct access to downtown venue.
                  </p>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-semibold">Duration</p>
                      <p className="text-gray-900">55-65 minutes from airport</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-semibold">Availability</p>
                      <p className="text-gray-900">Departures every 30 minutes, quiet car available</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Purchase Ticket</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-10 md:p-12">
          <h3 className="text-2xl font-serif mb-6">Concierge Assistance</h3>
          <p className="mb-6 leading-relaxed">
            Our dedicated travel concierge team is available to assist with all your transportation needs. From pre-arrival planning to personalized recommendations, we ensure a seamless journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-amber-300 font-semibold mb-2">Contact Information</p>
              <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-300">Email: travel@venue.com</p>
            </div>
            <div>
              <p className="text-amber-300 font-semibold mb-2">Hours of Operation</p>
              <p className="text-gray-300">Monday - Sunday: 7 AM - 11 PM</p>
              <p className="text-gray-300">Emergency: Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
