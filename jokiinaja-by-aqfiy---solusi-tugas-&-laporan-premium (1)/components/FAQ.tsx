
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-indigo-600 tracking-widest uppercase mb-2">Tanya Jawab</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900">Sering Ditanyakan</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-indigo-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
