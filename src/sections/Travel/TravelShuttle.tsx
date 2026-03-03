import { Bus, MapPin, Clock, Users, Phone, CheckCircle } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelShuttleProps {
  section: Section;
}

export default function TravelShuttle({ section }: TravelShuttleProps) {
  const shuttles = [
    {
      name: 'Hotel Shuttle - Morning',
      pickup: 'Grand Plaza Hotel, 500 Oak Ave',
      time: '2:00 PM',
      capacity: '35 guests',
      included: true,
      details: 'Departs every 30 minutes starting 2:00 PM. Complimentary for hotel guests.'
    },
    {
      name: 'Hotel Shuttle - Evening',
      pickup: 'Grand Plaza Hotel, 500 Oak Ave',
      time: '11:00 PM',
      capacity: '35 guests',
      included: true,
      details: 'Return shuttle departure. Final departure at 11:00 PM.'
    },
    {
      name: 'Airport Shuttle',
      pickup: 'Metropolitan Airport, Terminal 2',
      time: 'Upon Request',
      capacity: '15 guests per trip',
      included: false,
      details: '$45 per person roundtrip. Reserve 48 hours in advance.'
    },
    {
      name: 'Downtown Shuttle',
      pickup: 'Downtown Transit Hub, 101 Main St',
      time: '1:30 PM',
      capacity: '25 guests',
      included: true,
      details: 'Direct route to venue. Parking available at transit hub.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-4">
            <Bus className="w-12 h-12 text-blue-600 mr-3" />
          </div>
          <h2 className="text-5xl font-serif text-center text-gray-900 mb-3">Complimentary Shuttles</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            We've arranged convenient shuttle service from major hotels and transit points to make your arrival hassle-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {shuttles.map((shuttle, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{shuttle.name}</h3>
                {shuttle.included && (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Pickup Location</p>
                    <p className="text-sm text-gray-600">{shuttle.pickup}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Departure Time</p>
                    <p className="text-sm text-gray-600">{shuttle.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Capacity</p>
                    <p className="text-sm text-gray-600">{shuttle.capacity}</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 italic">{shuttle.details}</p>

              {!shuttle.included && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <a href="tel:555-0147" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Call (555) 0147 to reserve
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Shuttle Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-900 mb-2">Schedule Confirmation</p>
              <p className="text-sm text-gray-600">
                Please confirm your shuttle preference in your RSVP. Changes can be made up to 48 hours before the event.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Luggage & Special Items</p>
              <p className="text-sm text-gray-600">
                Limited luggage storage available. Please contact us if you have special accommodation needs.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Questions & Changes</p>
              <p className="text-sm text-gray-600">
                Contact our travel coordinator at <a href="mailto:travel@event.com" className="text-blue-600 hover:text-blue-700">travel@event.com</a>
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Weather Delays</p>
              <p className="text-sm text-gray-600">
                In case of severe weather, updates will be sent via email and SMS to all registered guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
