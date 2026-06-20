import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

const vp = { once: true, amount: 0 };

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 font-dm">
            FAQ
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Questions We Get Asked <span className="text-gradient">Every Day</span>
          </h2>
          <p className="text-gray-500 font-dm">Everything you need to know before you start your journey.</p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className={`bg-gray-50 rounded-2xl border overflow-hidden transition-all duration-200 ${
                open === i ? 'border-indigo-300 shadow-sm' : 'border-gray-100 hover:border-gray-200'
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.05, duration: 0.35 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sora font-semibold text-gray-900 text-[0.95rem] leading-snug pr-2">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  open === i ? 'gradient-brand' : 'bg-gray-200'
                }`}>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${open === i ? 'rotate-180 text-white' : 'text-gray-500'}`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 text-sm font-dm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 p-6 bg-indigo-50 rounded-2xl border border-indigo-100"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <p className="text-gray-600 font-dm text-sm mb-3">
            Still have a question? We're here 9am–9pm, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold font-dm px-5 py-2.5 rounded-full hover:opacity-90 transition-all">
              💬 Chat on WhatsApp
            </a>
            <a href="mailto:hello@fluently.in"
              className="flex items-center justify-center gap-2 border border-indigo-300 text-indigo-600 text-sm font-semibold font-dm px-5 py-2.5 rounded-full hover:bg-indigo-50 transition-all">
              ✉️ Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
