"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto pt-20 pb-5 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl mb-4 text-black font-bold dark:text-white max-w-4xl">
          Key Features & Benefits
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Try It Free",
    description: "Your first session is completely free, with no obligation.",
  },
  {
    title: "Review Your History",
    description:
      "Easily access and review transcripts of your previous consultations.",
  },
  {
    title: "Free Medical Reports",
    description:
      "Get a detailed summary of your session and recommended next steps.",
  },
  {
    title: "Premium Membership",
    description: "For just 120$ per month, get up to 10 consultations.",
  },
  {
    title: "Dedicated Email Support",
    description:
      "As a premium member, get answers to your questions directly from our support team.",
  },
  {
    title: "Secure and Private",
    description:
      "Your data and conversations are kept completely confidential.",
  },
];
