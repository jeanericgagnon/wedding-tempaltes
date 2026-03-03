import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Layers, Lightbulb, Gamepad, Music } from 'lucide-react';

interface VenueImmersiveProps {
  section: Section;
}

export default function VenueImmersive({ section }: VenueImmersiveProps) {
  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animation-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Full-screen hero section */}
        <div className="mb-20">
          <p className="text-purple-300 text-sm tracking-widest uppercase font-semibold mb-6">Immersive Experience</p>
          <h2 className="text-8xl md:text-9xl font-black mb-8 leading-tight bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Nexus
          </h2>
          <div className="flex items-center gap-3 text-lg text-purple-200 mb-8">
            <MapPin className="w-6 h-6" />
            <p>555 Innovation Blvd, San Francisco, CA 94103</p>
          </div>
          <p className="max-w-3xl text-xl text-purple-100 leading-relaxed mb-12">
            Next-generation immersive venue featuring 360-degree LED walls, spatial audio, AR/VR integration, and motion-tracking capabilities. Transform your event into an unforgettable multi-sensory experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-purple-500/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Layers className="w-32 h-32 text-purple-300 opacity-40" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-purple-400/30 rounded-xl p-6">
                <Users className="w-8 h-8 text-cyan-400 mb-3" />
                <p className="text-sm text-purple-300 mb-2">Total Capacity</p>
                <p className="text-3xl font-bold text-white">Up to 2,500</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-purple-400/30 rounded-xl p-6">
                <Gamepad className="w-8 h-8 text-pink-400 mb-3" />
                <p className="text-sm text-purple-300 mb-2">Experience</p>
                <p className="text-3xl font-bold text-white">Interactive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-md border border-purple-400/50 rounded-xl p-8 hover:border-purple-300/80 transition">
            <Layers className="w-10 h-10 text-purple-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">360° LED Walls</h3>
            <p className="text-purple-200 text-sm">8.4K resolution immersive display environment with synchronized content delivery</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-md border border-purple-400/50 rounded-xl p-8 hover:border-purple-300/80 transition">
            <Music className="w-10 h-10 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Spatial Audio</h3>
            <p className="text-purple-200 text-sm">Dolby Atmos 3D sound with object-based audio positioning throughout venue</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-md border border-purple-400/50 rounded-xl p-8 hover:border-purple-300/80 transition">
            <Lightbulb className="w-10 h-10 text-pink-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Adaptive Lighting</h3>
            <p className="text-purple-200 text-sm">Motion-reactive lighting system with 16.7 million color options per fixture</p>
          </div>
        </div>

        {/* Spaces */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8">Event Spaces</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur border border-purple-400/30 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-3">Main Immersive Theater</h4>
              <p className="text-purple-200 mb-4">8,000 sq ft | 1,500 people | Full LED environment with 4D motion capabilities</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm text-purple-100">Presentations</span>
                <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm text-purple-100">Concerts</span>
                <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm text-purple-100">Exhibitions</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur border border-purple-400/30 rounded-xl p-8">
              <h4 className="text-xl font-bold text-white mb-3">Interactive Experience Zone</h4>
              <p className="text-purple-200 mb-4">3,500 sq ft | 500 people | AR/VR stations with hand-tracking</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm text-purple-100">VR Events</span>
                <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm text-purple-100">Networking</span>
                <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm text-purple-100">Activations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="border-t border-purple-500/30 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Contact</p>
              <p className="text-xl font-bold text-white">(415) 555-9999</p>
              <p className="text-sm text-purple-300">events@nexus.vr</p>
            </div>
            <div>
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Tech Support</p>
              <p className="text-xl font-bold text-white">24/7 Team</p>
              <p className="text-sm text-purple-300">On-site available</p>
            </div>
            <div>
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Hours</p>
              <p className="text-xl font-bold text-white">Always Open</p>
              <p className="text-sm text-purple-300">Full customization</p>
            </div>
            <div>
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Parking</p>
              <p className="text-xl font-bold text-white">Included</p>
              <p className="text-sm text-purple-300">EV charging available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
