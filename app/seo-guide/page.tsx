import type { Metadata } from "next";
import SeoGuideClient from "./SeoGuideClient";

export const metadata: Metadata = {
  title: "SEO Fundamentals Gids — VintexScan",
  robots: { index: false, follow: false },
};

export default function SeoGuidePage() {
  return <SeoGuideClient />;
}
