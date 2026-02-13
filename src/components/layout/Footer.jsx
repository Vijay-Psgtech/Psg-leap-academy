import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Footer = ({ scrollToSection}) => {
  return (
    <footer className="py-14 text-white" style={{ background: "#060606" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-5">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap
                  className="h-9 w-9"
                  style={{ color: "#5fcf80" }}
                />
              </motion.div>

              <h3
                className="text-2xl font-bold tracking-wide"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                PSG LEAP Academy
              </h3>
            </div>

            <p
              className="mb-4 text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              A Unit of PSG Institutions, Coimbatore, Tamil Nadu
            </p>

            <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <strong>Email:</strong>  admissions@psgps.edu.in
            </p>

            <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.7)" }}>
              <strong>Ph:</strong> 0422-4344522
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-5"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {["Home", "About", "Programs", "Pricing", "Financials"].map(
                (item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="transition-all duration-300 hover:text-white hover:translate-x-1"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {item}
                    </button>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-5"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Programs
            </h4>

            <ul
              className="space-y-3 text-sm"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {[
                "NEET Coaching",
                "JEE Coaching",
                "Foundation Program",
                "Crash Course",
                "Test Series",
              ].map((program, idx) => (
                <motion.li
                  key={program}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="hover:text-white transition-colors duration-300"
                >
                  {program}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            © {new Date().getFullYear()} PSG LEAP Academy. All Rights Reserved.
          </p>
              
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                Developed by{" "}Central It Services, PSG Instituitions
              </p>

          <motion.p
            className="text-xs mt-2 tracking-wider"
            style={{ color: "rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Learn. Empower. Aspire. Progress.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
