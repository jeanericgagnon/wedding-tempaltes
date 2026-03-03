'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownElegantProps {
  section: Section;
}

export default function CountdownElegant({ section }: CountdownElegantProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-06-15T16:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const ElegantUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="relative mb-4">
        <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 border-2 border-amber-300 shadow-lg flex items-center justify-center">
          <div className="text-4xl md:text-5xl font-serif font-bold text-amber-900 tabular-nums">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </div>
      <h3 className="font-serif text-amber-900 text-lg md:text-2xl font-light tracking-widest">
        {label}
      </h3>
    </div>
  );

  return (
    <section className="py-32 bg-gradient-to-b from-neutral-100 via-amber-50 to-neutral-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex gap-1 justify-center mb-4">
              <div className="w-1 h-1 bg-amber-600 rounded-full" />
              <div className="w-1 h-1 bg-amber-600 rounded-full" />
              <div className="w-1 h-1 bg-amber-600 rounded-full" />
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-amber-950 mb-2 font-light">
            Victoria & Marcus
          </h1>
          <p className="font-serif text-amber-700 text-xl md:text-2xl font-light tracking-wider mb-4">
            June 15, 2025
          </p>
          <div className="flex justify-center gap-1 mb-6">
            <div className="w-1 h-1 bg-amber-600 rounded-full" />
            <div className="w-1 h-1 bg-amber-600 rounded-full" />
            <div className="w-1 h-1 bg-amber-600 rounded-full" />
          </div>
          <p className="font-serif text-amber-600 text-sm tracking-widest">
            Four O'Clock in the Afternoon
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          <ElegantUnit value={timeLeft.days} label="Days" />
          <ElegantUnit value={timeLeft.hours} label="Hours" />
          <ElegantUnit value={timeLeft.minutes} label="Minutes" />
          <ElegantUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 border border-amber-200">
            <p className="font-serif text-amber-900 text-lg md:text-xl font-light mb-2">
              The Grand Ballroom
            </p>
            <p className="font-serif text-amber-700 text-sm font-light mb-8 tracking-wider">
              San Francisco, California
            </p>

            <div className="flex justify-center gap-8">
              <button className="px-8 py-2 font-serif text-amber-900 hover:text-amber-600 border border-amber-300 rounded transition-colors duration-300 font-light tracking-wider">
                RSVP
              </button>
              <button className="px-8 py-2 font-serif bg-amber-700 text-white hover:bg-amber-800 rounded transition-colors duration-300 font-light tracking-wider">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
