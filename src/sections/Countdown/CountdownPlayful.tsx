import { useEffect, useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { getCountdownTime, getWeddingDate } from '../../utils/countdown';

interface CountdownPlayfulProps {
  section: Section;
}

export default function CountdownPlayful({ section }: CountdownPlayfulProps) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const weddingDate = getWeddingDate(section.bindings?.date);

  useEffect(() => {
    setTime(getCountdownTime(weddingDate));
    const interval = setInterval(() => {
      setTime(getCountdownTime(weddingDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  const { days, hours, minutes, seconds } = time;

  const timeUnits = [
    { label: 'Days', value: days, emoji: '📅' },
    { label: 'Hours', value: hours, emoji: '⏰' },
    { label: 'Minutes', value: minutes, emoji: '⏱️' },
    { label: 'Seconds', value: seconds, emoji: '💫' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            The Big Day Awaits
          </h2>
          <p className="text-xl text-gray-600">{weddingDate}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{unit.emoji}</div>
              <div className="text-5xl md:text-6xl font-bold text-rose-500 mb-3">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 font-light">
            Get ready to celebrate love, laughter, and forever!
          </p>
        </div>
      </div>
    </section>
  );
}
