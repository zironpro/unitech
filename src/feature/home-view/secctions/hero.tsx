import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-navy">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img-hero.webp"
          alt="Unitech Distribution Connecting Possibilities"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-deep-navy/40"></div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        <span className="text-[10px] md:text-sm font-semibold tracking-[0.4em] text-white/60 mb-6 uppercase">
          <span className="inline-block w-8 h-[1px] bg-electric-blue/70 align-middle mr-4"></span>
          TECHNOLOGY DISTRIBUTION
          <span className="inline-block w-8 h-[1px] bg-electric-blue/70 align-middle ml-4"></span>
        </span>

        <h1 className="flex flex-col items-center mb-8 font-[family-name:var(--font-montserrat)] w-full">
          <span className="text-[44px] sm:text-6xl md:text-7xl lg:text-[90px] font-light text-white leading-[1.1] tracking-normal md:tracking-wide w-full text-center">
            CONNECTING
          </span>
          <span className="text-[44px] sm:text-6xl md:text-7xl lg:text-[90px] font-light text-white leading-[1.1] tracking-normal md:tracking-wide w-full text-center">
            POSSIBILITIES
          </span>
        </h1>

        <p className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-white/60 mb-12 uppercase font-medium max-w-[90%] text-center leading-relaxed">
          INFRASTRUCTURE TODAY. A SMARTER TOMORROW.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
          <button className="bg-electric-blue text-white px-8 py-4 rounded-none font-semibold hover:bg-bright-blue transition-all flex items-center justify-center gap-2 shadow-lg shadow-electric-blue/20 text-sm">
            Explore Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>


        </div>
      </div>





      {/* Bottom Features Bar */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-8 pt-24 bg-gradient-to-t from-deep-navy/90 to-transparent z-20 flex flex-col md:flex-row justify-between items-end gap-8">

        <div className="hidden md:block">
          <p className="text-[8px] font-bold tracking-[0.3em] text-white/60 leading-relaxed uppercase">
            UAE<br />REGIONAL<br />DISTRIBUTION<br />PARTNER
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12 w-full md:w-auto">
          <BottomIcon icon={<><path d="M4 19V9a8 8 0 0 1 16 0v10" /><path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" /><path d="M9 19h6" /></>} label="STRUCTURED CABLING" />
          <BottomIcon icon={<><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></>} label="DATA CENTER SOLUTIONS" />
          <BottomIcon icon={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /></>} label="CCTV & VIDEO SURVEILLANCE" />
          <BottomIcon icon={<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></>} label="UPS" />
          <BottomIcon icon={<><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></>} label="WIRELESS & LTE" />
          <BottomIcon icon={<><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></>} label="FIBER OPTIC" />
        </div>

      </div>
    </section>
  );
}

function BottomIcon({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        {icon}
      </svg>
      <span className="text-[7px] md:text-[8px] font-semibold tracking-[0.2em] text-white text-center max-w-[100px] leading-relaxed">
        {label}
      </span>
    </div>
  );
}
