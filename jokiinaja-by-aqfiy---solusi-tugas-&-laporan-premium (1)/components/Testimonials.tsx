
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-indigo-600 tracking-widest uppercase mb-2">Apa Kata Mereka</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900">Ulasan Klien Kami</p>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Quote className="absolute top-6 right-8 text-indigo-50/50 w-16 h-16 -z-0" />
              <p className="text-slate-600 mb-8 italic relative z-10 leading-relaxed">
                "{item.content}"
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-100 mr-4 flex-shrink-0">
                  <img 
                    src={(item as any).avatarUrl} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${item.name}&background=6366f1&color=fff`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-indigo-600 font-semibold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
