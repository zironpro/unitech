import Image from "next/image";
import Link from "next/link";

export function Industries() {
  const industries = [
    {
      title: "Data Centers",
      desc: "Building the backbone for a connected world.",
      image: "/images/industries/ind_data_center.jpg",
    },
    {
      title: "Telecommunications",
      desc: "Powering stronger networks and connectivity.",
      image: "/images/industries/ind_telecom.jpg",
    },
    {
      title: "Commercial Buildings",
      desc: "Reliable infrastructure for modern workplaces.",
      image: "/images/industries/ind_commercial.jpg",
    },
    {
      title: "Government",
      desc: "Secure and dependable solutions for critical operations.",
      image: "/images/industries/ind_government.jpg",
    },
    {
      title: "Healthcare",
      desc: "Supporting better care with reliable technology.",
      image: "/images/industries/ind_healthcare.jpg",
    },
    {
      title: "Hospitality",
      desc: "Creating seamless experiences for guests.",
      image: "/images/industries/ind_hospitality.jpg",
    },
    {
      title: "Education",
      desc: "Enabling smarter learning environments.",
      image: "/images/industries/ind_education.jpg",
    },
    {
      title: "Industrial",
      desc: "Robust solutions for demanding environments.",
      image: "/images/industries/ind_industrial.jpg",
    },
    {
      title: "Banking & Finance",
      desc: "Secure, high-speed infrastructure for critical transactions.",
      image: "/images/industries/ind_finance.jpg",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="container-master mx-auto flex flex-col px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] max-w-3xl mx-auto leading-tight mb-6">
            Empowering Critical Sectors with Robust Infrastructure.
          </h2>
          <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-base">
            Our technology solutions are tailored to meet the rigorous demands of various
            industries, ensuring reliability and performance where it matters most.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {industries.map((item, index) => (
            <Link
              href={`/industries`}
              key={index}
              className="bg-[#f4f6f8] rounded-sm relative overflow-hidden h-[200px] flex group transition-all"
            >
              {/* Left Content */}
              <div className="p-6 flex flex-col justify-between z-10 w-[60%]">
                <div>
                  <h3 className="font-bold text-zinc-900 text-lg group-hover:text-deep-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-2 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <button className="w-8 h-8 bg-deep-navy text-white flex items-center justify-center rounded-sm hover:bg-dark-blue group-hover:bg-dark-blue transition-colors shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>

              {/* Right Image (Seamless Blend) */}
              <div className="absolute right-[-30px] bottom-[-20px] w-[220px] h-[220px] transition-transform duration-700 group-hover:scale-105 mix-blend-multiply">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover md:object-contain rounded-full"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
