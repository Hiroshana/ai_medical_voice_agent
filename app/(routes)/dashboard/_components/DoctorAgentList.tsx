import React from "react";
import { AIDoctorAgents } from "@/shared/list";
import DoctorAgentCard from "./DoctorAgentCard";

function AgentList() {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-xl">AI Specialist Doctor's List</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mt-5">
        {AIDoctorAgents.map((doctor, index) => (
          <div key={index}>
            <DoctorAgentCard doctorAgent={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentList;
