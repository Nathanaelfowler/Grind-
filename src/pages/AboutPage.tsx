import { motion } from 'motion/react';
import About from '../components/About';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Intro hero for About page */}
      <section className="py-24 bg-background border-b border-border-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-[10px] uppercase tracking-[0.5em] text-brand mb-4 font-bold">About Us</h1>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-text-main">
              The Mission
            </h2>
            <div className="w-24 h-[1px] bg-brand mx-auto mb-8"></div>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              We started Grind with one objective: to build a facility that filters out the noise and focuses purely on performance. Our values are rooted in discipline, consistency, and an uncompromising standard of execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Existing About section component */}
      <About />

      {/* Values section */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[150px] font-black text-white/5 uppercase select-none italic pointer-events-none whitespace-nowrap">
          VALUES VALUES VALUES
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Relentless Grit', desc: 'We do not quit when it gets hard. We embrace the discomfort as the primary catalyst for growth.' },
              { num: '02', title: 'Absolute Accountability', desc: 'No one is coming to save you. You are responsible for your own outcomes, in the gym and in life.' },
              { num: '03', title: 'Community of Iron', desc: 'We surround ourselves with individuals who push us to be better. We rise together through shared suffering.' }
            ].map((value, i) => (
              <motion.div
                key={value.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 border border-border-subtle bg-slate-900/40 relative group hover:border-brand transition-colors"
              >
                <div className="text-5xl font-black text-brand opacity-30 mb-6 group-hover:opacity-100 transition-opacity">{value.num}</div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-text-main mb-4">{value.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
