import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'linear-gradient(145deg, #0f0c29 0%, #1a1048 45%, #0d1b3e 100%)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              className="flex items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-5xl">🗣️</span>
              <span className="font-sora text-4xl font-black text-white tracking-tight">Fluently</span>
            </motion.div>

            <motion.div
              className="w-56 h-1 bg-white/10 rounded-full overflow-hidden mx-auto mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #818cf8, #a78bfa, #f472b6)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.p
              className="text-white/40 text-sm tracking-widest uppercase font-dm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Speak Confidently. Succeed Globally.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
