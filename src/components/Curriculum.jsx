import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CURRICULUM } from '../data/content';

const vp = { once: true, amount: 0 };

export default function Curriculum() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">
            Course Curriculum
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-gray-900 mb-4">
            10 Modules. 120+ Lessons. <span className="text-gradient">One Fluent You.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-dm">
            A complete, structured journey from nervous beginner to confident communicator — designed specifically for Indian students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {CURRICULUM.map((mod, i) => (
            <motion.div
              key={mod.num}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-indigo-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="p-5 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                  {mod.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="module-num font-sora font-black text-xs tracking-widest">MODULE {mod.num}</span>
                      <h3 className="font-sora font-bold text-gray-900 text-base mt-0.5">{mod.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-indigo-500 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full font-dm">
                        {mod.duration}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-0">
                  <div className="border-t border-gray-50 pt-4">
                    <p className="text-gray-500 text-sm font-dm leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-2xl gradient-brand p-6 text-white text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="font-sora font-black text-3xl">120+</div>
              <div className="text-white/70 text-xs font-dm">Video Lessons</div>
            </div>
            <div className="border-x border-white/20">
              <div className="font-sora font-black text-3xl">60</div>
              <div className="text-white/70 text-xs font-dm">Day Program</div>
            </div>
            <div>
              <div className="font-sora font-black text-3xl">∞</div>
              <div className="text-white/70 text-xs font-dm">AI Practice</div>
            </div>
          </div>
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="gradient-amber text-gray-900 font-sora font-bold px-6 py-3 rounded-full text-sm transition-all hover:-translate-y-0.5 shadow-amber"
          >
            Enroll & Get All 10 Modules →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
