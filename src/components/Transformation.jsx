import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { PAIN_POINTS, GAINS } from '../data/content';

const vp = { once: true, amount: 0 };

export default function Transformation() {
  return (
    <section id="transformation" className="py-20 bg-gray-950 relative overflow-hidden" style={{ backgroundColor: '#030712' }}>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(79,70,229,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm border border-white/10">
            The Transformation
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-white mb-4">
            See the Transformation in{' '}
            <span className="text-gradient">Yourself</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto font-dm">
            60 days. One decision. A completely different version of you.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <motion.div
            className="rounded-2xl p-7 border border-red-500/20"
            style={{ background: 'rgba(239,68,68,0.05)' }}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <h3 className="font-sora font-bold text-lg text-red-400">Before Fluently</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              {PAIN_POINTS.map((p, i) => (
                <motion.div
                  key={p}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={11} className="text-red-400" />
                  </div>
                  <span className="text-white/50 text-sm font-dm leading-relaxed">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-3 py-4"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <div className="w-14 h-14 rounded-full gradient-brand flex items-center justify-center shadow-colored">
              <ArrowRight size={22} className="text-white" />
            </div>
            <span className="font-sora font-black text-white text-sm tracking-tight text-center">
              60<br />Days
            </span>
          </motion.div>

          <motion.div
            className="rounded-2xl p-7 border border-emerald-500/20"
            style={{ background: 'rgba(16,185,129,0.05)' }}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check size={16} className="text-emerald-400" />
              </div>
              <h3 className="font-sora font-bold text-lg text-emerald-400">After Fluently</h3>
            </div>
            <div className="flex flex-col gap-3.5">
              {GAINS.map((g, i) => (
                <motion.div
                  key={g}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-emerald-400" />
                  </div>
                  <span className="text-white/80 text-sm font-dm leading-relaxed font-medium">{g}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="gradient-amber font-sora font-bold text-gray-900 px-8 py-4 rounded-full text-base transition-all hover:-translate-y-1 shadow-amber"
          >
            Start My Transformation →
          </button>
          <p className="text-white/30 text-xs mt-3 font-dm">7-day satisfaction guarantee · No risk</p>
        </motion.div>
      </div>
    </section>
  );
}
