import { Brain as Train, Hotel, MapPin, Zap, Shield, Ticket } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelCardsProps {
  section: Section;
}

export default function TravelCards({ section }: TravelCardsProps) {
  const travelOptions = [
    {
      icon: Train,
      title: 'By Train',
      subtitle: 'Comfortable & Scenic',
      distance: 'Central Station - 0.5 miles',
      time: '45-60 min from airport',
      price: '$25',
      features: ['Direct to downtown', 'WiFi available', 'Luggage friendly'],
      color: 'blue'
    },
    {
      icon: Hotel,
      title: 'Hotel Shuttles',
      subtitle: 'Complimentary Service',
      distance: 'Hotel pickup available',
      time: 'Schedule on arrival',
      price: 'FREE',
      features: ['Advance booking', 'Early morning available', 'Group rates'],
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Rideshare',
      subtitle: 'Door-to-Door Service',
      distance: 'Pickup at baggage claim',
      time: '20-40 min to venue',
      price: '$30-50',
      features: ['Real-time tracking', 'Share cost option', 'Easy cancellation'],
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Car Rental',
      subtitle: 'Maximum Flexibility',
      distance: 'On-site rental desk',
      time: 'Immediate access',
      price: '$50+/day',
      features: ['GPS included', 'Parking on-site', 'Insurance options'],
      color: 'amber'
    },
    {
      icon: Shield,
      title: 'Private Transfer',
      subtitle: 'Premium Comfort',
      distance: 'Reserved parking',
      time: 'Direct to hotel',
      price: '$75-100',
      features: ['Professional driver', 'Bottled water', 'No extra stops'],
      color: 'indigo'
    },
    {
      icon: Ticket,
      title: 'Group Transport',
      subtitle: 'Organized Groups',
      distance: 'Coach bus service',
      time: 'Scheduled times',
      price: 'Discounted',
      features: ['Large group capacity', 'Multiple pickups', 'Fixed schedule'],
      color: 'rose'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', icon: 'bg-blue-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', icon: 'bg-purple-100' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', icon: 'bg-green-100' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', icon: 'bg-amber-100' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', icon: 'bg-indigo-100' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600', icon: 'bg-rose-100' }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Transportation Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple ways to reach us. Choose what works best for your travel style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelOptions.map((option, idx) => {
            const colors = colorMap[option.color as keyof typeof colorMap];
            const IconComponent = option.icon;

            return (
              <div
                key={idx}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className={`${colors.icon} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{option.title}</h3>
                <p className={`text-sm ${colors.text} font-semibold mb-4`}>{option.subtitle}</p>

                <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Location:</span> {option.distance}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Duration:</span> {option.time}
                  </p>
                  <p className={`text-lg font-bold ${colors.text}`}>{option.price}</p>
                </div>

                <div className="space-y-2">
                  {option.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.text} mt-2 flex-shrink-0`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-6 ${colors.text} border-2 ${colors.border} hover:${colors.bg} hover:shadow-md font-semibold py-2 rounded-lg transition-all`}>
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
