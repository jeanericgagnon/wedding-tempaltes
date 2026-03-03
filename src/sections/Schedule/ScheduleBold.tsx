import { Section } from '../../types/layoutConfig';
import { Clock } from 'lucide-react';

interface ScheduleBoldProps {
  section: Section;
}

const events = [
  { time: '08:00', title: 'Preparations', color: 'bg-purple-50 border-purple-300', textColor: 'text-purple-900' },
  { time: '11:00', title: 'Ceremony', color: 'bg-rose-50 border-rose-300', textColor: 'text-rose-900' },
  { time: '12:30', title: 'Photos', color: 'bg-amber-50 border-amber-300', textColor: 'text-amber-900' },
  { time: '14:00', title: 'Cocktails', color: 'bg-blue-50 border-blue-300', textColor: 'text-blue-900' },
  { time: '15:30', title: 'Reception', color: 'bg-indigo-50 border-indigo-300', textColor: 'text-indigo-900' },
  { time: '17:00', title: 'Dancing', color: 'bg-pink-50 border-pink-300', textColor: 'text-pink-900' },
];

export default function ScheduleBold({ section }: ScheduleBoldProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Wedding Schedule
          </h2>
          <p className="text-2xl text-gray-600">June 15, 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((item, index) => (
            <div
              key={index}
              className={`${item.color} border-2 border-dashed rounded-xl p-8 md:p-10 transform hover:scale-105 transition-transform`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className={`w-8 h-8 ${item.textColor}`} />
                <span className={`text-3xl md:text-4xl font-bold ${item.textColor}`}>
                  {item.time}
                </span>
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold ${item.textColor}`}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
