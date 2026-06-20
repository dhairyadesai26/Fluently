import { motion } from 'framer-motion';
import { COMMUNITY_FEATURES, GAMIFICATION } from '../data/content';

const vp = { once: true, amount: 0 };

export default function Community() {
  return (
    <section id="community" className="py-20 bg-gray-950 relative overflow-hidden" style={{ backgroundColor: '#030712' }}>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.1) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm border border-white/10">
            Learning Community
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-white mb-4">
            You're Never Learning <span className="text-gradient">Alone</span>
          </h2>
          <p className="text-white/50 text-lg font-dm max-w-lg mx-auto">
            Learn alongside thousands of students improving together — every single day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {COMMUNITY_FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-2xl p-6 border border-white/6 hover:border-indigo-500/30 transition-all hover:-translate-y-1 group cursor-default"
              style={{ background: 'rgba(255,255,255,0.03)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
              <h3 className="font-sora font-bold text-white text-base mb-2">{f.title}</h3>
              <p className="text-white/45 text-sm font-dm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Gamification */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm border border-amber-500/20">
              Gamification
            </span>
            <h2 className="font-sora text-3xl font-black text-white mb-3">
              Learning That Feels Like <span className="text-gradient-gold">a Game</span>
            </h2>
            <p className="text-white/50 text-base font-dm max-w-lg mx-auto">
              Our gamification system makes daily practice addictive — not a chore. Build habits, earn rewards, stay motivated.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GAMIFICATION.map((g, i) => (
              <motion.div
                key={g.label}
                className="rounded-2xl p-5 border border-amber-500/10 flex items-start gap-4 hover:border-amber-500/25 transition-all hover:-translate-y-0.5 group"
                style={{ background: 'rgba(245,158,11,0.04)' }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div className="text-3xl group-hover:scale-110 transition-transform flex-shrink-0">{g.icon}</div>
                <div>
                  <h3 className="font-sora font-bold text-white text-sm mb-1.5">{g.label}</h3>
                  <p className="text-white/40 text-xs font-dm leading-relaxed">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live activity bar */}
          <motion.div
            className="mt-10 rounded-2xl p-6 border border-white/6"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80',
                    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=60&q=80',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-gray-950 object-cover" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-gray-950 gradient-brand flex items-center justify-center text-white text-xs font-bold">
                    +
                  </div>
                </div>
                <div>
                  <p className="font-sora font-bold text-white text-sm">
                    <span className="text-gradient-gold">1,240+ students</span> active right now
                  </p>
                  <p className="text-white/40 text-xs font-dm">Practicing in Speaking Circles, AI sessions, and live classes</p>
                </div>
              </div>
              <button
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-brand text-white font-sora font-bold px-6 py-3 rounded-full text-sm shadow-colored hover:-translate-y-0.5 transition-all flex-shrink-0"
              >
                Join the Community →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
