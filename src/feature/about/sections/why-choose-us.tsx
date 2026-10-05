export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 container-master mx-auto bg-white border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 max-w-7xl mx-auto items-center">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col w-full">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
            WHY CHOOSE UNITECH
          </span>

          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] w-full text-center mb-6">
            More Than Distribution. A Technology Partner.
          </h2>

          <p className="text-zinc-500 text-[15px] md:text-base leading-relaxed font-medium">
            We go beyond supply. Unitech adds value through technical expertise, strong manufacturer partnerships and a commitment to supporting our channel partners at every stage.
          </p>
        </div>

        {/* Right Column - Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-10">
          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
            title="Technical Expertise"
            desc="Deep product knowledge and solution support."
          />
          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}
            title="Trusted Partnerships"
            desc="Access to leading global technology brands."
          />
          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 6h20"/><path d="M2 18h20"/></svg>}
            title="End-to-End Support"
            desc="From product supply to post-sales assistance."
          />
          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            title="Partner Focused"
            desc="Built around resellers, installers and system integrators."
          />
        </div>
        
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-start p-6 md:p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-[#f4f6f8] flex items-center justify-center flex-shrink-0 text-zinc-900 shadow-sm mb-6">
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="font-semibold text-zinc-900 text-lg md:text-xl mb-2 font-[family-name:var(--font-ansage)]">{title}</h4>
        <p className="text-zinc-500 font-medium text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
