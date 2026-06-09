import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, href: string) => {
    e.preventDefault();
    setCurrentPage(page);
    
    if (href !== '#') {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border-subtle pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div className="md:col-span-1">
            <span onClick={(e) => handleNavClick(e as any, 'home', '#')} className="font-sans font-black italic text-3xl tracking-tighter text-text-main inline-block mb-4 cursor-pointer">
              GRIND<span className="text-brand">GYM.</span>
            </span>
            <p className="text-slate-500 font-light text-sm leading-relaxed max-w-xs">
              Elite coaching, hardcore community, and results-driven training for those who refuse to be average.
            </p>
          </div>

          <div>
            <h4 className="text-text-main font-black uppercase tracking-[0.2em] text-[10px] mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'home', '#programs')} className="text-slate-400 hover:text-brand font-light text-sm transition-colors">Strength Engine</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'home', '#programs')} className="text-slate-400 hover:text-brand font-light text-sm transition-colors">Hyrox Prep</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'home', '#programs')} className="text-slate-400 hover:text-brand font-light text-sm transition-colors">Hypertrophy</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'home', '#programs')} className="text-slate-400 hover:text-brand font-light text-sm transition-colors">1-on-1 Elite</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-black uppercase tracking-[0.2em] text-[10px] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about', '#')} className="text-slate-400 hover:text-brand font-light text-sm transition-colors">About Us</a></li>
              <li><a href="#results" onClick={(e) => handleNavClick(e, 'home', '#results')} className="text-slate-400 hover:text-brand font-light text-sm transition-colors">Transformations</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'home', '#pricing')} className="text-slate-400 hover:text-brand font-light text-sm transition-colors">Pricing & Memberships</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand font-light text-sm transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-main font-black uppercase tracking-[0.2em] text-[10px] mb-4">Connect</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-slate-400 font-light text-sm">No 6, Oluwokekere Street, Basorun, Ibadan</li>
              <li className="text-slate-400 font-light text-sm">natafowler1@gmail.com</li>
              <li className="text-slate-400 font-light text-sm">+256 8125 6438 10</li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/thenathanael_?igsh=bTU1NjRzcHA0MzJk" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black/30 border border-border-subtle flex items-center justify-center cursor-pointer hover:border-brand text-slate-400 hover:text-brand transition-colors">
                <Instagram size={14} />
              </a>
              <a href="https://x.com/N_atefowler" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black/30 border border-border-subtle flex items-center justify-center cursor-pointer hover:border-brand text-slate-400 hover:text-brand transition-colors">
                <Twitter size={14} />
              </a>
              <a href="https://www.youtube.com/@nathanaelfowler1293" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black/30 border border-border-subtle flex items-center justify-center cursor-pointer hover:border-brand text-slate-400 hover:text-brand transition-colors">
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 font-light text-xs">
            © {new Date().getFullYear()} Grindgym. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-600 hover:text-brand font-light text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-brand font-light text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
