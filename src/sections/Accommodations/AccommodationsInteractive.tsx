import { Section } from '../../types/layoutConfig';
import React, { useState } from 'react';
import { Hotel, Home, Landmark } from 'lucide-react';

interface AccommodationsInteractiveProps {
  section: Section;
}

const hotelsByType = {
  luxury: [
    { id: 1, name: 'Five Star Palace', price: 450, rating: 5.0 },
    { id: 2, name: 'Opulent Residences', price: 380, rating: 4.9 },
  ],
  budget: [
    { id: 3, name: 'Value Inn Express', price: 65, rating: 4.1 },
    { id: 4, name: 'Economy Stays', price: 55, rating: 4.0 },
  ],
  boutique: [
    { id: 5, name: 'Artisan Hideaway', price: 175, rating: 4.7 },
    { id: 6, name: 'Designer Suites', price: 210, rating: 4.8 },
  ],
};

export default function AccommodationsInteractive({ section }: AccommodationsInteractiveProps) {
  const [activeType, setActiveType] = useState('luxury');

  const types = [
    { key: 'luxury', label: 'Luxury Hotels', icon: Landmark },
    { key: 'budget', label: 'Budget Options', icon: Home },
    { key: 'boutique', label: 'Boutique Stays', icon: Hotel },
  ];

  const currentHotels = hotelsByType[activeType as keyof typeof hotelsByType];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Find Your Perfect Stay</h2>
          <p className="text-gray-600">Toggle between hotel categories to explore options</p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 bg-white rounded-xl p-6 shadow-md">
          {types.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveType(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeType === key
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon size={20} />
              {label}
            </button>
          ))}
        </div>

        {/* Content Area with Animation */}
        <div className="min-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {currentHotels.map((hotel) => (
              <div
                key={hotel.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-l-4 ${
                  activeType === 'luxury'
                    ? 'border-amber-500'
                    : activeType === 'budget'
                    ? 'border-green-500'
                    : 'border-purple-500'
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < Math.floor(hotel.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-700 font-semibold">{hotel.rating}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {activeType === 'luxury'
                      ? 'Premium luxury experience with world-class amenities and service.'
                      : activeType === 'budget'
                      ? 'Comfortable and affordable accommodation perfect for budget travelers.'
                      : 'Unique character with personalized service and distinctive design.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="text-3xl font-bold text-indigo-600">${hotel.price}</p>
                  </div>
                  <button className={`px-6 py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-105 ${
                    activeType === 'luxury'
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500'
                      : activeType === 'budget'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Stats */}
        <div className="mt-12 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-8 text-center">
          <p className="text-gray-700 font-semibold">
            Showing {currentHotels.length} {activeType === 'luxury' ? 'Luxury' : activeType === 'budget' ? 'Budget' : 'Boutique'} Hotels
          </p>
          <p className="text-gray-600 text-sm mt-2">Average price: ${Math.round(currentHotels.reduce((sum, h) => sum + h.price, 0) / currentHotels.length)}/night</p>
        </div>
      </div>
    </section>
  );
}
