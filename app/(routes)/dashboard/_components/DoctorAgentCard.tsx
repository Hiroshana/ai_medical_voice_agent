import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
type doctorAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId: string;
  subscriptionRequired: string;
};

type props = {
  doctorAgent: doctorAgent;
};

function AgentCard({ doctorAgent }: props) {
  return (
    <div className="">
      <Image
        src={doctorAgent.image}
        alt={doctorAgent.specialist}
        width={500}
        height={500}
        className="w-full h-[250px] object-cover rounded-lg"
      />
      <h2 className="font-bold">{doctorAgent.specialist}</h2>
      <p className="line-clamp-2 text-sm text-gray-500">
        {doctorAgent.description}
      </p>
      <Button className="w-full mt-2">
        Start Consultation
        <IconArrowRight />
      </Button>
    </div>
  );
}

export default AgentCard;
