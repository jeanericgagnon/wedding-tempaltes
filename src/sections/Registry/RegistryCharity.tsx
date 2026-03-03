import { Heart, Leaf, BookOpen, Globe } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryCharityProps {
  section: Section;
}

const charities = [
  {
    name: 'World Wildlife Fund',
    description: 'Protecting endangered species and their habitats',
    icon: Leaf,
    goal: 2000,
    raised: 1650,
    impact: '5 acres of rainforest protected',
    color: 'from-green-600 to-emerald-600',
  },
  {
    name: 'Room to Read',
    description: 'Promoting literacy in developing countries',
    icon: BookOpen,
    goal: 1500,
    raised: 1280,
    impact: '32 libraries built or supported',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'Global Child Alliance',
    description: 'Fighting child labor and poverty',
    icon: Globe,
    goal: 2500,
    raised: 2100,
    impact: '42 children receiving education',
    color: 'from-purple-600 to-pink-600',
  },
  {
    name: 'Local Food Bank',
    description: 'Supporting food security in our community',
    icon: Heart,
    goal: 1000,
    raised: 890,
    impact: '445 meals provided',
    color: 'from-orange-600 to-red-600',
  },
];

export default function RegistryCharity({ section }: RegistryCharityProps) {
  const totalGoal = charities.reduce((sum, org) => sum + org.goal, 0);
  const totalRaised = charities.reduce((sum, org) => sum + org.raised, 0);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            In Lieu of Gifts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Instead of traditional gifts, we'd love for you to support causes that matter to us. Your generosity will create real change in the world.
          </p>
          <div className="inline-block bg-white rounded-lg p-6 border-2 border-red-200">
            <p className="text-sm text-gray-600 mb-2">Total Charitable Donations Goal</p>
            <p className="text-4xl font-bold text-red-600">${totalRaised.toLocaleString()} / ${totalGoal.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {charities.map((charity) => {
            const Icon = charity.icon;
            const percent = (charity.raised / charity.goal) * 100;
            return (
              <div key={charity.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className={`h-1 bg-gradient-to-r ${charity.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${charity.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{charity.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{charity.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">Impact: {charity.impact}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-lg font-bold text-gray-900">${charity.raised}</span>
                      <span className="text-sm text-gray-500">of ${charity.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${charity.color} h-full transition-all duration-700`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${charity.color} text-white font-bold py-2 rounded-lg hover:shadow-lg transition-shadow`}>
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border-2 border-red-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Every Gift Makes a Difference</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            By supporting these organizations, you're joining us in our mission to create positive change. Whether you contribute $5 or $500, your generosity helps make the world a better place.
          </p>
        </div>
      </div>
    </section>
  );
}
