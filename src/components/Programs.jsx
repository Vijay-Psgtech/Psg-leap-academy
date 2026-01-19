import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SectionTitle from './SectionTitle';

const Programs = () => {
    const { isVisible, ref } = useScrollAnimation();
    const courses = [
    { img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=600", cat: "2-Year", price: "₹2.0-2.5L/yr", title: "NEET/JEE Program", dur: "11–12" },
    { img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600", cat: "Intensive", price: "₹75K-1L", title: "Crash Course", dur: "6–8 mo" },
    { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600", cat: "Foundation", price: "₹50K-75K", title: "Foundation 9-10", dur: "2 yrs" },
    { img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=600", cat: "Flexible", price: "Custom", title: "Test Series", dur: "Flexible" }
  ];
  return (
    <section id="programs" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Programs" title="Our Programs" />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((c, i) => (
            <div key={i} className={`bg-white border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative overflow-hidden group">
                <img src={c.img} alt={c.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="bg-emerald-500 text-white text-xs px-4 py-2 rounded-full">{c.cat}</span>
                  <span className="font-bold text-emerald-600">{c.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-emerald-500 transition-colors">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.dur}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs