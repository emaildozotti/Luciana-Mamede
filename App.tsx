import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import VideoSection from './components/VideoSection';
import Method from './components/Method';
import About from './components/About';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    if (window.AOS) {
      window.AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <VideoSection />
        <Method />
        <About />
        <Steps />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;