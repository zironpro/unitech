export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 container-master mx-auto bg-[#fafafa] border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 max-w-7xl mx-auto items-center">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col max-w-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#d4af37]"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              WHY CHOOSE UNITECH
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy leading-[1.15] font-[family-name:var(--font-montserrat)] mb-6">
            <span className="block">More Than Distribution.</span>
            <span className="block mt-1">A Technology Partner.</span>
          </h2>

          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
            We go beyond supply. Unitech adds value through technical expertise, strong manufacturer partnerships and a commitment to supporting our channel partners at every stage.
          </p>
        </div>

        {/* Right Column - Features Grid */}
        <div className="grid grid-cols-2 lg:pl-10 relative">
          <FeatureItem 
            className="border-b border-r border-slate-200/70 pb-8 sm:pb-10 pr-4 sm:pr-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
            title="Technical Expertise"
            desc="Deep product knowledge and solution support."
          />
          <FeatureItem 
            className="border-b border-slate-200/70 pb-8 sm:pb-10 pl-4 sm:pl-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}
            title="Trusted Partnerships"
            desc="Access to leading global technology brands."
          />
          <FeatureItem 
            className="border-r border-slate-200/70 pt-8 sm:pt-10 pr-4 sm:pr-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 6h20"/><path d="M2 18h20"/></svg>}
            title="End-to-End Support"
            desc="From product supply to post-sales assistance."
          />
          <FeatureItem 
            className="pt-8 sm:pt-10 pl-4 sm:pl-8"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            title="Partner Focused"
            desc="Built around resellers, installers and system integrators."
          />
        </div>
        
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc, className }: { icon: React.ReactNode, title: string, desc: string, className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left ${className || ''}`}>
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-100/80 border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#0a192f] shadow-sm mb-2 sm:mb-0">
        {icon}
      </div>
      <div className="flex flex-col pt-0 sm:pt-1">
        <h4 className="font-bold text-[#0a192f] text-sm sm:text-[15px] mb-1.5 sm:mb-2">{title}</h4>
        <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed pr-0 sm:pr-2">{desc}</p>
      </div>
    </div>
  );
}
