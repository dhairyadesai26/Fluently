import { motion } from 'framer-motion';

const reasons = [
  { icon: '💼', title: 'Crack Placements', desc: '80% of MNC interviews are conducted entirely in English. It is the single biggest barrier between students and their dream jobs.' },
  { icon: '🌍', title: 'Study Abroad', desc: "IELTS, TOEFL, and visa interviews demand confident spoken English. Your grades won't matter if you can't communicate." },
  { icon: '🚀', title: 'Get Internships', desc: 'Startups, tech companies, and global firms want English-first communicators. One email, one interview — opens a door.' },
  { icon: '🎤', title: 'Lead in Any Room', desc: 'The students who speak confidently become leaders — in class, in clubs, in interviews, and in boardrooms.' },
];

const vp = { once: true, amount: 0 };

export default function WhyEnglish() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">Why This Matters</span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-gray-900 mb-4">
            English Is Not Just a Language.<br />
            <span className="text-gradient">It's Your Career Passport.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-dm">
            In India's competitive job market, English fluency is the invisible filter that separates shortlisted from rejected.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{r.icon}</div>
              <h3 className="font-sora font-bold text-lg text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-dm">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' }}
        >
          <div className="p-8 md:p-10 grid md:grid-cols-3 gap-6 text-white text-center">
            <div>
              <div className="font-sora font-black text-5xl mb-2">78%</div>
              <p className="text-white/70 font-dm text-sm">of students say poor English lost them an interview they were qualified for</p>
            </div>
            <div className="md:border-x border-white/20">
              <div className="font-sora font-black text-5xl mb-2">3×</div>
              <p className="text-white/70 font-dm text-sm">higher starting salary for English-fluent graduates in India's corporate sector</p>
            </div>
            <div>
              <div className="font-sora font-black text-5xl mb-2">60</div>
              <p className="text-white/70 font-dm text-sm">days is all it takes with Fluently to transform your English speaking completely</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
