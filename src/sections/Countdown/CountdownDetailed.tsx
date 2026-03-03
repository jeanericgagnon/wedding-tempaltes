'use client';

import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Utensils, Music } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CountdownDetailedProps {
  section: Section;
}

export default function CountdownDetailed({ section }: CountdownDetailedProps) {
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
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Christopher & Nicole
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Together we begin our forever story. Join us as we celebrate love, commitment, and the journey ahead.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ceremony</h3>
                  <p className="text-gray-600 text-sm">
                    The Grand Ballroom, San Francisco
                  </p>
                  <p className="text-gray-600 text-sm">
                    June 15, 2025 at 4:00 PM PT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Reception</h3>
                  <p className="text-gray-600 text-sm">
                    Cocktail hour begins at 5:00 PM
                  </p>
                  <p className="text-gray-600 text-sm">
                    Dinner at 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Utensils className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Menu</h3>
                  <p className="text-gray-600 text-sm">
                    Chef's tasting menu
                  </p>
                  <p className="text-gray-600 text-sm">
                    Wine pairings available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Music className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Entertainment</h3>
                  <p className="text-gray-600 text-sm">
                    Live band and DJ
                  </p>
                  <p className="text-gray-600 text-sm">
                    Dancing until midnight
                  </p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300">
              RSVP by June 1st
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Time Until the Big Day
            </h3>

            <div className="space-y-6">
              <div className="text-center pb-6 border-b border-gray-200">
                <div className="text-6xl font-bold text-orange-600 mb-2 tabular-nums">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <p className="text-gray-600 font-semibold uppercase tracking-wider text-sm">
                  Days
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <p className="text-gray-600 font-semibold text-xs uppercase tracking-wider mt-2">
                    Hours
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <p className="text-gray-600 font-semibold text-xs uppercase tracking-wider mt-2">
                    Minutes
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-violet-600 tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <p className="text-gray-600 font-semibold text-xs uppercase tracking-wider mt-2">
                    Seconds
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm mb-4">
                Accommodations available at hotel rate of $179/night
              </p>
              <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-colors duration-300">
                Book Hotel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
