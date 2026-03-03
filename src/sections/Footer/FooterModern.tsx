import { Section } from '../../types/layoutConfig';

interface FooterModernProps {
  section: Section;
}

export default function FooterModern({ section }: FooterModernProps) {
  const year = new Date().getFullYear();
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">
              {bride} & {groom}
            </p>
            <p className="text-slate-300 leading-relaxed text-sm">
              Thank you for sharing in our celebration of love and commitment.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">
              Connect
            </p>
            <p className="text-slate-300 text-sm">hello@wedding.com</p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">
              Location
            </p>
            <p className="text-slate-300 text-sm">{section.bindings?.location || 'Somewhere Beautiful'}</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {year} {bride} & {groom} | With love and gratitude
          </p>
        </div>
      </div>
    </footer>
  );
}
