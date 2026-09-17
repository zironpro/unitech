export function MissionVision() {
  return (
    <section className="py-24 px-4 md:px-12 container-master mx-auto bg-deep-navy relative overflow-hidden">
      
      {/* Optional subtle background element if needed */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-[2px] bg-[#d4af37]"></div>
          <span className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
            OUR MISSION, VISION & VALUES
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Mission Card */}
          <div className="bg-[#0a192f] border border-[#1a365d] rounded-none p-8 lg:p-10 shadow-lg flex flex-col items-start hover:border-electric-blue transition-colors duration-300">
            <div className="w-14 h-14 rounded-full border border-electric-blue/30 bg-electric-blue/5 flex items-center justify-center text-electric-blue mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)]">Our Mission</h3>
            <p className="text-white/70 leading-relaxed text-[15px]">
              To deliver reliable and innovative technology solutions that empower businesses to connect, grow and succeed.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#0a192f] border border-[#1a365d] rounded-none p-8 lg:p-10 shadow-lg flex flex-col items-start hover:border-electric-blue transition-colors duration-300">
            <div className="w-14 h-14 rounded-full border border-electric-blue/30 bg-electric-blue/5 flex items-center justify-center text-electric-blue mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)]">Our Vision</h3>
            <p className="text-white/70 leading-relaxed text-[15px]">
              To be the most trusted technology distribution partner in the region, creating lasting value through people, partnerships and possibilities.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-[#0a192f] border border-[#1a365d] rounded-none p-8 lg:p-10 shadow-lg flex flex-col items-start hover:border-electric-blue transition-colors duration-300">
            <div className="w-14 h-14 rounded-full border border-electric-blue/30 bg-electric-blue/5 flex items-center justify-center text-electric-blue mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/><path d="M2 9h20"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)]">Our Values</h3>
            <ul className="text-white/70 flex flex-col gap-4 text-[15px]">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>Integrity in everything we do</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>Customer success first</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>Strong partner relationships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>Continuous growth and innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0"></span>
                <span>A commitment to a better, more connected future</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
