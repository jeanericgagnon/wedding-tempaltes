'use client';

import { Section } from '../../types/layoutConfig';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CountdownHeroProps {
  section: Section;
}

export default function CountdownHero({ section }: CountdownHeroProps) {
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-8 px-6 py-2 bg-white bg-opacity-10 rounded-full border border-white border-opacity-20 backdrop-blur-md">
            <span className="text-white font-semibold text-sm uppercase tracking-widest">
              Save the Date
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Two Hearts,<br />One Promise
          </h1>

          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-3xl mx-auto">
            Jennifer & Mark invite you to celebrate their marriage on June 15, 2025
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl backdrop-blur-md border border-white border-opacity-20 p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2 tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <p className="text-white font-semibold uppercase tracking-wider text-sm">
                Days
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl backdrop-blur-md border border-white border-opacity-20 p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2 tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <p className="text-white font-semibold uppercase tracking-wider text-sm">
                Hours
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl backdrop-blur-md border border-white border-opacity-20 p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <p className="text-white font-semibold uppercase tracking-wider text-sm">
                Minutes
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl backdrop-blur-md border border-white border-opacity-20 p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-2 tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <p className="text-white font-semibold uppercase tracking-wider text-sm">
                Seconds
              </p>
            </div>
          </div>

          <div className="text-lg text-purple-300 mb-8">
            The Grand Ballroom, San Francisco<br />4:00 PM PT
          </div>

          <button className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
            RSVP Now
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
