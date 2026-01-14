import React, { useState, useEffect } from "react";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">Learn. Excel. Achieve. Progress.</h2>
        <p className="text-xl md:text-2xl mb-2 animate-fadeInUp animation-delay-200">Premier Coaching for NEET & JEE Aspirants</p>
        <p className="text-lg mb-8 animate-fadeInUp animation-delay-400">Under PSG Institutions / PSG Public Schools</p>
        <a href="#programs" onClick={(e) => { e.preventDefault(); document.getElementById('programs').scrollIntoView({ behavior: 'smooth' }); }} className="inline-block bg-transparent border-2 border-white px-8 py-3 rounded-full hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500 transform hover:scale-110 animate-fadeInUp animation-delay-600">Explore Programs</a>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
        .animation-delay-600 { animation-delay: 0.6s; opacity: 0; }
      `}</style>
    </section>
  );
};

export default Banner;
