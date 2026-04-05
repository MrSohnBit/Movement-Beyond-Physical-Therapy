import { motion } from 'motion/react';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container-low rounded-3xl p-8 md:p-20 mb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10" />
      
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-primary" />
          <h3 className="font-manrope font-bold text-sm uppercase tracking-[0.2em] text-primary">{t.philosophy.title}</h3>
        </div>
        
        <h2 className="font-manrope font-extrabold text-4xl md:text-6xl mb-16 tracking-tight text-on-surface">
          {t.philosophy.heading}
        </h2>
        
        <div className="space-y-16">
          {t.philosophy.items.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-8 md:gap-12"
            >
              <span className="font-manrope font-bold text-4xl md:text-5xl text-outline-variant/30 select-none">
                {item.id}
              </span>
              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-on-surface">{item.title}</h4>
                <p className="text-on-surface-variant leading-relaxed text-lg md:text-xl max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
