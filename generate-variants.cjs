const fs = require('fs');
const path = require('path');

const accomodationsVariants = {
  Classic: `import { Hotel } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface AccommodationsClassicProps {
  section: Section;
}

export default function AccommodationsClassic({ section }: AccommodationsClassicProps) {
  const hotels = [
    { name: 'Grand Hotel', address: '123 Main St', distance: '0.5 miles from venue', phone: '(555) 123-4567', rate: '$150-200/night' },
    { name: 'Boutique Inn', address: '456 Park Ave', distance: '1 mile from venue', phone: '(555) 234-5678', rate: '$120-150/night' },
    { name: 'Budget Lodge', address: '789 Center Rd', distance: '2 miles from venue', phone: '(555) 345-6789', rate: '$80-100/night' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Hotel className="w-12 h-12 mx-auto mb-6 text-blue-600" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Accommodations</h2>
          <p className="text-xl text-gray-600">We've reserved room blocks at these nearby hotels</p>
        </div>

        <div className="space-y-6">
          {hotels.map((hotel, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 mb-1">{hotel.address}</p>
                  <p className="text-blue-600 mb-2">{hotel.distance}</p>
                  <p className="text-gray-700">Phone: {hotel.phone}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-gray-900">{hotel.rate}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-100 rounded-xl text-center">
          <p className="text-gray-700">
            <strong>Booking Code:</strong> Use code "WEDDING2025" when booking to receive group rates
          </p>
        </div>
      </div>
    </section>
  );
}`,
};

// Write Accommodations Classic
const accDir = path.join(__dirname, 'src', 'sections', 'Accommodations');
if (!fs.existsSync(accDir)){
  fs.mkdirSync(accDir, { recursive: true });
}

fs.writeFileSync(path.join(accDir, 'AccommodationsClassic.tsx'), accomodationsVariants.Classic);
console.log('Generated Accommodations variants');
