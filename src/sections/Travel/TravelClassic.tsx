import { Plane, Hotel, Car } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelClassicProps {
  section: Section;
}

export default function TravelClassic({ section }: TravelClassicProps) {
  const airport = section.bindings?.airport || 'International Airport (ABC)';
  const airportDistance = section.bindings?.airportDistance || '30 minutes from venue';
  const hotelInfo = section.bindings?.hotelInfo || 'Room blocks available at select hotels';
  const hotelDetails = section.bindings?.hotelDetails || 'Special rates for wedding guests';
  const transportInfo = section.bindings?.transportInfo || 'Complimentary shuttle service';
  const transportDetails = section.bindings?.transportDetails || 'Between hotels and venue';

  const cards = [
    {
      icon: Plane,
      title: 'Airport',
      subtitle: airport,
      description: airportDistance,
      color: 'from-sky-400 to-blue-500',
      bgColor: 'from-sky-50 to-blue-50',
    },
    {
      icon: Hotel,
      title: 'Hotels',
      subtitle: hotelInfo,
      description: hotelDetails,
      color: 'from-rose-400 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50',
    },
    {
      icon: Car,
      title: 'Transportation',
      subtitle: transportInfo,
      description: transportDetails,
      color: 'from-amber-400 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">Travel & Accommodations</h2>
          <p className="text-gray-600 text-lg">Everything you need to know for your journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br ${card.bgColor} rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-default`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-black to-transparent transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-light text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm font-light tracking-widest text-gray-600 uppercase">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-current via-current to-transparent transition-all duration-500" style={{ color: `var(--color-${index})` }} />

                  <p className="text-gray-700 leading-relaxed font-light pt-2">
                    {card.description}
                  </p>

                  <div className="pt-4">
                    <button className="text-sm font-light tracking-widest uppercase text-gray-600 group-hover:text-gray-900 transition-colors duration-300 flex items-center gap-2">
                      Learn More
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-100">
          <h3 className="text-xl font-serif font-light text-gray-900 mb-3">Need Help?</h3>
          <p className="text-gray-700 font-light">
            Have questions about travel arrangements? Contact us at{' '}
            <span className="text-rose-600 font-semibold">travel@wedding.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
