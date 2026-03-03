import { useEffect, useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { getCountdownTime, getWeddingDate } from '../../utils/countdown';

interface CountdownModernProps {
  section: Section;
}

export default function CountdownModern({ section }: CountdownModernProps) {
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
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-serif text-white mb-4">Until Forever</h2>
          <p className="text-xl text-slate-300">{weddingDate}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeUnits.map((unit) => (
            <div key={unit.label} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="text-6xl md:text-7xl font-bold text-cyan-400 mb-4 font-mono">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm font-semibold text-slate-300 uppercase tracking-widest">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
