import { motion } from 'framer-motion';
import { Star, Users, Clock } from 'lucide-react';
import { INSTRUCTORS } from '../data/content';

const vp = { once: true, amount: 0 };

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">
            Expert Coaches
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Learn from India's Best{' '}
            <span className="text-gradient">English Communication Experts</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-dm">
            Our coaches don't just teach English — they understand exactly what Indian students need to crack interviews and placement rounds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {INSTRUCTORS.map((inst, i) => (
            <motion.div
              key={inst.name}
              className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                inst.featured ? 'border-2 border-indigo-500 shadow-colored' : 'border border-gray-100 hover:border-indigo-200 hover:shadow-md'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {inst.featured && (
                <div className="gradient-brand text-white text-xs font-bold text-center py-2 font-dm uppercase tracking-widest">
                  ⭐ Head of Curriculum & Co-Founder
                </div>
              )}

              <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1.5 rounded-full">
                    <Star size={11} fill="currentColor" className="text-amber-400" />
                    {inst.rating}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-sora font-black text-xl text-gray-900 mb-1">{inst.name}</h3>
                <p className="text-indigo-600 text-xs font-bold font-dm uppercase tracking-wide mb-1">{inst.role}</p>
                <p className="text-gray-400 text-xs font-dm mb-3">{inst.credential}</p>
                <p className="text-gray-600 text-sm font-dm leading-relaxed mb-4">{inst.bio}</p>

                <div className="grid grid-cols-3 gap-2 pb-4 border-b border-gray-50 mb-4">
                  <div className="text-center">
                    <div className="font-sora font-black text-indigo-600 text-sm">{inst.students}</div>
                    <div className="flex items-center justify-center gap-1 text-gray-400 text-[10px] font-dm mt-0.5">
                      <Users size={10} /> Students
                    </div>
                  </div>
                  <div className="text-center border-x border-gray-50">
                    <div className="font-sora font-black text-indigo-600 text-sm">{inst.hours}</div>
                    <div className="flex items-center justify-center gap-1 text-gray-400 text-[10px] font-dm mt-0.5">
                      <Clock size={10} /> Hours
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-sora font-black text-emerald-600 text-sm">★ {inst.rating}</div>
                    <div className="text-gray-400 text-[10px] font-dm mt-0.5">Rating</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {inst.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-dm font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
