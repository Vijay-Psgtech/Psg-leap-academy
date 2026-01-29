import React from "react";
import { motion } from "framer-motion";
import { Cpu, HelpCircle, Smartphone } from "lucide-react";

const techData = [
  {
    icon: Cpu,
    title: "AI-Driven Test Analysis",
    desc: "Adaptive AI-driven performance mapping & insights",
    color: "#22c55e",
  },
  {
    icon: HelpCircle,
    title: "Question Banks",
    desc: "NTA-aligned online question banks & practice sets",
    color: "#6366f1",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    desc: "Attendance, assignments & progress reports in one app",
    color: "#f97316",
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white overflow-hidden"
      role="region"
      aria-label="Technology and digital tools"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-sm uppercase tracking-[0.3em] mb-3 text-gray-500"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Technology Integration
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            Advanced Learning Technologies
          </p>
        </div>

        {/* Technology Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {techData.map((tech, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-lg p-10 text-center card-hover"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
                border: "1px solid rgba(95, 207, 128, 0.2)",
              }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full drop-shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}10)`,
                  boxShadow: `0 10px 30px ${tech.color}20`,
                }}
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.6 }}
                >
                  <tech.icon
                    className="w-8 h-8"
                    style={{ color: tech.color }}
                  />
                </motion.div>
              </motion.div>

              {/* Title */}
              <h4
                className="font-bold text-lg mb-3"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {tech.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-black/70 leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
