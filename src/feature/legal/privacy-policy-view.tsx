import React from "react";

export function PrivacyPolicyView() {
  return (
    <main className="w-full bg-white pt-32 pb-24 min-h-screen">
      <div className="container-master mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-deep-navy/50 uppercase mb-4 flex items-center">
            <span className="inline-block w-8 h-[2px] bg-electric-blue mr-4"></span>
            LEGAL
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6 font-[family-name:var(--font-montserrat)]">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium">
            Last Updated: {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date())}
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">1. Introduction</h2>
            <p className="leading-relaxed mb-4">
              Unitech Distribution ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">2. Information We Collect</h2>
            <h3 className="text-lg font-bold text-deep-navy mt-4 mb-2">Personal Data</h3>
            <p className="leading-relaxed mb-4">
              We may collect personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information when you voluntarily register with us or contact us regarding our products and services.
            </p>
            <h3 className="text-lg font-bold text-deep-navy mt-4 mb-2">Derivative Data</h3>
            <p className="leading-relaxed">
              Our servers automatically collect information when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">3. Use of Your Information</h2>
            <p className="leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to you.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Respond to product and customer service requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">4. Disclosure of Your Information</h2>
            <p className="leading-relaxed">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights, Third-Party Service Providers, Marketing Communications, and Business Transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">5. Security of Your Information</h2>
            <p className="leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-navy mb-4 font-[family-name:var(--font-montserrat)]">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
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
