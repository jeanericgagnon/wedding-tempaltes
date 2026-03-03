'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownClassicProps {
  section: Section;
}

export default function CountdownClassic({ section }: CountdownClassicProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) {
    return (
      <section className="py-24 bg-gradient-to-br from-rose-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-12">Counting Down to Forever</h2>
          <div className="grid grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <div className="text-6xl font-bold mb-2">--</div>
                <div className="text-lg opacity-90">{['Days', 'Hours', 'Minutes', 'Seconds'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-rose-500 to-pink-500 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif mb-4">Counting Down to Forever</h2>
        <p className="text-lg opacity-90 mb-12">June 15, 2025</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-bold tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-base md:text-lg opacity-90 uppercase tracking-wider">Days</div>
          </div>
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-bold tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-base md:text-lg opacity-90 uppercase tracking-wider">Hours</div>
          </div>
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-bold tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-base md:text-lg opacity-90 uppercase tracking-wider">Minutes</div>
          </div>
          <div className="space-y-3">
            <div className="text-5xl md:text-6xl font-bold tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-base md:text-lg opacity-90 uppercase tracking-wider">Seconds</div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white border-opacity-30">
          <p className="text-sm opacity-80">We can't wait to celebrate with you!</p>
        </div>
      </div>
    </section>
  );
}
