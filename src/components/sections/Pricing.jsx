import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Foundation",
    price: "50,000 – 75,000",
    features: [
      "Classes 9 & 10",
      "Weekend Batches",
      "Fundamental Strengthening",
      "Early Career Preparation",
    ],
    featured: false,
  },
  {
    title: "2-Year Integrated",
    price: "2.0 – 2.5 Lakhs",
    features: [
      "Comprehensive Syllabus",
      "Regular Test Series",
      "Individual Mentoring",
      "AI-Based Analytics",
      "Study Materials",
    ],
    featured: true,
  },
  {
    title: "Crash Course",
    price: "75,000 – 1,00,000",
    features: [
      "Intensive Coaching",
      "Fast-Track Syllabus",
      "Daily Practice Papers",
      "Drop-Year Students",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white overflow-hidden"
      role="region"
      aria-label="Pricing and course packages"
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
            Pricing
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            Projected Fee Range
          </p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl shadow-xl p-10 text-center card-hover drop-shadow-lg
            ${plan.featured ? "border-4" : "border"}`}
              style={{
                background: plan.featured
                  ? "linear-gradient(135deg, #ffffff, #f0fdf4)"
                  : "linear-gradient(135deg, #ffffff, #f8fbf9)",
                borderColor: plan.featured
                  ? "#5fcf80"
                  : "rgba(95, 207, 128, 0.2)",
              }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10, scale: plan.featured ? 1.05 : 1.03 }}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5fcf80] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}

              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                {plan.title}
              </h3>

              <div className="mb-8">
                <span className="text-3xl font-semibold text-[#5fcf80]">
                  ₹{plan.price}
                </span>
                <span className="text-sm text-black/60"> / year</span>
              </div>

              <ul className="space-y-3 text-left">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start">
                    <span className="mr-3 mt-1 text-[#5fcf80] font-bold">
                      ✓
                    </span>
                    <span className="text-sm text-[#444]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="rounded-2xl shadow-lg p-8 card-hover"
            style={{
              background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
              border: "1px solid rgba(95, 207, 128, 0.2)",
            }}
          >
            <h4
              className="text-xl font-bold mb-4"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#37423b",
              }}
            >
              Revenue Streams
            </h4>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>• Course Fees (NEET/JEE long-term, crash, foundation)</li>
              <li>• Test Series subscriptions</li>
              <li>• Online-only programs</li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl shadow-lg p-8 card-hover"
            style={{
              background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
              border: "1px solid rgba(95, 207, 128, 0.2)",
            }}
          >
            <h4
              className="text-xl font-bold mb-4"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#37423b",
              }}
            >
              Initial Investment Areas
            </h4>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>• Infrastructure (classrooms, labs, LMS)</li>
              <li>• Faculty recruitment & training</li>
              <li>• Marketing & branding</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
