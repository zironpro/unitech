import React from "react";

export function TermsView() {
  return (
    <main className="w-full bg-white pt-32 pb-24 min-h-screen">
      <div className="container-master mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-deep-navy/50 uppercase mb-4 flex items-center">
            <span className="inline-block w-8 h-[2px] bg-electric-blue mr-4"></span>
            LEGAL
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6 font-[family-name:var(--font-montserrat)]">
            Terms of Use
          </h1>
          <p className="text-slate-500 font-medium">
            Last Updated: {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())}
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">1. Agreement to Terms</h2>
            <p className="leading-relaxed mb-4">
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Unitech Distribution ("Company," "we," "us," or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p className="leading-relaxed">
              You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">2. Intellectual Property Rights</h2>
            <p className="leading-relaxed mb-4">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">3. User Representations</h2>
            <p className="leading-relaxed mb-4">By using the Site, you represent and warrant that:</p>
            <ul className="list-decimal pl-6 space-y-2">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
              <li>You will not use the Site for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">4. Products and Services</h2>
            <p className="leading-relaxed">
              We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">5. Modifications and Interruptions</h2>
            <p className="leading-relaxed">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">6. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and defined following the laws of the United Arab Emirates. Unitech Distribution and yourself irrevocably consent that the courts of Dubai shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">7. Contact Us</h2>
            <p className="leading-relaxed">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-none border border-slate-200">
              <p className="font-bold text-deep-navy mb-1">Unitech Distribution</p>
              <p className="text-slate-600 mb-1">Dubai, United Arab Emirates</p>
              <p className="text-slate-600 mb-1">Phone: +971 50 424 3288</p>
              <p className="text-electric-blue font-medium">Email: Info@unitechdistribution.com</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
