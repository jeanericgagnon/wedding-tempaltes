import { Section } from '../../types/layoutConfig';
import { Heart, Sparkles, Star, Coffee } from 'lucide-react';

interface StoryScrapbookProps {
  section: Section;
}

export default function StoryScrapbook({ section }: StoryScrapbookProps) {
  const bride = section.bindings?.bride || 'Grace';
  const groom = section.bindings?.groom || 'Benjamin';

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-gray-900 mb-2">
            Our Scrapbook
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Memories we've collected, moments we've treasured
          </p>
        </div>

        {/* Scrapbook Grid */}
        <div className="relative">
          {/* Main collage grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {/* Large hero image - top left */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="h-96 bg-gradient-to-br from-rose-400/30 to-pink-400/30 rounded-lg border-8 border-yellow-200 p-6 flex flex-col justify-end relative shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                style={{ backgroundImage: 'linear-gradient(135deg, rgba(244, 114, 182, 0.3), rgba(236, 72, 153, 0.3))' }}>
                <Heart className="text-pink-500 mb-3" size={40} fill="currentColor" />
                <h3 className="text-2xl font-serif text-gray-900 mb-1">How We Met</h3>
                <p className="text-gray-700 font-light text-sm">June 2021 • A moment forever</p>
              </div>
            </div>

            {/* Small cards - top right */}
            <div className="bg-white rounded-lg border-4 border-blue-300 p-4 shadow-md transform rotate-1">
              <Star className="text-yellow-400 mb-2" size={32} fill="currentColor" />
              <p className="text-sm font-serif text-gray-900 mb-2">First Coffee</p>
              <p className="text-xs text-gray-600 font-light">That morning changed everything</p>
            </div>

            <div className="bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-lg border-4 border-purple-300 p-4 shadow-md transform -rotate-2">
              <Sparkles className="text-purple-500 mb-2" size={32} />
              <p className="text-sm font-serif text-gray-900 mb-2">First Adventure</p>
              <p className="text-xs text-gray-600 font-light">Mountains and memories</p>
            </div>

            {/* Middle section */}
            <div className="md:col-span-2 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-lg border-8 border-orange-200 p-6 flex flex-col justify-center shadow-lg transform rotate-1">
              <Coffee className="text-orange-600 mb-3" size={36} />
              <h3 className="text-xl font-serif text-gray-900 mb-2">Our Moments</h3>
              <p className="text-sm text-gray-700 font-light">
                Sunday mornings, late-night talks, spontaneous road trips, and forever plans whispered in the dark
              </p>
            </div>

            {/* Small accent cards */}
            <div className="bg-white rounded-lg border-4 border-pink-300 p-4 shadow-md transform -rotate-1">
              <Heart className="text-pink-500 mb-2" size={28} fill="currentColor" />
              <p className="text-xs text-gray-600 font-light">Two hearts, one story</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-r from-red-200/40 to-rose-200/40 rounded-lg border-8 border-red-200 p-6 flex items-center justify-between shadow-lg transform -rotate-2">
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-1">The Proposal</h3>
                <p className="text-sm text-gray-700 font-light">April 2023 • She said yes</p>
              </div>
              <Heart className="text-red-500" size={48} fill="currentColor" />
            </div>

            {/* Right side accent */}
            <div className="bg-white rounded-lg border-4 border-indigo-300 p-4 shadow-md transform rotate-3 text-center">
              <p className="text-sm font-serif text-gray-900 mb-2">Forever Begins</p>
              <p className="text-xs text-gray-600 font-light">Today, we pledge our hearts</p>
            </div>
          </div>

          {/* Bottom narrative banner */}
          <div className="bg-white rounded-xl border-4 border-gray-300 p-8 md:p-12 shadow-lg transform -rotate-1">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="text-rose-500" size={24} fill="currentColor" />
                <Heart className="text-rose-500" size={24} fill="currentColor" />
                <Heart className="text-rose-500" size={24} fill="currentColor" />
              </div>

              <h3 className="text-3xl font-serif text-center text-gray-900 mb-4">
                Our Love in Words
              </h3>

              <p className="text-center text-gray-700 font-light leading-relaxed mb-6">
                What began as a chance encounter became the greatest adventure. {bride} and {groom} discovered that sometimes the person you've been looking for has been looking for you all along. Through quiet mornings and wild adventures, through dreams shared and futures built together, they found their forever in each other.
              </p>

              <div className="flex justify-center gap-2 mb-6">
                <div className="w-2 h-2 bg-rose-500 rounded-full" />
                <div className="w-2 h-2 bg-rose-500 rounded-full" />
                <div className="w-2 h-2 bg-rose-500 rounded-full" />
              </div>

              <p className="text-center text-gray-600 text-sm italic">
                Today we celebrate not just finding each other, but choosing each other, every single day, forever.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 text-yellow-300 opacity-20">
            <Star size={64} fill="currentColor" />
          </div>
          <div className="absolute -bottom-4 -left-4 text-pink-300 opacity-20">
            <Heart size={64} fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
}
