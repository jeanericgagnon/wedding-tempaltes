import { Section } from '../../types/layoutConfig';
import { useState } from 'react';

interface RSVPSplitProps {
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

export default function RSVPSplit({ section }: RSVPSplitProps) {
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
      setTimeout(() => setSubmitted(false), 2500);
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
    <section className="min-h-screen flex">
      {/* Left Side - Content */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-rose-500 via-pink-500 to-red-600 text-white p-12 flex-col justify-center">
        <h2 className="text-5xl font-bold mb-6">Let's Celebrate Together</h2>
        <p className="text-xl mb-8 text-white/90">
          Join us for an amazing event filled with joy, laughter, and unforgettable memories.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">+</div>
            <div>
              <h3 className="font-bold text-lg mb-1">Great People</h3>
              <p className="text-white/80">Connect with friends and make new memories</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">*</div>
            <div>
              <h3 className="font-bold text-lg mb-1">Delicious Dining</h3>
              <p className="text-white/80">Savor gourmet cuisine tailored to your preferences</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">♪</div>
            <div>
              <h3 className="font-bold text-lg mb-1">Live Entertainment</h3>
              <p className="text-white/80">Enjoy your favorite music and dance the night away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <h3 className="text-4xl font-bold text-gray-900 mb-8">RSVP</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-rose-500 text-base"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-rose-500 text-base"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Will You Attend?</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold transition text-base ${
                    formData.attending === true
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  YES
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold transition text-base ${
                    formData.attending === false
                      ? 'bg-gray-400 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  NO
                </button>
              </div>
              {errors.attending && <p className="text-red-500 text-sm mt-1">{errors.attending}</p>}
            </div>

            {formData.attending !== false && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Guests</label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-rose-500 text-base"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Dietary</label>
                    <select
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-rose-500 text-base"
                    >
                      <option value="">None</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten-Free</option>
                      <option value="dairy-free">Dairy-Free</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Song Request</label>
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    placeholder="Your favorite song"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-rose-500 text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any requests?"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-rose-500 text-base resize-none"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transition mt-6"
            >
              SUBMIT RSVP
            </button>

            {submitted && (
              <div className="p-4 bg-emerald-100 text-emerald-800 rounded-lg font-bold text-center">
                Thank you! Your RSVP has been submitted.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
