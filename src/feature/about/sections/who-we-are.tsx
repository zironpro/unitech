export function WhoWeAre() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 container-master mx-auto bg-white border-b border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 max-w-7xl mx-auto">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col w-full justify-center">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
            WHO WE ARE
          </span>

          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] w-full text-center mb-8">
            Technology Distribution. Real Impact.
          </h2>

          <div className="flex flex-col gap-6 text-zinc-500 text-[15px] md:text-base leading-relaxed font-medium">
            <p>
              Unitech Distribution is a leading technology distribution company based in the UAE, connecting global technology brands with businesses across the region.
            </p>
            <p>
              We provide end-to-end infrastructure solutions through a strong network of partners, resellers and system integrators, helping organizations build smarter, more secure and future-ready IT environments.
            </p>
          </div>
        </div>

        {/* Right Column - Stats Grid */}
        <div className="grid grid-cols-2 gap-4 lg:pl-16">
          <StatItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
            value="10+"
            label="Years of Experience"
          />
          <StatItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            value="500+"
            label="Trusted Partners"
          />
          <StatItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/></svg>}
            value="2,000+"
            label="Businesses Served"
          />
          <StatItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
            value="UAE"
            label="Our Home Market"
          />
        </div>
        
      </div>
    </section>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="flex flex-col items-start p-6 md:p-8 rounded-3xl bg-[#f4f6f8] border border-slate-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
        {icon}
      </div>
      <span className="text-3xl md:text-4xl font-normal text-zinc-900 mb-2 tracking-tight font-[family-name:var(--font-ansage)]">{value}</span>
      <span className="text-xs md:text-sm font-semibold tracking-wide text-zinc-500 uppercase">{label}</span>
    </div>
  );
}
