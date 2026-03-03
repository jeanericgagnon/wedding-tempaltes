import { Mail, Check } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../../types/layoutConfig';

interface RSVPLuxuryProps {
  section: Section;
}

export default function RSVPLuxury({ section }: RSVPLuxuryProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
            Kindly Accept or Decline
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-8" />
          <p className="text-gray-600 text-lg">
            Please respond by {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-12 md:p-16 text-center shadow-xl border border-amber-100">
            <Check className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
            <h3 className="text-3xl font-serif text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 text-lg">
              We have received your response and look forward to celebrating with you.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 md:p-16 shadow-xl border border-amber-100">
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3 tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3 tracking-wide">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-900 tracking-wide">
                  Will you be attending?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="py-4 px-6 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    Joyfully Accept
                  </button>
                  <button
                    type="button"
                    className="py-4 px-6 border-2 border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3 tracking-wide">
                  Dietary Restrictions (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                  placeholder="Please let us know of any dietary preferences or allergies"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Submit Response
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
