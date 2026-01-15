
import React, { useState } from 'react';
import { MessageCircle, Instagram, X, MessageSquareText } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL } from '../constants';

const FloatingWA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Contact Menu */}
      {isOpen && (
        <div className="mb-4 flex flex-col items-end space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white text-slate-800 px-4 py-3 rounded-2xl shadow-2xl border border-slate-100 hover:scale-105 transition-transform group"
          >
            <span className="font-bold text-sm">DM Instagram</span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white">
              <Instagram size={20} />
            </div>
          </a>
          <a 
            href={WHATSAPP_URL('Halo JOKIINAJA BY AQFIY, saya ingin bertanya tentang layanan Joki.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white text-slate-800 px-4 py-3 rounded-2xl shadow-2xl border border-slate-100 hover:scale-105 transition-transform group"
          >
            <span className="font-bold text-sm">Chat WhatsApp</span>
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
              <MessageSquareText size={20} />
            </div>
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-indigo-600 text-white hover:scale-110'}`}
        aria-label="Toggle Contact Menu"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl border border-slate-100 whitespace-nowrap hidden md:block animate-pulse">
            Order Disini!
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingWA;
