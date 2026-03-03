'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownProgressProps {
  section: Section;
}

export default function CountdownProgress({ section }: CountdownProgressProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const totalDays = 183; // Approximately 6 months from Jan 15 to June 15
  const elapsedDays = totalDays - timeLeft.days;
  const progressPercent = (elapsedDays / totalDays) * 100;

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
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nicole & Andrew
          </h2>
          <p className="text-lg text-gray-600">
            The journey to our forever begins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Wedding Progress
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Overall Progress
                  </span>
                  <span className="text-sm font-bold text-indigo-600">
                    {Math.round(progressPercent)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                <h4 className="font-bold text-gray-900 mb-4">
                  Time Remaining
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-indigo-600 tabular-nums">
                      {String(timeLeft.days).padStart(2, '0')}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      Days
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-indigo-600 tabular-nums">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      Hours
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-indigo-600 tabular-nums">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      Minutes
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-indigo-600 tabular-nums">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors duration-300">
                Reserve Your Seat
              </button>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Event Details
              </h4>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-semibold mb-1">
                    DATE
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    June 15, 2025
                  </p>
                </div>

                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-semibold mb-1">
                    TIME
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    4:00 PM PT
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">
                    LOCATION
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    The Grand Ballroom
                  </p>
                  <p className="text-sm text-gray-600">
                    San Francisco, California
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-colors duration-300">
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
