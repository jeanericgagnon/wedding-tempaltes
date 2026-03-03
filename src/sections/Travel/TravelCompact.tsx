import { Plane, Hotel } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelCompactProps {
  section: Section;
}

export default function TravelCompact({ section }: TravelCompactProps) {
  const airport = section.bindings?.airport || 'International Airport (ABC)';
  const airportInfo = section.bindings?.airportInfo || '30 minutes from venue';
  const hotelName = section.bindings?.hotelName || 'Hotel blocks available';
  const hotelInfo = section.bindings?.hotelInfo || 'Details on RSVP page';

  const items = [
    {
      icon: Plane,
      title: 'Airport',
      subtitle: airport,
      description: airportInfo,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10 group-hover:bg-sky-500/20',
    },
    {
      icon: Hotel,
      title: 'Accommodations',
      subtitle: hotelName,
      description: hotelInfo,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10 group-hover:bg-amber-500/20',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-2">Travel Information</h2>
          <p className="text-center text-gray-400 font-light">Plan your journey to the celebration</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-gray-700 hover:border-gray-500 ${item.bgColor} transition-all duration-300 cursor-default overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-500" />

                <div className="relative z-10 flex gap-5">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.color.replace('text-', 'from-')} to-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-serif font-light mb-1 text-white group-hover:text-gray-100 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light tracking-wide uppercase mb-3 group-hover:text-gray-300 transition-colors duration-300">
                      {item.subtitle}
                    </p>
                    <div className="h-0.5 w-0 bg-gradient-to-r from-gray-500 to-transparent group-hover:w-12 transition-all duration-500" />
                    <p className="text-gray-400 font-light mt-3 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 font-light text-sm">
            Need assistance? Email us at{' '}
            <span className="text-amber-400 font-semibold">travel@wedding.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
