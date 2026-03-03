import { Section } from '../../types/layoutConfig';
import { Calendar, MapPin, Zap } from 'lucide-react';

interface AccommodationsTimelineProps {
  section: Section;
}

const timelineHotels = [
  { id: 1, name: 'Early Bird Special', price: 99, rating: 4.2, period: 'Jan - Mar', image: 'bg-gradient-to-br from-blue-400 to-blue-600' },
  { id: 2, name: 'Spring Escape', price: 145, rating: 4.5, period: 'Apr - May', image: 'bg-gradient-to-br from-green-400 to-emerald-600' },
  { id: 3, name: 'Summer Bliss', price: 195, rating: 4.7, period: 'Jun - Aug', image: 'bg-gradient-to-br from-yellow-400 to-orange-600' },
  { id: 4, name: 'Fall Retreat', price: 165, rating: 4.6, period: 'Sep - Oct', image: 'bg-gradient-to-br from-orange-400 to-red-600' },
  { id: 5, name: 'Winter Wonder', price: 225, rating: 4.8, period: 'Nov - Dec', image: 'bg-gradient-to-br from-cyan-400 to-blue-600' },
];

export default function AccommodationsTimeline({ section }: AccommodationsTimelineProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Seasonal Hotel Calendar</h2>
          <p className="text-gray-400">Discover our best rates throughout the year</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 hidden md:block"></div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {timelineHotels.map((hotel, idx) => (
              <div key={hotel.id} className="group relative">
                {/* Timeline Dot */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-purple-600 shadow-lg z-10 hidden md:flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-600">{idx + 1}</span>
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  {/* Image Area */}
                  <div className={`h-32 ${hotel.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="text-white opacity-30" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{hotel.name}</h3>

                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={14} className="text-purple-400" />
                      <span className="text-xs text-gray-400">{hotel.period}</span>
                    </div>

                    {/* Price Highlight */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                      <p className="text-xs text-gray-200">Starting From</p>
                      <p className="text-2xl font-bold text-white">${hotel.price}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(hotel.rating) ? 'text-yellow-400' : 'text-slate-600'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-300">{hotel.rating}</span>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm">
                      Check Rates
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Zap size={12} />
                    Deal
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Season Info */}
        <div className="mt-16 bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6">Seasonal Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {timelineHotels.map((hotel) => (
              <div key={hotel.id} className={`p-4 rounded-lg ${hotel.image} bg-opacity-20 border-l-4 border-transparent hover:border-white transition-colors`}>
                <p className="text-sm font-semibold text-white mb-1">{hotel.period}</p>
                <p className="text-xs text-gray-300">{hotel.name}</p>
                <p className="text-sm font-bold text-yellow-300 mt-2">${hotel.price}/night</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Best Deals', desc: 'Winter offers some of our lowest rates' },
            { title: 'Peak Season', desc: 'Summer is our busiest and warmest time' },
            { title: 'Great Value', desc: 'Spring and fall provide perfect weather deals' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 text-center">
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
