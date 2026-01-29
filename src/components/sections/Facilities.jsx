import React from "react";
import { motion } from "framer-motion";
import { Monitor, Beaker, Laptop, TrendingUp, Book, Coffee } from "lucide-react";

const facilityData = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    desc: "Digital boards & lecture capture",
    color: "#5fcf80",
  },
  {
    icon: Beaker,
    title: "Well-equipped Labs",
    desc: "Practical reinforcement",
    color: "#ff7a18",
  },
  {
    icon: Laptop,
    title: "Learning Management System",
    desc: "Recorded lectures, notes, tests",
    color: "#4f46e5",
  },
  {
    icon: TrendingUp,
    title: "Assessment Dashboard",
    desc: "Parent logins to monitor progress",
    color: "#06b6d4",
  },
  {
    icon: Book,
    title: "Library & Study Zones",
    desc: "Extended hours for self-study",
    color: "#a855f7",
  },
  {
    icon: Coffee,
    title: "Cafeteria & Wellness",
    desc: "Student well-being support",
    color: "#f97316",
  },
];

const Facilities = () => {
  return (
    <section
      id="facilities"
      className="bg-white py-20 overflow-hidden"
      role="region"
      aria-label="Our facilities and infrastructure"
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
            Infrastructure & Facilities
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            World-Class Learning Environment
          </p>
        </div>

        {/* Facilities Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {facilityData.map((facility, idx) => (
            <motion.div
              key={idx}
              className="text-center p-8 rounded-2xl shadow-lg card-hover"
              style={{
                background: "linear-gradient(135deg, #f9f9f9, #f5f5f5)",
                border: "1px solid rgba(95, 207, 128, 0.15)",
              }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full drop-shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${facility.color}30, ${facility.color}10)`,
                  boxShadow: `0 10px 30px ${facility.color}20`,
                }}
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <facility.icon
                    className="w-8 h-8"
                    style={{ color: facility.color }}
                  />
                </motion.div>
              </motion.div>

              <h3
                className="font-bold text-lg mb-2"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {facility.title}
              </h3>

              <p className="text-sm text-black/70 leading-relaxed">
                {facility.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
