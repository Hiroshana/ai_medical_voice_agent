import HeroSectionOne from "@/components/HeroSectionOne";
import SectionTwo from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import OurSpecializedAgents from "@/components/OurSpecializedAgents";

export default function Home() {
  return (
    <>
      <HeroSectionOne />;
      <HowItWorks />
      <OurSpecializedAgents />
      <KeyFeatures />
      {/* <SectionTwo /> */}
    </>
  );
}
