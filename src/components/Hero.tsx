import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8">
            <CheckCircle2 className="w-4 h-4" />
            {t.hero.badge}
          </div>
          
          <h1 className="font-manrope font-extrabold text-5xl md:text-7xl tracking-tight text-on-surface leading-[1.1] mb-8">
            {t.hero.title}
          </h1>
          
          <p className="text-on-surface-variant text-xl leading-relaxed mb-10 max-w-xl">
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-container transition-all shadow-lg shadow-primary/20 active:scale-95">
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-surface-container-low text-on-surface px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-surface-container-high transition-all active:scale-95">
              {t.hero.secondaryCta}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop" 
              alt="Physical Therapy Session"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 lg:-left-12 bg-surface-container-lowest p-6 rounded-3xl shadow-xl z-20 border border-outline-variant/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Activity className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-on-surface">15k+</p>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Patients Healed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
