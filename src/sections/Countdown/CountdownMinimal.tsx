import { useEffect, useState } from 'react';
import { Section } from '../../types/layoutConfig';
import { getCountdownTime, getWeddingDate } from '../../utils/countdown';

interface CountdownMinimalProps {
  section: Section;
}

export default function CountdownMinimal({ section }: CountdownMinimalProps) {
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
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif text-gray-900 mb-4">
          The Countdown
        </h2>

        <div className="flex justify-center mb-16">
          <div className="h-px w-16 bg-gray-300" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Days', value: time.days },
            { label: 'Hours', value: time.hours },
            { label: 'Minutes', value: time.minutes },
            { label: 'Seconds', value: time.seconds },
          ].map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2 font-mono">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 font-light">
          Until the moment we've been dreaming of
        </p>
      </div>
    </section>
  );
}
