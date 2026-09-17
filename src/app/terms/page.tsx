import { TermsView } from "@/feature/legal/terms-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Unitech Distribution",
  description: "Terms of Use for Unitech Distribution.",
};

export default function TermsPage() {
  return <TermsView />;
}
