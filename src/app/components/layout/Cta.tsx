import Image from "next/image";
import Link from "next/link";

export function Cta() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white flex items-center justify-center">
      <div className="container-master mx-auto px-4 w-full">
        <div className="relative rounded-[2rem] overflow-hidden w-full flex items-center justify-center lg:justify-between px-8 md:px-12 py-10 lg:py-12 shadow-sm border border-slate-100">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ict-minimal.jpg"
              alt="Contact Unitech"
              fill
              className="object-cover object-center"
            />
            {/* Subtle light overlay to ensure text readability */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between w-full gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
              <span className="text-zinc-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-2 block">
                LET'S WORK TOGETHER
              </span>
              <h2 className="text-3xl md:text-4xl font-normal text-zinc-900 mb-3 font-[family-name:var(--font-ansage)] leading-[1.1] tracking-tight">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                Partner with Unitech Distribution for reliable, innovative, and secure technology solutions tailored exactly to your industry's demands.
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-deep-navy text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-dark-blue hover:shadow-lg hover:-translate-y-0.5"
              >
                Get in Touch
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
