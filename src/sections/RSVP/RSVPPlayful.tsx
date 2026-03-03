import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RSVPPlayfulProps {
  section: Section;
}

export default function RSVPPlayful({ section }: RSVPPlayfulProps) {
  const deadline = section.bindings?.deadline || 'May 1, 2025';
  const [formData, setFormData] = useState({ name: '', email: '', attending: 'attending' });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Heart className="w-20 h-20 text-rose-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">You're Coming!</h2>
          <p className="text-xl text-gray-600">We can't wait to celebrate with you</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white via-rose-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            We Would Love<br />Your Company
          </h2>
          <p className="text-lg text-gray-600">Please let us know by {deadline}</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none text-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-rose-400 focus:outline-none text-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-rose-400 transition-colors">
                <input
                  type="radio"
                  value="attending"
                  checked={formData.attending === 'attending'}
                  onChange={(e) => setFormData({...formData, attending: e.target.value})}
                  className="mr-3"
                />
                <span className="font-medium text-gray-700">I'm Coming</span>
              </label>
              <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-400 transition-colors">
                <input
                  type="radio"
                  value="declining"
                  checked={formData.attending === 'declining'}
                  onChange={(e) => setFormData({...formData, attending: e.target.value})}
                  className="mr-3"
                />
                <span className="font-medium text-gray-700">Can't Make It</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white font-serif text-lg rounded-xl hover:from-rose-500 hover:to-pink-500 transition-all transform hover:scale-105"
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
