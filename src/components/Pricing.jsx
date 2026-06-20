import { motion } from 'framer-motion';
import { Check, Shield, Zap, Clock } from 'lucide-react';
import { PRICING } from '../data/content';

const vp = { once: true, amount: 0 };

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    icon: '🌱',
    price: 2499,
    emi: 249,
    desc: 'Self-paced learning for independent learners',
    features: [
      '60 video lessons (Modules 1–6)',
      'AI Pronunciation Coach (limited)',
      'Community forum access',
      'Progress dashboard',
      'Mobile app (iOS & Android)',
    ],
    missing: ['Live group sessions', '1-on-1 coaching', 'Interview module', 'Certificate'],
  },
  {
    id: 'full',
    name: 'Full Course',
    icon: '🚀',
    desc: 'Complete 60-day transformation — our bestseller',
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite Coaching',
    icon: '👑',
    price: 9999,
    emi: 999,
    desc: 'Personal 1-on-1 coaching for maximum results',
    features: [
      'Everything in Full Course',
      '8 private 1-on-1 coaching sessions',
      'Personalized 60-day roadmap',
      'WhatsApp mentor access',
      'Mock placement interviews (3 sessions)',
      'LinkedIn profile optimization',
      'Resume English review',
      'Priority support (4hr response)',
    ],
  },
];

export default function Pricing() {
  const allPlans = plans.map(p =>
    p.id === 'full'
      ? { ...p, price: PRICING.offer, originalPrice: PRICING.regular, emi: PRICING.emi, features: PRICING.includes }
      : p
  );

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">
            Simple Pricing
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Invest ₹4,999. <span className="text-gradient">Change Your Career Forever.</span>
          </h2>
          <p className="text-gray-500 text-lg font-dm max-w-xl mx-auto mb-3">
            Less than the cost of 2 textbooks. More valuable than a semester of college English class.
          </p>
          <p className="text-sm text-indigo-600 font-semibold font-dm">
            💳 EMI available from ₹499/month · UPI · Cards · Net Banking
          </p>
        </div>

        {/* FOMO bar */}
        <motion.div
          className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">🔥</span>
            <div>
              <p className="font-sora font-bold text-red-700 text-sm">New batches start every Monday — Limited seats!</p>
              <p className="text-red-500 text-xs font-dm">Only 23 seats remaining in this week's batch · Registration closes Sunday midnight</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full font-dm flex-shrink-0">
            <Clock size={13} /> Closing Soon
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {allPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-indigo-500 shadow-colored scale-[1.02] hover:scale-[1.03]'
                  : 'border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-1'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.1, duration: 0.45 }}
            >
              {plan.popular && (
                <div className="gradient-brand text-white text-center text-xs font-bold py-2.5 font-dm uppercase tracking-widest">
                  🔥 Most Popular — Best Value
                </div>
              )}

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{plan.icon}</span>
                  <div>
                    <h3 className="font-sora font-black text-xl text-gray-900">{plan.name}</h3>
                    <p className="text-gray-400 text-xs font-dm">{plan.desc}</p>
                  </div>
                </div>

                <div className="mb-5">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="line-through text-gray-400 text-sm font-dm">₹{plan.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full font-dm">
                        37% OFF
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="font-sora font-black text-gray-400 text-lg">₹</span>
                    <span className={`font-sora font-black text-5xl ${plan.popular ? 'text-gradient' : 'text-gray-900'}`}>
                      {plan.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs font-dm mt-1">
                    or ₹{plan.emi}/month EMI · One-time payment · Lifetime access
                  </p>
                </div>

                <button
                  className={`w-full py-3.5 rounded-full font-sora font-bold text-sm mb-6 transition-all hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'gradient-brand text-white shadow-colored'
                      : 'border-2 border-gray-200 text-gray-700 hover:border-indigo-500 hover:text-indigo-600'
                  }`}
                >
                  {plan.popular ? 'Enroll Now — Best Value' : 'Get Started'}
                </button>

                <ul className="flex flex-col gap-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-dm text-gray-600">
                      <Check size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                  {plan.missing?.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-dm text-gray-300">
                      <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center text-xs">×</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee + Trust */}
        <motion.div
          className="mt-10 grid md:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
            <Shield size={28} className="text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-sora font-bold text-emerald-800 mb-1">7-Day Satisfaction Promise</h4>
              <p className="text-emerald-700 text-sm font-dm leading-relaxed">{PRICING.guarantee}. No lengthy forms. No questions asked. Just a full, instant refund.</p>
            </div>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 flex items-start gap-4">
            <Zap size={28} className="text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-sora font-bold text-indigo-800 mb-1">Instant Course Access</h4>
              <p className="text-indigo-700 text-sm font-dm leading-relaxed">You'll receive login credentials within 5 minutes of payment. Start Module 1 today — not tomorrow, not next week. Now.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
