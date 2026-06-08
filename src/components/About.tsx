import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background border-t border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-brand/20 translate-x-4 translate-y-4 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=2000&auto=format&fit=crop"
                alt="Head Coach"
                className="w-full h-auto object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 bg-brand text-black px-6 py-4">
                <p className="font-bold uppercase tracking-widest text-sm">Head Coach</p>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Jaxson Forge</h3>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand font-black tracking-[0.2em] uppercase text-[10px] mb-3">
                The Philosophy
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-text-main uppercase tracking-tighter mb-6">
                No Excuses.<br />Just Execution.
              </h3>
              
              <div className="space-y-6 text-slate-400 font-light leading-relaxed">
                <p>
                  Grind was forged from a simple belief: most gyms cater to comfort. We cater to progress. We don't have juice bars or massage chairs. We have iron, sweat, and a community of individuals dedicated to becoming the hardest to kill versions of themselves.
                </p>
                <p>
                  I've spent 15 years in the trenches of strength conditioning and athletic performance. The methodology here isn't based on fads; it's rooted in biomechanics, progressive overload, and an unrelenting work ethic.
                </p>
                <p className="text-text-main font-medium border-l-2 border-brand pl-4 italic">
                  "If you want to be comfortable, stay home. If you want to change, walk through these doors."
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block border border-brand text-brand hover:bg-brand hover:text-black font-black tracking-[0.2em] uppercase text-[10px] px-8 py-4 transition-colors"
                >
                  Meet The Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
