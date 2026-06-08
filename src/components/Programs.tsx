import { motion } from 'motion/react';
import { Dumbbell, Activity, Flame, Target } from 'lucide-react';

const programs = [
  {
    icon: <Dumbbell className="w-8 h-8 text-brand" />,
    title: 'Strength Engine',
    description: 'Build functional strength and power with our science-backed barbell programs. Focus on compound lifts and progressive overload.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: <Activity className="w-8 h-8 text-brand" />,
    title: 'Hyrox Prep',
    description: 'High-intensity conditioning combining functional exercises and endurance running. Built for competitors and hybrid athletes.',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f4ff?q=80&w=2069&auto=format&fit=crop',
  },
  {
    icon: <Flame className="w-8 h-8 text-brand" />,
    title: 'Hypertrophy',
    description: 'Sculpt your physique with targeted muscle-building protocols. Optimal volume, intensity, and nutrition guidance.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: <Target className="w-8 h-8 text-brand" />,
    title: '1-on-1 Elite',
    description: 'Fully bespoke coaching. Customized programming, nutritional planning, and weekly check-ins to destroy your specific goals.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-background border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-sans font-bold tracking-[0.2em] uppercase text-[10px] mb-3">
            Training Systems
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter">
            Our Programs
          </h3>
          <div className="w-24 h-[1px] bg-brand mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-slate-900/40 border border-border-subtle hover:border-brand transition-colors duration-300"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40"></div>
              
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[320px]">
                <div className="mb-4 bg-black/80 w-16 h-16 flex items-center justify-center border border-border-subtle">
                  {program.icon}
                </div>
                <h4 className="text-2xl font-black text-text-main uppercase tracking-tight mb-3">
                  {program.title}
                </h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-6 flex items-center text-brand font-sans font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-yellow-400 transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
