import Image from "next/image";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { GlobalFaq } from "@/app/components/ui/faq";
import { IndustriesProcess } from "./sections/process";

type Industry = typeof industriesData[0];

export function IndustryDetailView({ industry }: { industry: Industry }) {
  const industryFaqs = [
    {
      question: `What makes your ${industry.title} solutions different?`,
      answer: `Our ${industry.title} solutions are designed with scalability, reliability, and enterprise-grade security at their core. We partner with tier-1 global vendors to ensure you receive best-in-class technology.`
    },
    {
      question: `Do you provide ongoing support for ${industry.title} deployments?`,
      answer: "Yes, we provide comprehensive end-to-end support, from initial consultation and design to post-deployment maintenance and troubleshooting."
    },
    {
      question: `How long does it take to implement your ${industry.title} solutions?`,
      answer: "Implementation timelines vary depending on the exact scope and scale of your requirements. Once we assess your infrastructure, we provide a detailed project roadmap."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-24 bg-[#f4f6f8] flex flex-col items-center justify-center border-b border-slate-100">
        
        {/* Main Center Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6 block">
            INDUSTRY DETAIL
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] leading-[1.1] mb-6 tracking-tight">
            {industry.title}
          </h1>
          
          <p className="text-base md:text-lg text-zinc-500 max-w-2xl font-medium">
            {industry.desc}
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
              <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] w-full text-center mb-6">
                Overview
              </h2>
              <div className="prose prose-lg text-zinc-500 font-medium leading-relaxed">
                {industry.longDescription.map((paragraph, index) => (
                  <p key={index} className="mb-6">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-8">
              <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] w-full text-center mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.benefits.map((benefit, i) => (
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
            {/* Specific Industry Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-[#f4f6f8] p-8 rounded-3xl border border-slate-100">
              <h3 className="font-normal text-2xl text-zinc-900 mb-6 font-[family-name:var(--font-ansage)]">More Industries</h3>
              <div className="flex flex-col gap-2">
                {industriesData.filter(i => i.id !== industry.id).slice(0, 5).map(i => (
                  <Link key={i.id} href={`/industries/${i.id}`} className="flex items-center justify-between group p-4 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">{i.title}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-300 group-hover:text-zinc-900"><path d="m9 18 6-6-6-6"/></svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <IndustriesProcess />
      <GlobalFaq items={industryFaqs} title={`${industry.title} FAQs`} description={`Learn more about our ${industry.title} solutions.`} />
    </main>
  );
}
