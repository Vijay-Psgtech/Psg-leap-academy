import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import SectionTitle from './SectionTitle'
import { Laptop, Coffee, TrendingUp, Book } from 'lucide-react'

const Facilities = () => {
    const { isVisible, ref } = useScrollAnimation();

    const fac = [
        { icon: Laptop, title: "Smart Classrooms", color: "text-yellow-500", bg: "bg-yellow-50", desc: "Digital boards & lecture capture" },
        { icon: Coffee, title: "Well-equipped Labs", color: "text-blue-500", bg: "bg-blue-50", desc: "Practical reinforcement" },
        { icon: Laptop, title: "LMS", color: "text-pink-600", bg: "bg-pink-50", desc: "Recorded lectures, notes, tests" },
        { icon: TrendingUp, title: "Assessment Dashboard", color: "text-purple-500", bg: "bg-purple-50", desc: "Parent logins to monitor progress" },
        { icon: Book, title: "Library & Study Zones", color: "text-sky-500", bg: "bg-sky-50", desc: "Extended hours for self-study" },
        { icon: Coffee, title: "Cafeteria & Wellness", color: "text-orange-500", bg: "bg-orange-50", desc: "Student well-being support" }
    ];
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Infrastructure & Facilities" title="World-Class Learning Environment" />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fac.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className={`bg-white border-2 border-gray-200 p-6 rounded-xl text-center hover:border-emerald-500 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`${f.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon className={`w-8 h-8 ${f.color}`} />
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-emerald-500 transition-colors">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Facilities