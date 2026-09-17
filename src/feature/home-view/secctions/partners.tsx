import Image from "next/image";

const partners = [
  { name: "Comelt", src: "/images/partners/comelt.webp" },
  { name: "Elan", src: "/images/partners/elan.webp" },
  { name: "IC Realtime", src: "/images/partners/icrealtime.webp" },
  { name: "Keline", src: "/images/partners/keline.webp" },
  { name: "Leviton", src: "/images/partners/leviton.webp" },
  { name: "Microlab", src: "/images/partners/microlab.webp" },
];

export function Partners() {
  return (
    <section id="partners" className="py-10 px-4 bg-[#f4f7fb] border-y border-slate-200">
      <div className="container-master mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Text Block */}
        <div className="flex-shrink-0 text-center lg:text-left lg:border-r lg:border-slate-300 lg:pr-12">
          <h2 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-deep-navy uppercase leading-relaxed font-[family-name:var(--font-montserrat)]">
            TRUSTED BY<br/>GLOBAL TECHNOLOGY BRANDS
          </h2>
        </div>

        {/* Right Logos Array */}
        <div className="flex-1 w-full flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14 flex items-center justify-center transition-transform hover:scale-105 duration-300 mix-blend-multiply">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
