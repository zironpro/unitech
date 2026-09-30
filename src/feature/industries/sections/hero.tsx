import Image from "next/image";

export function IndustriesHero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 bg-white flex flex-col items-center justify-center border-b border-slate-100">
      <div className="container-master mx-auto px-4 flex flex-col items-center text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6 block">
          OUR INDUSTRIES
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] max-w-4xl leading-[1.1] mb-8 tracking-tight">
          Empowering Critical Sectors
        </h1>
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl font-medium">
          Discover how our tailored technology solutions empower businesses and infrastructure across various demanding industries.
        </p>
      </div>
      
      <div className="container-master mx-auto px-4 mt-16 md:mt-24">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/industry-hero.jpg"
            alt="Unitech Industries"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
