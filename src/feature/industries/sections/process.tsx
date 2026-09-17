import React from "react";

export function IndustriesProcess() {
  const steps = [
    {
      title: "Industry Requirements",
      desc: "We understand your environment and challenges.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Tailored Solutions",
      desc: "We combine the right technologies and expertise.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      title: "Better Outcomes",
      desc: "A more connected, secure and efficient future.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      title: "Ongoing Support",
      desc: "Continuous optimization and dedicated assistance.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f8fafc] border-b border-slate-100">
      <div className="container-master mx-auto px-4">
        
        {/* Top Content Split */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-16 lg:mb-20">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-deep-navy/50 uppercase mb-4 flex items-center">
              <span className="inline-block w-8 h-[2px] bg-amber-400 mr-4"></span>
              SOLUTIONS FOR YOUR INDUSTRY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy leading-tight font-[family-name:var(--font-montserrat)]">
              From Industry Needs to Integrated Solutions.
            </h2>
          </div>
          
          <div className="max-w-md lg:text-right">
            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
              We understand that every industry has unique challenges. Unitech Distribution combines the right technologies to deliver tailored infrastructure solutions.
            </p>
          </div>
          
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center gap-4 w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[#eef2f6] rounded-full flex items-center justify-center text-deep-navy shadow-sm">
                <div className="[&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8 [&>svg]:stroke-[1.5]">
                  {step.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm sm:text-lg font-bold text-deep-navy mb-1.5 sm:mb-2 font-[family-name:var(--font-montserrat)]">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[11px] sm:text-[13px] leading-relaxed max-w-[180px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
