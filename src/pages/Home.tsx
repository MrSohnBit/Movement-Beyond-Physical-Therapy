import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Philosophy from '../components/Philosophy';
import { Activity, Sparkles, Dumbbell, Zap, Shield, Heart, Brain } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <ServiceCard 
          title="Physical Therapy"
          subtitle="Movement & Restoration"
          description="Our doctors of physical therapy analyze your movement patterns to restore function, decrease pain, and prevent future injury through manual therapy and corrective exercise."
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
          icon={Activity}
          features={[
            { label: 'Mobility', icon: Dumbbell },
            { label: 'Recovery', icon: Zap },
            { label: 'Prevention', icon: Shield }
          ]}
        />
        
        <ServiceCard 
          title="Acupuncture"
          subtitle="Traditional Precision"
          description="Integrating Traditional Chinese Medicine with clinical precision to modulate the nervous system, reduce inflammation, and accelerate the body's natural healing response."
          image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
          icon={Sparkles}
          variant="outline"
          features={[
            { label: 'Pain Relief', icon: Heart },
            { label: 'Stress', icon: Brain },
            { label: 'Balance', icon: Activity }
          ]}
        />
      </section>
      
      <div className="px-6 max-w-7xl mx-auto">
        <Philosophy />
      </div>
    </>
  );
}
