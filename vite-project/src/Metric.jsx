import { useEffect, useState } from "react";

function Metric({ value, label }) {
  const target = value === "∞" ? null : parseInt(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === null) return;

    let current = 0;
    const duration = 1500;
    const stepTime = 60;
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="space-y-1">
      <div className="text-4xl font-extrabold text-white">
        {target === null ? "∞" : `${count}+`}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

export default Metric;
