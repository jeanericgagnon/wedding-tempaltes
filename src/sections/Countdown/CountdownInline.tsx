'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownInlineProps {
  section: Section;
}

export default function CountdownInline({ section }: CountdownInlineProps) {
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

  const InlineUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white border-b-4 border-green-500 hover:bg-green-50 transition-colors duration-300">
      <div className="text-2xl md:text-3xl font-bold text-green-600 tabular-nums">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs md:text-sm font-semibold text-green-600 uppercase tracking-wider hidden sm:inline">
        {label}
      </span>
      <span className="text-xs md:text-sm font-semibold text-green-600 uppercase tracking-wider sm:hidden">
        {label.charAt(0)}
      </span>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-emerald-50 border-t-4 border-b-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Katie & Daniel
            </h3>
            <p className="text-gray-700 font-semibold">
              Joining in marriage on June 15, 2025
            </p>
            <p className="text-sm text-gray-600 mt-1">
              4:00 PM PT - The Grand Ballroom, San Francisco
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
            <InlineUnit value={timeLeft.days} label="Days" />
            <InlineUnit value={timeLeft.hours} label="Hours" />
            <InlineUnit value={timeLeft.minutes} label="Minutes" />
            <InlineUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition-colors duration-300 text-sm md:text-base">
            RSVP
          </button>
          <button className="px-6 py-2 bg-white hover:bg-gray-50 text-green-600 font-bold border-2 border-green-500 rounded transition-colors duration-300 text-sm md:text-base">
            Details
          </button>
          <button className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 font-bold border-2 border-gray-300 rounded transition-colors duration-300 text-sm md:text-base">
            Share
          </button>
        </div>
      </div>
    </section>
  );
}
