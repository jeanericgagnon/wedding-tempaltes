import { useEffect, useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { getCountdownTime, getWeddingDate } from '../../utils/countdown';

interface CountdownBoldProps {
  section: Section;
}

export default function CountdownBold({ section }: CountdownBoldProps) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const weddingDate = getWeddingDate(section.bindings?.date);

  useEffect(() => {
    setTime(getCountdownTime(weddingDate));
    const interval = setInterval(() => {
      setTime(getCountdownTime(weddingDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Let the Countdown Begin
          </h2>
          <p className="text-xl text-gray-400 font-light">
            The celebration draws near
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Days', value: time.days },
            { label: 'Hours', value: time.hours },
            { label: 'Minutes', value: time.minutes },
            { label: 'Seconds', value: time.seconds },
          ].map((unit) => (
            <div
              key={unit.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-6xl font-bold text-white mb-3 font-mono">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Getting closer every second
          </p>
        </div>
      </div>
    </section>
  );
}
