import { Stethoscope, MapPin, Globe, Mail } from 'lucide-react';
import { useActiveSection } from '@/src/hooks/useActiveSection';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function MobileNav() {
  const { t } = useLanguage();
  const activeSection = useActiveSection(['services', 'locations', 'about', 'contact']);

  const navItems = [
    { id: 'services', label: t.nav.services, icon: Stethoscope },
    { id: 'locations', label: t.nav.locations, icon: MapPin },
    { id: 'about', label: t.nav.about, icon: Globe },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 clinical-glass border-t border-outline-variant/10 z-50">
      <div className="flex justify-around items-center h-20 px-4">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            className={cn(
              "flex flex-col items-center gap-1.5 transition-all duration-300 relative",
              activeSection === item.id ? "text-primary" : "text-on-surface-variant"
            )}
          >
            <item.icon className={cn("w-6 h-6", activeSection === item.id && "fill-primary/10")} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            {activeSection === item.id && (
              <motion.div 
                layoutId="activeMobileNav"
                className="absolute -top-2 w-8 h-1 bg-primary rounded-full"
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}
