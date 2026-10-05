import Image from "next/image";
import Link from "next/link";
import { industriesData } from "@/data/industries";

export function Industries() {
  return (
    <section className="w-full py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="container-master mx-auto flex flex-col px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] max-w-3xl mx-auto mb-6 w-full text-center">
            Empowering Critical Sectors with Robust Infrastructure
          </h2>
          <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-base">
            Our technology solutions are tailored to meet the rigorous demands of various
            industries, ensuring reliability and performance where it matters most.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {industriesData.map((item) => (
            <Link
              href={`/industries/${item.id}`}
              key={item.id}
              className="bg-[#f4f6f8] rounded-sm relative overflow-hidden h-[200px] flex group transition-all"
            >
              {/* Left Content */}
              <div className="p-5 md:p-6 flex flex-col justify-between z-10 w-[75%] md:w-[60%]">
                <div>
                  <h3 className="text-lg md:text-2xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight group-hover:text-deep-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-2 leading-relaxed line-clamp-3 pr-8 md:pr-0">
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
