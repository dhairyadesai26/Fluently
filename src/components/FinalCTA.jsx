import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function useCountdown(targetDate) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const update = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

export default function FinalCTA() {
  const nextSunday = (() => {
    const d = new Date();
    d.setDate(d.getDate() + (7 - d.getDay()) % 7 || 7);
    d.setHours(23, 59, 59, 0);
    return d;
  })();

  const { d, h, m, s } = useCountdown(nextSunday);
  const pad = n => String(n).padStart(2, '0');

  return (
    <section id="final-cta" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #0f0c29 0%, #1a1048 45%, #0d1b3e 100%)' }}>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(79,70,229,0.35) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-3xl mx-auto px-5 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-dm border border-amber-500/20">
            ⚡ Final Call — Limited Seats
          </span>

          <h2 className="font-sora text-4xl md:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
            Your English.<br />
            Your Confidence.<br />
            <span className="text-gradient">Your Future Starts Now.</span>
          </h2>

          <p className="text-white/60 text-lg font-dm mb-8">
            This batch's enrollment closes in:
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            {[
              { val: pad(d), label: 'Days' },
              { val: pad(h), label: 'Hours' },
              { val: pad(m), label: 'Minutes' },
              { val: pad(s), label: 'Seconds' },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div
                    className="font-sora font-black text-4xl md:text-5xl text-white rounded-2xl px-4 py-3 min-w-[80px]"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    {unit.val}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-2 font-dm">{unit.label}</div>
                </div>
                {i < 3 && <span className="font-sora font-black text-3xl text-white/30 mb-5">:</span>}
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/25 text-red-400 text-sm font-semibold font-dm px-5 py-2.5 rounded-full mb-8">
            🔥 Only <strong className="text-red-300">23 seats remaining</strong> in this batch
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group gradient-amber text-gray-900 font-sora font-black text-lg px-10 py-4 rounded-full shadow-amber hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              Enroll Now — ₹4,999 Only
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-white/35 text-sm font-dm">
            7-day satisfaction promise · UPI/Cards/EMI · Instant access · No hidden fees
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex -space-x-2.5">
              {[
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=60&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&q=80',
              ].map((src, i) => (
                <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-gray-900 object-cover" />
              ))}
            </div>
            <p className="text-white/50 text-sm font-dm">
              <strong className="text-white/80">420+</strong> students enrolled this week
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
