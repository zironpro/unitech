import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export function WhyUnitech() {
  return (
    <section className="w-full bg-white relative pb-20">
      {/* Top Header Section */}
      <div className="container-master mx-auto py-16 md:py-24">
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] leading-tight flex-1">
            Why Choose Us
          </h2>
          <div className="flex-1 max-w-xl lg:pt-2">
            <p className="text-sm md:text-base text-zinc-500 font-medium leading-relaxed">
              Experience a seamless technology journey with carefully curated
              solutions, transparent pricing, and professional guidance designed to help you
              build the perfect infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Middle Image Section with Floating Card */}
      <div className="relative w-full h-[600px] md:h-[700px]">
        {/* Background Image (Parallax/Fixed Effect) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed brightness-75"
          style={{ backgroundImage: "url('/images/simple-hero-bg.jpg')" }}
        />

        {/* Floating White Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] lg:w-[85%] max-w-6xl bg-white p-8 md:p-12 shadow-2xl rounded-sm">

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 border-b border-zinc-100 pb-12">

            {/* Stat 1 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Trusted Partners</span>
                <FiArrowUpRight className="text-zinc-900 text-lg" />
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-900 tracking-tighter">
                  30+
                </h3>
                <div className="w-20 h-24 relative overflow-hidden rounded-sm">
                  <Image src="/images/simple-fiber.jpg" alt="Partners" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Client Satisfaction</span>
                <FiArrowUpRight className="text-zinc-900 text-lg" />
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-900 tracking-tighter">
                  98%
                </h3>
                <div className="w-20 h-24 relative overflow-hidden rounded-sm">
                  <Image src="/images/simple-security.jpg" alt="Satisfaction" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Projects Delivered</span>
                <FiArrowUpRight className="text-zinc-900 text-lg" />
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-900 tracking-tighter">
                  1.2K+
                </h3>
                <div className="w-20 h-24 relative overflow-hidden rounded-sm">
                  <Image src="/images/simple-cabling.jpg" alt="Projects" fill className="object-cover" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Text */}
          <div className="pt-8 pb-8 text-center">
            <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-lg mx-auto">
              Join trusted organizations collaborating with us to drive
              impactful technology and compliance solutions.
            </p>
          </div>

          {/* Main Partners Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 pb-4">
            {[
              "/images/main-partners/bosch.svg",
              "/images/main-partners/cisco.svg",
              "/images/main-partners/hp.svg",
              "/images/main-partners/ita-power",
              "/images/main-partners/keline"
            ].map((src, index) => (
              <div key={index} className="relative w-16 h-8 md:w-24 md:h-10 opacity-70 hover:opacity-100 transition-opacity mix-blend-multiply">
                <Image src={src} alt="Partner Logo" fill className="object-contain" />
              </div>
            ))}
          </div>

          {/* Bottom Features Row */}
          <div className="w-full border-t border-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 gap-8 lg:gap-0 mt-8">
            <div className="flex flex-col text-left px-4 lg:px-6 lg:border-r lg:border-zinc-100">
              <h4 className="font-bold text-zinc-900 text-sm mb-2 tracking-tight">Industry Expertise</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Solutions aligned with real infrastructure needs.</p>
            </div>
            <div className="flex flex-col text-left px-4 lg:px-6 lg:border-r lg:border-zinc-100">
              <h4 className="font-bold text-zinc-900 text-sm mb-2 tracking-tight">Trusted Manufacturers</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Access to established global technology brands.</p>
            </div>
            <div className="flex flex-col text-left px-4 lg:px-6 lg:border-r lg:border-zinc-100">
              <h4 className="font-bold text-zinc-900 text-sm mb-2 tracking-tight">Integrated Portfolio</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Connectivity, security, power and infrastructure under one ecosystem.</p>
            </div>
            <div className="flex flex-col text-left px-4 lg:px-6">
              <h4 className="font-bold text-zinc-900 text-sm mb-2 tracking-tight">Partner Focused</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Built around system integrators, installers and resellers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
