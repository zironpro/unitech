import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    desc: "High-performance copper and fiber infrastructure.",
    image: "/images/solutions/structured-cabling.webp",
  },
  {
    id: "datacenter-solution",
    title: "Data Center Infrastructure",
    desc: "Reliable, scalable and efficient data environments.",
    image: "/images/solutions/data-center.webp",
  },
  {
    id: "cctv",
    title: "Security & Surveillance",
    desc: "Advanced CCTV and security solutions.",
    image: "/images/solutions/security-and-surveillances.webp",
  },
  {
    id: "ups",
    title: "Power Protection",
    desc: "UPS and critical power continuity.",
    image: "/images/solutions/power-protection.webp",
  },
  {
    id: "wireless",
    title: "Wireless & LTE",
    desc: "Enterprise wireless and connectivity solutions.",
    image: "/images/solutions/lte.webp",
  },
  {
    id: "fiber-optic",
    title: "Fiber Optic Networks",
    desc: "High-bandwidth fiber connectivity for modern networks.",
    image: "/images/solutions/fiber-optic.webp",
  },
];

export function Solutions() {
  return (
    <section className="w-full section-master bg-[#04101B] flex flex-col items-center">
      <div className="container-master flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-4 block">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-montserrat)] max-w-2xl leading-tight mb-4">
              From infrastructure to innovation.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-xl font-medium">
              We provide the technology foundation businesses depend on.
            </p>
          </div>
          <Link href="/solutions" className="text-electric-blue text-sm font-semibold hover:text-bright-blue transition-colors flex items-center gap-2">
            View All Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <Link
              key={item.id}
              href={`/solutions/${item.id}`}
              className="group relative h-[320px] rounded-none overflow-hidden border border-white/10 bg-deep-navy flex flex-col justify-between hover:border-electric-blue/50 transition-colors"
            >
              {/* Background Image & Gradient */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-right opacity-50 group-hover:opacity-70 transition-opacity mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#04101B] via-[#04101B]/90 to-transparent"></div>
                <div className="absolute inset-0 bg-electric-blue/10 mix-blend-overlay"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full w-[70%]">
                <div className="text-white/40 font-mono text-xl md:text-2xl mb-4">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 font-medium mb-auto">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-white text-sm font-semibold mt-6 group-hover:text-electric-blue transition-colors">
                  Explore
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
