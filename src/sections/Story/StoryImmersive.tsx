import { Section } from '../../types/layoutConfig';
import { Sparkles, Heart, MapPin } from 'lucide-react';

interface StoryImmersiveProps {
  section: Section;
}

export default function StoryImmersive({ section }: StoryImmersiveProps) {
  const bride = section.bindings?.bride || 'Elena';
  const groom = section.bindings?.groom || 'James';

  return (
    <section className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center z-10 max-w-3xl">
          <Sparkles className="mx-auto mb-6 text-purple-300" size={40} />
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-6">
            Our Love Story
          </h1>
          <p className="text-2xl md:text-3xl text-purple-200 font-light mb-8">
            A journey of two hearts becoming one
          </p>
          <p className="text-lg text-purple-300 font-light">
            Scroll to discover our story
          </p>
        </div>
      </div>

      {/* Chapter 1 */}
      <div className="min-h-screen bg-white flex items-center">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="md:col-span-1">
            <h2 className="text-5xl font-serif text-gray-900 mb-4">
              First Glance
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Chapter One • 2021</p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              They say you can feel it in your bones when you meet someone special. At a charity gala in downtown, {bride} and {groom} locked eyes across a crowded room. What neither knew was that this single moment would forever change the trajectory of their lives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              A conversation that started politely became passionate. Laughter turned genuine. Time stood still.
            </p>
          </div>
          <div className="md:col-span-1 h-96 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-2xl border border-purple-200/50 flex items-end justify-center p-8">
            <MapPin className="text-purple-400" size={48} />
          </div>
        </div>
      </div>

      {/* Chapter 2 */}
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="md:col-span-1 h-96 bg-gradient-to-br from-amber-400/40 to-orange-400/40 rounded-2xl border border-amber-200/50 flex items-end justify-center p-8">
            <Heart className="text-amber-600" size={48} />
          </div>
          <div className="md:col-span-1">
            <h2 className="text-5xl font-serif text-gray-900 mb-4">
              Adventures Begin
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Chapter Two • 2022</p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              Their first trip together was impromptu—a weekend escape that turned into countless memories. Hiking through misty mountains at dawn, dancing under starlit skies, sharing vulnerabilities and dreams. {groom} saw a future in {bride}'s smile. {bride} found home in {groom}'s embrace.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Every moment felt like forever, and they didn't want it any other way.
            </p>
          </div>
        </div>
      </div>

      {/* Chapter 3 */}
      <div className="min-h-screen bg-white flex items-center">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="md:col-span-1">
            <h2 className="text-5xl font-serif text-gray-900 mb-4">
              The Question
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Chapter Three • 2023</p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              On a perfect spring evening, {groom} took {bride} back to where it all began—the charity gala venue. But this time, something was different. The same band was playing, rose petals lined the floor, and there was a small velvet box in his trembling hands.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
              With tears streaming down her face and joy radiating from her soul, {bride} said yes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light italic">
              "I want to dance with you forever."
            </p>
          </div>
          <div className="md:col-span-1 h-96 bg-gradient-to-br from-rose-300/40 to-red-300/40 rounded-2xl border border-rose-200/50 flex items-end justify-center p-8">
            <Sparkles className="text-rose-500" size={48} />
          </div>
        </div>
      </div>

      {/* Finale */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center z-10 max-w-3xl">
          <Heart className="mx-auto mb-6 text-pink-400 fill-pink-400" size={48} />
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Today & Forever
          </h2>
          <p className="text-xl text-purple-200 font-light mb-8 leading-relaxed">
            Before everyone who has shaped their journey, {bride} and {groom} stand ready to vow their commitment. Their love story doesn't end here—it evolves, deepens, and continues to unfold with every shared laugh, every quiet moment, and every adventure still to come.
          </p>
          <div className="pt-12 border-t border-purple-500/30">
            <p className="text-purple-300 italic text-lg">
              "Two souls, one heartbeat, infinite forever"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
