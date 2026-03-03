'use client';

import { Section } from '../../types/layoutConfig';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CountdownCircleProps {
  section: Section;
}

export default function CountdownCircle({ section }: CountdownCircleProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [totalTime] = useState(100); // Reference for circle calculation

  useEffect(() => {
    const targetDate = new Date('2025-06-15T16:00:00').getTime();
    const startDate = new Date('2025-01-15T16:00:00').getTime();
    const totalMs = targetDate - startDate;

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

  const CircleSegment = ({ value, max, label, color }: { value: number; max: number; label: string; color: string }) => {
    const percentage = Math.min((value / max) * 100, 100);
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#f0f0f0" strokeWidth="3" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-xs font-semibold text-gray-600 uppercase">
                {label}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Forever Starts
            </h2>
            <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600">
            Jessica & David's Wedding Day
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          <CircleSegment value={timeLeft.days} max={365} label="Days" color="#ef4444" />
          <CircleSegment value={timeLeft.hours} max={24} label="Hours" color="#f97316" />
          <CircleSegment value={timeLeft.minutes} max={60} label="Minutes" color="#eab308" />
          <CircleSegment value={timeLeft.seconds} max={60} label="Seconds" color="#06b6d4" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            June 15, 2025 at 4:00 PM
          </h3>
          <p className="text-gray-600 mb-2">
            The Grand Ballroom, San Francisco
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Pacific Time Zone
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300">
              RSVP
            </button>
            <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-lg transition-all duration-300">
              View Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
