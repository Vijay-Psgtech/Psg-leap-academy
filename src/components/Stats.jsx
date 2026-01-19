import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Stats = () => {
    const { isVisible, ref } = useScrollAnimation();
    const stats = [
    { value: 250, label: "Target Students by Year 3" },
    { value: 4, label: "Expert Faculty" },
    { value: 4, label: "Programs" },
    { value: 100, label: "Top 100 State Ranks" }
  ];

   const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!isVisible) return;
      let start = 0;
      const duration = 2000, increment = target / (duration / 16);
      const timer = setInterval(() => { start += increment; if (start >= target) { setCount(target); clearInterval(timer); } else setCount(Math.floor(start)); }, 16);
      return () => clearInterval(timer);
    }, [isVisible, target]);
    return <span className="text-5xl font-bold text-emerald-500">{count}</span>;
  };

  return (
     <section ref={ref} className="py-12 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className={`text-center bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 delay-${i * 100} hover:scale-105 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Counter target={s.value} />
              <p className="mt-2 text-gray-600 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats