import { AboutHero } from "./sections/hero";
import { WhoWeAre } from "./sections/who-we-are";
import { MissionVision } from "./sections/mission-vision";
import { WhyChooseUs } from "./sections/why-choose-us";
import { GlobalFaq } from "@/app/components/ui/faq";

const aboutFaqs = [
  {
    question: "What is Unitech Distribution's core mission?",
    answer: "Our mission is to empower businesses across the region by providing robust, scalable, and innovative ICT infrastructure solutions tailored to modern technological demands."
  },
  {
    question: "How many years of experience does Unitech have?",
    answer: "We bring decades of combined industry experience, having successfully delivered hundreds of critical infrastructure projects across the Middle East."
  },
  {
    question: "Do you have local presence and support?",
    answer: "Yes, our headquarters are based in Dubai, UAE, allowing us to provide rapid local support, logistics, and technical expertise to all our regional clients."
  }
];

export function AboutView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs />
      <GlobalFaq items={aboutFaqs} title="About Us FAQs" description="Learn more about our company and values." />
    </main>
  );
}
