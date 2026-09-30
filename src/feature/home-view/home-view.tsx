import { Hero } from "./secctions/hero";
import { WhoWeAre } from "./secctions/who-we-are";
import { Solutions } from "./secctions/solutions";
import { WhyUnitech } from "./secctions/why-unitech";
import { Industries } from "./secctions/industries";
import { Partners } from "./secctions/partners";
import { GlobalFaq } from "@/app/components/ui/faq";

const homeFaqs = [
  {
    question: "What industries do you primarily serve?",
    answer: "We provide comprehensive technology and infrastructure solutions for a wide range of industries including Data Centers, Telecommunications, Healthcare, Commercial Buildings, Government, and Banking & Finance."
  },
  {
    question: "Do you offer post-installation support and maintenance?",
    answer: "Yes, our commitment extends beyond delivery. We work closely with our partners and system integrators to ensure long-term support, maintenance, and seamless operation of all deployed infrastructure."
  },
  {
    question: "How do you select your technology partners?",
    answer: "We partner exclusively with globally recognized, tier-1 manufacturers who meet strict standards for reliability, innovation, and performance to ensure our clients receive only the best-in-class solutions."
  },
  {
    question: "Can you handle large-scale enterprise deployments?",
    answer: "Absolutely. We specialize in scaling robust IT ecosystems. Our logistics, expert network, and integrated portfolio allow us to seamlessly execute enterprise-level infrastructure rollouts across the region."
  }
];

export function HomeView() {
  return (
    <main className="flex min-h-viewport flex-col">
      <Hero />
      <div className="relative z-10 bg-white flex flex-col">
        <Partners />
        <WhoWeAre />
        <Solutions />
        <WhyUnitech />
        <Industries />
        <GlobalFaq items={homeFaqs} />
      </div>
    </main>
  );
}
