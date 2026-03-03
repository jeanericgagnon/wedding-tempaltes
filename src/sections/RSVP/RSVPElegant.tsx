import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface RSVPElegantProps {
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

export default function RSVPElegant({ section }: RSVPElegantProps) {
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
    <section className="relative py-32 bg-gradient-to-b from-amber-50 via-white to-amber-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-2xl mx-auto px-4">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <Sparkles className="w-8 h-8 mx-auto mb-4 text-amber-600" />
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-2 tracking-wide">
            R.S.V.P.
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light">The pleasure of your company is requested</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-serif text-gray-700 mb-3 uppercase tracking-widest">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full px-6 py-3 bg-white border-b-2 border-amber-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-b-2 focus:border-amber-500 transition font-light"
            />
            {errors.name && <p className="text-red-600 text-sm mt-2 font-serif">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-serif text-gray-700 mb-3 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-6 py-3 bg-white border-b-2 border-amber-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-b-2 focus:border-amber-500 transition font-light"
            />
            {errors.email && <p className="text-red-600 text-sm mt-2 font-serif">{errors.email}</p>}
          </div>

          {/* Attending Response */}
          <div className="pt-4 pb-4 border-y border-amber-200">
            <label className="block text-sm font-serif text-gray-700 mb-6 uppercase tracking-widest">
              Response
            </label>
            <div className="flex gap-6 md:gap-12">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                className={`text-center py-4 px-8 transition font-serif text-lg ${
                  formData.attending === true
                    ? 'border-b-2 border-amber-600 text-amber-600 font-semibold'
                    : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Accepts
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                className={`text-center py-4 px-8 transition font-serif text-lg ${
                  formData.attending === false
                    ? 'border-b-2 border-amber-600 text-amber-600 font-semibold'
                    : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Declines
              </button>
            </div>
            {errors.attending && <p className="text-red-600 text-sm mt-3 font-serif">{errors.attending}</p>}
          </div>

          {formData.attending !== false && (
            <>
              {/* Guest Count */}
              <div>
                <label className="block text-sm font-serif text-gray-700 mb-3 uppercase tracking-widest">
                  Number of Guests
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-6 py-3 bg-white border-b-2 border-amber-200 text-gray-900 focus:outline-none focus:border-b-2 focus:border-amber-500 transition font-light"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Dietary */}
              <div>
                <label className="block text-sm font-serif text-gray-700 mb-3 uppercase tracking-widest">
                  Dietary Restrictions
                </label>
                <select
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-6 py-3 bg-white border-b-2 border-amber-200 text-gray-900 focus:outline-none focus:border-b-2 focus:border-amber-500 transition font-light"
                >
                  <option value="">None</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="dairy-free">Dairy-Free</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Song Request */}
              <div>
                <label className="block text-sm font-serif text-gray-700 mb-3 uppercase tracking-widest">
                  Song Request
                </label>
                <input
                  type="text"
                  name="songRequest"
                  value={formData.songRequest}
                  onChange={handleChange}
                  placeholder="Your favorite tune"
                  className="w-full px-6 py-3 bg-white border-b-2 border-amber-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-b-2 focus:border-amber-500 transition font-light"
                />
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-serif text-gray-700 mb-3 uppercase tracking-widest">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any remarks or special requests"
                  rows={3}
                  className="w-full px-6 py-3 bg-white border-b-2 border-amber-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-b-2 focus:border-amber-500 transition font-light resize-none"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="pt-8 text-center">
            <button
              type="submit"
              className="inline-block px-12 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-serif text-lg uppercase tracking-widest hover:shadow-lg transition"
            >
              Submit
            </button>
          </div>

          {submitted && (
            <div className="p-6 text-center bg-amber-50 border border-amber-200 rounded">
              <p className="text-amber-900 font-serif text-lg">Thank you for your response</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
