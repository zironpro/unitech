import { SolutionsHero } from "./sections/hero";
import { SolutionsGrid } from "./sections/solutions-grid";
import { WhyChooseUs } from "./sections/why-choose-us";

export function SolutionsView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <SolutionsHero />
      <SolutionsGrid />
      <WhyChooseUs />
    </main>
  );
}
