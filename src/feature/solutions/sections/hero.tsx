import Image from "next/image";

export function SolutionsHero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 bg-white flex flex-col items-center justify-center border-b border-slate-100">
      <div className="container-master mx-auto px-4 flex flex-col items-center text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6 block">
          OUR SOLUTIONS
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] max-w-4xl leading-[1.1] mb-8 tracking-tight">
          Comprehensive Technology Solutions
        </h1>
        <p className="text-base md:text-lg text-zinc-500 max-w-2xl font-medium">
          Discover our wide range of tailored technology solutions designed to empower your business, enhance infrastructure, and drive innovation across all sectors.
        </p>
      </div>
      
      <div className="container-master mx-auto px-4 mt-16 md:mt-24">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/solutions-hero.jpg"
            alt="Unitech Solutions"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
