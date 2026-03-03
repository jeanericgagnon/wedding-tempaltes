import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { Zap } from 'lucide-react';

interface RSVPQuickProps {
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

export default function RSVPQuick({ section }: RSVPQuickProps) {
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
    if (formData.attending === null) newErrors.attending = 'Response required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          attending: null,
          guestCount: 1,
          dietary: '',
          songRequest: '',
          specialRequests: '',
        });
      }, 2000);
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
    <section className="py-20 bg-white">
      <div className="max-w-sm mx-auto px-4">
        <div className="text-center mb-8">
          <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Quick RSVP</h2>
          <p className="text-sm text-gray-600 mt-1">30 seconds to respond</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
              className={`py-2.5 px-3 rounded-lg text-sm font-bold transition ${
                formData.attending === true
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
              className={`py-2.5 px-3 rounded-lg text-sm font-bold transition ${
                formData.attending === false
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              No
            </button>
          </div>
          {errors.attending && <p className="text-red-500 text-xs">{errors.attending}</p>}

          {formData.attending !== false && (
            <>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>

              <select
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              >
                <option value="">Dietary needs</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="dairy-free">Dairy-Free</option>
                <option value="other">Other</option>
              </select>

              <input
                type="text"
                name="songRequest"
                value={formData.songRequest}
                onChange={handleChange}
                placeholder="Song request (optional)"
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              />
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition text-sm"
          >
            SEND RSVP
          </button>

          {submitted && (
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg text-sm font-bold text-center">
              RSVP sent!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
