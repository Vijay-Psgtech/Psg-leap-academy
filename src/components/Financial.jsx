import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SectionTitle from './SectionTitle';
import { Check, TrendingUp, PiggyBank } from 'lucide-react';

const plans = [
  {
    name: "Foundation",
    price: "50K - 75K",
    features: ["Classes 9-10", "Weekends", "Fundamentals"],
    featured: false,
  },
  {
    name: "2-Year Integrated",
    price: "2.0L - 2.5L",
    features: ["Full Syllabus", "Test Series", "Mentoring", "AI Analytics"],
    featured: true,
  },
  {
    name: "Crash Course",
    price: "75K - 1L",
    features: ["Intensive", "Fast-Track", "Daily Practice"],
    featured: false,
  },
];

const investments = [
  'Infrastructure (classrooms, labs, LMS)',
  'Faculty recruitment & training',
  'Marketing & branding',
];

const Financial = () => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <section id="financial" className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <SectionTitle
          title="Financials & Revenue"
          subtitle="Revenue streams, fee ranges and initial investments"
        />

        {/* --- Pricing Plans --- */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                p.featured ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              {/* Header */}
              <div
                className={`p-6 text-center font-semibold ${
                  p.featured
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white'
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                {p.name}
              </div>

              {/* Price */}
              <div className="p-8 text-center border-b border-slate-200">
                <div className="text-4xl font-bold text-slate-800">
                  ₹{p.price}
                </div>
                <div className="text-sm text-slate-500">per year</div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center text-slate-700">
                      <Check
                        className={`w-5 h-5 mr-3 ${
                          p.featured ? 'text-emerald-500' : 'text-emerald-400'
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* --- Financial Breakdown --- */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Revenue Streams */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-semibold text-slate-800">
                Revenue Streams
              </h3>
            </div>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold">
                  ●
                </span>
                Course Fees (NEET/JEE long-term, crash, foundation)
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 text-xs font-bold">
                  ●
                </span>
                Test Series subscriptions
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 text-xs font-bold">
                  ●
                </span>
                Online-only programs
              </li>
            </ul>
          </div>

          {/* Investment Areas */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <PiggyBank className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-semibold text-slate-800">
                Initial Investment Areas
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              {investments.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financial;
