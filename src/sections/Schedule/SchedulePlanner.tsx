import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface SchedulePlannerProps {
  section: Section;
}

const allEvents = [
  { time: '8:00 AM', event: 'Preparations', category: 'prep', location: 'Bridal Suites' },
  { time: '10:00 AM', event: 'Ceremony Setup', category: 'ceremony', location: 'Main Hall' },
  { time: '11:00 AM', event: 'Ceremony', category: 'ceremony', location: 'Main Hall' },
  { time: '12:00 PM', event: 'Family Photos', category: 'photos', location: 'Gardens' },
  { time: '1:00 PM', event: 'Cocktail Hour', category: 'food', location: 'Terrace' },
  { time: '2:30 PM', event: 'Reception Dinner', category: 'food', location: 'Ballroom' },
  { time: '4:00 PM', event: 'Cake Cutting', category: 'food', location: 'Ballroom' },
  { time: '5:00 PM', event: 'Dancing', category: 'entertainment', location: 'Ballroom' },
  { time: '11:00 PM', event: 'Send-Off', category: 'entertainment', location: 'Entrance' },
];

const categories = [
  { id: 'all', label: 'All Events', color: 'bg-gray-200 text-gray-900' },
  { id: 'prep', label: 'Preparation', color: 'bg-purple-200 text-purple-900' },
  { id: 'ceremony', label: 'Ceremony', color: 'bg-rose-200 text-rose-900' },
  { id: 'photos', label: 'Photos', color: 'bg-amber-200 text-amber-900' },
  { id: 'food', label: 'Food & Drinks', color: 'bg-blue-200 text-blue-900' },
  { id: 'entertainment', label: 'Entertainment', color: 'bg-pink-200 text-pink-900' },
];

export default function SchedulePlanner({ section }: SchedulePlannerProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? allEvents
    : allEvents.filter(e => e.category === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-3">
            Interactive Schedule Planner
          </h2>
          <p className="text-lg text-gray-600">Click categories to filter events</p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-gray-900">Filter by Category</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  activeFilter === cat.id
                    ? cat.color + ' shadow-lg scale-105'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {filteredEvents.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {filteredEvents.map((item, index) => (
                <div
                  key={index}
                  className="p-5 md:p-6 hover:bg-gray-50 transition-colors flex items-center justify-between gap-4 group"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      {item.event}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600">
                      {item.location}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-lg md:text-xl font-bold text-indigo-600 group-hover:text-indigo-700">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-gray-500 text-lg">No events match this category</p>
            </div>
          )}
        </div>

        {activeFilter !== 'all' && (
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={() => setActiveFilter('all')}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <X className="w-4 h-4" />
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
