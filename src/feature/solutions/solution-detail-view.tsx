import Image from "next/image";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import { WhyChooseUs } from "./sections/why-choose-us";

type Solution = typeof solutions[0];

export function SolutionDetailView({ solution }: { solution: Solution }) {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 bg-[#f4f6f8] flex flex-col items-center justify-center border-b border-slate-100">
        
        {/* Main Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6 block">
            SOLUTION DETAIL
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] leading-[1.1] mb-6 tracking-tight">
            {solution.title}
          </h1>
          
          <p className="text-base md:text-lg text-zinc-500 max-w-2xl font-medium">
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
              <h2 className="text-3xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] mb-6">
                Overview
              </h2>
              <div className="prose prose-lg text-zinc-500 font-medium leading-relaxed">
                {solution.longDescription.map((paragraph, index) => (
                  <p key={index} className="mb-6">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-8">
              <h2 className="text-3xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-[#f4f6f8] rounded-3xl">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                    </div>
                    <span className="font-semibold text-zinc-900 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            {/* Specific Solution Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-[#f4f6f8] p-8 rounded-3xl border border-slate-100">
              <h3 className="font-normal text-2xl text-zinc-900 mb-6 font-[family-name:var(--font-ansage)]">More Solutions</h3>
              <div className="flex flex-col gap-2">
                {solutions.filter(s => s.id !== solution.id).slice(0, 5).map(s => (
                  <Link key={s.id} href={`/solutions/${s.id}`} className="flex items-center justify-between group p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">{s.title}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-300 group-hover:text-zinc-900"><path d="m9 18 6-6-6-6"/></svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <WhyChooseUs />
    </main>
  );
}
