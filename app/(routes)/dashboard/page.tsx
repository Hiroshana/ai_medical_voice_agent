import React from "react";
import HistoryList from "./_components/HistoryList";
import { Button } from "@/components/ui/button";
import AgentList from "./_components/DoctorAgentList";
import AddNewConsultDialog from "./_components/AddNewSessionDialog";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">My Dashboard</h2>
        <AddNewConsultDialog />
      </div>

      <HistoryList />
      <AgentList />
    </div>
  );
};

export default Dashboard;
