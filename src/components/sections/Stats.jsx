import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedNumber = ({ value, shouldAnimate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let currentCount = 0;
    const increment = value / 120;
    let animationFrame;

    const animate = () => {
      currentCount += increment;
      if (currentCount < value) {
        setCount(Math.floor(currentCount));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, shouldAnimate]);

  return <span className="text-5xl font-bold text-[#5fcf80]">{count}</span>;
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => setIsVisible(true)}
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            { value: 250, label: "Target Students by Year 3" },
            { value: 4, label: "Expert Faculty Members" },
            { value: 4, label: "Comprehensive Programs" },
            { value: 100, label: "Top 100 State Ranks" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-10 bg-white/80 backdrop-blur-xl rounded-2xl 
                     border border-emerald-200/40 shadow-lg
                     hover:shadow-xl
                     transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="flex flex-col items-center justify-center">
                <motion.span
                  className="text-6xl md:text-7xl font-extrabold text-emerald-500 drop-shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <AnimatedNumber
                    value={stat.value}
                    shouldAnimate={isVisible}
                  />
                  {stat.value === 250 && <span className="text-3xl">+</span>}
                </motion.span>
                <div
                  className="text-sm md:text-base font-medium mt-3 text-gray-600 max-w-[10rem]"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
