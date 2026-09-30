import { ContactHero } from "./sections/hero";
import { ContactForm } from "./sections/contact-form";
import { ContactMap } from "./sections/map";
import { GlobalFaq } from "@/app/components/ui/faq";

const contactFaqs = [
  {
    question: "What are your standard business hours?",
    answer: "Our team is available Monday through Friday, from 9:00 AM to 6:00 PM Gulf Standard Time (GST). We also offer 24/7 support for clients on dedicated maintenance contracts."
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We strive to respond to all general inquiries within 24 business hours. For existing clients with critical support needs, we follow the SLAs defined in your contract."
  },
  {
    question: "Can I request a consultation or site visit?",
    answer: "Yes, you can request a consultation through our contact form. One of our specialists will reach out to schedule a meeting or a physical site visit to assess your infrastructure needs."
  }
];

export function ContactView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <GlobalFaq items={contactFaqs} title="Support FAQs" description="Common questions about reaching our team." />
    </main>
  );
}
