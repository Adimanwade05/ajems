import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Counters.css";

const stats = [
  { target: 10, suffix: "M+", label: "Active users", decimals: 0 },
  { target: 120, suffix: "+", label: "Countries served", decimals: 0 },
  { target: 99, suffix: "%", label: "Customer growth", decimals: 0 },
  { target: 24, suffix: "/7", label: "Support coverage", decimals: 0 },
];

function CountUp({ target, suffix, decimals, start }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const duration = 1600;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return (
    <span>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Counters() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="counters section" ref={ref}>
      <div className="container">
        <div className="counters__grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="counters__card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="counters__num">
                <CountUp {...s} start={inView} />
              </span>
              <span className="counters__label">{s.label}</span>
              <div className="counters__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
