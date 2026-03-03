import { Section } from '../../types/layoutConfig';

interface HeroMinimalProps {
  section: Section;
}

export default function HeroMinimal({ section }: HeroMinimalProps) {
  const bride = section.bindings?.bride || 'Sarah';
  const groom = section.bindings?.groom || 'David';
  const date = section.bindings?.date || '05.10.2025';

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full -mr-48 -mt-48 opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full -ml-48 -mb-48 opacity-40" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="space-y-16">
          <h1 className="text-8xl md:text-9xl font-light tracking-tighter text-gray-900 leading-none">
            {bride}
          </h1>

          <div className="flex justify-center">
            <div className="text-3xl text-gray-400 font-extralight">&</div>
          </div>

          <h1 className="text-8xl md:text-9xl font-light tracking-tighter text-gray-900 leading-none">
            {groom}
          </h1>

          <div className="pt-8 border-t border-gray-200">
            <div className="text-sm tracking-widest text-gray-500 uppercase">
              {date}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
