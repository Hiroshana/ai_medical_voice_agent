"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddNewConsultDialog from "./AddNewSessionDialog";
import axios from "axios";
import HistoryTable from "./HistoryTable";
import { sessionDetail } from "../medical-agent/[sessionId]/page";

function HistoryList() {
  const [historyList, setHistoryList] = useState<sessionDetail[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetHistoryList();
  }, []);

  const GetHistoryList = async () => {
    try {
      const result = await axios.get("/api/session-chat?sessionId=all");
      console.log(result);

      if (Array.isArray(result.data)) {
        console.log(result.data);
        setHistoryList(result.data);
      } else {
        console.error("Fetched data is not an array:", result.data);
        setHistoryList([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHistoryList([]); // Handle error by setting an empty array
    } finally {
      setLoading(false);
    }

    // const result = await axios.get("/api/session-chat?sessionId=all");
    // console.log(result.data);
    // setHistoryList(result.data);
  };

  return (
    <div className="mt-10">
      {historyList.length == 0 ? (
        <div className="flex items-center flex-col justify-center p-7 border border-dashed rounded-2xl border-2">
          <Image
            src="/medical-assistance.png"
            alt="No records"
            width={150}
            height={150}
          />
          <h2 className="font-bold text-2xl font-medium text-gray-600 mt-2">
            You have no recent consultation history.
          </h2>
          <p className="text-gray-500">
            It appears that you haven’t had the opportunity to consult with any
            doctors yet.
          </p>
          <AddNewConsultDialog />
        </div>
      ) : (
        <div>
          <HistoryTable historyList={historyList} />
        </div>
      )}
    </div>
  );
}

export default HistoryList;
