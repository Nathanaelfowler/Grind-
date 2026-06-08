import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import React, { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, href: string) => {
    e.preventDefault();
    setCurrentPage(page);
    setIsOpen(false);
    
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

  const links = [
    { name: 'Programs', href: '#programs', page: 'home' },
    { name: 'Results', href: '#results', page: 'home' },
    { name: 'Pricing', href: '#pricing', page: 'home' },
    { name: 'About Us', href: '#', page: 'about' },
    { name: 'Contact', href: '#', page: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleNavClick(e, 'home', '#')}>
            <span className="font-sans font-black italic text-3xl tracking-tighter text-text-main">
              GRI<span className="text-brand">ND.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page, link.href)}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 ${
                  (currentPage === link.page && link.page !== 'home') 
                    ? 'text-brand' 
                    : 'text-slate-400 hover:text-brand'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+2348125643810" className="flex items-center text-[11px] font-bold text-slate-400 hover:text-brand transition-colors duration-200">
              <Phone size={14} className="mr-2" />
              +234 8125 6438 10
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, 'home', '#pricing')}
              className="px-6 py-2 border border-brand text-brand font-black text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-brand hover:text-black"
            >
              Join the Lab
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-brand"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900/90 border-b border-border-subtle"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page, link.href)}
                className={`block px-3 py-3 font-sans text-base font-bold uppercase tracking-wider ${
                  (currentPage === link.page && link.page !== 'home')
                    ? 'text-brand bg-white/5'
                    : 'text-slate-300 hover:text-brand hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+2348125643810"
              className="flex items-center px-3 py-3 font-sans text-base font-bold text-slate-300 hover:text-brand hover:bg-white/5 tracking-wider"
            >
              <Phone size={18} className="mr-3" />
              +234 8125 6438 10
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, 'home', '#pricing')}
              className="block w-full text-center mt-6 px-6 py-3 bg-brand text-black font-sans font-black tracking-widest uppercase"
            >
              Join Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
