import { SolutionsHero } from "./sections/hero";
import { SolutionsGrid } from "./sections/solutions-grid";
import { WhyChooseUs } from "./sections/why-choose-us";
import { Partners } from "@/feature/home-view/secctions/partners";
import { GlobalFaq } from "@/app/components/ui/faq";

const solutionsFaqs = [
  {
    question: "Do you offer customized solutions for specific business needs?",
    answer: "Yes, we understand that every organization is unique. We provide tailored infrastructure solutions that align perfectly with your operational requirements and business goals."
  },
  {
    question: "What brands and technologies do your solutions support?",
    answer: "We partner with tier-1 global technology vendors across networking, data center, cybersecurity, and physical infrastructure to deliver best-of-breed solutions."
  },
  {
    question: "How long does a typical implementation take?",
    answer: "Implementation timelines vary depending on the scope and complexity of the project. A standard deployment can range from a few weeks for basic setups to several months for large-scale data centers."
  },
  {
    question: "Can your solutions scale as my business grows?",
    answer: "Absolutely. Scalability is a core design principle in all our solutions, ensuring your initial investment is protected and your infrastructure can grow seamlessly alongside your business."
  }
];

export function SolutionsView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <SolutionsHero />
      <SolutionsGrid />
      <Partners />
      <WhyChooseUs />
      <GlobalFaq items={solutionsFaqs} title="Solutions FAQs" description="Common questions about our technology implementations." />
    </main>
  );
}
