import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import About from './components/About';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import { Dumbbell, Zap, Shield, Heart, Brain, Activity, Sparkles } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="services" className="pt-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px w-12 bg-primary" />
            <h3 className="font-manrope font-bold text-sm uppercase tracking-[0.2em] text-primary">{t.services.title}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <ServiceCard 
              title={t.services.pt.title}
              subtitle={t.services.pt.subtitle}
              description={t.services.pt.description}
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
              icon={Activity}
              features={[
                { label: t.services.pt.features[0], icon: Dumbbell },
                { label: t.services.pt.features[1], icon: Zap },
                { label: t.services.pt.features[2], icon: Shield }
              ]}
            />
            
            <ServiceCard 
              title={t.services.acu.title}
              subtitle={t.services.acu.subtitle}
              description={t.services.acu.description}
              image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
              icon={Sparkles}
              variant="outline"
              features={[
                { label: t.services.acu.features[0], icon: Heart },
                { label: t.services.acu.features[1], icon: Brain },
                { label: t.services.acu.features[2], icon: Activity }
              ]}
            />
          </div>
        </section>
        
        <Locations />
        <About />
        <Contact />
      </main>
      
      <Footer />
      <MobileNav />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
