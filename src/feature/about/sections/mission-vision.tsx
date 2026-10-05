export function MissionVision() {
  return (
    <section className="py-24 px-4 md:px-12 container-master mx-auto bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
            OUR PURPOSE
          </span>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] w-full text-center mb-8">
            Mission, Vision & Values
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Mission Card */}
          <div className="bg-[#f4f6f8] rounded-3xl p-8 lg:p-10 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-zinc-900 mb-8 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-normal text-zinc-900 mb-6 font-[family-name:var(--font-ansage)]">Our Mission</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-[15px]">
              To deliver reliable and innovative technology solutions that empower businesses to connect, grow and succeed.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#f4f6f8] rounded-3xl p-8 lg:p-10 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-zinc-900 mb-8 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-normal text-zinc-900 mb-6 font-[family-name:var(--font-ansage)]">Our Vision</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-[15px]">
              To be the most trusted technology distribution partner in the region, creating lasting value through people, partnerships and possibilities.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-zinc-900 rounded-3xl p-8 lg:p-10 flex flex-col items-start shadow-xl">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-8 border border-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/><path d="M2 9h20"/></svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-normal text-white mb-6 font-[family-name:var(--font-ansage)]">Our Values</h3>
            <ul className="text-white/80 flex flex-col gap-4 text-[15px] font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Integrity in everything we do</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Customer success first</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Strong partner relationships</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Continuous growth and innovation</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
