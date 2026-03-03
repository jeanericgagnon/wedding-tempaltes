import { Section } from '../../types/layoutConfig';
import { Heart, MapPin, Calendar, Gem } from 'lucide-react';

interface StoryStackedProps {
  section: Section;
}

const timelineEvents = [
  {
    year: '2021',
    month: 'June',
    title: 'First Encounter',
    description: 'A gallery opening changed everything. Two strangers, one conversation, infinite possibilities. Time stood still as they discovered a connection neither was expecting but both needed.',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    numberBg: 'bg-rose-100',
    numberText: 'text-rose-700'
  },
  {
    year: '2021',
    month: 'August',
    title: 'Growing Closer',
    description: 'Coffee dates turned into weekend adventures. They discovered shared dreams, revealed vulnerabilities, and built something beautiful day by day. Every moment felt like a chapter in their love story being written in real time.',
    icon: Calendar,
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    numberBg: 'bg-amber-100',
    numberText: 'text-amber-700'
  },
  {
    year: '2022',
    month: 'March',
    title: 'Adventures & Dreams',
    description: 'Mountain hikes at sunrise, spontaneous road trips, dancing in their apartment at midnight. They were building memories and traditions, weaving their lives together one experience at a time. Every adventure felt like home because they were together.',
    icon: MapPin,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    numberBg: 'bg-green-100',
    numberText: 'text-green-700'
  },
  {
    year: '2023',
    month: 'April',
    title: 'The Proposal',
    description: 'Back to where it all began, surrounded by candlelight and rose petals. With his heart in his hands and forever in his eyes, he asked the question. With tears of joy, she said yes. This was the moment they\'d been waiting for.',
    icon: Gem,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    numberBg: 'bg-purple-100',
    numberText: 'text-purple-700'
  },
  {
    year: 'Today',
    month: 'Forever',
    title: 'Our Wedding Day',
    description: 'Before everyone who has shaped our journey, we stand ready to vow our commitment. Two hearts, one love, infinite tomorrows. This is not the end of our story, but the beginning of our greatest adventure together.',
    icon: Heart,
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    numberBg: 'bg-red-100',
    numberText: 'text-red-700'
  }
];

export default function StoryStacked({ section }: StoryStackedProps) {
  const bride = section.bindings?.bride || 'Rachel';
  const groom = section.bindings?.groom || 'Michael';

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-3">
            Our Timeline
          </h2>
          <p className="text-lg text-gray-600 font-light">
            The moments that shaped our forever
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-400" />
            <Heart className="text-rose-500" size={20} fill="currentColor" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-400" />
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative space-y-8">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200" style={{ top: 0 }} />

          {/* Timeline events */}
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg border-4 border-white z-20`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 items-start`}>
                  <div className="w-1/2" />

                  <div className={`w-1/2 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className={`${event.bgColor} rounded-lg p-8 border-2 ${event.borderColor} shadow-md hover:shadow-lg transition-shadow duration-300`}>
                      <div className="flex items-center gap-3 mb-3" style={{ justifyContent: isEven ? 'flex-end' : 'flex-start' }}>
                        <span className={`${event.numberBg} ${event.numberText} font-serif text-sm font-bold px-3 py-1 rounded-full`}>
                          {event.month}
                        </span>
                      </div>

                      <p className={`text-sm font-mono tracking-widest mb-2 font-semibold ${event.numberText}`}>
                        {event.year}
                      </p>

                      <h3 className="text-2xl font-serif text-gray-900 mb-3">
                        {event.title}
                      </h3>

                      <p className="text-gray-700 leading-relaxed font-light">
                        {event.description}
                      </p>

                      {index === timelineEvents.length - 1 && (
                        <div className="mt-4 pt-4 border-t border-gray-300">
                          <p className="text-sm text-gray-600 italic">
                            {bride} & {groom} — Forever starts today
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer message */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 font-light mb-4">
            "Every moment with you is a chapter in the greatest story ever told."
          </p>
          <div className="flex justify-center gap-1">
            <Heart className="text-rose-500" size={20} fill="currentColor" />
            <Heart className="text-rose-500" size={20} fill="currentColor" />
            <Heart className="text-rose-500" size={20} fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
}
