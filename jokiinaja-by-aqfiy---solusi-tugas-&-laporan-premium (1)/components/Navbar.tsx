
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_URL, WEBSITE_URL, LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href={WEBSITE_URL} className="flex items-center group transition-transform hover:scale-105 focus:outline-none">
              <img 
                src={LOGO_URL} 
                alt="Logo JOKIINAJA BY AQFIY" 
                className="h-10 w-auto mr-3 drop-shadow-sm group-hover:drop-shadow-md transition-all"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <span className="text-xl font-bold tracking-tighter flex flex-col leading-tight">
                <span className="text-indigo-600">JOKIINAJA</span>
                <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-indigo-400 transition-colors">BY AQFIY</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL('Halo JOKIINAJA BY AQFIY, saya ingin bertanya tentang layanan Joki.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
            >
              Order Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 focus:outline-none" aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-morphism border-t border-slate-100 shadow-xl py-6 flex flex-col items-center space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-700 w-full text-center py-2 hover:bg-indigo-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={WHATSAPP_URL('Halo JOKIINAJA BY AQFIY, saya ingin bertanya tentang layanan Joki.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-10 py-3.5 rounded-full text-lg font-bold shadow-lg active:scale-95 transition-transform"
          >
            Order Sekarang
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
