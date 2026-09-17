import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#fcfcfd] relative flex flex-col lg:flex-row overflow-hidden min-h-[600px] border-t border-slate-100">
      
      <div 
        className="relative w-full lg:w-5/12 min-h-[400px] lg:min-h-[700px] flex-shrink-0 lg:[clip-path:polygon(0_0,100%_0,85%_50%,100%_100%,0_100%)]"
      >
        <Image
          src="/images/service-img.webp"
          alt="Why Choose Unitech"
          fill
          className="object-cover"
        />
      
      </div>

      {/* Right Content Side */}
      <div className="w-full lg:w-7/12 px-8 py-16 md:px-16 lg:px-20 lg:py-24 flex flex-col justify-center z-10 -ml-0 lg:-ml-10">
        <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4 block">
          WHY CHOOSE UNITECH
        </span>
        <h2 className="text-4xl md:text-[44px] font-bold text-deep-navy leading-[1.15] font-[family-name:var(--font-montserrat)] mb-6">
          <span className="block">More Than Distribution.</span>
          <span className="block mt-1">A Technology Partner.</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mb-14">
          We go beyond supply. Unitech adds value through technical expertise, 
          strong manufacturer partnerships and a commitment to supporting our 
          channel partners at every stage.
        </p>

        {/* 2x2 Grid of features */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-y-12 sm:gap-x-8 max-w-3xl border-t border-slate-200/60 pt-8 sm:pt-12 border-b pb-8 sm:pb-12">
          
          <FeatureItem 
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
            title="Industry Expertise"
            desc="Solutions aligned with real infrastructure needs."
          />
          <FeatureItem 
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}
            title="Trusted Manufacturers"
            desc="Access to established global technology brands."
          />
          <FeatureItem 
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 6h20"/><path d="M2 18h20"/></svg>}
            title="Integrated Portfolio"
            desc="End-to-end infrastructure under one ecosystem."
          />
          <FeatureItem 
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
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
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 text-center sm:text-left">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center flex-shrink-0 text-[#0a192f] shadow-sm mb-1 sm:mb-0">
        {icon}
      </div>
      <div className="flex flex-col pt-0 sm:pt-1">
        <h4 className="font-bold text-[#0a192f] text-sm sm:text-[15px] mb-1 sm:mb-2">{title}</h4>
        <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed pr-0 sm:pr-4">{desc}</p>
      </div>
    </div>
  );
}
