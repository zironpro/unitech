import Link from "next/link";
import { solutions } from "@/data/solutions";

export function SolutionsGrid() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 container-master mx-auto bg-white border-b border-slate-100">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16 lg:mb-24 w-full">
        <div className="w-full lg:w-[60%]">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
            WHAT WE DO
          </span>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] w-full text-center mb-8">
            Technology Solutions for Modern Infrastructure.
          </h2>
        </div>
        
        <div className="w-full lg:w-[40%] flex flex-col items-start lg:items-end text-left lg:text-right gap-6 pt-2">
          <p className="text-zinc-500 text-[15px] leading-relaxed font-medium">
            We provide a comprehensive range of ICT infrastructure solutions to help businesses build, connect, secure and power their world.
          </p>
          <button className="flex items-center gap-2 border border-slate-200 rounded-lg px-6 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-slate-50 transition-colors shadow-sm">
            Talk to a Specialist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Grid Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {solutions.map((sol) => (
          <Link href={`/solutions/${sol.id}`} key={sol.id} className="group relative rounded-3xl overflow-hidden min-h-[380px] flex flex-col justify-end p-8 cursor-pointer border border-slate-100">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#f4f6f8] z-0 transition-colors duration-500 group-hover:bg-zinc-900"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-start h-full justify-between">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-zinc-900 shadow-sm transition-all duration-500 group-hover:bg-white/10 group-hover:text-white">
                {sol.icon}
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl font-normal text-zinc-900 mb-3 font-[family-name:var(--font-ansage)] group-hover:text-white transition-colors duration-500">
                  {sol.title}
                </h3>
                <p className="text-zinc-500 font-medium text-sm mb-6 line-clamp-3 group-hover:text-white/70 transition-colors duration-500">
                  {sol.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-white transition-colors duration-500">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
