import HeroSectionOne from "@/components/HeroSectionOne";
import SectionTwo from "@/components/SectionTwo";
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
