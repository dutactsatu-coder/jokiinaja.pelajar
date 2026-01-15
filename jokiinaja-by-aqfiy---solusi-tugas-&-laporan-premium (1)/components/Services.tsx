
import React from 'react';
import { SERVICES, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';
import { Instagram, MessageSquareText } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-indigo-600 tracking-widest uppercase mb-2">Layanan & Harga</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900">Solusi Tuntas Segala Tugas</p>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100">
                  {service.priceStart}
                </span>
              </div>

              <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-col space-y-3 mt-auto pt-4">
                <a 
                  href={WHATSAPP_URL(`Halo JOKIINAJA BY AQFIY, saya ingin order layanan ${service.title} (${service.priceStart}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-green-50 text-green-700 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition-all border border-green-100"
                >
                  <MessageSquareText size={16} />
                  <span>Order via WA</span>
                </a>
                <a 
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-pink-50 text-pink-700 py-2.5 rounded-xl text-sm font-bold hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all border border-pink-100"
                >
                  <Instagram size={16} />
                  <span>Order via DM</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-indigo-50 p-6 rounded-2xl border border-indigo-100 max-w-2xl mx-auto">
          <p className="text-indigo-800 text-sm font-medium">
            *Harga bersifat estimasi, dipengaruhi oleh tingkat kesulitan materi dan jumlah halaman. Konsultasikan tugas Anda sekarang untuk penawaran terbaik!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
