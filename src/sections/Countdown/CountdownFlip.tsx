'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownFlipProps {
  section: Section;
}

export default function CountdownFlip({ section }: CountdownFlipProps) {
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

  const FlipCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative mb-3">
        <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg p-4 md:p-6 shadow-2xl border-2 border-yellow-500 w-20 md:w-24 h-24 md:h-28 flex items-center justify-center group perspective">
          <div className="text-4xl md:text-5xl font-mono font-bold text-yellow-400 tabular-nums group-hover:scale-110 transition-transform duration-300">
            {String(value).padStart(2, '0')}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-widest">
          {label}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-yellow-400 mb-4">
            [WEDDING COUNTDOWN]
          </h2>
          <p className="text-lg text-gray-300 mb-2">
            Ryan & Stephanie
          </p>
          <p className="text-yellow-500 font-mono text-sm">
            06.15.2025 @ 4:00 PM PT
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto">
          <FlipCard value={timeLeft.days} label="Days" />
          <FlipCard value={timeLeft.hours} label="Hours" />
          <FlipCard value={timeLeft.minutes} label="Minutes" />
          <FlipCard value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="px-6 md:px-8 py-2 md:py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 font-mono transform hover:scale-105">
            &gt; RSVP &lt;
          </button>
          <button className="px-6 md:px-8 py-2 md:py-3 bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 font-bold rounded-lg transition-all duration-300 font-mono">
            &gt; INFO &lt;
          </button>
        </div>

        <div className="text-center mt-8 text-gray-400 text-xs md:text-sm font-mono">
          <p>Location: The Grand Ballroom, San Francisco</p>
          <p className="mt-2">Time Zone: Pacific Standard Time</p>
        </div>
      </div>
    </section>
  );
}
