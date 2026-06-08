import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.istockphoto.com/id/2252613980/photo/mid-adult-woman-enjoying-stationary-cycling-class-at-fitness-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=f_sKCjKk-cz2VM1kXho_2aNmGpAkEmQhH3eml2nyWqk="
          alt="Gym Background"
          className="w-full h-full object-cover object-center opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 border border-brand/30 bg-brand/10 px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="font-sans text-[10px] font-bold text-brand uppercase tracking-[0.2em]">
                Taking new members
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-black text-text-main leading-[0.85] tracking-tighter mb-6 uppercase">
              Embrace the <br />
              <span className="text-brand">
                Grind.
              </span>
            </h1>
            
            <p className="mt-4 text-lg text-slate-400 max-w-sm font-light mb-10 leading-relaxed border-l-2 border-brand pl-4">
              Premium coaching, hardcore community, and results-driven training programs for those who refuse to be average.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="group flex items-center justify-center px-8 py-4 bg-brand hover:bg-yellow-400 text-black font-sans font-black text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="flex items-center justify-center px-8 py-4 bg-transparent border border-border-subtle hover:border-brand text-text-main hover:text-brand font-sans font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand/10"
              >
                View Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
