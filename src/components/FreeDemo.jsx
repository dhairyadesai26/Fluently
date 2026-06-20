import { motion } from 'framer-motion';
import { Play, Download } from 'lucide-react';
import { LEAD_MAGNETS } from '../data/content';

const vp = { once: true, amount: 0 };

export default function FreeDemo() {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">
              Free Preview
            </span>
            <h2 className="font-sora text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Try Before You Buy.{' '}
              <span className="text-gradient">Watch a Free Lesson.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-dm mb-6">
              We're so confident you'll love Fluently that we're giving you a complete free demo lesson — no email, no signup needed. See exactly how we teach.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {['Interview English Module preview', 'AI Pronunciation Coach demonstration', 'Live speaking session walkthrough', 'Complete 60-day roadmap'].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-600 text-sm font-dm">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-3 gradient-brand text-white font-sora font-bold px-7 py-3.5 rounded-full text-sm shadow-colored hover:-translate-y-0.5 transition-all">
              <Play size={16} fill="white" /> Watch Free Demo Now
            </button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=90"
                alt="Free demo lesson preview"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center group-hover:bg-gray-900/40 transition-all">
                <motion.div
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={28} className="text-indigo-600 ml-1" fill="#4f46e5" />
                </motion.div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="text-xl">🎤</span>
                  <div>
                    <p className="font-sora font-bold text-sm text-gray-900">Interview English — Module 7</p>
                    <p className="text-xs text-gray-500 font-dm">12 min preview · Free for everyone</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">
              Free Resources
            </span>
            <h2 className="font-sora text-3xl font-black text-gray-900 mb-2">
              Free Gifts, Just for Visiting
            </h2>
            <p className="text-gray-500 font-dm">Download all 4 resources — completely free, no credit card needed.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEAD_MAGNETS.map((lm, i) => (
              <motion.div
                key={lm.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-indigo-200 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{lm.icon}</div>
                <h3 className="font-sora font-bold text-gray-900 text-sm mb-1">{lm.title}</h3>
                <p className="text-gray-500 text-xs font-dm mb-4 leading-relaxed">{lm.desc}</p>
                <button className="w-full flex items-center justify-center gap-2 gradient-brand text-white text-xs font-semibold py-2.5 rounded-full font-dm">
                  <Download size={13} /> {lm.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
