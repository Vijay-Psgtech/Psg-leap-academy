import React from "react";
import { CheckCircle } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = () => {
  const { isVisible, ref } = useScrollAnimation();
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920" alt="About" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500" />
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Introduction - PSG LEAP Academy</h3>
            <p className="text-gray-600 italic mb-6">PSG LEAP Academy is envisioned as a state-of-the-art coaching centre under PSG Institutions / PSG Public Schools, dedicated to preparing students for India's most competitive examinations — NEET (Medical) and JEE (Engineering). The Academy will integrate rigorous academic training, personalized mentoring, and advanced learning technologies to empower students to achieve their career aspirations in medicine and engineering.</p>
            <h4 className="text-xl font-bold mb-3">Why PSG LEAP Academy?</h4>
            <ul className="space-y-3 mb-6">
              {['Legacy of PSG Institutions – credibility and trust in education for a century', 'Expert Faculty – subject specialists with proven track record in NEET & JEE coaching', 'Blended Learning Model – classroom + digital resources + AI-based test analytics', ' Individual Mentoring – personal progress tracking, doubt-clearing, and counselling', 'Holistic Development – stress management, time management, and career guidance'].map((item, i) => (
                <li key={i} className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1" /><span>{item}</span></li>
              ))}
            </ul>
            <p className="mb-2"><strong>Vision:</strong> To become the leading destination in South India for holistic and result-oriented coaching for NEET & JEE.</p>
            <p><strong>Mission:</strong> To provide conceptual clarity, consistent practice, and emotional resilience to students through an integrated academic ecosystem.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
