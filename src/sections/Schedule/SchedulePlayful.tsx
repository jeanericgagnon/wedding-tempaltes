import { Section } from '../../types/layoutConfig';
import { Heart } from 'lucide-react';

interface SchedulePlayfulProps {
  section: Section;
}

const events = [
  { time: '08:00', event: 'Getting Ready!', emoji: '💄', color: 'from-purple-400 to-pink-400' },
  { time: '10:00', event: 'Last Minute Jitters!', emoji: '😅', color: 'from-yellow-400 to-orange-400' },
  { time: '11:00', event: 'Here Comes the Bride!', emoji: '💍', color: 'from-pink-400 to-red-400' },
  { time: '12:00', event: 'Say Cheese!', emoji: '📸', color: 'from-blue-400 to-cyan-400' },
  { time: '13:00', event: 'Let\'s Celebrate!', emoji: '🥂', color: 'from-yellow-400 to-yellow-300' },
  { time: '14:30', event: 'Yum Yum Time!', emoji: '🍽️', color: 'from-green-400 to-emerald-400' },
  { time: '16:00', event: 'Sweet Moments!', emoji: '🎂', color: 'from-pink-400 to-rose-400' },
  { time: '17:00', event: 'Time to Dance!', emoji: '🕺', color: 'from-purple-400 to-indigo-400' },
  { time: '23:00', event: 'Final Goodbye!', emoji: '✨', color: 'from-blue-400 to-purple-400' },
];

export default function SchedulePlayful({ section }: SchedulePlayfulProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-sky-100 via-pink-100 to-purple-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-7 h-7 text-red-500 animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Special Day
            </h2>
            <Heart className="w-7 h-7 text-red-500 animate-bounce" />
          </div>
          <p className="text-lg text-gray-700 font-semibold">Minute by Minute!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl"></div>

              <div className="relative z-10">
                <div className="text-5xl md:text-6xl mb-3">{item.emoji}</div>
                <p className="text-sm md:text-base font-bold opacity-90 mb-2 uppercase tracking-widest">
                  {item.time}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {item.event}
                </h3>
              </div>

              <div className="absolute -bottom-2 -right-2 text-6xl opacity-10">
                {item.emoji}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-semibold">
            Get ready for the most amazing day! 🎉
          </p>
        </div>
      </div>
    </section>
  );
}
