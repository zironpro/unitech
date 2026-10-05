import { industriesData } from "@/data/industries";
import { notFound } from "next/navigation";
import { IndustryDetailView } from "@/feature/industries/industry-detail-view";

export async function generateStaticParams() {
  return industriesData.map((industry) => ({
    slug: industry.id,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industriesData.find((i) => i.id === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailView industry={industry} />;
}
