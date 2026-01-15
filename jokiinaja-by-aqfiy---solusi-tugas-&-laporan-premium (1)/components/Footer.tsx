
import React from 'react';
import { Instagram, Send, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_URL, INSTAGRAM_URL, WEBSITE_URL, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={LOGO_URL} 
                alt="Logo Jokiinaja" 
                className="h-12 w-auto mr-4"
              />
              <span className="text-2xl font-bold text-white tracking-tighter flex flex-col leading-tight">
                JOKIINAJA
                <span className="text-indigo-400 text-[10px] font-bold tracking-[0.2em] uppercase">BY AQFIY</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Partner akademik terbaik untuk mahasiswa dan pelajar di seluruh Indonesia. Kami membantu Anda menyelesaikan laporan, ringkasan, dan presentasi dengan hasil yang memukau. Kunjungi kami di <a href={WEBSITE_URL} className="text-indigo-400 hover:underline">jokiinaja.byaqfiy.com</a>
            </p>
            <div className="flex space-x-4">
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href={WHATSAPP_URL('Halo JOKIINAJA BY AQFIY')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <Send size={20} className="text-white" />
              </a>
              <a 
                href="mailto:contact@jokiinaja.byaqfiy.com" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Menu Cepat</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Layanan & Harga</a></li>
              <li><a href="#why-us" className="hover:text-indigo-400 transition-colors">Mengapa Kami</a></li>
              <li><a href="#how-to" className="hover:text-indigo-400 transition-colors">Cara Melakukan Order</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-indigo-600/20 text-indigo-400 rounded-lg flex items-center justify-center font-bold">WA</span>
                <span className="font-semibold">{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-8 h-8 bg-indigo-600/20 text-indigo-400 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">Lok</span>
                <span className="leading-relaxed">Tersedia secara online untuk membantu pelajar & mahasiswa di seluruh wilayah Indonesia.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} JOKIINAJA BY AQFIY. <a href={WEBSITE_URL} className="hover:text-white transition-colors">jokiinaja.byaqfiy.com</a>. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
