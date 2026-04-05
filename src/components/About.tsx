import { motion } from 'motion/react';
import Philosophy from './Philosophy';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-primary" />
            <h3 className="font-manrope font-bold text-sm uppercase tracking-[0.2em] text-primary">{t.about.title}</h3>
          </div>
          <h2 className="font-manrope font-extrabold text-4xl md:text-5xl tracking-tight text-on-surface mb-8">
            {t.about.heading.split(' ').map((word, i) => (
              <span key={i} className={i >= t.about.heading.split(' ').length - 2 ? "text-primary" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-video"
        >
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
            alt="Clinical setting"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </motion.div>
      </div>
      
      <Philosophy />
    </section>
  );
}
