import React from "react";
import { Megaphone, School, Globe2, Newspaper, Award } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";

const marketingItems = [
  {
    title: "School Tie-ups",
    desc: "Feeder schools for talent pool and consistent student inflow.",
    icon: <School className="w-6 h-6 text-emerald-600" />,
    color: "from-emerald-50 to-white border-emerald-100",
  },
  {
    title: "Digital Campaigns",
    desc: "Targeted ads on Google, Instagram, and YouTube to boost awareness.",
    icon: <Globe2 className="w-6 h-6 text-cyan-600" />,
    color: "from-cyan-50 to-white border-cyan-100",
  },
  {
    title: "Print Media",
    desc: "Local newspaper features, education supplements, and flyers.",
    icon: <Newspaper className="w-6 h-6 text-indigo-600" />,
    color: "from-indigo-50 to-white border-indigo-100",
  },
  {
    title: "Scholarship Tests (PSG Talent Hunt)",
    desc: "Attract meritorious students through merit-based scholarships.",
    icon: <Award className="w-6 h-6 text-amber-600" />,
    color: "from-amber-50 to-white border-amber-100",
  },
];

const MarketingOutreach = () => {
  const { isVisible, ref } = useScrollAnimation();

  return (
    <section
      id="marketing"
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <SectionTitle
          title="Marketing & Outreach"
          subtitle="Strategies to build brand presence and attract students"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingItems.map((item, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${item.color} border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Optional bottom banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm">
            <Megaphone className="w-5 h-5 text-emerald-600" />
            <span className="text-slate-700 font-medium">
              Expanding reach through strategic partnerships & smart marketing.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingOutreach;
