import { useEffect, useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { getCountdownTime, getWeddingDate } from '../../utils/countdown';

interface CountdownLuxuryProps {
  section: Section;
}

export default function CountdownLuxury({ section }: CountdownLuxuryProps) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const weddingDate = getWeddingDate(section.bindings?.date);

  useEffect(() => {
    setTime(getCountdownTime(weddingDate));
    const interval = setInterval(() => {
      setTime(getCountdownTime(weddingDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-white mb-6">
            The Big Day
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300" />
          </div>
          <p className="text-gray-400 text-lg mt-8 tracking-wide">
            We are counting down the moments until our celebration
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-lg p-8 border border-amber-300/30 text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-amber-300 mb-4 font-mono">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 tracking-widest uppercase">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-amber-300/20">
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Every second brings us closer
          </p>
        </div>
      </div>
    </section>
  );
}
