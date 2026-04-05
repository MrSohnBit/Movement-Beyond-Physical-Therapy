import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Globe, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useActiveSection } from '@/src/hooks/useActiveSection';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { Language } from '@/src/i18n/translations';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const activeSection = useActiveSection(['services', 'locations', 'about', 'contact']);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: 'services', label: t.nav.services },
    { id: 'locations', label: t.nav.locations },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'ja', label: '日本語' },
    { code: 'es', label: 'Español' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 clinical-glass shadow-sm"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer group"
        >
          <div className="bg-primary p-1.5 rounded-lg group-active:scale-95 transition-transform">
            <Activity className="text-on-primary w-6 h-6" />
          </div>
          <span className="font-manrope font-extrabold text-2xl text-on-surface tracking-tight">
            Movement Beyond
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={cn(
                "font-medium transition-all duration-300 relative py-1",
                activeSection === link.id 
                  ? "text-primary font-bold" 
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors text-sm font-semibold px-2 md:px-3 py-2 rounded-lg bg-surface-container-low"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language.toUpperCase()}</span>
              <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/10 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/5",
                        language === lang.code ? "text-primary bg-primary/5" : "text-on-surface-variant"
                      )}
                    >
                      {lang.label}
                      {language === lang.code && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button className="bg-primary text-on-primary px-4 md:px-6 py-2.5 rounded-xl font-bold hover:bg-primary-container transition-all duration-300 active:scale-95 text-sm">
            <span className="hidden sm:inline">{t.nav.book}</span>
            <span className="sm:hidden">{t.nav.book.split(' ')[0]}</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
