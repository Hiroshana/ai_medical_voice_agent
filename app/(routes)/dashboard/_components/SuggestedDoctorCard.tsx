import React, { ReactNode } from "react";
import { doctorAgent } from "./DoctorAgentCard";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

type props = {
  doctorAgent: doctorAgent;
  setSelectedDoctor: any;
  selectedDoctor: doctorAgent;
};

function SuggestedDoctorCard({
  doctorAgent,
  setSelectedDoctor,
  selectedDoctor,
}: props) {
  return (
    <div
      className={`flex flex-col items-center justify-between border rounded-2xl shadow p-5 hover:border-purple-500 cursor-pointer ${
        selectedDoctor?.id == doctorAgent?.id && "border-purple-500"
      }`}
      onClick={() => setSelectedDoctor(doctorAgent)}
    >
      <Image
        src={doctorAgent?.image}
        alt={doctorAgent?.specialist}
        width={70}
        height={70}
        className="h-[50px] w-[50px] object-cover rounded-4xl"
      />
      <h2 className="font-bold text-sm text-center">
        {doctorAgent?.specialist}
      </h2>
      <p className="line-clamp-2 text-sm text-gray-500 text-center">
        {doctorAgent?.description}
      </p>
    </div>
  );
}

export default SuggestedDoctorCard;
