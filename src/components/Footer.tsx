import { Activity, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest pt-24 pb-12 px-6 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg">
              <Activity className="text-on-primary w-6 h-6" />
            </div>
            <span className="font-manrope font-extrabold text-2xl text-on-surface tracking-tight">
              Movement Beyond
            </span>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
          <ul className="space-y-4">
            {(['services', 'locations', 'about', 'contact'] as const).map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-on-surface-variant hover:text-primary transition-colors capitalize">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{t.locations.contact}</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-on-surface-variant">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>7010 Little River Turnpike STE 335, Annandale, VA 22003</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="tel:7038273488" className="hover:text-primary transition-colors hover:underline">(703) 827-3488</a>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <a href="mailto:mbptsolution@gmail.com" className="hover:text-primary transition-colors hover:underline">mbptsolution@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{t.footer.legal}</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors">{t.footer.privacy}</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors">{t.footer.terms}</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-sm font-medium">
        <p>© {new Date().getFullYear()} Movement Beyond. {t.footer.rights}</p>
        <p>Designed with Precision in Annandale, VA</p>
      </div>
    </footer>
  );
}
