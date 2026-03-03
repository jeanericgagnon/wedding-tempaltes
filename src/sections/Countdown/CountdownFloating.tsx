'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownFloatingProps {
  section: Section;
}

export default function CountdownFloating({ section }: CountdownFloatingProps) {
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

  const FloatingBubble = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <div
      className="bg-white rounded-full shadow-2xl border-4 border-transparent hover:border-teal-300 flex items-center justify-center flex-col gap-2 transform hover:scale-110 transition-all duration-300"
      style={{
        animation: `float ${4 + delay}s ease-in-out infinite`,
        width: '100px',
        height: '100px',
        animationDelay: `${delay}s`,
      }}
    >
      <div className="text-2xl md:text-3xl font-bold text-teal-600 tabular-nums">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100 min-h-screen relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-300 rounded-full blur-xl" />
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-blue-300 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300 rounded-full blur-xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lily & Brandon
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            A celebration of love and new beginnings
          </p>
          <p className="text-teal-700 font-semibold">
            June 15, 2025 at 4:00 PM PT
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-12 py-12">
          <FloatingBubble value={timeLeft.days} label="Days" delay={0} />
          <FloatingBubble value={timeLeft.hours} label="Hours" delay={0.5} />
          <FloatingBubble value={timeLeft.minutes} label="Minutes" delay={1} />
          <FloatingBubble value={timeLeft.seconds} label="Seconds" delay={1.5} />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Save the Date
            </h3>
            <p className="text-gray-700 mb-3">
              The Grand Ballroom
            </p>
            <p className="text-gray-600 mb-6">
              San Francisco, California
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105">
                RSVP Today
              </button>
              <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
