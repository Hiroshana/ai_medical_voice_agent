"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { IconArrowRight } from "@tabler/icons-react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { useScroll } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export type doctorAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId?: string;
  subscriptionRequired: boolean;
};

type props = {
  doctorAgent: doctorAgent;
};

function AgentCard({ doctorAgent }: props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { has } = useAuth();
  const isPaidUser = has && has({ plan: "pro" });

  // Save All Info To database
  const onStartConsultation = async () => {
    setLoading(true);
    const result = await axios.post("/api/session-chat", {
      notes: "New Consult",
      selectedDoctor: doctorAgent,
    });

    console.log(result.data);
    //Route new Conversation Screen
    if (result.data?.sessionId) {
      console.log(result.data.sessionId);

      router.push("/dashboard/medical-agent/" + result.data.sessionId);
    }

    setLoading(false);
  };

  return (
    <div className="relative">
      {doctorAgent.subscriptionRequired && (
        <Badge className="absolute m-2 px-2 py-1 right-0 bg-purple-800">
          Premium
        </Badge>
      )}
      <Image
        src={doctorAgent.image}
        alt={doctorAgent.specialist}
        width={600}
        height={600}
        className="w-full h-[300px] object-cover object-top rounded-lg"
      />
      <h2 className="font-bold">{doctorAgent.specialist}</h2>
      <p className="line-clamp-2 text-sm text-gray-500">
        {doctorAgent.description}
      </p>
      <Button
        className="w-full mt-2"
        onClick={onStartConsultation}
        disabled={!isPaidUser && doctorAgent.subscriptionRequired}
      >
        Start Consultation{" "}
        {loading ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <IconArrowRight />
        )}
      </Button>
    </div>
  );
}

export default AgentCard;
