import { AboutHero } from "./sections/hero";
import { WhoWeAre } from "./sections/who-we-are";
import { MissionVision } from "./sections/mission-vision";
import { WhyChooseUs } from "./sections/why-choose-us";
import { Faq } from "../home-view/secctions/faq";

export function AboutView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyChooseUs />
      <Faq />
    </main>
  );
}
