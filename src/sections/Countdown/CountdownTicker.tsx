'use client';

import { Section } from '../../types/layoutConfig';
import { useEffect, useState } from 'react';

interface CountdownTickerProps {
  section: Section;
}

export default function CountdownTicker({ section }: CountdownTickerProps) {
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

  const TickerChar = ({ char }: { char: string }) => (
    <div className="relative overflow-hidden bg-black rounded-sm shadow-lg" style={{ width: '40px', height: '60px' }}>
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-600px); }
        }
        .ticker-scroll {
          animation: scroll 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
      <div className="text-2xl font-mono font-black text-amber-400 flex items-center justify-center h-full ticker-scroll">
        {char}
      </div>
    </div>
  );

  const formattedDays = String(timeLeft.days).padStart(2, '0');
  const formattedHours = String(timeLeft.hours).padStart(2, '0');
  const formattedMinutes = String(timeLeft.minutes).padStart(2, '0');
  const formattedSeconds = String(timeLeft.seconds).padStart(2, '0');

  const allChars = `${formattedDays}${formattedHours}${formattedMinutes}${formattedSeconds}`;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WEDDING COUNTDOWN
          </h2>
          <p className="text-lg text-amber-400 font-bold uppercase tracking-widest">
            Sophie & Lucas
          </p>
          <p className="text-amber-400 font-mono text-sm mt-2">
            June 15, 2025 | 4:00 PM PT
          </p>
        </div>

        <div className="flex justify-center items-end gap-1 md:gap-2 mb-12 py-8">
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedDays[0]} />
            <span className="text-amber-400 font-mono text-xs md:text-sm font-bold uppercase">
              D
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedDays[1]} />
          </div>

          <div className="text-3xl md:text-5xl text-amber-400 font-bold mb-8 mx-1">
            :
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedHours[0]} />
            <span className="text-amber-400 font-mono text-xs md:text-sm font-bold uppercase">
              H
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedHours[1]} />
          </div>

          <div className="text-3xl md:text-5xl text-amber-400 font-bold mb-8 mx-1">
            :
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedMinutes[0]} />
            <span className="text-amber-400 font-mono text-xs md:text-sm font-bold uppercase">
              M
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedMinutes[1]} />
          </div>

          <div className="text-3xl md:text-5xl text-amber-400 font-bold mb-8 mx-1">
            :
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedSeconds[0]} />
            <span className="text-amber-400 font-mono text-xs md:text-sm font-bold uppercase">
              S
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <TickerChar char={formattedSeconds[1]} />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-black border-2 border-amber-400 rounded-lg px-8 py-4 mb-8">
            <p className="text-amber-400 font-mono font-bold">
              The Grand Ballroom, San Francisco
            </p>
            <p className="text-amber-400 font-mono text-sm mt-2">
              Pacific Time Zone
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-mono font-bold uppercase text-sm tracking-widest rounded transition-colors duration-300">
              RSVP
            </button>
            <button className="px-8 py-3 border-2 border-amber-400 hover:bg-amber-400 hover:text-black text-amber-400 font-mono font-bold uppercase text-sm tracking-widest rounded transition-all duration-300">
              Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
