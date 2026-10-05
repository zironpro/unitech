"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface GlobalFaqProps {
  title?: string;
  description?: string;
  items: FaqItem[];
}

export function GlobalFaq({ 
  title = "Frequently Asked Questions", 
  description = "Everything you need to know about our services and solutions.", 
  items 
}: GlobalFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-[#f4f6f8] relative overflow-hidden">
      <div className="container-master mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 font-[family-name:var(--font-ansage)] tracking-tight leading-[1.1] mb-6 w-full text-center">
            {title}
          </h2>
          <p className="text-zinc-500 font-medium text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-semibold text-zinc-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-deep-navy text-white' : 'bg-slate-100 text-zinc-500'}`}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-zinc-500 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
