import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const stats = [
    { value: 250, label: "Target Students by Year 3" },
    { value: 4, label: "Expert Faculty" },
    { value: 4, label: "Programs" },
    { value: 100, label: "Top 100 State Ranks" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

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
     <section ref={ref} className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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