import { motion } from 'framer-motion';
import { Shield, Award, Globe, Briefcase } from 'lucide-react';

const vp = { once: true, amount: 0 };

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a1048 100%)', padding: '2px' }}>
              <div className="bg-white rounded-2xl p-8 relative">
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-indigo-500 rounded-tl-sm" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-indigo-500 rounded-tr-sm" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-indigo-500 rounded-bl-sm" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-indigo-500 rounded-br-sm" />

                <div className="text-center">
                  <div className="text-3xl mb-3">🗣️</div>
                  <div className="font-sora font-black text-xl text-gray-400 tracking-widest uppercase mb-1">Fluently</div>
                  <h3 className="font-sora font-black text-gray-900 text-lg mb-1">Certificate of Achievement</h3>
                  <p className="text-gray-400 text-xs font-dm mb-5">This certifies that</p>
                  <div className="font-sora font-black text-2xl text-gradient mb-1">Rahul Kumar Sharma</div>
                  <p className="text-gray-400 text-xs font-dm mb-5">has successfully completed</p>
                  <div className="bg-indigo-50 rounded-xl px-6 py-3 mb-5">
                    <p className="font-sora font-bold text-indigo-700 text-sm">English Speaking Mastery — 60 Day Program</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-center">
                      <div className="w-16 border-t border-gray-300 mb-1" />
                      <p className="text-xs text-gray-400 font-dm">Dr. Vikram Sharma</p>
                    </div>
                    <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center">
                      <Shield size={20} className="text-white" />
                    </div>
                    <div className="text-center">
                      <div className="w-16 border-t border-gray-300 mb-1" />
                      <p className="text-xs text-gray-400 font-dm">Certificate No.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-emerald-500 text-white rounded-xl px-4 py-2.5 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <p className="font-sora font-bold text-sm">✓ Shareable on LinkedIn</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 font-dm">
              Certificate of Achievement
            </span>
            <h2 className="font-sora text-3xl font-black text-gray-900 mb-4">
              Earn a Certificate That <span className="text-gradient">Opens Doors</span>
            </h2>
            <p className="text-gray-500 text-base font-dm leading-relaxed mb-8">
              Your Fluently Certificate of Achievement is verifiable, shareable, and recognized — giving your CV, LinkedIn profile, and college portfolio the edge you deserve.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Award size={20} />, title: 'Verifiable Online', desc: 'QR code verification for authenticity' },
                { icon: <Globe size={20} />, title: 'Globally Shareable', desc: 'LinkedIn, Naukri.com, and more' },
                { icon: <Briefcase size={20} />, title: '500+ Partners', desc: 'Recognized by employers and colleges' },
                { icon: <Shield size={20} />, title: 'Lifetime Valid', desc: 'Never expires — your achievement, forever' },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-indigo-600 flex-shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <p className="font-sora font-bold text-sm text-gray-900">{f.title}</p>
                    <p className="text-gray-500 text-xs font-dm mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-brand text-white font-sora font-bold px-7 py-3.5 rounded-full shadow-colored hover:-translate-y-0.5 transition-all"
            >
              Earn Your Certificate →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
