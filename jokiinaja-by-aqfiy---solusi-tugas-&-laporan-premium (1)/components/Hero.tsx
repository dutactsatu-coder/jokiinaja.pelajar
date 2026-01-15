
import React from 'react';
import { ArrowRight, Sparkles, Instagram } from 'lucide-react';
import { WHATSAPP_URL, INSTAGRAM_URL, LOGO_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo Visual */}
        <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-700">
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-400/20 rounded-full blur-xl group-hover:bg-indigo-400/30 transition-all duration-500"></div>
            <img 
              src={LOGO_URL} 
              alt="Logo Jokiinaja" 
              className="relative w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl animate-float"
              style={{ filter: 'drop-shadow(0 10px 15px rgba(99, 102, 241, 0.3))' }}
            />
          </div>
        </div>

        <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full mb-8 animate-bounce">
          <Sparkles size={16} className="text-indigo-600" />
          <span className="text-sm font-semibold text-indigo-700 tracking-wide uppercase">Partner Akademik Terpercaya</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          Tugas Menumpuk? <br />
          <span className="gradient-text">JOKIINAJA</span> Saja.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Bebaskan beban akademik Anda dengan bantuan ahli dari <span className="font-bold text-indigo-600">JOKIINAJA BY AQFIY</span>. Profesional, cepat, dan rahasia terjamin.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href={WHATSAPP_URL('Halo JOKIINAJA BY AQFIY, saya ingin konsultasi pengerjaan tugas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-indigo-200 group active:scale-95"
          >
            <span>Konsultasi WhatsApp</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center space-x-2 active:scale-95"
          >
            <Instagram size={20} className="text-pink-600" />
            <span>DM Instagram</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">500+</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Tugas Selesai</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">100%</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Privasi Aman</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">24/7</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Respons Cepat</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-900">Gratis</span>
            <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Revisi Ringan</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
