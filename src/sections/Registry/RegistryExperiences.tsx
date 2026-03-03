import { Plane, MapPin, Calendar, Users } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryExperiencesProps {
  section: Section;
}

const experiences = [
  {
    name: 'Helicopter Tour - Grand Canyon',
    location: 'Las Vegas, Nevada',
    price: 450,
    duration: '1.5 hours',
    icon: Plane,
    description: 'Breathtaking aerial views of the Grand Canyon on a private helicopter tour.',
    contributes: 'Creates unforgettable memories',
  },
  {
    name: 'Private Cooking Class',
    location: 'New York City',
    price: 320,
    duration: '3 hours',
    icon: MapPin,
    description: 'Learn Italian cuisine from a Michelin-trained chef in a Manhattan loft.',
    contributes: 'A skill we\'ll use forever',
  },
  {
    name: 'Couples Spa Retreat',
    location: 'Sedona, Arizona',
    price: 580,
    duration: '1 day',
    icon: Calendar,
    description: 'Luxury spa treatments including massages, facials, and wellness sessions.',
    contributes: 'Quality time together',
  },
  {
    name: 'Wine Tasting Tour',
    location: 'Napa Valley, California',
    price: 280,
    duration: '4 hours',
    icon: Users,
    description: 'Tour three premier vineyards with exclusive tastings and food pairings.',
    contributes: 'Celebrating our love',
  },
  {
    name: 'Luxury Hotel Night',
    location: 'Destination of Choice',
    price: 750,
    duration: '1 night',
    icon: MapPin,
    description: 'Five-star accommodations for a romantic getaway anywhere in the world.',
    contributes: 'Starting our adventures',
  },
  {
    name: 'Adventure Activity',
    location: 'Mountain Destination',
    price: 400,
    duration: 'Varies',
    icon: Plane,
    description: 'Skiing, hiking, rock climbing, or any adventure activity you choose.',
    contributes: 'Sharing thrilling moments',
  },
];

export default function RegistryExperiences({ section }: RegistryExperiencesProps) {
  const totalRaised = 2000;
  const totalGoal = 4000;
  const progressPercent = (totalRaised / totalGoal) * 100;

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Plane className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Experiences & Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to share unforgettable moments together. Help us create memories that last a lifetime.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-indigo-200 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <p className="text-gray-600 text-sm font-semibold mb-2">ADVENTURE GOAL</p>
              <p className="text-4xl font-bold text-indigo-600">${totalGoal.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-semibold mb-2">ALREADY FUNDED</p>
              <p className="text-4xl font-bold text-purple-600">${totalRaised.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-semibold mb-2">TO GO</p>
              <p className="text-4xl font-bold text-pink-600">${(totalGoal - totalRaised).toLocaleString()}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-700"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div key={exp.name} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="text-3xl font-bold text-purple-600">${exp.price}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{exp.description}</p>

                <div className="space-y-2 mb-6 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-indigo-600" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-indigo-600" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic mb-6">Why we love it: {exp.contributes}</p>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all">
                  Fund This Experience
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-3">Create Lasting Memories</h3>
          <p className="max-w-2xl mx-auto text-indigo-100 text-lg">
            These experiences represent the adventures we want to share together. Every contribution helps us make these dreams a reality.
          </p>
        </div>
      </div>
    </section>
  );
}
