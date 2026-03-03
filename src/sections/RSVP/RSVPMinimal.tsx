import { useState } from 'react';
import { Section } from '../../types/layoutConfig';

interface RSVPMinimalProps {
  section: Section;
}

export default function RSVPMinimal({ section }: RSVPMinimalProps) {
  const deadline = section.bindings?.deadline || 'May 1, 2025';
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✓</div>
          <h2 className="text-4xl font-serif mb-4 text-gray-900">Thank You</h2>
          <p className="text-gray-600">We look forward to celebrating with you.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-gray-100/40 rounded-full -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-100/40 rounded-full -ml-36 -mb-36" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif mb-6 text-gray-900">Kindly Respond</h2>

        <div className="space-y-2 mb-12">
          <p className="text-xl text-gray-600">
            Please RSVP by {deadline}
          </p>
          <p className="text-gray-500">
            We cannot wait to celebrate with you
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-lg transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-lg transition-colors"
          />
          <div className="grid grid-cols-2 gap-3 pt-4">
            <button
              onClick={() => setSubmitted(true)}
              className="py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => setSubmitted(true)}
              className="py-4 border border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
