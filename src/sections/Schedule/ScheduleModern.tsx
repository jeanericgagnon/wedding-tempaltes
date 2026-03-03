import { Section } from '../../types/layoutConfig';
import { Zap, MapPin } from 'lucide-react';

interface ScheduleModernProps {
  section: Section;
}

const events = [
  { time: '08:00', title: 'Preparations', location: 'Suites', emoji: '✨' },
  { time: '10:00', title: 'Prep', location: 'Hall', emoji: '👥' },
  { time: '11:00', title: 'Ceremony', location: 'Hall', emoji: '💍', featured: true },
  { time: '12:00', title: 'Photos', location: 'Gardens', emoji: '📸' },
  { time: '13:00', title: 'Cocktails', location: 'Terrace', emoji: '🥂' },
  { time: '14:30', title: 'Dinner', location: 'Ballroom', emoji: '🍽️' },
  { time: '16:00', title: 'Cake', location: 'Ballroom', emoji: '🎂' },
  { time: '17:00', title: 'Dancing', location: 'Ballroom', emoji: '💃' },
  { time: '23:00', title: 'Send-Off', location: 'Entrance', emoji: '✨' },
];

export default function ScheduleModern({ section }: ScheduleModernProps) {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Schedule
            </h2>
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-cyan-300 text-sm tracking-widest uppercase">June 15, 2024</p>
        </div>

        <div className="grid gap-3">
          {events.map((item, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-md transition-all duration-300 rounded-lg overflow-hidden ${
                item.featured
                  ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-400/50 p-4 md:p-6'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 p-4 md:p-5'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="text-2xl md:text-3xl flex-shrink-0">{item.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg md:text-xl truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-300 text-sm">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className={`text-xl md:text-2xl font-bold ${
                    item.featured ? 'text-pink-300' : 'text-cyan-400'
                  }`}>
                    {item.time}
                  </span>
                </div>
              </div>

              {item.featured && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
