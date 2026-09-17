import Image from "next/image";
import Link from "next/link";
import { solutions } from "@/data/solutions";

type Solution = typeof solutions[0];

export function SolutionDetailView({ solution }: { solution: Solution }) {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-deep-navy pt-24 pb-12">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/page-hero.webp"
            alt={solution.title}
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-deep-navy/60"></div>
        </div>
        
        {/* Main Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
          <span className="text-[10px] md:text-sm font-semibold tracking-[0.4em] text-white/60 mb-6 uppercase flex items-center">
            <span className="inline-block w-8 h-[1px] bg-electric-blue/70 mr-4"></span>
            SOLUTION DETAIL
            <span className="inline-block w-8 h-[1px] bg-electric-blue/70 ml-4"></span>
          </span>
          
          <h1 className="flex flex-col items-center mb-6 font-[family-name:var(--font-montserrat)]">
            <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.1] tracking-wide uppercase">
              {solution.title}
            </span>
          </h1>
          
          <p className="text-sm md:text-base text-white/80 max-w-2xl mt-4">
            {solution.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24 px-4 container-master mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            
            {/* Overview Section */}
            <div>
              <h2 className="text-3xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] mb-6">
                Overview
              </h2>
              <div className="prose prose-lg text-slate-600">
                {solution.longDescription.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div>
              <h2 className="text-3xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {solution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-100 rounded-none">
                    <div className="w-6 h-6 rounded-full bg-electric-blue/20 text-electric-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                    </div>
                    <span className="font-semibold text-deep-navy">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            {/* Specific Solution Image */}
            <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden bg-slate-100 shadow-md">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-slate-50 p-8 rounded-none border border-slate-200">
              <h3 className="font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">More Solutions</h3>
              <div className="flex flex-col gap-2">
                {solutions.filter(s => s.id !== solution.id).slice(0, 4).map(s => (
                  <Link key={s.id} href={`/solutions/${s.id}`} className="flex items-center justify-between group p-3 hover:bg-white border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-electric-blue transition-colors">{s.title}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400 group-hover:text-electric-blue"><path d="m9 18 6-6-6-6"/></svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
