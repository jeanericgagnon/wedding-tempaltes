import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { Mail, Users, Music, Utensils, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

interface RSVPCardsProps {
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

export default function RSVPCards({ section }: RSVPCardsProps) {
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
    <section className="py-24 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We'd Love Your Company
          </h2>
          <p className="text-xl text-gray-600">Please fill out your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Personal Info */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-blue-500" />
              Your Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Card 2: Attendance */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Will You Join Us?</h3>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                  formData.attending === true
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                Yes, I'll Attend
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                  formData.attending === false
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-100'
                }`}
              >
                <XCircle className="w-5 h-5" />
                Sorry, Can't Make It
              </button>
            </div>
            {errors.attending && <p className="text-red-500 text-sm mt-3">{errors.attending}</p>}
          </div>

          {/* Card 3: Guest Details */}
          {formData.attending !== false && (
            <div className="md:col-span-3 bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-500" />
                Party Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Restrictions</label>
                  <select
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">None</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="dairy-free">Dairy-Free</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Music className="w-4 h-4 mr-2" />
                    Song Request
                  </label>
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    placeholder="What's your favorite song?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any special requests or messages?"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transition"
            >
              Submit Your RSVP
            </button>
          </div>

          {submitted && (
            <div className="md:col-span-3 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg font-semibold text-center">
              Thank you! We've received your RSVP.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
