
import React from 'react';
import { FEATURES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-base font-bold text-indigo-600 tracking-widest uppercase mb-2">Keunggulan</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Mengapa Harus Memilih JOKIINAJA BY AQFIY?
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              Kami memahami betapa berharganya waktu Anda. Itulah mengapa kami berkomitmen memberikan hasil terbaik dengan standar profesionalisme tinggi.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
              <img 
                src="https://picsum.photos/800/800?academic" 
                alt="Student working" 
                className="rounded-[2.5rem] shadow-2xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl shadow-xl max-w-xs border border-white/40">
                <p className="italic text-slate-700 text-sm">
                  "Sangat terbantu dengan laporan lapangannya, formatnya sangat rapi dan datanya akurat. Recommended!"
                </p>
                <p className="mt-3 font-bold text-indigo-600 text-sm">— Alumni Unsyiah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
