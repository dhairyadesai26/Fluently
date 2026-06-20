export default function Footer() {
  const scroll = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#050509] pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-2xl">🗣️</span>
              <span className="font-sora font-black text-xl"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Fluently
              </span>
            </div>
            <p className="text-white/30 text-xs font-dm italic mb-4">Speak Confidently. Succeed Globally.</p>
            <p className="text-white/25 text-sm font-dm leading-relaxed mb-6 max-w-xs">
              India's #1 English speaking course for students. Transforming nervous learners into confident communicators — 15,000+ students and counting.
            </p>
            <div className="flex gap-2.5 mb-6">
              {[
                { icon: '📸', label: 'Instagram' },
                { icon: '▶', label: 'YouTube' },
                { icon: '💼', label: 'LinkedIn' },
                { icon: '✈️', label: 'Telegram' },
              ].map(s => (
                <button key={s.label} title={s.label}
                  className="w-9 h-9 rounded-full bg-white/6 border border-white/8 flex items-center justify-center text-sm hover:bg-white/12 transition-all hover:-translate-y-0.5">
                  {s.icon}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['🔒 SSL Secured', '✅ RBI Compliant', '🇮🇳 Made in India'].map(b => (
                <span key={b} className="text-white/20 text-xs font-dm">{b}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sora font-bold text-white/50 text-xs uppercase tracking-widest mb-5">Course</h4>
            <ul className="flex flex-col gap-3">
              {['All Modules', 'How It Works', 'Our Coaches', 'Certificate', 'Pricing', 'Free Demo'].map(item => (
                <li key={item}>
                  <button className="text-white/30 text-sm font-dm hover:text-white/70 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-bold text-white/50 text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About Fluently', 'Blog', 'Press', 'Careers', 'Campus Ambassador', 'Contact'].map(item => (
                <li key={item}>
                  <button className="text-white/30 text-sm font-dm hover:text-white/70 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-bold text-white/50 text-xs uppercase tracking-widest mb-5">Support</h4>
            <ul className="flex flex-col gap-3">
              {['Help Center', 'Community', 'Privacy Policy', 'Terms of Use', 'Refund Policy', 'Sitemap'].map(item => (
                <li key={item}>
                  <button className="text-white/30 text-sm font-dm hover:text-white/70 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs font-dm">
            © 2026 Fluently EdTech Pvt. Ltd. · All rights reserved · CIN: U80902MH2026PTC123456
          </p>
          <p className="text-white/12 text-xs font-dm">
            <button className="hover:text-white/30 transition-colors">Privacy</button>
            {' · '}
            <button className="hover:text-white/30 transition-colors">Terms</button>
            {' · '}
            <button className="hover:text-white/30 transition-colors">Cookies</button>
          </p>
        </div>
      </div>
    </footer>
  );
}
