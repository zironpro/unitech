import Image from "next/image";
import Link from "next/link";

export function Industries() {
  const industries = [
    {
      title: "Data Centers",
      desc: "Building the backbone for a connected world.",
      image: "/images/industries/data-centers.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
      ),
    },
    {
      title: "Telecommunications",
      desc: "Powering stronger networks and connectivity.",
      image: "/images/industries/telecommunications.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9a8 8 0 0 1 16 0v10" /><path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" /><path d="M9 19h6" /></svg>
      ),
    },
    {
      title: "Commercial Buildings",
      desc: "Reliable infrastructure for modern workplaces.",
      image: "/images/industries/commercial-buildings.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
      ),
    },
    {
      title: "Government",
      desc: "Secure and dependable solutions for critical operations.",
      image: "/images/industries/government.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 22 7 12 2" /><line x1="6" y1="22" x2="6" y2="7" /><line x1="10" y1="22" x2="10" y2="7" /><line x1="14" y1="22" x2="14" y2="7" /><line x1="18" y1="22" x2="18" y2="7" /><line x1="2" y1="22" x2="22" y2="22" /></svg>
      ),
    },
    {
      title: "Healthcare",
      desc: "Supporting better care with reliable technology.",
      image: "/images/industries/healthcare.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /><path d="M10 10h4"/><path d="M12 8v4"/></svg>
      ),
    },
    {
      title: "Hospitality",
      desc: "Creating seamless experiences for guests.",
      image: "/images/industries/hospitality.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20" /><path d="M4 22V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12" /><path d="M9 15v7" /><path d="M15 15v7" /><path d="M9 15h6" /></svg>
      ),
    },
    {
      title: "Education",
      desc: "Enabling smarter learning environments.",
      image: "/images/industries/education.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
      ),
    },
    {
      title: "Industrial",
      desc: "Robust solutions for demanding environments.",
      image: "/images/industries/industrial.webp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></svg>
      ),
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-[#fafafa] border-t border-slate-100">
      <div className="container-master mx-auto flex flex-col px-4">
        
        {/* Header Section (Kept as requested) */}
        <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.2em] text-deep-navy/50 uppercase mb-4 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy font-[family-name:var(--font-montserrat)] max-w-3xl mx-auto leading-tight mb-6">
            Empowering Critical Sectors with Robust Infrastructure.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Our technology solutions are tailored to meet the rigorous demands of various
            industries, ensuring reliability and performance where it matters most.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {industries.map((item, index) => (
            <Link
              href={`/industries`}
              key={index}
              className="group relative h-[360px] md:h-[400px] rounded-none overflow-hidden flex flex-col justify-end p-6 border border-[#1a365d] bg-deep-navy cursor-pointer transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020a16] via-[#020a16]/70 to-transparent"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col items-start h-full justify-end">
                <h3 className="text-[17px] font-bold text-white mb-1.5 font-[family-name:var(--font-montserrat)] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[13px] leading-relaxed mb-0">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
