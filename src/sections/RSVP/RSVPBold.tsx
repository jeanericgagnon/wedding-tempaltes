import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { Mail, Users, Music, Utensils, Heart, ArrowRight } from 'lucide-react';

interface RSVPBoldProps {
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

export default function RSVPBold({ section }: RSVPBoldProps) {
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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.attending === null) newErrors.attending = 'Please confirm attendance';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
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

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            RSVP YOUR ATTENDANCE
          </h2>
          <p className="text-xl text-gray-400">Join us for an unforgettable celebration</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div>
            <label className="block text-lg font-bold text-white mb-3 uppercase tracking-widest">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-6 py-4 bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:border-white focus:outline-none transition font-bold text-lg"
            />
            {errors.name && <p className="text-red-400 mt-2 font-bold">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="flex items-center text-lg font-bold text-white mb-3 uppercase tracking-widest">
              <Mail className="w-5 h-5 mr-2" /> Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-6 py-4 bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:border-white focus:outline-none transition font-bold text-lg"
            />
            {errors.email && <p className="text-red-400 mt-2 font-bold">{errors.email}</p>}
          </div>

          {/* Attending Toggle */}
          <div>
            <label className="block text-lg font-bold text-white mb-4 uppercase tracking-widest">
              Will You Attend?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                className={`flex-1 py-4 px-6 font-bold text-lg uppercase transition ${
                  formData.attending === true
                    ? 'bg-green-500 text-white border-2 border-green-500'
                    : 'bg-transparent text-gray-400 border-2 border-gray-600 hover:border-green-500'
                }`}
              >
                YES, I'M COMING
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                className={`flex-1 py-4 px-6 font-bold text-lg uppercase transition ${
                  formData.attending === false
                    ? 'bg-red-500 text-white border-2 border-red-500'
                    : 'bg-transparent text-gray-400 border-2 border-gray-600 hover:border-red-500'
                }`}
              >
                SORRY, CAN'T MAKE IT
              </button>
            </div>
            {errors.attending && <p className="text-red-400 mt-2 font-bold">{errors.attending}</p>}
          </div>

          {formData.attending !== false && (
            <>
              {/* Guest Count */}
              <div>
                <label className="flex items-center text-lg font-bold text-white mb-3 uppercase tracking-widest">
                  <Users className="w-5 h-5 mr-2" /> Number of Guests
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-700 text-white border-2 border-gray-600 focus:border-white focus:outline-none transition font-bold text-lg"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              {/* Dietary */}
              <div>
                <label className="flex items-center text-lg font-bold text-white mb-3 uppercase tracking-widest">
                  <Utensils className="w-5 h-5 mr-2" /> Dietary Restrictions
                </label>
                <select
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-700 text-white border-2 border-gray-600 focus:border-white focus:outline-none transition font-bold text-lg"
                >
                  <option value="">No restrictions</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="dairy-free">Dairy-Free</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Song Request */}
              <div>
                <label className="flex items-center text-lg font-bold text-white mb-3 uppercase tracking-widest">
                  <Music className="w-5 h-5 mr-2" /> Song Request
                </label>
                <input
                  type="text"
                  name="songRequest"
                  value={formData.songRequest}
                  onChange={handleChange}
                  placeholder="Your favorite song"
                  className="w-full px-6 py-4 bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:border-white focus:outline-none transition font-bold text-lg"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="flex items-center text-lg font-bold text-white mb-3 uppercase tracking-widest">
                  <Heart className="w-5 h-5 mr-2" /> Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests or messages?"
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-700 text-white placeholder-gray-400 border-2 border-gray-600 focus:border-white focus:outline-none transition font-bold text-lg resize-none"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-5 px-8 bg-white text-gray-900 font-bold text-lg uppercase tracking-widest hover:bg-gray-100 transition flex items-center justify-center gap-3 mt-8"
          >
            CONFIRM RSVP <ArrowRight className="w-5 h-5" />
          </button>

          {submitted && (
            <div className="p-4 bg-green-500 text-white font-bold text-center">
              Thank you! Your RSVP has been received.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
