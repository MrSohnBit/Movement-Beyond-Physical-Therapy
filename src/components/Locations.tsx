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
                <div className="text-on-surface-variant text-lg space-y-1">
                  <p>Phone: <a href="tel:7038273488" className="hover:text-primary transition-colors hover:underline">(703) 827-3488</a></p>
                  <p>Fax: (703) 827-3499</p>
                  <p><a href="mailto:mbptsolution@gmail.com" className="hover:text-primary transition-colors hover:underline">mbptsolution@gmail.com</a></p>
                </div>
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
          
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=7010+Little+River+Turnpike+STE+335+Annandale+VA+22003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline group"
          >
            {t.locations.directions}
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[450px] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.653424647313!2d-77.19451492341584!3d38.83407794998495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64da393a55555%3A0x64761927e1f1f1f1!2s7010%20Little%20River%20Turnpike%20%23335%2C%20Annandale%2C%20VA%2022003!5e0!3m2!1sen!2sus!4v1712275200000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Movement Beyond Clinic Location"
            className="grayscale-[0.2] contrast-[1.1]"
          ></iframe>
          
          <div className="absolute bottom-4 right-4 bg-surface-container-lowest px-4 py-2 rounded-full shadow-lg text-xs font-bold text-primary border border-outline-variant/10">
            Annandale, VA
          </div>
        </motion.div>
      </div>
    </section>
  );
}
