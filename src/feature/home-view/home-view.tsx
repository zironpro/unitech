import { Hero } from "./secctions/hero";
import { WhoWeAre } from "./secctions/who-we-are";
import { Solutions } from "./secctions/solutions";
import { WhyUnitech } from "./secctions/why-unitech";
import { Industries } from "./secctions/industries";
import { Partners } from "./secctions/partners";

export function HomeView() {
  return (
    <main className="flex min-h-viewport flex-col">
      <Hero />
      <Partners />
      <WhoWeAre />
      <Solutions />
      <WhyUnitech />
      <Industries />
    </main>
  );
}
