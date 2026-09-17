import { PrivacyPolicyView } from "@/feature/legal/privacy-policy-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Unitech Distribution",
  description: "Privacy Policy for Unitech Distribution.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
