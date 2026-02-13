import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/img/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-white via-emerald-50/20 to-white py-24 overflow-hidden"
      role="region"
      aria-label="About PSG LEAP Academy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE BLOCK */}
          <motion.div
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={aboutImg}
              alt="About PSG LEAP Academy"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          {/* CONTENT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              About Us
            </span>

            <h3
              className="text-4xl font-bold mb-6 text-gray-900 leading-snug"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Introduction
              <span className="block text-lg font-medium text-emerald-600 mt-2">
                PSG LEAP Academy
              </span>
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-[40rem] italic">
              PSG LEAP Academy is a premier initiative of PSG Institutions / PSG
              Public Schools, committed to preparing students for India’s most
              competitive examinations —{" "}
              <strong className="text-emerald-600">NEET</strong> and{" "}
              <strong className="text-emerald-600">JEE</strong>. It combines
              rigorous academics, personalized mentoring, and advanced learning
              technologies to help students realize their aspirations.
            </p>

            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              Why Choose PSG LEAP Academy?
            </h4>

            <ul className="space-y-4 mb-8">
              {[
                "Legacy of PSG Institutions – trusted in education for over a century",
                "Expert Faculty – experienced specialists in NEET & JEE coaching",
                "Blended Learning – classroom + digital + AI-based analytics",
                "Personal Mentoring – focused progress tracking and guidance",
                "Holistic Development – career, time & stress management support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Vision & Mission */}
            <div className="space-y-4 border-l-4 border-emerald-500/70 bg-emerald-50/30 rounded-r-xl shadow-sm p-6">
              <p className="text-gray-700">
                <strong className="text-emerald-700">Vision:</strong> To become
                the leading destination in South India for holistic,
                result-oriented coaching for NEET & JEE.
              </p>
              <p className="text-gray-700">
                <strong className="text-emerald-700">Mission:</strong> To foster
                conceptual clarity, consistent practice, and emotional
                resilience through an integrated academic ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
