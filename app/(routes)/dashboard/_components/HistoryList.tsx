"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);
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
          <Button className="mt-3">
            + Would you like assistance in arranging a consultation?
          </Button>
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  );
}

export default HistoryList;
