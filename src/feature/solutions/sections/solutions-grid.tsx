import Link from "next/link";
import Image from "next/image";

import { solutions } from "@/data/solutions";

export function SolutionsGrid() {
  return (
    <section className="py-20 px-4 md:px-12 container-master mx-auto bg-[#fafafa]">
      {/* Header Area */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-deep-navy/50 uppercase mb-4 block">
            OUR SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy leading-tight font-[family-name:var(--font-montserrat)]">
            Technology Solutions for Modern Infrastructure.
          </h2>
        </div>
        
        <div className="max-w-md flex flex-col items-start lg:items-end text-left lg:text-right gap-6">
          <p className="text-slate-600 text-sm leading-relaxed">
            We provide a comprehensive range of ICT infrastructure solutions to help businesses build, connect, secure and power their world.
          </p>
          <button className="flex items-center gap-2 border border-slate-300 rounded-none px-6 py-2.5 text-sm font-semibold text-deep-navy hover:bg-slate-100 transition-colors">
            Talk to a Specialist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Grid Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((sol) => (
          <div key={sol.id} className="group relative rounded-none overflow-hidden min-h-[360px] flex flex-col justify-end p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all">
            {/* Dark background base */}
            <div className="absolute inset-0 bg-[#061834] z-0"></div>
            
            {/* Background Image */}
            <Image
              src={sol.image}
              alt={sol.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover z-0 opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            
            {/* Gradient Overlay for style */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020a16] via-[#061834]/80 to-[#061834]/30 z-10 group-hover:from-[#020a16] group-hover:via-[#061834]/60 transition-colors"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:border-electric-blue transition-all">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-montserrat)]">
                {sol.title}
              </h3>
              <p className="text-white/70 text-sm mb-6 line-clamp-2">
                {sol.description}
              </p>
              <Link href={`/solutions/${sol.id}`} className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-electric-blue transition-colors mt-auto">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
