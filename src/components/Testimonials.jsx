import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

const vp = { once: true, amount: 0 };

const variants = {
  enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.3 } }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setCurrent(c => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (idx) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-20 bg-gray-950 relative overflow-hidden" style={{ backgroundColor: '#030712' }}>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.15) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm border border-white/10">
            Student Testimonials
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-white mb-4">
            15,000+ Students Can't Be Wrong
          </h2>
          <p className="text-white/50 text-lg font-dm">Real students. Real results. Real transformations.</p>
        </div>

        {/* Main Slider */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={current}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 md:p-10"
              >
                <div className="text-indigo-400/60 text-5xl leading-none mb-4 font-sora">"</div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400" fill="#f59e0b" />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed font-dm italic mb-8">{t.text}</p>

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-400/30"
                  />
                  <div>
                    <p className="font-sora font-bold text-white text-base">{t.name}</p>
                    <p className="text-white/45 text-sm font-dm">{t.role}</p>
                  </div>
                </div>

                <div className="inline-block bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-sm font-semibold font-dm px-4 py-2 rounded-full">
                  {t.result}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => { setDir(-1); setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); }}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white/60 flex items-center justify-center hover:bg-white/12 hover:text-white transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-indigo-500' : 'w-2 bg-white/20 hover:bg-white/35'}`}
                />
              ))}
            </div>
            <button
              onClick={() => { setDir(1); setCurrent(c => (c + 1) % TESTIMONIALS.length); }}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white/60 flex items-center justify-center hover:bg-white/12 hover:text-white transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { text: '"From rejected 3 times to placed at TCS in 60 days."', name: 'Rohan M., Nagpur' },
            { text: '"I started leading GDs instead of sitting silently."', name: 'Anjali S., Hyderabad' },
            { text: '"My IELTS speaking score went from 5.5 to 7.0!"', name: 'Vishal P., Pune' },
            { text: '"Best ₹4,999 I ever spent. Period."', name: 'Divya K., Chennai' },
          ].map((m, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-5 border border-white/6"
              style={{ background: 'rgba(255,255,255,0.03)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-amber-400" fill="#f59e0b" />)}
              </div>
              <p className="text-white/65 text-sm font-dm italic leading-relaxed mb-3">{m.text}</p>
              <p className="text-white/35 text-xs font-dm">— {m.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
