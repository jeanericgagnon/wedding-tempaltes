import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { ClipboardList, AlertCircle } from 'lucide-react';

interface RSVPDetailedProps {
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
  hearFrom: string;
  comments: string;
  accommodations: string;
}

export default function RSVPDetailed({ section }: RSVPDetailedProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    attending: null,
    guestCount: 1,
    dietary: '',
    songRequest: '',
    specialRequests: '',
    hearFrom: '',
    comments: '',
    accommodations: '',
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
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 flex items-center gap-3">
            <ClipboardList className="w-8 h-8 text-slate-600" />
            Detailed RSVP Form
          </h2>
          <p className="text-lg text-gray-600">Help us plan the perfect event with your complete details</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {/* Section 1: Personal Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-slate-200">
              1. Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Michael Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Attendance */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-slate-200">
              2. Attendance
            </h3>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">Will you attend this event?</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    formData.attending === true
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Yes, I'll be there
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    formData.attending === false
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Sorry, can't attend
                </button>
              </div>
              {errors.attending && <p className="text-red-500 text-sm mt-3 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.attending}</p>}
            </div>
          </div>

          {formData.attending !== false && (
            <>
              {/* Section 3: Party Details */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-slate-200">
                  3. Party Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                      <option value="">No restrictions</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten-Free</option>
                      <option value="dairy-free">Dairy-Free</option>
                      <option value="nut-allergy">Nut Allergy</option>
                      <option value="shellfish-allergy">Shellfish Allergy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Preferences */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-slate-200">
                  4. Preferences & Requests
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Song Request</label>
                    <input
                      type="text"
                      name="songRequest"
                      value={formData.songRequest}
                      onChange={handleChange}
                      placeholder="e.g., Bohemian Rhapsody"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Any special accommodations or requests?"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">How did you hear about this event?</label>
                    <select
                      name="hearFrom"
                      value={formData.hearFrom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                      <option value="">Select an option</option>
                      <option value="friend">Friend or Family</option>
                      <option value="social-media">Social Media</option>
                      <option value="email">Email</option>
                      <option value="website">Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 5: Additional Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-slate-200">
                  5. Additional Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Accessibility Requirements</label>
                    <textarea
                      name="accommodations"
                      value={formData.accommodations}
                      onChange={handleChange}
                      placeholder="Any accessibility needs we should be aware of?"
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Comments</label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Anything else you'd like to tell us?"
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-slate-900 text-white font-bold text-lg rounded-lg hover:bg-slate-800 transition mt-8"
          >
            Submit Your Detailed RSVP
          </button>

          {submitted && (
            <div className="mt-6 p-4 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-lg font-semibold text-center">
              Thank you! Your detailed RSVP has been recorded.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
