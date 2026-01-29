import React from "react";
import { motion } from "framer-motion";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-black/40 to-transparent"
      role="region"
      aria-label="Home section with call to action"
    >
      {/* Background Image */}
      <motion.img
        src="src/assets/img/hero-bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white-500/75 via-white-700/70 to-slate-900/85"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="rounded-3xl p-6 sm:p-8 md:p-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 60,
          }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-semibold tracking-wide"
            style={{ fontFamily: "'Raleway', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white drop-shadow-2xl">
              Learn. Empower. Aspire.
            </span>

            <motion.span
              className="block mt-4 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #10b981, #34d399, #a7f3d0)",
                letterSpacing: "3px",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Progress.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl mb-10 text-white/90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            A Premier Coaching Centre for <br />
            <span className="font-semibold text-emerald-200">
              NEET & JEE Aspirants
            </span>
          </motion.p>

          {/* CTA */}
          <motion.button
            onClick={() => scrollToSection("programs")}
            className="px-10 py-4 rounded-full font-semibold text-lg bg-white text-emerald-600 relative overflow-hidden group icon-button"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 20px 50px rgba(16,185,129,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="Explore coaching programs offered"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 -z-10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span className="group-hover:text-white transition-colors duration-300">
              Explore Programs
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
