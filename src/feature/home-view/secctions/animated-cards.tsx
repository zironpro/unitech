"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  { src: "/images/solutions/data-center.webp", alt: "Data Center", rotation: -26, y: 55, x: -270, zIndex: 10 },
  { src: "/images/solutions/fiber-optic.webp", alt: "Fiber Optic", rotation: -16, y: 28, x: -180, zIndex: 20 },
  { src: "/images/solutions/structured-cabling.webp", alt: "Structured Cabling", rotation: -7, y: 8, x: -90, zIndex: 30 },
  { src: "/images/solutions/security-and-surveillances.webp", alt: "Security", rotation: 0, y: 0, x: 0, zIndex: 40 },
  { src: "/images/solutions/power-protection.webp", alt: "Power Protection", rotation: 7, y: 8, x: 90, zIndex: 30 },
  { src: "/images/solutions/network-infrastructure.webp", alt: "Network Infrastructure", rotation: 16, y: 28, x: 180, zIndex: 20 },
  { src: "/images/solutions/access-control.webp", alt: "Access Control", rotation: 26, y: 55, x: 270, zIndex: 10 },
];

export function AnimatedCards() {
  return (
    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[380px] flex items-end justify-center my-8 z-10 pointer-events-none">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ y: 400, opacity: 0, scale: 0.4, rotate: 0 }}
          animate={{ y: card.y, x: card.x, opacity: 1, scale: 1, rotate: card.rotation }}
          transition={{
            duration: 0.9,
            delay: 0.3 + index * 0.08,
            type: "spring",
            bounce: 0.35,
          }}
          style={{ zIndex: card.zIndex, transformOrigin: "bottom center" }}
          className="absolute bottom-0 w-[95px] h-[130px] sm:w-[125px] sm:h-[170px] md:w-[150px] md:h-[205px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100"
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}