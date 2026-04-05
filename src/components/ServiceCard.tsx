import { motion } from 'motion/react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: { label: string; icon: LucideIcon }[];
  variant?: 'primary' | 'outline';
}

export default function ServiceCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  icon: Icon, 
  features,
  variant = 'primary'
}: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl group"
    >
      <div className="h-72 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="font-manrope font-bold text-3xl mb-1 text-on-surface">{title}</h2>
            <p className="text-secondary font-semibold tracking-wide uppercase text-sm">{subtitle}</p>
          </div>
          <div className="bg-surface-container-low p-3 rounded-2xl">
            <Icon className="text-primary w-8 h-8" />
          </div>
        </div>
        
        <p className="text-on-surface-variant mb-8 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-surface-container-low p-4 rounded-2xl flex flex-col items-center text-center gap-2">
              <feature.icon className="text-secondary w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
        
        <button className={cn(
          "w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all duration-300",
          variant === 'primary' 
            ? "bg-primary text-on-primary hover:bg-primary-container" 
            : "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
        )}>
          View Details
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
