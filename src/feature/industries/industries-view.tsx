import { IndustriesHero } from "./sections/hero";
import { IndustriesProcess } from "./sections/process";
import { Industries as IndustriesGrid } from "@/feature/home-view/secctions/industries";

export function IndustriesView() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesProcess />
    </main>
  );
}
