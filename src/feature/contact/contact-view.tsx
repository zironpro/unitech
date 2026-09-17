import { ContactHero } from "./sections/hero";
import { ContactForm } from "./sections/contact-form";
import { ContactMap } from "./sections/map";

export function ContactView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
