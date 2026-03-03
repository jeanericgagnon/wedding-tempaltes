interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'luxury' | 'minimal' | 'bold' | 'playful';
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  variant = 'default',
  dark = false,
}: SectionHeaderProps) {
  const baseClasses = dark ? 'text-white' : 'text-gray-900';

  const variantClasses = {
    default: `text-5xl font-serif ${baseClasses} text-center mb-6`,
    luxury: `text-6xl font-serif tracking-wider ${baseClasses} text-center mb-8`,
    minimal: `text-4xl font-light ${baseClasses} text-center mb-4`,
    bold: `text-6xl font-bold ${baseClasses} text-center mb-6`,
    playful: `text-5xl font-serif ${baseClasses} text-center mb-6`,
  };

  const subtitleClasses = {
    default: `text-xl ${dark ? 'text-gray-300' : 'text-gray-600'} text-center mb-12`,
    luxury: `text-lg ${dark ? 'text-gray-400' : 'text-gray-600'} text-center mb-16 tracking-wide`,
    minimal: `text-lg ${dark ? 'text-gray-400' : 'text-gray-600'} text-center mb-8`,
    bold: `text-2xl font-semibold ${dark ? 'text-gray-300' : 'text-gray-700'} text-center mb-12`,
    playful: `text-lg ${dark ? 'text-gray-300' : 'text-gray-600'} text-center mb-12`,
  };

  return (
    <div>
      <h2 className={variantClasses[variant]}>{title}</h2>
      {subtitle && <p className={subtitleClasses[variant]}>{subtitle}</p>}
    </div>
  );
}
