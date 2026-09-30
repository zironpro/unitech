"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function WhoWeAre() {
  return (
    <section className="w-full section-master bg-white relative overflow-hidden py-16 md:py-24" id="who-we-are">
      <div className="container-master mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between w-full">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[55%] flex flex-col items-start text-left lg:pr-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-zinc-900 mb-6 font-[family-name:var(--font-ansage)] leading-[1.05] tracking-tight w-full">
              A trusted ICT partner for a connected tomorrow.
            </h2>
            
            <div className="flex flex-col gap-6 text-base md:text-lg text-zinc-500 font-medium mb-10 leading-relaxed w-full">
              <p>
                Unitech Distribution is a value-added ICT distributor delivering
                world-class technology products, solutions and expertise across
                connectivity, data centers, security, and wireless infrastructure.
              </p>
              <p>
                Based in the UAE, we provide end-to-end infrastructure solutions through a strong network of partners, resellers, and system integrators. Our mission is to help organizations build smarter, more secure, and future-ready IT environments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-deep-navy text-white px-6 py-3.5 rounded-full font-bold hover:bg-dark-blue transition-colors flex items-center justify-center gap-3 text-sm shadow-xl">
                Explore Solutions
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </button>
              <button className="bg-zinc-100 text-zinc-900 px-6 py-3.5 rounded-full font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3 text-sm">
                About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </button>
            </div>
          </motion.div>

          {/* Right Images Masonry Layout (Infinite Scroll) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-[45%] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden flex gap-4 md:gap-6 justify-center lg:justify-end relative"
          >
            {/* Top/Bottom Fade Masks for smooth scroll entry/exit */}
            <div className="absolute inset-0 z-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to bottom, white 0%, transparent 15%, transparent 85%, white 100%)' }}></div>

            {/* Column 1 (Scrolling Up) */}
            <motion.div 
              animate={{ y: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 10, repeat: Infinity }}
              className="flex flex-col gap-4 md:gap-6"
            >
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-4 md:gap-6">
                  <div className="relative w-40 md:w-56 h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-lg group flex-shrink-0">
                    <Image src="/images/simple-data-center.jpg" alt="Data Center" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-zinc-900/90 backdrop-blur-sm text-white pl-4 pr-1 py-1.5 rounded-full flex items-center justify-between">
                      <span className="text-[10px] md:text-xs font-semibold tracking-wide">10+ Years</span>
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center text-zinc-900">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-40 md:w-56 h-48 md:h-64 rounded-[2rem] overflow-hidden shadow-lg group flex-shrink-0">
                    <Image src="/images/simple-security.jpg" alt="Security" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-zinc-900/90 backdrop-blur-sm text-white pl-4 pr-1 py-1.5 rounded-full flex items-center justify-between">
                      <span className="text-[10px] md:text-xs font-semibold tracking-wide">500+ Partners</span>
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center text-zinc-900">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Column 2 (Scrolling Down, Staggered offset) */}
            <motion.div 
              animate={{ y: ["-50%", "0%"] }}
              transition={{ ease: "linear", duration: 12, repeat: Infinity }}
              className="flex flex-col gap-4 md:gap-6 mt-12 md:mt-20"
            >
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-4 md:gap-6">
                  <div className="relative w-40 md:w-56 h-56 md:h-72 rounded-[2rem] overflow-hidden shadow-lg group flex-shrink-0">
                    <Image src="/images/simple-cabling.jpg" alt="Cabling" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-zinc-900/90 backdrop-blur-sm text-white pl-4 pr-1 py-1.5 rounded-full flex items-center justify-between">
                      <span className="text-[10px] md:text-xs font-semibold tracking-wide">UAE Presence</span>
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center text-zinc-900">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-40 md:w-56 h-56 md:h-72 rounded-[2rem] overflow-hidden shadow-lg group flex-shrink-0">
                    <Image src="/images/simple-fiber.jpg" alt="Fiber" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-zinc-900/90 backdrop-blur-sm text-white pl-4 pr-1 py-1.5 rounded-full flex items-center justify-between">
                      <span className="text-[10px] md:text-xs font-semibold tracking-wide">1000+ Products</span>
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center text-zinc-900">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
