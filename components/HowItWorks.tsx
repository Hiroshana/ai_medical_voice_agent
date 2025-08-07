import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Choose Your Path:",
      content: (
        <div>
          <p className="text-2xl font-normal text-neutral-800 md:text-md dark:text-neutral-200">
            If you know what you need, choose from one of our 10 specialized AI
            agents like a Cardiologist or Dermatologist.
          </p>
        </div>
      ),
    },
    {
      title: "Let Us Guide You:",
      content: (
        <div>
          <p className="text-2xl font-normal text-neutral-800 md:text-md dark:text-neutral-200">
            Not sure where to start? Describe your symptoms in a quick text
            message, and our system will suggest the right specialist for you.
          </p>
        </div>
      ),
    },
    {
      title: "Start Talking:",
      content: (
        <div>
          <p className="text-2xl font-normal text-neutral-800 md:text-md dark:text-neutral-200">
            Begin a voice chat with the AI agent to get personalized advice and
            answers.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip bg-amber-600">
      <Timeline data={data} />
    </div>
  );
}
