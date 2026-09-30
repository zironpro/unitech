"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="sticky top-0 z-0 w-full h-screen overflow-hidden bg-black flex items-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        src="/video/hero-bg.webm"
      />
      
      {/* Gradient overlay to ensure text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      <div className="container-master relative z-20 mx-auto pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-start text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1] mb-6 font-[family-name:var(--font-ansage)]">
            Smart, Connected Infrastructure.
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 font-medium mb-10 max-w-xl leading-relaxed">
            World-class technology solutions for connectivity, data centers, and security.
          </p>
          <button className="bg-white text-black px-8 py-4 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-3 text-sm md:text-base rounded-sm shadow-xl">
            Explore Our Solutions <FiArrowRight className="text-lg" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};