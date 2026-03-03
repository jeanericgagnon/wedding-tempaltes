import { Crown, Check, Lock, Zap, Leaf, Phone } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelLuxuryProps {
  section: Section;
}

export default function TravelLuxury({ section }: TravelLuxuryProps) {
  const services = [
    { icon: Zap, title: 'Priority Booking', description: 'VIP access to premium transport' },
    { icon: Lock, title: 'Privacy Guaranteed', description: 'Discreet, confidential service' },
    { icon: Crown, title: 'Elite Treatment', description: 'White-glove service included' },
    { icon: Leaf, title: 'Eco Vehicles', description: 'Premium electric & hybrid options' },
  ];

  return (
    <section className="py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-900/40 px-4 py-2 rounded-full border border-amber-600/50 mb-6">
            <Crown className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-widest">Luxury Travel</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Premium VIP Transfer Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elevate your arrival with our exclusive luxury transportation service, designed for the discerning traveler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {[
              {
                title: 'Executive Fleet',
                items: ['Mercedes S-Class', 'BMW 7-Series', 'Audi A8', 'Range Rover']
              },
              {
                title: 'Premium Amenities',
                items: ['Champagne & Refreshments', 'WiFi & USB Charging', 'Premium Sound System', 'Climate Control']
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-serif mb-4 text-amber-300">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 text-gray-200">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-amber-600/30 p-10 md:p-14">
              <div className="text-center mb-8">
                <div className="text-amber-400 mb-4">
                  <Crown className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-3xl font-serif mb-2">Ultimate Package</h3>
                <p className="text-gray-300">All-inclusive luxury experience</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Airport Transfer</span>
                  <span className="text-amber-400 font-semibold">$250</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Hotel to Venue</span>
                  <span className="text-amber-400 font-semibold">$180</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                  <span className="text-gray-300">City Tour Service</span>
                  <span className="text-amber-400 font-semibold">$400</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                  <span className="text-gray-300">Return Transfer</span>
                  <span className="text-amber-400 font-semibold">$250</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-amber-600">
                  <span className="text-lg font-serif">Total Package</span>
                  <span className="text-2xl font-bold text-amber-400">$1,080</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-3 px-4 rounded-xl transition-all">
                Reserve Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div key={idx} className="group bg-gradient-to-br from-gray-900 to-black border border-amber-600/30 hover:border-amber-400/60 rounded-xl p-6 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-amber-600/50 transition-all">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-amber-900/30 to-transparent border-l-4 border-amber-400 rounded-lg p-8 md:p-10">
          <div className="flex gap-6">
            <Phone className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-serif mb-3 text-amber-300">VIP Concierge</h3>
              <p className="text-gray-300 mb-4">
                Our dedicated luxury travel concierge team is available 24/7 to arrange your perfect arrival and departure experience.
              </p>
              <div className="space-y-2">
                <p className="text-amber-400 font-semibold">Phone: +1 (555) 888-LUXE</p>
                <p className="text-amber-400 font-semibold">Email: vip@luxetravel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
