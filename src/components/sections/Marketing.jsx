import React from "react";
import { motion } from "framer-motion";
import { Building, Globe, Newspaper, Trophy } from "lucide-react";

const outreachData = [
  {
    icon: Building,
    title: "School Tie-ups",
    desc: "Feeder schools for strong talent pipeline",
    color: "#22c55e",
  },
  {
    icon: Globe,
    title: "Digital Campaigns",
    desc: "Targeted ads via Google, Instagram & YouTube",
    color: "#3b82f6",
  },
  {
    icon: Newspaper,
    title: "Print Media",
    desc: "Local & regional newspaper features",
    color: "#a855f7",
  },
  {
    icon: Trophy,
    title: "Scholarship Tests",
    desc: "Talent hunts to attract meritorious students",
    color: "#f59e0b",
  },
];

const Marketing = () => {
  return (
    <section
      id="outreach"
      className="bg-white py-20 overflow-hidden"
      role="region"
      aria-label="Marketing and outreach initiatives"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-sm uppercase tracking-[0.3em] mb-3 text-gray-500 section-title-line"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Marketing & Outreach
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            How We Connect With Students
          </p>
        </div>

        {/* Outreach Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {outreachData.map((marketing, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-lg p-8 text-center card-hover"
              style={{
                background: "linear-gradient(135deg, #f9f9f9, #f5f5f5)",
                border: "1px solid rgba(95, 207, 128, 0.15)",
              }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Icon Ring */}
              <motion.div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full drop-shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${marketing.color}30, ${marketing.color}10)`,
                  boxShadow: `0 10px 30px ${marketing.color}20`,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <marketing.icon
                    className="w-8 h-8"
                    style={{ color: marketing.color }}
                  />
                </motion.div>
              </motion.div>

              <h5
                className="font-bold text-lg mb-3"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {marketing.title}
              </h5>

              <p className="text-sm text-black/70 leading-relaxed">
                {marketing.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marketing;
