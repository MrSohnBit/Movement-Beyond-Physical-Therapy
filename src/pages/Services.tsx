import { motion } from 'motion/react';
import ServiceCard from '../components/ServiceCard';
import { Activity, Sparkles, Dumbbell, Zap, Shield, Heart, Brain, Waves, Wind } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-manrope font-extrabold text-5xl md:text-6xl text-on-surface tracking-tighter mb-6">
            Our <span className="text-primary">Clinical Services</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            Comprehensive restorative therapies tailored to your unique physiological needs.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ServiceCard 
          title="Physical Therapy"
          subtitle="Movement & Restoration"
          description="Advanced biomechanical analysis and manual therapy to restore optimal function."
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
          description="Clinical acupuncture to modulate the nervous system and accelerate healing."
          image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
          icon={Sparkles}
          variant="outline"
          features={[
            { label: 'Pain Relief', icon: Heart },
            { label: 'Stress', icon: Brain },
            { label: 'Balance', icon: Activity }
          ]}
        />

        <ServiceCard 
          title="Hydrotherapy"
          subtitle="Aquatic Recovery"
          description="Low-impact resistance training in temperature-controlled environments for gentle joint recovery."
          image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          icon={Waves}
          features={[
            { label: 'Buoyancy', icon: Waves },
            { label: 'Resistance', icon: Activity },
            { label: 'Soothing', icon: Wind }
          ]}
        />

        <ServiceCard 
          title="Breathwork"
          subtitle="Neurological Calm"
          description="Guided respiratory techniques to optimize oxygen delivery and reduce systemic inflammation."
          image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
          icon={Wind}
          variant="outline"
          features={[
            { label: 'Oxygen', icon: Wind },
            { label: 'Focus', icon: Brain },
            { label: 'Vitality', icon: Heart }
          ]}
        />
      </section>
    </div>
  );
}
