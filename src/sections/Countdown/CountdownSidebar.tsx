'use client';

import { Section } from '../../types/layoutConfig';
import { Gift, Zap, Star, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CountdownSidebarProps {
  section: Section;
}

export default function CountdownSidebar({ section }: CountdownSidebarProps) {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Matthew & Sophia
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              We are delighted to announce our wedding day. Join us for an unforgettable celebration of love, with family and friends from around the world.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-indigo-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  About the Wedding
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span>Beautiful ceremony at sunset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span>Gourmet reception dinner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span>Live entertainment & dancing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span>Celebration until midnight</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Important Info
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Date
                    </p>
                    <p>
                      June 15, 2025
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Time
                    </p>
                    <p>
                      4:00 PM PT
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Location
                    </p>
                    <p>
                      The Grand Ballroom
                    </p>
                    <p className="text-sm">
                      San Francisco, California
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Dress Code
                    </p>
                    <p>
                      Black Tie Optional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-b from-indigo-600 to-purple-700 text-white rounded-xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Countdown
              </h3>

              <div className="space-y-4 mb-8">
                <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="text-4xl font-black tabular-nums mb-1">
                    {String(timeLeft.days).padStart(2, '0')}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider">
                    Days
                  </p>
                </div>
                <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="text-3xl font-black tabular-nums mb-1">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider">
                    Hours
                  </p>
                </div>
                <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="text-3xl font-black tabular-nums mb-1">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider">
                    Minutes
                  </p>
                </div>
                <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="text-3xl font-black tabular-nums mb-1">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wider">
                    Seconds
                  </p>
                </div>
              </div>

              <button className="w-full py-3 bg-white hover:bg-gray-100 text-indigo-600 font-bold rounded-lg transition-colors duration-300">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
