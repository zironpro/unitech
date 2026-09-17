"use client";

export function ContactForm() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 container-master mx-auto bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
        
        {/* Left Column: Contact Info */}
        <div className="flex flex-col">
          <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4 block">
            CONTACT INFO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy leading-[1.15] font-[family-name:var(--font-montserrat)] mb-8">
            We'd Love To Hear From You.
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-12">
            Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-deep-navy shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="font-bold text-deep-navy text-[15px] mb-1">Our Headquarters</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Jewellery & Gemplex Building<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-deep-navy shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="font-bold text-deep-navy text-[15px] mb-1">Call Us Directly</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  +971 4 123 4567<br />
                  Mon-Fri, 9am to 6pm GST
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-deep-navy shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="font-bold text-deep-navy text-[15px] mb-1">Email Support</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  info@unitech-distribution.com<br />
                  support@unitech-distribution.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-[#fcfcfd] rounded-none p-8 lg:p-12 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-semibold text-deep-navy">First Name</label>
                <input type="text" id="firstName" className="w-full px-4 py-3 rounded-none border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition-colors text-slate-700" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-semibold text-deep-navy">Last Name</label>
                <input type="text" id="lastName" className="w-full px-4 py-3 rounded-none border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition-colors text-slate-700" placeholder="Doe" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-deep-navy">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-none border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition-colors text-slate-700" placeholder="john@company.com" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-semibold text-deep-navy">Subject</label>
              <input type="text" id="subject" className="w-full px-4 py-3 rounded-none border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition-colors text-slate-700" placeholder="How can we help?" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-deep-navy">Message</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-none border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition-colors text-slate-700 resize-none" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" className="w-full bg-electric-blue text-white px-8 py-4 rounded-none font-bold hover:bg-bright-blue transition-colors mt-2 flex items-center justify-center gap-2 shadow-lg shadow-deep-navy/10">
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
