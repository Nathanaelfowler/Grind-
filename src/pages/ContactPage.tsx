import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prevent default page reload and use fetch to submit the data silently
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/a49d7c3e8e4e44d3c5ae6b87b8a6d3e5", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Transmission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-background border-b border-border-subtle overflow-hidden relative">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
          <div className="relative w-full max-w-5xl aspect-[2/1]">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
              alt="World Map" 
              className="w-full h-full object-contain invert opacity-60" 
            />
            <div className="absolute top-[52%] left-[49.5%] flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2">
              <span className="w-4 h-4 rounded-full bg-brand animate-ping absolute"></span>
              <span className="w-2 h-2 rounded-full bg-brand relative z-10 shadow-[0_0_10px_rgba(255,222,0,1)]"></span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-[10px] uppercase tracking-[0.5em] text-brand mb-4 font-bold">Reach Out</h1>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-text-main">
              No Excuses
            </h2>
            <div className="w-24 h-[1px] bg-brand mx-auto mb-8"></div>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Ready to step into the lab? Drop us a line. Whether you have questions about programs, 1-on-1 coaching, or you're ready to commit, we are here.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-10 border border-border-subtle bg-slate-900/40"
            >
              <h3 className="text-2xl font-black uppercase tracking-tight text-text-main mb-8">Headquarters</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-border-subtle bg-black/30 text-brand">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-1">Location</h4>
                    <p className="text-slate-300 font-light">No 6, Oluwokekere Street<br />Basorun, Ibadan, Oyo State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-border-subtle bg-black/30 text-brand">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-1">Phone</h4>
                    <p className="text-slate-300 font-light">+256 8125 6438 10</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-border-subtle bg-black/30 text-brand">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-1">Email</h4>
                    <p className="text-slate-300 font-light">natafowler1@gmai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 border border-border-subtle bg-black/30 text-brand">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-1">Hours</h4>
                    <p className="text-slate-300 font-light">Members: 24/7 Access<br />Staffed: Mon-Sat, 6AM - 8PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center p-10 border border-brand bg-brand/5 text-center min-h-[400px]">
                  <CheckCircle className="w-16 h-16 text-brand mb-6" />
                  <h3 className="text-2xl font-black uppercase tracking-tight text-text-main mb-4">Transmission Received</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Your message has been successfully accepted into the system. One of our specialists will be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 px-8 py-3 border border-border-subtle text-slate-300 hover:text-brand hover:border-brand transition-colors text-[10px] uppercase tracking-widest font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* FormSubmit Configuration Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">First Name</label>
                      <input type="text" name="First Name" required className="w-full bg-transparent border-b border-border-subtle p-2 text-text-main focus:outline-none focus:border-brand transition-colors font-light" placeholder="JOHN" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Last Name</label>
                      <input type="text" name="Last Name" required className="w-full bg-transparent border-b border-border-subtle p-2 text-text-main focus:outline-none focus:border-brand transition-colors font-light" placeholder="DOE" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Email Address</label>
                    <input type="email" name="email" required className="w-full bg-transparent border-b border-border-subtle p-2 text-text-main focus:outline-none focus:border-brand transition-colors font-light" placeholder="JOHN@EXAMPLE.COM" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Message</label>
                    <textarea name="message" required rows={5} className="w-full bg-transparent border-b border-border-subtle p-2 text-text-main focus:outline-none focus:border-brand transition-colors font-light resize-none" placeholder="YOUR MESSAGE..."></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 border border-brand text-brand hover:bg-brand hover:text-black disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand disabled:cursor-not-allowed font-black uppercase tracking-[0.2em] text-[10px] transition-colors duration-300 mt-4">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
