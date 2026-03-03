'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownCompactProps {
  section: Section;
}

export default function CountdownCompact({ section }: CountdownCompactProps) {
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

  const timeString = `${String(timeLeft.days).padStart(2, '0')}:${String(timeLeft.hours).padStart(2, '0')}:${String(timeLeft.minutes).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`;

  return (
    <section className="py-8 md:py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
              Alex & Taylor
            </h3>
            <p className="text-sm text-gray-400">
              June 15, 2025 at 4:00 PM PT
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg px-6 md:px-8 py-3 md:py-4 border border-gray-700">
            <div className="text-2xl md:text-4xl font-mono font-bold text-cyan-400 tabular-nums">
              {timeString}
            </div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">
              Days:Hours:Minutes:Seconds
            </div>
          </div>

          <button className="md:flex-shrink-0 px-4 md:px-6 py-2 md:py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded transition-colors duration-300 text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
