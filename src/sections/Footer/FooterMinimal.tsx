import { Section } from '../../types/layoutConfig';

interface FooterMinimalProps {
  section: Section;
}

export default function FooterMinimal({ section }: FooterMinimalProps) {
  const message = section.bindings?.message || 'With love and gratitude';
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-200 hover:bg-gray-50 transition-colors duration-300 relative overflow-hidden group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-3 bg-gradient-to-r from-rose-50 via-transparent to-pink-50 transition-opacity duration-500" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-3">
          <p className="text-gray-700 font-light text-lg group-hover:text-gray-900 transition-colors duration-300">
            {message}
          </p>
          <div className="h-px w-12 bg-gradient-to-r from-rose-300 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="text-xs text-gray-500 font-light tracking-widest uppercase">
            {year} • All moments matter
          </p>
        </div>
      </div>
    </footer>
  );
}
