import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Award } from "lucide-react";

const successData = [
  {
    icon: Trophy,
    title: "Top 100 Ranks",
    desc: "Within the first three years, Aspire Top 100 state-level ranks in NEET & JEE examinations.",
    accent: "#ffeb3b",
    bg: "rgba(255, 235, 59, 0.15)",
  },
  {
    icon: Users,
    title: "250+ Students",
    desc: "Scale admissions to 250+ students annually by Year 3 with consistent academic outcomes.",
    accent: "#4caf50",
    bg: "rgba(76, 175, 80, 0.15)",
  },
  {
    icon: Award,
    title: "Leading Centre",
    desc: "Establish PSG LEAP as one of the most trusted and high-performing coaching centres in Tamil Nadu.",
    accent: "#5fcf80",
    bg: "rgba(95, 207, 128, 0.15)",
  },
];

const Success = () => {
  return (
    <section
      id="success"
      className="bg-white py-20 overflow-hidden"
      role="region"
      aria-label="Success metrics and three-year goals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-sm uppercase tracking-[0.3em] mb-3 section-title-line text-gray-500"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Success Metrics
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            Our Three-Year Goals
          </p>
        </div>

        {/* Goals */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {successData.map((goal, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-lg p-8 text-center card-hover"
              style={{
                background: goal.bg,
                border: `2px solid ${goal.accent}`,
                boxShadow: `0 15px 40px ${goal.accent}20`,
              }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="mx-auto mb-6 flex items-center justify-center rounded-full"
                style={{
                  width: 80,
                  height: 80,
                  background: `linear-gradient(135deg, white, ${goal.accent}10)`,
                  boxShadow: `0px 10px 30px ${goal.accent}25`,
                  border: `2px solid ${goal.accent}30`,
                }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <goal.icon
                  className="h-10 w-10"
                  style={{ color: goal.accent }}
                />
              </motion.div>

              <h3
                className="font-bold text-xl mb-3"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {goal.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {goal.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Success;
