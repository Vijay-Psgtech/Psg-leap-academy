import React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Droplet,
  Flower2,
  Calculator,
  Users,
  Heart,
  Award,
} from "lucide-react";

const subjectData = [
  {
    icon: Atom,
    title: "Physics",
    color: "#3b82f6",
  },
  {
    icon: Droplet,
    title: "Chemistry",
    color: "#22c55e",
  },
  {
    icon: Flower2,
    title: "Biology",
    color: "#ec4899",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    color: "#f97316",
  },
];

const staffData = [
  {
    icon: Users,
    title: "Mentors",
    desc: "Personal tutors assigned to small student groups",
    color: "#6366f1",
  },
  {
    icon: Heart,
    title: "Counsellors",
    desc: "Academic & emotional guidance",
    color: "#ef4444",
  },
  {
    icon: Award,
    title: "Admin & Support Staff",
    desc: "IT, facilities & operations",
    color: "#14b8a6",
  },
];

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="bg-white py-20 overflow-hidden"
      role="region"
      aria-label="Faculty and support staff"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-sm uppercase tracking-[0.3em] mb-3 text-gray-500"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Faculty & Staffing
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            Our Expert Team
          </p>
        </div>

        {/* Core Faculty */}
        <h4
          className="text-center text-2xl font-bold mb-10"
          style={{ fontFamily: "'Raleway', sans-serif", color: "#37423b" }}
        >
          Core Faculty (NEET / JEE Focus)
        </h4>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {subjectData.map((subject, idx) => (
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
                  background: `linear-gradient(135deg, ${subject.color}30, ${subject.color}10)`,
                  boxShadow: `0 10px 30px ${subject.color}20`,
                }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <subject.icon
                    className="w-8 h-8"
                    style={{ color: subject.color }}
                  />
                </motion.div>
              </motion.div>

              <h4
                className="font-bold text-lg mb-2"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {subject.title}
              </h4>

              <p className="text-sm text-black/70">Expert faculty member</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Staff */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {staffData.map((staff, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow-lg p-8 text-center card-hover"
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
              <motion.div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full drop-shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${staff.color}30, ${staff.color}10)`,
                  boxShadow: `0 10px 30px ${staff.color}20`,
                }}
                whileHover={{ scale: 1.15, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <staff.icon
                    className="w-8 h-8"
                    style={{ color: staff.color }}
                  />
                </motion.div>
              </motion.div>

              <h4
                className="font-bold text-lg mb-3"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {staff.title}
              </h4>

              <p className="text-sm text-black/70 leading-relaxed">
                {staff.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;
