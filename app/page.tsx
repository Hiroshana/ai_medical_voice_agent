import HeroSectionOne from "@/components/HeroSectionOne";
import SectionTwo from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSectionOne />;
      <SectionTwo />
    </>
  );
}
