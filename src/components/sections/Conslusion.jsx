import React from "react";
import { motion } from "framer-motion";

const Conslusion = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8"
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: "#37423b",
            }}
          >
            Conclusion
          </h2>

          {/* Description */}
          <p
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#444444" }}
          >
            PSG LEAP Academy will be more than a coaching centre — it will be a
            launch pad for future doctors and engineers, grounded in PSG’s
            tradition of Empowerlence, discipline, and innovation.
          </p>

          {/* Quote */}
          <motion.div
            className="my-12"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold drop-shadow-md tracking-wide"
              style={{
                color: "#5fcf80",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              “PSG LEAP Academy – Learn. Empower. Aspire. Progress.”
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conslusion;
