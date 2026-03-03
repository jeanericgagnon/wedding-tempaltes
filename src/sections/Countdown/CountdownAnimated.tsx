'use client';

import { Section } from '../../types/layoutConfig';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CountdownAnimatedProps {
  section: Section;
}

export default function CountdownAnimated({ section }: CountdownAnimatedProps) {
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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-4 md:p-6 border-2 border-rose-200 hover:border-rose-400 transition-all duration-500 transform hover:scale-105 group">
        <div className="text-3xl md:text-5xl font-bold text-rose-600 tabular-nums">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm font-semibold text-rose-500 uppercase tracking-wider mt-2">
          {label}
        </div>
        <div className="absolute top-1 right-1 w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-rose-500 animate-spin" />
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-widest">
              Our Big Day
            </span>
            <Sparkles className="w-5 h-5 text-rose-500 animate-spin" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sarah & James
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            June 15, 2025 at 4:00 PM PT
          </p>
          <p className="text-sm text-gray-500">
            The Grand Ballroom, San Francisco
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="px-6 md:px-8 py-2 md:py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            RSVP Now
          </button>
          <button className="px-6 md:px-8 py-2 md:py-3 bg-white hover:bg-gray-50 text-rose-600 font-semibold rounded-lg border-2 border-rose-300 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
