import Scanner from "./components/scanner";

function Logo() {
  return (
    <div>
      <div className="text-xl font-bold tracking-[0.12em] font-serif leading-none">
        <span className="text-gold">VINTEX</span>
        <span className="text-white">SCAN</span>
      </div>
      <div className="text-[9px] tracking-[0.25em] text-gold/70 uppercase mt-0.5">
        Value Your Vintage
      </div>
    </div>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l4 6-10 13L2 9l4-6z" />
      <path d="M2 9h20M11 3l1 6 1-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <line x1="12" y1="15" x2="12" y2="18" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const features = [
  { icon: <ShieldCheckIcon />, title: "Fast & Easy", desc: "Get an estimate in seconds." },
  { icon: <DiamondIcon />, title: "Market Based", desc: "Powered by real market data." },
  { icon: <LockIcon />, title: "Private & Secure", desc: "Your images are safe with us." },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-[#111111] px-8 py-5 flex items-center justify-between">
        <Logo />
        <span className="border border-white/80 text-white text-[11px] tracking-[0.2em] px-4 py-1.5 font-medium">
          BETA
        </span>
      </header>

      {/* Interactive scanner (hero + result card) */}
      <Scanner />

      {/* Features */}
      <section className="bg-cream py-14 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {features.map((f) => (
            <div key={f.title} className="flex gap-5 items-start max-w-[220px] w-full">
              <div className="text-gold flex-shrink-0">{f.icon}</div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] text-[15px]">{f.title}</h3>
                <p className="text-stone-500 text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] px-8 pt-12 pb-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-10">
            {["HOW IT WORKS", "ABOUT", "CONTACT"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/80 text-[11px] tracking-[0.18em] uppercase hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <span className="text-white/80">
            <InstagramIcon />
          </span>
        </div>
        <p className="text-center text-stone-600 text-xs mt-8">
          © 2024 VintexScan. All rights reserved.
        </p>
      </footer>
    </>
  );
}
