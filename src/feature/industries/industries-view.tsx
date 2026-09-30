import { IndustriesHero } from "./sections/hero";
import { IndustriesProcess } from "./sections/process";
import { Industries as IndustriesGrid } from "@/feature/home-view/secctions/industries";
import { GlobalFaq } from "@/app/components/ui/faq";

const industriesFaqs = [
  {
    question: "Do you have experience with strict compliance standards in healthcare?",
    answer: "Yes, we specialize in providing infrastructure that meets rigorous healthcare compliance requirements, ensuring data security and high availability for critical care systems."
  },
  {
    question: "Can you support specialized government infrastructure?",
    answer: "We have extensive experience delivering secure, scalable, and resilient technology solutions tailored for federal and local government operations."
  },
  {
    question: "How do you handle banking & finance infrastructure needs?",
    answer: "Our financial sector solutions prioritize ultra-low latency, robust cybersecurity, and extreme reliability to support mission-critical trading and banking platforms."
  },
  {
    question: "Are your solutions suitable for commercial real estate?",
    answer: "Absolutely. We design and implement smart building technologies that enhance operational efficiency, security, and tenant experiences in commercial properties."
  }
];

export function IndustriesView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesProcess />
      <GlobalFaq items={industriesFaqs} title="Industries FAQs" description="Frequently asked questions about our sector-specific expertise." />
    </main>
  );
}
