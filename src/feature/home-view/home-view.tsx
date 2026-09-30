import { Hero } from "./secctions/hero";
import { WhoWeAre } from "./secctions/who-we-are";
import { Solutions } from "./secctions/solutions";
import { WhyUnitech } from "./secctions/why-unitech";
import { Industries } from "./secctions/industries";
import { Partners } from "./secctions/partners";
import { Faq } from "./secctions/faq";

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
        <Faq />
      </div>
    </main>
  );
}
