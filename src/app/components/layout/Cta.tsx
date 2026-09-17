import Image from "next/image";
import Link from "next/link";

export function Cta() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-deep-navy">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta.webp"
          alt="Contact Unitech"
          fill
          className="object-cover object-center opacity-40"
        />
      </div>
      
      {/* Content */}
      <div className="container-master relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Let's Work Together
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)] leading-tight tracking-tight">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-white/70 text-[15px] md:text-base leading-relaxed max-w-xl">
            Partner with Unitech Distribution for reliable, innovative, and secure technology solutions tailored exactly to your industry's demands.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-electric-blue text-white px-8 py-4 font-bold text-sm tracking-wide uppercase hover:bg-amber-400 hover:text-deep-navy transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Get in Touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-3"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
