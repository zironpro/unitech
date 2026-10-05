"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const Hero = () => {
  return (
    <section className="sticky top-0 z-0 w-full h-[100dvh] overflow-hidden bg-black flex items-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 min-w-full min-h-full object-cover z-0 opacity-70"
      >
        <source src="/video/hero-bg.webm" media="(min-width: 768px)" type="video/webm" />
        <source src="/video/hero-mobile.webm" media="(max-width: 767px)" type="video/webm" />
        {/* Fallback */}
        <source src="/video/hero-bg.webm" type="video/webm" />
      </video>

      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent z-10" />

      <div className="container-master relative z-20 mx-auto pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center text-center md:items-start md:text-left mx-auto md:mx-0"
        >
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.1] mb-6 font-[family-name:var(--font-ansage)]">
            Smart, Connected<br />
            Infrastructure
          </h1>
          <p className="text-base md:text-lg text-zinc-300 font-medium mb-10 max-w-xl leading-relaxed">
            World-class technology solutions for connectivity, data centers, and security.
          </p>
          <button className="bg-white text-black px-8 py-4 font-bold hover:bg-zinc-200 transition-colors flex items-center gap-3 text-sm md:text-base rounded-lg shadow-xl">
            Explore Our Solutions <FiArrowRight className="text-lg" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};