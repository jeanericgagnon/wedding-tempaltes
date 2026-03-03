import { useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { Calendar, ChevronRight } from 'lucide-react';

interface GalleryTimelineProps {
  section: Section;
}

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  color: string;
  images: number;
}

export default function GalleryTimeline({ section }: GalleryTimelineProps) {
  const [expandedYear, setExpandedYear] = useState('2024');

  const timeline: TimelineItem[] = [
    {
      id: 1,
      year: '2024',
      title: 'Current Collection',
      description: 'Our latest and greatest works',
      color: 'from-blue-500 to-cyan-500',
      images: 4,
    },
    {
      id: 2,
      year: '2023',
      title: 'Year of Exploration',
      description: 'Traveling the world capturing moments',
      color: 'from-purple-500 to-pink-500',
      images: 3,
    },
    {
      id: 3,
      year: '2022',
      title: 'Urban Stories',
      description: 'Focusing on city landscapes',
      color: 'from-orange-500 to-red-500',
      images: 3,
    },
    {
      id: 4,
      year: '2021',
      title: 'Natural Wonders',
      description: 'Embracing nature and wilderness',
      color: 'from-green-500 to-emerald-600',
      images: 2,
    },
  ];

  const getImageCount = (year: string) => {
    return timeline.find(t => t.year === year)?.images || 0;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-2">Gallery Timeline</h2>
          <p className="text-gray-600 text-lg">Our photographic journey through time</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-8`}
              >
                <div className="flex-1" />

                <button
                  onClick={() => setExpandedYear(expandedYear === item.year ? '' : item.year)}
                  className="flex-shrink-0 relative"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform z-10 relative`}>
                    {item.year}
                  </div>
                </button>

                <div className="flex-1">
                  <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 border-gradient-to-b ${item.color.replace('from-', 'border-').split(' ')[0]}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      <div className="bg-gray-100 rounded-full px-3 py-1">
                        <p className="text-xs font-semibold text-gray-700">{item.images} photos</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    {expandedYear === item.year && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-3">
                          {[...Array(item.images)].map((_, i) => (
                            <div
                              key={i}
                              className={`aspect-square rounded-lg bg-gradient-to-br ${item.color} hover:shadow-lg transition-shadow cursor-pointer`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <button className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                      View Collection <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={24} className="text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Collection Overview</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timeline.map((item) => (
              <div key={item.id} className="text-center">
                <p className="text-lg font-bold text-gray-900 mb-1">{item.year}</p>
                <div className={`inline-block w-12 h-12 rounded-full bg-gradient-to-br ${item.color} mb-2`} />
                <p className="text-sm text-gray-600">{item.images} photos</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-300">
            <p className="text-center text-gray-700">
              <span className="font-bold text-xl text-gray-900">{timeline.reduce((sum, t) => sum + t.images, 0)}</span> total photos spanning <span className="font-bold">{timeline.length}</span> years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
