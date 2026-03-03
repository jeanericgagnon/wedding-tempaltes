import { Section } from '../../types/layoutConfig';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface RSVPWizardProps {
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

export default function RSVPWizard({ section }: RSVPWizardProps) {
  const [step, setStep] = useState(1);
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

  const validateStep = (stepNum: number) => {
    const newErrors: Partial<FormData> = {};

    if (stepNum === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    } else if (stepNum === 2) {
      if (formData.attending === null) newErrors.attending = 'Please confirm attendance';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (formData.attending === false && step === 2) {
        setSubmitted(true);
      } else if (step < 4) {
        setStep(step + 1);
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
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
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">RSVP Submitted!</h2>
          <p className="text-xl text-gray-600 mb-2">Thank you for your response</p>
          <p className="text-gray-600">We'll send you a confirmation soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center gap-2 md:gap-4 mb-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                    s <= step
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {s < step ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition ${
                      s < step ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between text-xs md:text-sm font-semibold text-gray-700 gap-2">
            <span>Personal</span>
            <span>Attendance</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Step 1: Your Information</h2>
              <p className="text-gray-600 mb-6">Let's start with your details</p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 text-base"
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 text-base"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Attendance */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Step 2: Will You Attend?</h2>
              <p className="text-gray-600 mb-8">Please confirm your attendance</p>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: true }))}
                  className={`w-full p-6 rounded-lg border-2 transition text-lg font-bold ${
                    formData.attending === true
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-green-500'
                  }`}
                >
                  Yes, I'll Be There!
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, attending: false }))}
                  className={`w-full p-6 rounded-lg border-2 transition text-lg font-bold ${
                    formData.attending === false
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-red-500'
                  }`}
                >
                  Sorry, I Can't Make It
                </button>
              </div>
              {errors.attending && <p className="text-red-500 text-sm mt-3">{errors.attending}</p>}
            </div>
          )}

          {/* Step 3: Party Details */}
          {step === 3 && formData.attending !== false && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Step 3: Party Details</h2>
              <p className="text-gray-600 mb-6">Tell us about your preferences</p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">How many guests?</label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 text-base"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Dietary Restrictions</label>
                  <select
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 text-base"
                  >
                    <option value="">No restrictions</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="dairy-free">Dairy-Free</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Song Request</label>
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    placeholder="What's your favorite song?"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 text-base"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && formData.attending !== false && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Special Requests</h2>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Any special requests?</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Tell us anything special we should know..."
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 text-base resize-none"
                />
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Summary:</strong> {formData.name} ({formData.email}) - {formData.guestCount} guest{formData.guestCount > 1 ? 's' : ''} - {formData.dietary || 'No dietary restrictions'}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-10">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 1}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {formData.attending === false ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
              >
                <Check className="w-5 h-5" />
                Confirm Response
              </button>
            ) : step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
              >
                <Check className="w-5 h-5" />
                Submit RSVP
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
