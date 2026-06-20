import { motion } from 'framer-motion';
import { SUCCESS_STORY } from '../data/content';
import { Quote } from 'lucide-react';

const vp = { once: true, amount: 0 };

export default function SuccessStory() {
  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">
            Success Story
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-gray-900">
            {SUCCESS_STORY.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={SUCCESS_STORY.img}
                alt={SUCCESS_STORY.name}
                className="w-full h-[420px] object-cover object-top"
              />
              <div className="absolute inset-0 img-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-5">
                  <p className="font-sora font-black text-gray-900 text-lg">{SUCCESS_STORY.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-emerald-600 font-semibold font-dm">✓ {SUCCESS_STORY.result}</span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg border border-indigo-100 p-4 text-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="font-sora font-black text-2xl text-indigo-600">60</div>
              <div className="text-xs text-gray-500 font-dm font-medium">Days</div>
            </motion.div>
          </motion.div>

          {/* Story side */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-500 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 font-dm">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" /> Featured Story
            </div>

            <h3 className="font-sora font-black text-2xl text-gray-900 mb-4">
              Meet {SUCCESS_STORY.name.split(' ')[0]}.
            </h3>

            <p className="text-gray-600 text-base leading-relaxed font-dm mb-4">
              {SUCCESS_STORY.para1}
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-dm mb-8">
              {SUCCESS_STORY.para2}
            </p>

            <div className="relative bg-indigo-50 rounded-2xl p-6 border-l-4 border-indigo-500 mb-8">
              <Quote size={24} className="text-indigo-300 mb-3" />
              <p className="text-indigo-800 font-dm text-base italic leading-relaxed font-medium">
                {SUCCESS_STORY.quote}
              </p>
              <p className="text-indigo-500 text-sm font-sora font-bold mt-3">— {SUCCESS_STORY.name}</p>
            </div>

            <button
              onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-brand text-white font-sora font-bold px-7 py-3.5 rounded-full shadow-colored hover:-translate-y-0.5 transition-all text-sm"
            >
              Begin Your Story Today →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
