import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

export default function LeadPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try { if (localStorage.getItem('fl_popup') === '1') return; } catch {}

    // Show after 10 seconds
    const timer = setTimeout(() => setShow(true), 10000);

    // Or on exit intent
    const onMouseLeave = (e) => {
      if (e.clientY < 0 && !submitted) setShow(true);
    };
    document.addEventListener('mouseleave', onMouseLeave);

    return () => { clearTimeout(timer); document.removeEventListener('mouseleave', onMouseLeave); };
  }, []);

  const close = () => {
    setShow(false);
    try { localStorage.setItem('fl_popup', '1'); } catch {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 2000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <motion.div
            className="bg-white rounded-3xl overflow-hidden max-w-[700px] w-full shadow-2xl relative"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            <button
              onClick={close}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/10 hover:bg-red-500 hover:text-white text-gray-500 flex items-center justify-center transition-all text-sm"
            >
              <X size={14} />
            </button>

            <div className="grid md:grid-cols-[1fr_1.2fr]">
              {/* Image side */}
              <div className="relative hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=90"
                  alt="Free English resources"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '380px' }}
                />
                <div className="absolute inset-0 img-overlay" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/95 backdrop-blur rounded-xl p-4">
                    <p className="font-sora font-bold text-gray-900 text-sm">4 free resources worth ₹999</p>
                    <p className="text-gray-500 text-xs font-dm">Yours free — no payment needed</p>
                  </div>
                </div>
              </div>

              {/* Form side */}
              <div className="p-8 flex flex-col justify-center">
                {!submitted ? (
                  <>
                    <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 font-dm w-fit">
                      🎁 Free Gift Bundle
                    </span>
                    <h2 className="font-sora font-black text-2xl text-gray-900 mb-2 leading-tight">
                      Get Your Free<br />Speaking Toolkit
                    </h2>
                    <p className="text-gray-500 text-sm font-dm mb-6 leading-relaxed">
                      The <strong className="text-gray-700">5-Day Speaking Challenge + Interview Checklist + Vocabulary E-book</strong> — sent instantly to your inbox.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="Your First Name"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-dm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-dm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp Number (optional)"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-dm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-50 transition-all"
                      />
                      <button
                        type="submit"
                        className="w-full gradient-brand text-white font-sora font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-colored mt-1"
                      >
                        <Download size={16} /> Send Me the Free Resources
                      </button>
                    </form>
                    <p className="text-gray-300 text-xs font-dm text-center mt-3">
                      🔒 No spam. Unsubscribe anytime. 100% Free.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="font-sora font-black text-xl text-gray-900 mb-2">Resources Sent!</h3>
                    <p className="text-gray-500 text-sm font-dm">Check your inbox (and spam folder) in the next 2 minutes.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
