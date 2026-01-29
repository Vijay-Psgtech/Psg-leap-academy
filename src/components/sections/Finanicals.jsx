import React from "react";
import { motion } from "framer-motion";

const Finanicals = () => {
  return (
    <section
      id="financials"
      className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white overflow-hidden"
      role="region"
      aria-label="Financial performance and budgets"
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
            Financial Statement
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            Inflow & Outflow – First Year
          </p>
        </div>

        {/* Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Expenditure */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h4
              className="text-xl font-bold mb-6"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#37423b",
              }}
            >
              Expenditure
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead style={{ background: "rgba(95, 207, 128, 0.15)" }}>
                  <tr>
                    <th className="px-4 py-3 text-left">Category</th>
                    <th className="px-4 py-3 text-right">Amount (₹L)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3">
                      <p className="font-semibold">Faculty (4)</p>
                      <p className="text-xs text-black/60">
                        Math, Physics, Chemistry, Biology
                      </p>
                      <p className="text-xs text-black/50">
                        ₹24–30L per annum each
                      </p>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">
                      96 – 120
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3">
                      <p className="font-semibold">Office Staff (1)</p>
                      <p className="text-xs text-black/60">
                        Administrative support
                      </p>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">
                      4 – 4.5
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3">
                      <p className="font-semibold">Infrastructure</p>
                      <p className="text-xs text-black/60">
                        Website, AI tools, servers
                      </p>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">
                      10 – 20
                    </td>
                  </tr>

                  <tr style={{ background: "rgba(255, 193, 7, 0.15)" }}>
                    <td className="px-4 py-4 font-bold">
                      Total Financial Commitment
                    </td>
                    <td className="px-4 py-4 text-right font-bold text-lg">
                      ₹125 Lakhs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Income */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h4
              className="text-xl font-bold mb-6"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#37423b",
              }}
            >
              Income – First Year
            </h4>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead style={{ background: "rgba(95, 207, 128, 0.15)" }}>
                  <tr>
                    <th className="px-4 py-3 text-left">Program</th>
                    <th className="px-4 py-3 text-center">Students</th>
                    <th className="px-4 py-3 text-right">Total (₹L)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3">2-Year Integrated</td>
                    <td className="px-4 py-3 text-center">30</td>
                    <td className="px-4 py-3 text-right font-semibold">60.0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">1-Year Crash Course</td>
                    <td className="px-4 py-3 text-center">25</td>
                    <td className="px-4 py-3 text-right font-semibold">
                      18.75
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">Foundation Program</td>
                    <td className="px-4 py-3 text-center">30</td>
                    <td className="px-4 py-3 text-right font-semibold">15.0</td>
                  </tr>

                  <tr style={{ background: "rgba(95, 207, 128, 0.2)" }}>
                    <td className="px-4 py-4 font-bold">Total Revenue</td>
                    <td className="px-4 py-4 text-center font-bold">85</td>
                    <td className="px-4 py-4 text-right font-bold text-lg">
                      ₹93.75 Lakhs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Deficit Highlight */}
            <div
              className="rounded-xl shadow-lg p-5"
              style={{
                background: "rgba(244, 67, 54, 0.12)",
                borderLeft: "5px solid #f44336",
              }}
            >
              <h5 className="font-bold text-lg mb-2">
                First Year Deficit: ₹31.25 Lakhs
              </h5>
              <p className="text-sm text-black/70 leading-relaxed">
                From Year 2 onwards, a projected 10–20% annual growth in revenue
                and optimized expenditure will progressively bridge the deficit.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Finanicals;
