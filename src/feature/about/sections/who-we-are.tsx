export function WhoWeAre() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 container-master mx-auto bg-white border-b border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 max-w-7xl mx-auto">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#d4af37]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              WHO WE ARE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy leading-[1.15] font-[family-name:var(--font-montserrat)] mb-8">
            <span className="block">Technology Distribution.</span>
            <span className="block mt-1">Real Impact.</span>
          </h2>

          <div className="flex flex-col gap-6 text-slate-600 text-[15px] md:text-base leading-relaxed">
            <p>
              Unitech Distribution is a leading technology distribution company based in the UAE, connecting global technology brands with businesses across the region.
            </p>
            <p>
              We provide end-to-end infrastructure solutions through a strong network of partners, resellers and system integrators, helping organizations build smarter, more secure and future-ready IT environments.
            </p>
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="grid grid-cols-2 lg:pl-16">
          <StatItem 
            className="border-r border-b border-slate-100 pb-10 pr-4 sm:pr-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>}
            value="10+"
            label="YEARS OF EXPERIENCE"
          />
          <StatItem 
            className="border-b border-slate-100 pb-10 pl-4 sm:pl-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            value="500+"
            label="TRUSTED PARTNERS"
          />
          <StatItem 
            className="border-r border-slate-100 pt-10 pr-4 sm:pr-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>}
            value="2,000+"
            label="BUSINESSES SERVED"
          />
          <StatItem 
            className="pt-10 pl-4 sm:pl-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
            value="UAE"
            label="OUR HOME MARKET"
          />
        </div>
        
      </div>
    </section>
  );
}

function StatItem({ icon, value, label, className }: { icon: React.ReactNode, value: string, label: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center text-center sm:items-start sm:text-left ${className || ''}`}>
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-deep-navy mb-4 md:mb-6 shadow-sm">
        {icon}
      </div>
      <span className="text-3xl md:text-[32px] font-extrabold text-deep-navy mb-2 tracking-tight font-[family-name:var(--font-montserrat)]">{value}</span>
      <span className="text-[9px] md:text-[10px] font-bold tracking-[0.1em] text-slate-500 uppercase leading-relaxed max-w-[120px] sm:max-w-none">{label}</span>
    </div>
  );
}
