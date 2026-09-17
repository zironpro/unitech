"use client";

import { usePathname } from "next/navigation";
import { Cta } from "./Cta";

export function CtaWrapper() {
  const pathname = usePathname();

  // Do not render CTA on the contact page
  if (pathname === "/contact") {
    return null;
  }

  return <Cta />;
}
