import Image from "next/image";

export function IndustriesHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-deep-navy pt-24 pb-12">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/page-hero.webp"
          alt="Unitech Industries"
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
          OUR INDUSTRIES
          <span className="inline-block w-8 h-[1px] bg-electric-blue/70 ml-4"></span>
        </span>

        <h1 className="flex flex-col items-center mb-6 font-[family-name:var(--font-montserrat)]">
          <span className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-[1.1] tracking-wide">
            EMPOWERING
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.1] tracking-wide">
            CRITICAL SECTORS
          </span>
        </h1>

        <p className="text-sm md:text-base text-white/80 max-w-2xl mt-4">
          Discover how our tailored technology solutions empower businesses and infrastructure across various demanding industries.
        </p>
      </div>
    </section>
  );
}
