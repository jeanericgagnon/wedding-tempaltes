import { useState } from 'react';
import { Section } from '../../types/layoutConfig';

interface RSVPModernProps {
  section: Section;
}

export default function RSVPModern({ section }: RSVPModernProps) {
  const deadline = section.bindings?.deadline || 'May 1, 2025';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <div className="text-7xl mb-8">✓</div>
          <h2 className="text-5xl font-serif mb-4">Thank You</h2>
          <p className="text-xl text-gray-300">We're thrilled to celebrate with you</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-slate-500 uppercase">We Hope You Can Join</span>
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900 mt-4 mb-6">Your RSVP</h2>
          <p className="text-xl text-slate-600">Please respond by {deadline}</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-6 py-4 border-b-2 border-slate-300 bg-transparent focus:border-slate-900 focus:outline-none text-lg text-slate-900 placeholder-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 border-b-2 border-slate-300 bg-transparent focus:border-slate-900 focus:outline-none text-lg text-slate-900 placeholder-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
              Will You Attend?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="flex-1 py-4 px-6 bg-slate-900 text-white font-medium rounded hover:bg-slate-800 transition-colors"
              >
                I'm Attending
              </button>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="flex-1 py-4 px-6 border-2 border-slate-900 text-slate-900 font-medium rounded hover:bg-slate-50 transition-colors"
              >
                Unable to Attend
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-slate-900 text-white font-serif text-lg rounded hover:bg-slate-800 transition-colors mt-8"
          >
            Submit Response
          </button>
        </form>
      </div>
    </section>
  );
}
