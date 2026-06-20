import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Star, Users, Globe } from 'lucide-react';

const floatVariant = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: 'easeOut' } },
});

export default function Hero() {
  const scroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden py-16 md:py-20"
      style={{ background: 'linear-gradient(145deg, #0f0c29 0%, #1a1048 45%, #0d1b3e 100%)' }}>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full -top-40 -right-40 opacity-20"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bottom-0 -left-20 opacity-15"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <motion.div
              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 border border-white/20 bg-white/8 px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              🏆 India's #1 English Speaking Course for Students
            </motion.div>

            <motion.h1
              className="font-sora text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Speak English{' '}
              <span className="text-gradient">Confidently</span>{' '}
              in{' '}
              <span className="text-gradient-gold">60 Days</span>
              {' '}— Guaranteed.
            </motion.h1>

            <motion.p
              className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg font-dm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join <strong className="text-white">15,000+ students</strong> across India who mastered interview English, cracked placements, and built the confidence to succeed globally — with Fluently's science-backed method.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => scroll('#pricing')}
                className="group flex items-center justify-center gap-2.5 gradient-amber text-gray-900 font-sora font-bold text-base px-7 py-4 rounded-full transition-all hover:-translate-y-1 shadow-amber"
              >
                Start Learning Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scroll('#curriculum')}
                className="flex items-center justify-center gap-3 text-white/80 hover:text-white font-medium text-sm transition-all group"
              >
                <span className="w-10 h-10 rounded-full border border-white/30 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all flex-shrink-0">
                  <Play size={14} className="ml-0.5" fill="currentColor" />
                </span>
                Watch Free Demo Lesson
              </button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                <span className="text-white/70 ml-1 font-dm">4.8/5</span>
              </div>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5 text-white/60 font-dm">
                <Users size={14} /> <span>15,000+ Students</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5 text-white/60 font-dm">
                <Shield size={14} /> <span>7-Day Guarantee</span>
              </span>
              <span className="text-white/20 hidden sm:block">|</span>
              <span className="flex items-center gap-1.5 text-white/60 font-dm">
                <Globe size={14} /> <span>Batches Every Monday</span>
              </span>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=90"
                  alt="Students learning English"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 img-overlay" />
              </div>

              <motion.div
                className="absolute -top-5 -left-8 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl border border-white/50 min-w-[180px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-sora font-bold text-sm text-gray-900">92% Success Rate</p>
                  <p className="text-xs text-gray-500 font-dm">Students crack interviews</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -right-8 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl border border-white/50 min-w-[190px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-sora font-bold text-sm text-gray-900">Results in 30 Days</p>
                  <p className="text-xs text-gray-500 font-dm">Guaranteed progress</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-16 -left-10 bg-white rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl border border-white/50"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <span className="text-xs font-dm font-semibold text-gray-700"><strong>+320</strong> joined today</span>
              </motion.div>

              <div className="absolute -inset-4 rounded-3xl opacity-20 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', filter: 'blur(30px)', zIndex: -1 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
