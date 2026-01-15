
import React from 'react';
import { Send, FileSearch, CreditCard, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <Send className="w-8 h-8" />,
    title: 'Konsultasi',
    desc: 'Hubungi kami via WhatsApp atau DM Instagram dan kirimkan instruksi tugas Anda secara detail.'
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: 'Estimasi & Deal',
    desc: 'Kami akan memberikan estimasi biaya dan waktu pengerjaan. Jika setuju, lakukan pembayaran.'
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Proses Pengerjaan',
    desc: 'Tim kami mulai mengerjakan tugas Anda dengan teliti sesuai instruksi.'
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: 'Penyerahan & Revisi',
    desc: 'Tugas diserahkan dalam bentuk file. Kami berikan garansi revisi jika diperlukan.'
  }
];

const HowToOrder: React.FC = () => {
  return (
    <section id="how-to" className="py-20 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-indigo-300 tracking-widest uppercase mb-2">Mudah & Cepat</h2>
          <p className="text-3xl md:text-4xl font-extrabold">Cara Melakukan Pemesanan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-indigo-700 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-indigo-800 rounded-full flex items-center justify-center mb-6 border-4 border-indigo-700 group-hover:bg-white group-hover:text-indigo-900 transition-all duration-300 shadow-xl">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-indigo-200 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
