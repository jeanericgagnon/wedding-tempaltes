import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { CheckCircle, AlertCircle, Zap, Loader } from 'lucide-react';

interface RSVPInteractiveProps {
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

export default function RSVPInteractive({ section }: RSVPInteractiveProps) {
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
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof FormData, value: string | number | boolean | null) => {
    switch (name) {
      case 'name':
        return value && (value as string).trim().length > 0 ? '' : 'Name is required';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string) ? '' : 'Valid email required';
      case 'attending':
        return value !== null ? '' : 'Please confirm attendance';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const attendingError = validateField('attending', formData.attending);

    if (nameError) newErrors.name = nameError as any;
    if (emailError) newErrors.email = emailError as any;
    if (attendingError) newErrors.attending = attendingError as any;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'guestCount' ? parseInt(value) : value;
    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }));

    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, newValue);
      setErrors(prev => ({
        ...prev,
        [name]: error ? (error as any) : undefined,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, name === 'guestCount' ? parseInt(value) : value);
    setErrors(prev => ({
      ...prev,
      [name]: error ? (error as any) : undefined,
    }));
  };

  const getFieldStatus = (fieldName: keyof FormData) => {
    if (!touched[fieldName]) return 'idle';
    if (errors[fieldName]) return 'error';
    if (fieldName === 'name' && formData[fieldName]) return 'valid';
    if (fieldName === 'email' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[fieldName] as string)) return 'valid';
    return 'idle';
  };

  const FormField = ({ name, label, type = 'text', placeholder }: any) => {
    const status = getFieldStatus(name);
    const value = formData[name];

    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-bold text-gray-700">{label}</label>
          {status === 'valid' && <CheckCircle className="w-5 h-5 text-green-500" />}
          {status === 'error' && <AlertCircle className="w-5 h-5 text-red-500" />}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
            status === 'valid'
              ? 'border-green-500 bg-green-50 focus:ring-2 focus:ring-green-300'
              : status === 'error'
              ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-300'
              : 'border-gray-300 focus:ring-2 focus:ring-blue-300'
          }`}
        />
        {errors[name] && (
          <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors[name]}
          </p>
        )}
        {status === 'valid' && (
          <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Looks good!
          </p>
        )}
      </div>
    );
  };

  if (submitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Success!</h2>
            <p className="text-xl text-gray-600 mb-2">Your RSVP has been submitted successfully</p>
            <p className="text-gray-600">We'll see you at the event!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-12 text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Interactive RSVP</h2>
          <p className="text-lg text-gray-600">Real-time validation with instant feedback</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          <FormField name="name" label="Full Name" placeholder="John Doe" />
          <FormField name="email" label="Email Address" type="email" placeholder="john@example.com" />

          {/* Attending */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-3">Will You Attend?</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, attending: true }));
                  setTouched(prev => ({ ...prev, attending: true }));
                }}
                className={`py-3 px-4 rounded-lg font-semibold transition border-2 flex items-center justify-center gap-2 ${
                  formData.attending === true
                    ? 'bg-green-100 border-green-500 text-green-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-green-300'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                Yes, I'm Coming
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, attending: false }));
                  setTouched(prev => ({ ...prev, attending: true }));
                }}
                className={`py-3 px-4 rounded-lg font-semibold transition border-2 flex items-center justify-center gap-2 ${
                  formData.attending === false
                    ? 'bg-red-100 border-red-500 text-red-700'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-red-300'
                }`}
              >
                <AlertCircle className="w-5 h-5" />
                Can't Attend
              </button>
            </div>
            {errors.attending && (
              <p className="text-red-600 text-sm mt-2">{errors.attending}</p>
            )}
          </div>

          {formData.attending !== false && (
            <>
              {/* Guest Count */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Number of Guests</label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              {/* Dietary */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Dietary Restrictions</label>
                <select
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
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
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Song Request</label>
                <input
                  type="text"
                  name="songRequest"
                  value={formData.songRequest}
                  onChange={handleChange}
                  placeholder="Your favorite song"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Special Requests */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests?"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-lg hover:shadow-lg transition disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Submit RSVP
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
