import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function Locations() {
  const { t } = useLanguage();

  return (
    <section id="locations" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <span className="h-px w-12 bg-primary" />
        <h3 className="font-manrope font-bold text-sm uppercase tracking-[0.2em] text-primary">{t.locations.title}</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-manrope font-extrabold text-4xl md:text-5xl tracking-tight text-on-surface">
            {t.locations.clinicTitle.split(' ').map((word, i) => (
              <span key={i} className={word === 'Annandale' ? "text-primary" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-xl">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">{t.locations.address}</h4>
                <p className="text-on-surface-variant text-lg">
                  7010 Little River Turnpike STE 335<br />
                  Annandale, VA 22003
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">{t.locations.contact}</h4>
                <p className="text-on-surface-variant text-lg">
                  Phone: (703) 827-3488<br />
                  Fax: (703) 827-3499<br />
                  mbptsolution@gmail.com
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Clock className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">{t.locations.hours}</h4>
                <div className="text-on-surface-variant text-lg space-y-1">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm italic text-on-surface-variant/70">({t.locations.lunch}: 12:00 PM - 1:00 PM)</p>
                  <p>Sat - Sun: {t.locations.closed}</p>
                  <p className="text-xs text-on-surface-variant/60">{t.locations.note}</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-primary font-bold hover:underline group">
            {t.locations.directions}
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Placeholder for Map */}
          <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-on-surface-variant font-medium">Interactive Map Integration</p>
              <p className="text-sm text-on-surface-variant/60">7010 Little River Turnpike STE 335, Annandale, VA</p>
            </div>
          </div>
          {/* In a real app, you'd embed a Google Map here */}
          <div className="absolute bottom-4 right-4 bg-surface-container-lowest px-4 py-2 rounded-full shadow-lg text-xs font-bold text-primary">
            Annandale, VA
          </div>
        </motion.div>
      </div>
    </section>
  );
}
