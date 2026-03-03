import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';

interface RSVPExtendedProps {
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
  arrivalTime: string;
  photography: string;
}

export default function RSVPExtended({ section }: RSVPExtendedProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    attending: null,
    guestCount: 1,
    dietary: '',
    songRequest: '',
    specialRequests: '',
    arrivalTime: '',
    photography: '',
  });

  const [expandedSection, setExpandedSection] = useState<string | null>(null);
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

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const SectionHeader = ({ title, section }: { title: string; section: string }) => (
    <button
      type="button"
      onClick={() => toggleSection(section)}
      className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 border border-teal-200 rounded-lg transition"
    >
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <ChevronDown className={`w-5 h-5 text-teal-600 transition ${expandedSection === section ? 'rotate-180' : ''}`} />
    </button>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Extended RSVP
          </h2>
          <p className="text-lg text-gray-600">Comprehensive event response with all the details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Section 1: Basic Info */}
          <div>
            <SectionHeader title="Your Information" section="basic" />
            {expandedSection === 'basic' && (
              <div className="px-6 py-6 bg-white border border-t-0 border-teal-200 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Attendance */}
          <div>
            <SectionHeader title="Attendance" section="attendance" />
            {expandedSection === 'attendance' && (
              <div className="px-6 py-6 bg-white border border-t-0 border-teal-200">
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                      formData.attending === true
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Yes, I'm Attending
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
                      formData.attending === false
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Can't Attend
                  </button>
                </div>
                {errors.attending && <p className="text-red-500 text-sm">{errors.attending}</p>}
              </div>
            )}
          </div>

          {formData.attending !== false && (
            <>
              {/* Section 3: Party Details */}
              <div>
                <SectionHeader title="Party Details" section="party" />
                {expandedSection === 'party' && (
                  <div className="px-6 py-6 bg-white border border-t-0 border-teal-200 space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
                        <select
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Restrictions</label>
                        <select
                          name="dietary"
                          value={formData.dietary}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Arrival Time</label>
                      <select
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select time</option>
                        <option value="early">Early (arrive 15 min before)</option>
                        <option value="ontime">On Time</option>
                        <option value="late">A bit late</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Section 4: Preferences */}
              <div>
                <SectionHeader title="Preferences & Requests" section="preferences" />
                {expandedSection === 'preferences' && (
                  <div className="px-6 py-6 bg-white border border-t-0 border-teal-200 space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Song Request</label>
                      <input
                        type="text"
                        name="songRequest"
                        value={formData.songRequest}
                        onChange={handleChange}
                        placeholder="Your favorite song"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Any special requests?"
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Section 5: Optional Info */}
              <div>
                <SectionHeader title="Additional Information" section="optional" />
                {expandedSection === 'optional' && (
                  <div className="px-6 py-6 bg-white border border-t-0 border-teal-200 space-y-5">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">Optional fields to help us personalize your experience</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Photography Permission</label>
                      <select
                        name="photography"
                        value={formData.photography}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select preference</option>
                        <option value="yes">Yes, I'm okay with photos</option>
                        <option value="no">No, I prefer not to be photographed</option>
                        <option value="ask">Please ask me before</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transition mt-6"
          >
            Submit Extended RSVP
          </button>

          {submitted && (
            <div className="p-4 bg-teal-100 border border-teal-300 text-teal-800 rounded-lg font-semibold text-center">
              Thank you! Your extended RSVP has been submitted.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
