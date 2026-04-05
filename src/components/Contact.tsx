import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Copy, Check } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="bg-surface-container-low rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-primary" />
              <h3 className="font-manrope font-bold text-sm uppercase tracking-[0.2em] text-primary">{t.contact.title}</h3>
            </div>
            <h2 className="font-manrope font-extrabold text-4xl md:text-5xl tracking-tight text-on-surface mb-8">
              {t.contact.heading.split(' ').map((word, i) => (
                <span key={i} className={i >= t.contact.heading.split(' ').length - 2 ? "text-primary" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              {t.contact.description}
            </p>
            
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
                <h4 className="font-bold text-lg mb-1">{t.contact.directLine}</h4>
                <a href="tel:7038273488" className="text-primary font-bold text-2xl hover:underline block transition-all active:scale-95 origin-left w-fit">
                  (703) 827-3488
                </a>
                <p className="text-on-surface-variant text-sm mt-1">Fax: (703) 827-3499</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
                <h4 className="font-bold text-lg mb-1">{t.contact.emailSupport}</h4>
                <div className="flex items-center gap-3">
                  <a href="mailto:mbptsolution@gmail.com" className="text-primary font-bold text-xl hover:underline transition-all active:scale-95 origin-left">
                    mbptsolution@gmail.com
                  </a>
                  <button 
                    onClick={() => copyToClipboard('mbptsolution@gmail.com')}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-all text-primary active:scale-90"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{t.contact.form.firstName}</label>
                  <input 
                    type="text" 
                    placeholder={t.contact.form.placeholder.firstName}
                    className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{t.contact.form.lastName}</label>
                  <input 
                    type="text" 
                    placeholder={t.contact.form.placeholder.lastName}
                    className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  placeholder={t.contact.form.placeholder.email}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{t.contact.form.service}</label>
                <select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all">
                  <option>{t.services.pt.title}</option>
                  <option>{t.services.acu.title}</option>
                  <option>Sports Performance</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{t.contact.form.message}</label>
                <textarea 
                  rows={4}
                  placeholder={t.contact.form.placeholder.message}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>
              
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-primary-container transition-all active:scale-[0.98]">
                {t.contact.form.submit}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
