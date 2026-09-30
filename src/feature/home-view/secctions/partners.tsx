"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "ABB", src: "/images/partners/abb-seeklogo.png" },
  { name: "Aruba Networks", src: "/images/partners/aruba-networks-seeklogo.png" },
  { name: "Comelt", src: "/images/partners/comelt.webp" },
  { name: "Elan", src: "/images/partners/elan.webp" },
  { name: "Fracarro", src: "/images/partners/fracarro-logo.jpg" },
  { name: "IC Realtime", src: "/images/partners/icrealtime.webp" },
  { name: "Keline", src: "/images/partners/keline.webp" },
  { name: "Legrand", src: "/images/partners/legrand.png" },
  { name: "Lenovo", src: "/images/partners/lenovo.svg" },
  { name: "Leviton", src: "/images/partners/leviton.webp" },
  { name: "Microlab", src: "/images/partners/microlab.webp" },
  { name: "Planet", src: "/images/partners/planet.png" },
  { name: "Schneider Electric", src: "/images/partners/schneider-electric-seeklogo.png" },
  { name: "Simplex", src: "/images/partners/simplex-logo.png" },
  { name: "Sony", src: "/images/partners/sony.svg" },
  { name: "Yealink", src: "/images/partners/yealink_logo.png" },
];

// Duplicate partners enough times so that half the array spans well past a 4k monitor width.
const duplicatedPartners = [
  ...partners,
  ...partners,
  ...partners,
  ...partners,
  ...partners,
  ...partners,
  ...partners,
  ...partners,
];

export function Partners() {
  return (
    <section id="partners" className="relative z-10 py-10 px-4 bg-[#f4f7fb] border-y border-slate-200 overflow-hidden flex items-center">
      <div className="container-master mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative w-full">

        {/* Left Text Block */}
        <div className="flex-shrink-0 text-center lg:text-left lg:border-r lg:border-slate-300 lg:pr-12 relative z-10">
          <h2 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-deep-navy uppercase leading-relaxed font-[family-name:var(--font-montserrat)]">
            TRUSTED BY<br />GLOBAL TECHNOLOGY BRANDS
          </h2>
        </div>

        {/* Right Logos Array (Infinite Marquee) */}
        <div
          className="flex-1 w-full overflow-hidden relative"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <motion.div
            className="flex items-center gap-12 md:gap-20 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 150,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14 flex items-center justify-center mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
