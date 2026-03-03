import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { CheckCircle2, Music, Users, Utensils, MessageCircle } from 'lucide-react';

interface RSVPFullscreenProps {
  section: Section;
}

interface FormData {
  name: string;
  email: string;
  attending: boolean | null;
  guestCount: number;
  dietary: string;
  songRequest: string;
  specialRequests: string;
}

export default function RSVPFullscreen({ section }: RSVPFullscreenProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    attending: null,
    guestCount: 1,
    dietary: '',
    songRequest: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.attending === null) newErrors.attending = 'Please respond';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guestCount' ? parseInt(value) : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center">
        <div className="text-center px-4">
          <CheckCircle2 className="w-24 h-24 mx-auto mb-6 text-white animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="text-2xl text-white/90 mb-2">Your RSVP has been received</p>
          <p className="text-lg text-white/80">We can't wait to celebrate with you!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Join Us
            </h1>
            <p className="text-2xl text-white/90">Please RSVP for our event</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-6 py-4 bg-white/20 border-2 border-white/40 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white text-lg backdrop-blur-sm transition"
              />
              {errors.name && <p className="text-red-200 mt-2 ml-2 font-semibold">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-6 py-4 bg-white/20 border-2 border-white/40 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white text-lg backdrop-blur-sm transition"
              />
              {errors.email && <p className="text-red-200 mt-2 ml-2 font-semibold">{errors.email}</p>}
            </div>

            {/* Attending - Large Buttons */}
            <div>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                  className={`py-6 px-6 rounded-xl font-bold text-xl transition transform hover:scale-105 ${
                    formData.attending === true
                      ? 'bg-white text-purple-600 shadow-2xl'
                      : 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/40'
                  }`}
                >
                  I'm Coming
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                  className={`py-6 px-6 rounded-xl font-bold text-xl transition transform hover:scale-105 ${
                    formData.attending === false
                      ? 'bg-red-400 text-white shadow-2xl'
                      : 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/40'
                  }`}
                >
                  Can't Make It
                </button>
              </div>
              {errors.attending && <p className="text-red-200 mt-3 ml-2 font-semibold">{errors.attending}</p>}
            </div>

            {formData.attending !== false && (
              <>
                {/* Guest Count with Icon */}
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-white/80 flex-shrink-0" />
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="flex-1 px-6 py-4 bg-white/20 border-2 border-white/40 rounded-xl text-white focus:outline-none focus:border-white text-lg backdrop-blur-sm transition"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                {/* Dietary with Icon */}
                <div className="flex items-center gap-4">
                  <Utensils className="w-6 h-6 text-white/80 flex-shrink-0" />
                  <select
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="flex-1 px-6 py-4 bg-white/20 border-2 border-white/40 rounded-xl text-white focus:outline-none focus:border-white text-lg backdrop-blur-sm transition"
                  >
                    <option value="">No dietary restrictions</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="dairy-free">Dairy-Free</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Song Request with Icon */}
                <div className="flex items-center gap-4">
                  <Music className="w-6 h-6 text-white/80 flex-shrink-0" />
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    placeholder="Your song request"
                    className="flex-1 px-6 py-4 bg-white/20 border-2 border-white/40 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white text-lg backdrop-blur-sm transition"
                  />
                </div>

                {/* Special Requests with Icon */}
                <div className="flex gap-4">
                  <MessageCircle className="w-6 h-6 text-white/80 flex-shrink-0 mt-4" />
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any special requests or messages..."
                    rows={4}
                    className="flex-1 px-6 py-4 bg-white/20 border-2 border-white/40 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white text-lg backdrop-blur-sm transition resize-none"
                  />
                </div>
              </>
            )}

            {/* Submit Button - Full Width */}
            <button
              type="submit"
              className="w-full py-6 px-8 bg-white text-purple-600 font-bold text-2xl rounded-xl hover:bg-white/95 transition transform hover:scale-105 shadow-2xl mt-12"
            >
              SUBMIT RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
