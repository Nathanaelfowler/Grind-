import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marcus T.",
    result: "-24 lbs, +300lb Deadlift",
    quote: "Grind isn't just a gym, it's a mentality. The programming completely re-shaped my approach to fitness. The coaches push you past what you thought was possible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sarah J.",
    result: "Hyrox Pro Finisher",
    quote: "I came to Grind wanting to compete. 6 months later, I finished my first Hyrox in the pro division. The endurance protocol is absolutely brutal but effective.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David L.",
    result: "+15 lbs Lean Muscle",
    quote: "I spent years doing random workouts. The 1-on-1 coaching here finally gave me structure. Best investment I've ever made in my health.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 bg-background border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-black tracking-[0.2em] uppercase text-[10px] mb-3">
            Real Results
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter">
            Join The Legacy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 p-8 border border-border-subtle relative"
            >
              <div className="flex text-brand mb-6 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 font-light leading-relaxed italic mb-8">
                "{test.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover grayscale border border-border-subtle"
                />
                <div className="ml-4">
                  <h4 className="text-text-main font-bold uppercase tracking-tight">{test.name}</h4>
                  <p className="text-brand text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                    {test.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
