import React from "react";
import HistoryList from "./_components/HistoryList";
import { Button } from "@/components/ui/button";
import AgentList from "./_components/DoctorAgentList";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">My Dashboard</h2>
        <Button>+ Consult With Doctor</Button>
      </div>

      <HistoryList />
      <AgentList />
    </div>
  );
};

export default Dashboard;
