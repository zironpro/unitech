export function WhyUnitech() {
  return (
    <section className="w-full section-master bg-white relative overflow-hidden">
      {/* Optional subtle background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container-master flex flex-col">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-16 lg:mb-24">
          <div className="flex flex-col max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-deep-navy/50 uppercase mb-4 block">
              WHY UNITECH
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] leading-tight mb-4">
              More than distribution. <br className="hidden md:block" />
              A technology partner.
            </h2>
          </div>
          <div className="max-w-xl pb-2">
            <p className="text-base md:text-lg text-deep-navy/70 font-medium leading-relaxed">
              We go beyond supply. Unitech adds value through technical expertise, 
              strong manufacturer partnerships and a commitment to supporting our 
              channel partners at every stage.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
            title="Industry Expertise"
            desc="Solutions aligned with real infrastructure needs."
          />
          
          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
            title="Trusted Manufacturers"
            desc="Access to established global technology brands."
          />

          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}
            title="Integrated Portfolio"
            desc="Connectivity, security, power and infrastructure under one ecosystem."
          />

          <FeatureItem 
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
            title="Partner Focused"
            desc="Built around system integrators, installers and resellers."
          />

        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-row md:flex-col items-start gap-5 text-left">
      <div className="w-14 h-14 rounded-full bg-electric-blue/10 flex items-center justify-center flex-shrink-0 text-electric-blue">
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold text-deep-navy text-lg mb-2">{title}</h4>
        <p className="text-deep-navy/70 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
