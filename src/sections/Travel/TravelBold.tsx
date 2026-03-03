import { Car, MapPin, AlertCircle, Smartphone } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelBoldProps {
  section: Section;
}

export default function TravelBold({ section }: TravelBoldProps) {
  const directions = [
    {
      heading: 'FROM THE NORTH',
      description: 'Take I-95 South toward downtown. Exit at Spring Street (Exit 22). Continue east for 2 miles.'
    },
    {
      heading: 'FROM THE SOUTH',
      description: 'Head north on US-1. Merge onto I-95 North. Take Exit 22 toward Spring Street.'
    },
    {
      heading: 'FROM THE EAST',
      description: 'Take Route 2 West directly to the city center. Follow Downtown signs to parking facilities.'
    },
    {
      heading: 'FROM THE WEST',
      description: 'Take I-90 East. Follow Route 8 South into the city. Turn right onto Main Street.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            DRIVING DIRECTIONS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Choose your route. All paths lead to an unforgettable experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {directions.map((dir, idx) => (
            <div key={idx} className="bg-gray-800 border-2 border-gray-700 p-8 hover:border-white transition-colors">
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-3 uppercase">
                    {dir.heading}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {dir.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-10 rounded-lg mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">DESTINATION ADDRESS</h4>
                <p className="text-gray-600">
                  325 Main Street<br/>
                  Downtown Central<br/>
                  City, ST 12345
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">PARKING OPTIONS</h4>
                <p className="text-gray-600">
                  Street parking (metered)<br/>
                  Lot B (3 blocks south)<br/>
                  Garage (under building)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">QUICK ACCESS</h4>
                <p className="text-gray-600">
                  Get directions on Maps<br/>
                  Phone: (555) 123-4567<br/>
                  See parking info
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-400 text-gray-900 p-6 rounded-lg flex gap-4">
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-lg mb-2">IMPORTANT NOTE</p>
            <p className="text-sm">Construction on Main Street may cause delays. Allow extra travel time during peak hours (7-9 AM, 4-7 PM).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
