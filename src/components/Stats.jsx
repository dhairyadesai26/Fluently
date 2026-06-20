import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { STATS } from '../data/content';

function useCounter(end, duration, decimals, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = Date.now();
    const ms = duration * 1000;
    const tick = () => {
      const progress = Math.min((Date.now() - startTime) / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active]);
  return val;
}

function StatCard({ s, inView, delay }) {
  const val = useCounter(s.value, 2, s.isDecimal ? 1 : 0, inView);
  const display = s.isDecimal ? val.toFixed(1) : Math.round(val).toLocaleString('en-IN');

  return (
    <motion.div
      className="text-center text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-3xl mb-2">{s.icon}</div>
      <div className="font-sora font-black text-4xl md:text-5xl leading-none mb-1">
        {display}{s.suffix}
      </div>
      <p className="text-white/70 text-sm font-dm font-medium">{s.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <section ref={ref} className="gradient-brand py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} s={s} inView={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
