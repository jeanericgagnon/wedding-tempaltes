'use client';

import { Section } from '../../types/layoutConfig';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CountdownCardsProps {
  section: Section;
}

export default function CountdownCards({ section }: CountdownCardsProps) {
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

  const Card = ({ count, label, icon: Icon }: { count: number; label: string; icon: any }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border-l-4 border-blue-500">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-blue-500" />
        <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
          {label}
        </span>
      </div>
      <div className="text-5xl md:text-6xl font-bold text-gray-900 tabular-nums">
        {String(count).padStart(2, '0')}
      </div>
      <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide font-semibold">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Emily & Michael
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Getting married on June 15, 2025
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-blue-500" />
              June 15, 2025
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-blue-500" />
              4:00 PM PT
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-500" />
              The Grand Ballroom
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <Card count={timeLeft.days} label="Days" icon={Calendar} />
          <Card count={timeLeft.hours} label="Hours" icon={Clock} />
          <Card count={timeLeft.minutes} label="Minutes" icon={Clock} />
          <Card count={timeLeft.seconds} label="Seconds" icon={Clock} />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Save the Date
          </h3>
          <p className="text-gray-600 mb-6">
            We would love to celebrate this special day with you
          </p>
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300">
            Respond to Invitation
          </button>
        </div>
      </div>
    </section>
  );
}
