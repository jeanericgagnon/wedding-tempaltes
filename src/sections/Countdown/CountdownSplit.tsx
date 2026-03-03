'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownSplitProps {
  section: Section;
}

export default function CountdownSplit({ section }: CountdownSplitProps) {
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
    <section className="min-h-screen grid md:grid-cols-2">
      <div className="bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center p-8 md:p-12">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Olivia<br />& Ethan
          </h2>
          <p className="text-lg md:text-xl font-light mb-2 text-rose-100">
            are getting married
          </p>
          <p className="text-sm md:text-base text-rose-100">
            June 15, 2025
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Countdown
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-rose-500">
              <p className="text-4xl font-black text-rose-600 mb-2 tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Days
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-rose-500">
              <p className="text-4xl font-black text-rose-600 mb-2 tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Hours
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-rose-500">
              <p className="text-4xl font-black text-rose-600 mb-2 tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Minutes
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-rose-500">
              <p className="text-4xl font-black text-rose-600 mb-2 tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                Seconds
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
            <p className="text-sm text-gray-600 font-semibold mb-3 uppercase tracking-wider">
              Event Details
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  Time
                </p>
                <p className="text-gray-900 font-semibold">
                  4:00 PM PT
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  Location
                </p>
                <p className="text-gray-900 font-semibold">
                  The Grand Ballroom
                </p>
                <p className="text-sm text-gray-600">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg transition-colors duration-300">
            RSVP
          </button>
        </div>
      </div>
    </section>
  );
}
