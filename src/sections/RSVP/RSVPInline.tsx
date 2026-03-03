import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { Send } from 'lucide-react';

interface RSVPInlineProps {
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

export default function RSVPInline({ section }: RSVPInlineProps) {
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
    if (formData.attending === null) newErrors.attending = 'Select attendance';
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
    <section className="py-20 bg-gradient-to-r from-sky-50 to-blue-50 border-y-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Quick RSVP
          </h2>
          <p className="text-gray-600">Fill out the form inline to respond</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Primary Row: Name, Email, Attending */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Attending</label>
              <select
                name="attending"
                value={formData.attending === null ? '' : formData.attending ? 'yes' : 'no'}
                onChange={(e) => {
                  if (e.target.value === 'yes') setFormData(prev => ({ ...prev, attending: true }));
                  else if (e.target.value === 'no') setFormData(prev => ({ ...prev, attending: false }));
                  else setFormData(prev => ({ ...prev, attending: null }));
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Choose...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Guests</label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" />
              Submit
            </button>
          </div>

          {/* Secondary Row: Dietary, Song, Requests */}
          {formData.attending !== false && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end pt-2">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Dietary</label>
                <select
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="">None</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="gluten-free">Gluten-Free</option>
                  <option value="dairy-free">Dairy-Free</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Song Request</label>
                <input
                  type="text"
                  name="songRequest"
                  value={formData.songRequest}
                  onChange={handleChange}
                  placeholder="Song name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Special Requests</label>
                <input
                  type="text"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any requests?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>
          )}

          {/* Error Messages */}
          {Object.keys(errors).length > 0 && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm font-semibold">
                {Object.values(errors).filter(Boolean)[0]}
              </p>
            </div>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="p-3 bg-green-50 border border-green-300 text-green-800 rounded-lg font-semibold text-sm text-center">
              Your RSVP has been submitted!
            </div>
          )}
        </form>

        {/* Note */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Complete the form horizontally for a quick and easy response
        </p>
      </div>
    </section>
  );
}
