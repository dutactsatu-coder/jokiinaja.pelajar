
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import HowToOrder from './components/HowToOrder';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <HowToOrder />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
};

export default App;
