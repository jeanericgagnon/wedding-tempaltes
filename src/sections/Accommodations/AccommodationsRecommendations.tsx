import { Section } from '../../types/layoutConfig';
import { Users, Utensils, Dumbbell, ShoppingBag, Sunset, Briefcase } from 'lucide-react';

interface AccommodationsRecommendationsProps {
  section: Section;
}

const recommendations = [
  {
    id: 1,
    title: 'Families Love This',
    icon: Users,
    hotel: 'Sunshine Family Resort',
    desc: 'Spacious suites with kids club and playground facilities',
    price: 195,
    color: 'from-orange-100 to-yellow-100',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    id: 2,
    title: 'Foodies Choice',
    icon: Utensils,
    hotel: 'Culinary Heights Hotel',
    desc: 'World-class dining with Michelin-starred restaurant',
    price: 275,
    color: 'from-red-100 to-pink-100',
    borderColor: 'border-red-500',
    textColor: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    id: 3,
    title: 'Fitness Enthusiasts',
    icon: Dumbbell,
    hotel: 'Wellness Peak Hotel',
    desc: 'Olympic-sized pool and state-of-the-art gym facilities',
    price: 225,
    color: 'from-green-100 to-emerald-100',
    borderColor: 'border-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 4,
    title: 'Shoppers Paradise',
    icon: ShoppingBag,
    hotel: 'Downtown Luxury Plaza',
    desc: 'Located in the heart of shopping district with mall access',
    price: 205,
    color: 'from-purple-100 to-pink-100',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 5,
    title: 'Romance Seekers',
    icon: Sunset,
    hotel: 'Sunset Paradise Inn',
    desc: 'Rooftop dinners and sunset views from every room',
    price: 245,
    color: 'from-pink-100 to-rose-100',
    borderColor: 'border-pink-500',
    textColor: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    id: 6,
    title: 'Business Travelers',
    icon: Briefcase,
    hotel: 'Executive Center Hotel',
    desc: '24/7 business center and meeting rooms with tech support',
    price: 185,
    color: 'from-blue-100 to-cyan-100',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
];

export default function AccommodationsRecommendations({ section }: AccommodationsRecommendationsProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Staff Recommendations</h2>
          <p className="text-gray-600 text-lg">Handpicked hotels for every type of traveler</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br ${rec.color} border-l-4 ${rec.borderColor} hover:scale-105`}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform"></div>

              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${rec.bgColor} rounded-lg mb-6 group-hover:scale-110 transition-transform`}>
                  <rec.icon className={`${rec.textColor}`} size={32} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold ${rec.textColor} mb-2`}>{rec.title}</h3>

                {/* Hotel Name */}
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{rec.hotel}</h4>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{rec.desc}</p>

                {/* Features Icons */}
                <div className="flex gap-3 mb-6 pb-6 border-b border-gray-300 border-opacity-50">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${rec.bgColor} flex items-center justify-center`}>
                      <span className={`text-xs font-bold ${rec.textColor}`}>+</span>
                    </div>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">from</p>
                    <p className={`text-2xl font-bold ${rec.textColor}`}>${rec.price}</p>
                  </div>
                  <button className={`px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r ${rec.color.replace('100', '500').replace('to-', 'via-')} hover:shadow-lg transition-all transform group-hover:scale-105`}>
                    View
                  </button>
                </div>

                {/* Badge */}
                <div className={`absolute top-4 right-4 ${rec.bgColor} ${rec.textColor} px-3 py-1 rounded-full text-xs font-bold`}>
                  Recommended
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Can't decide?</h3>
          <p className="text-blue-100 mb-8">Let our travel experts help you find the perfect accommodation for your needs</p>
          <button className="bg-white hover:bg-blue-50 text-blue-600 font-bold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl">
            Contact Our Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
