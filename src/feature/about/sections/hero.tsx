import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 bg-white flex flex-col items-center justify-center border-b border-slate-100">
      <div className="container-master mx-auto px-4 flex flex-col items-center text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6 block">
          ABOUT UNITECH
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] max-w-4xl leading-[1.1] mb-8 tracking-tight">
          Empowering Tomorrow's Infrastructure
        </h1>
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl font-medium">
          Learn about our journey, our mission to connect people and technology, and the core values that drive us to be your trusted technology partner.
        </p>
      </div>
      
      {/* Large Clean Image */}
      <div className="container-master mx-auto px-4 mt-16 md:mt-24">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/about-hero.jpg"
            alt="About Unitech"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
