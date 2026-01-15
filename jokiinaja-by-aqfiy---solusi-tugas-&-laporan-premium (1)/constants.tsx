
import React from 'react';
import { FileText, Map, ListChecks, Presentation, CheckCircle, ShieldCheck, Zap, MessageSquare } from 'lucide-react';
import { Service, NavItem } from './types';

export const WHATSAPP_NUMBER = "+6282125283598";
export const WHATSAPP_URL = (message: string) => `https://wa.me/6282125283598?text=${encodeURIComponent(message)}`;
export const INSTAGRAM_URL = "https://www.instagram.com/jokiinaja_byaqfiy?igsh=MTI3Y2dnazU3OHhycg==";
export const WEBSITE_URL = "http://jokiinaja.byaqfiy.com";
export const LOGO_URL = "https://files.catbox.moe/kixh2j.png"; // Menggunakan URL placeholder yang representatif atau arahkan ke /logo.png

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const SERVICES: Service[] = [
  {
    id: 'laporan',
    title: 'Laporan',
    description: 'Pengerjaan berbagai jenis laporan akademis maupun profesional dengan format yang rapi dan bahasa formal standar akademik.',
    icon: <FileText className="w-8 h-8" />,
    priceStart: 'Rp 100k - 150k',
  },
  {
    id: 'laporan-lapangan',
    title: 'Laporan Lapangan',
    description: 'Dokumentasi hasil observasi lapangan/praktikum yang detail. +30k untuk jasa cetak (wilayah terdekat).',
    icon: <Map className="w-8 h-8" />,
    priceStart: 'Rp 150k - 200k',
  },
  {
    id: 'ringkasan',
    title: 'Ringkasan Materi',
    description: 'Rangkuman materi, buku, atau jurnal yang padat dan jelas untuk memudahkan pemahaman poin penting.',
    icon: <ListChecks className="w-8 h-8" />,
    priceStart: 'Rp 45k - 70k',
  },
  {
    id: 'ppt',
    title: 'PPT / Presentasi',
    description: 'Desain slide presentasi yang aesthetic, modern, dan persuasif untuk memukau audiens dan penguji.',
    icon: <Presentation className="w-8 h-8" />,
    priceStart: 'Rp 40k - 70k',
  },
];

export const TESTIMONIALS = [
  {
    name: "Siska Putri",
    role: "Mahasiswi Tingkat Akhir",
    content: "PPT-nya keren banget! Dosen pembimbing sampai puji desainnya yang rapi dan materinya to the point. Makasih JOKIINAJA!",
    avatar: "SP",
    avatarUrl: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Rizky Ramadhan",
    role: "Mahasiswa Teknik",
    content: "Laporan praktikum yang tadinya numpuk selesai dalam 2 hari. Datanya akurat dan formatnya sesuai pedoman kampus.",
    avatar: "RR",
    avatarUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Andini",
    role: "Pelajar SMA",
    content: "Ringkasan materinya ngebantu banget buat belajar UTBK. Bahasanya gampang dimengerti dan desainnya gak ngebosenin.",
    avatar: "A",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

export const FAQS = [
  {
    question: "Berapa biaya jasa pengerjaan tugas?",
    answer: "Harga bervariasi: Laporan (100-150k), Laporan Lapangan (150-200k), PPT (40-70k), dan Ringkasan (45-70k). Harga akhir ditentukan oleh materi dan halaman."
  },
  {
    question: "Apakah identitas saya aman?",
    answer: "Tentu saja. Privasi klien adalah prioritas utama kami. Semua data dan file tugas Anda tidak akan disebarluaskan."
  },
  {
    question: "Apakah ada biaya revisi?",
    answer: "Kami memberikan gratis revisi ringan jika hasil pengerjaan belum sesuai dengan instruksi awal yang diberikan."
  },
  {
    question: "Bagaimana cara order?",
    answer: "Cukup klik tombol WhatsApp atau DM Instagram kami, kirimkan instruksi tugas, dan kami akan memberikan estimasi waktu pengerjaan."
  }
];

export const FEATURES = [
  {
    title: 'Cepat & Tepat Waktu',
    description: 'Kami menghargai deadline Anda. Tugas selesai sesuai jadwal yang disepakati.',
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: 'Privasi Terjamin',
    description: 'Data diri dan kerahasiaan tugas Anda adalah prioritas utama kami.',
    icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: 'Kualitas Premium',
    description: 'Dikerjakan oleh tim yang kompeten untuk hasil yang memuaskan.',
    icon: <CheckCircle className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: 'Revisi Gratis',
    description: 'Kami menyediakan slot revisi jika hasil belum sesuai dengan instruksi awal.',
    icon: <MessageSquare className="w-6 h-6 text-indigo-500" />,
  },
];
