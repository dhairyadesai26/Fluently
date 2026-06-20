import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, X } from 'lucide-react';
import { SOCIAL_NOTIFS } from '../data/content';

// WhatsApp FAB
function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white text-2xl group"
      style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.5)' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 300 }}
    >
      <span>💬</span>
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-dm font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us!
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </span>
    </motion.a>
  );
}

// Back to Top
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-28 right-7 z-50 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Social Proof Notification
function SocialNotif() {
  const [visible, setVisible] = useState(false);
  const [notif, setNotif] = useState(SOCIAL_NOTIFS[0]);
  const idxRef = useRef(0);

  useEffect(() => {
    const show = () => {
      const i = idxRef.current;
      idxRef.current = i + 1;
      setNotif(SOCIAL_NOTIFS[i % SOCIAL_NOTIFS.length]);
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    };
    const t1 = setTimeout(show, 12000);
    const interval = setInterval(show, 12000);
    return () => { clearTimeout(t1); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-28 left-5 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 p-3.5 flex items-center gap-3 max-w-[280px]"
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <img
            src={notif.avatar}
            alt={notif.name}
            className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="font-sora font-bold text-gray-900 text-xs truncate">{notif.name}</p>
            <p className="text-gray-500 text-xs font-dm">{notif.msg}</p>
            <p className="text-gray-300 text-[11px] font-dm mt-0.5">{Math.floor(Math.random() * 8) + 1} min ago</p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-300 hover:text-gray-500 flex-shrink-0"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Cookie Banner
function CookieBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem('fl_cookie') === '1'; } catch { return false; }
  });

  const accept = () => {
    try { localStorage.setItem('fl_cookie', '1'); } catch {}
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 bg-gray-950 border-t border-white/8 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 3, duration: 0.5, ease: 'easeOut' }}
    >
      <p className="text-white/55 text-sm font-dm text-center sm:text-left">
        🍪 We use cookies to personalize your learning experience.{' '}
        <button className="text-indigo-400 underline hover:text-indigo-300">Learn more</button>
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button onClick={() => setDismissed(true)}
          className="text-white/40 text-sm font-dm px-4 py-2 border border-white/10 rounded-full hover:border-white/25 transition-all">
          Decline
        </button>
        <button onClick={accept}
          className="gradient-brand text-white text-sm font-semibold font-dm px-5 py-2 rounded-full hover:opacity-90 transition-all">
          Accept All
        </button>
      </div>
    </motion.div>
  );
}

// Scroll progress bar
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full transition-none"
        style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #4f46e5, #a78bfa)' }}
      />
    </div>
  );
}

export default function Floaters() {
  return (
    <>
      <ScrollProgress />
      <WhatsAppFAB />
      <BackToTop />
      <SocialNotif />
      <CookieBanner />
    </>
  );
}
