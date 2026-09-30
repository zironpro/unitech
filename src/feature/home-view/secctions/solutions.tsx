"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "structured-cabling",
    title: "Cabling",
    tags: "Copper, Fiber, Backbone, Racks",
    desc: "High-performance copper and fiber infrastructure designed for reliability and speed.",
    image: "/images/solutions/structured-cabling.webp",
  },
  {
    id: "datacenter-solution",
    title: "Data Center",
    tags: "Design, Cooling, Power, Racks",
    desc: "Reliable, scalable and efficient data environments built for enterprise demands.",
    image: "/images/solutions/data-center.webp",
  },
  {
    id: "cctv",
    title: "Security",
    tags: "CCTV, Access Control, Monitoring",
    desc: "Advanced surveillance and access control systems for complete facility protection.",
    image: "/images/solutions/security-and-surveillances.webp",
  },
  {
    id: "ups",
    title: "Power",
    tags: "UPS, Inverters, Batteries",
    desc: "Uninterruptible power supplies and critical power continuity solutions.",
    image: "/images/solutions/power-protection.webp",
  },
  {
    id: "wireless",
    title: "Wireless",
    tags: "Wi-Fi, LTE, Point-to-Point",
    desc: "Enterprise wireless and robust connectivity solutions for seamless operations.",
    image: "/images/solutions/lte.webp",
  },
  {
    id: "fiber-optic",
    title: "Fiber Optic",
    tags: "Splicing, Testing, FTTH",
    desc: "High-bandwidth fiber connectivity for modern high-speed networks.",
    image: "/images/solutions/fiber-optic.webp",
  },
];

export function Solutions() {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#FDFBF7] flex flex-col items-center">
      <div className="container-master w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight">
              Our Core Services
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/solutions" className="text-zinc-500 text-sm font-bold uppercase tracking-wider hover:text-zinc-900 transition-colors flex items-center gap-2 pb-2">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </motion.div>
        </div>

        {/* Rows List */}
        <div className="flex flex-col border-t border-zinc-200">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href={`/solutions/${item.id}`}
                className="group flex flex-col md:flex-row items-start md:items-center w-full py-6 md:py-8 border-b border-zinc-200 hover:bg-white transition-colors px-2 md:px-4 gap-6 md:gap-0"
              >
                {/* 1. Number */}
                <div className="w-full md:w-[5%] flex-shrink-0 text-zinc-900 font-mono text-sm font-bold flex items-start self-start pt-1 md:pt-3">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* 2. Title */}
                <div className="w-full md:w-[25%] flex-shrink-0 self-start md:pt-1">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight group-hover:opacity-70 transition-opacity">
                    {item.title}
                  </h3>
                </div>

                {/* 3. Tags */}
                <div className="w-full md:w-[20%] flex-shrink-0 self-start md:pt-3">
                  <p className="text-[10px] sm:text-xs font-mono text-[#F45D22] uppercase leading-relaxed tracking-wider max-w-[150px]">
                    {item.tags.split(', ').map(tag => (
                      <span key={tag} className="block">{tag}</span>
                    ))}
                  </p>
                </div>

                {/* 4. Description */}
                <div className="w-full md:w-[25%] flex-shrink-0 self-start pr-4 lg:pr-10 md:pt-3">
                  <p className="text-sm md:text-base text-zinc-800 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* 5. Image */}
                <div className="w-full md:w-[25%] h-48 md:h-28 lg:h-36 relative overflow-hidden flex-shrink-0 mt-4 md:mt-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
