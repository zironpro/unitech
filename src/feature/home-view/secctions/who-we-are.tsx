import Image from "next/image";

export function WhoWeAre() {
  return (
    <section className="w-full section-master bg-white relative overflow-hidden" id="who-we-are">
      <div className="container-master mx-auto flex flex-col items-center">

        {/* Top Split Area */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center relative z-10 mb-12 md:mb-16">

          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Header */}
            <span className="text-xs font-bold tracking-[0.2em] text-deep-navy/50 uppercase mb-4 block">
              WHO WE ARE
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy mb-6 font-[family-name:var(--font-montserrat)] leading-tight tracking-tight">
              A trusted ICT distribution partner for a connected tomorrow.
            </h2>

            <p className="text-base md:text-lg text-deep-navy/60 font-medium mb-10 max-w-xl leading-relaxed">
              Unitech Distribution is a value-added ICT distributor delivering
              world-class technology products, solutions and expertise across
              connectivity, data centers, security, power protection and wireless
              infrastructure.
            </p>

            {/* Micro Features Row */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6 mb-12 w-full max-w-xl">
              <MicroFeature
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>}
                title="Quality Products"
                desc="From leading global brands"
              />
              <MicroFeature
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                title="Expert Support"
                desc="For partners at every stage"
              />
              <MicroFeature
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>}
                title="Long-Term Value"
                desc="Built on trust and expertise"
              />
              <MicroFeature
                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>}
                title="Innovative Solutions"
                desc="Driving business growth"
              />
            </div>

            {/* CTA Button */}
            <button className="bg-deep-navy text-white px-8 py-3.5 rounded-none font-semibold hover:bg-navy-blue transition-colors flex items-center justify-center gap-3 text-sm shadow-xl shadow-deep-navy/10">
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>

          {/* Right Column: Image and Overlays */}
          <div className="relative w-full max-w-[650px] mx-auto lg:ml-auto mt-12 lg:mt-0 flex-shrink-0 flex flex-col md:block gap-4">

            {/* The Main Image */}
            <div className="relative w-full md:w-[80%] aspect-[4/3] md:aspect-[4/5] lg:aspect-square bg-slate-100 rounded-none overflow-hidden mx-auto lg:ml-12">
              <Image
                src="/images/who-we-are.webp"
                alt="Unitech Distribution Data Center"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Left Overlap (Navy Card) */}
            <div className="static md:absolute md:-bottom-8 md:left-0 lg:-left-12 bg-deep-navy text-white p-6 md:p-8 rounded-none md:shadow-2xl md:max-w-[240px] z-20 w-full text-center md:text-left">
              <p className="text-sm md:text-base font-semibold leading-relaxed tracking-wide">
                Enabling A Smarter, <br className="hidden md:block" />More Connected <br className="hidden md:block" />World.
              </p>
            </div>

            {/* Right Overlap (White Stats Card) */}
            <div className="static md:absolute md:top-[15%] md:-right-8 lg:-right-16 bg-white p-6 md:p-8 rounded-none md:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col gap-5 z-20 w-full md:w-[260px]">
              <div className="grid grid-cols-2 md:flex md:flex-col gap-6 md:gap-5 text-center md:text-left">
                <StatList value="10+" label="Years of Experience" />
                <div className="hidden md:block w-full h-[1px] bg-slate-100"></div>
                <StatList value="500+" label="Trusted Partners" />
                <div className="hidden md:block w-full h-[1px] bg-slate-100"></div>
                <StatList value="1000+" label="Products & Solutions" />
                <div className="hidden md:block w-full h-[1px] bg-slate-100"></div>
                <StatList value="UAE" label="Regional Presence" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function MicroFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-deep-navy mb-1 shadow-sm border border-slate-200">
        {icon}
      </div>
      <h4 className="text-sm md:text-base font-bold text-deep-navy">{title}</h4>
      <p className="text-xs md:text-sm text-deep-navy/60 leading-tight">{desc}</p>
    </div>
  );
}

function StatList({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl md:text-3xl font-extrabold text-deep-navy mb-1 tracking-tight">{value}</span>
      <span className="text-xs md:text-sm font-medium text-deep-navy/60">{label}</span>
    </div>
  );
}
