import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import { SolutionDetailView } from "@/feature/solutions/solution-detail-view";

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.id,
  }));
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const solution = solutions.find((s) => s.id === resolvedParams.slug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetailView solution={solution} />;
}
