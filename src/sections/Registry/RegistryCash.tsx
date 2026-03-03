import { DollarSign, Gift, Users, TrendingUp } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryCashProps {
  section: Section;
}

const fundGoals = [
  {
    name: 'Honeymoon - Greece Adventure',
    goal: 5000,
    raised: 3250,
    icon: DollarSign,
    description: '10-day romantic getaway',
    contributors: 24,
  },
  {
    name: 'Home Down Payment Fund',
    goal: 10000,
    raised: 7840,
    icon: Gift,
    description: 'Help us buy our dream home',
    contributors: 38,
  },
  {
    name: 'Experience Fund',
    goal: 2500,
    raised: 1920,
    icon: Users,
    description: 'Weekend getaways & adventures',
    contributors: 16,
  },
];

export default function RegistryCash({ section }: RegistryCashProps) {
  const totalGoal = fundGoals.reduce((sum, fund) => sum + fund.goal, 0);
  const totalRaised = fundGoals.reduce((sum, fund) => sum + fund.raised, 0);
  const overallPercent = (totalRaised / totalGoal) * 100;

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Monetary Gifts & Funds
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us build our future together. Any contribution, no matter the size, means the world to us.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 border border-emerald-100 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-2">Total Goal</p>
              <p className="text-5xl font-bold text-emerald-600">${totalGoal.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-2">Amount Raised</p>
              <p className="text-5xl font-bold text-teal-600">${totalRaised.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-2">Progress</p>
              <p className="text-5xl font-bold text-blue-600">{overallPercent.toFixed(0)}%</p>
            </div>
          </div>
          <div className="mt-6 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-700"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fundGoals.map((fund) => {
            const Icon = fund.icon;
            const fundPercent = (fund.raised / fund.goal) * 100;
            return (
              <div key={fund.name} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{fund.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">{fund.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-2xl font-bold text-teal-600">${fund.raised}</span>
                    <span className="text-gray-500 text-sm">of ${fund.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-700"
                      style={{ width: `${fundPercent}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                  <Users className="w-4 h-4" />
                  <span>{fund.contributors} contributors</span>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors">
                  Contribute Now
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You for Your Generosity</h3>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Every contribution brings us closer to our goals. We're deeply grateful for your support as we start this new chapter.
          </p>
        </div>
      </div>
    </section>
  );
}
