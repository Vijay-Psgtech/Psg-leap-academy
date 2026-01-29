import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, RefreshCw, Heart } from "lucide-react";

const TargetItems = [
  {
    icon: GraduationCap,
    title: "Classes 11 & 12 Students",
    desc: "Students aspiring for NEET/JEE examinations",
  },
  {
    icon: RefreshCw,
    title: "Drop-Year Students",
    desc: "Students seeking focused coaching",
  },
  {
    icon: Heart,
    title: "Parents",
    desc: "Seeking reliable and disciplined coaching environment",
  },
];

const Target = () => {
  return (
    <section
      id="target"
      className="bg-white py-16"
      role="region"
      aria-label="Target audience for our programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-sm uppercase tracking-widest mb-2 section-title-line text-gray-500"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Target Audience
          </h2>
          <p
            className="text-4xl font-bold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
              textTransform: "uppercase",
            }}
          >
            Who We Serve
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TargetItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-lg p-8 text-center card-hover"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,251,249,0.8))",
                border: "1px solid rgba(95, 207, 128, 0.3)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ y: -8 }}
            >
              <item.icon
                className="h-12 w-12 mx-auto mb-6 drop-shadow-lg"
                style={{ color: "#5fcf80" }}
              />
              <h4
                className="font-bold text-xl mb-3"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {item.title}
              </h4>
              <p style={{ color: "rgba(68, 68, 68, 0.7)" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Target;
