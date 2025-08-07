import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { sessionDetail } from "../medical-agent/[sessionId]/page";
import moment from "moment";

type props = {
  record: sessionDetail;
};

function ViewReport({ record }: props) {
  return (
    <Dialog>
      <DialogTrigger className="mt-3">
        <Button variant={"outline"} size={"sm"}>
          View Report
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <h2 className="text-center text-2xl">
              Medical AI Voice Agent Report
            </h2>
          </DialogTitle>
          <DialogDescription>
            <div>
              <h2 className="font-bold text-purple-800">Session Info</h2>
              <div className="grid grid-cols-2">
                <h2>
                  <span className="font-bold">Doctor: </span>
                  {record.selectedDoctor?.specialist}
                </h2>
                <h2>
                  <span className="font-bold">Consulted date: </span>
                  {moment(new Date(record?.createdOn)).format()}
                </h2>
                <h2>
                  <span className="font-bold">User: </span>
                  {record?.selectedDoctor.voiceId}
                </h2>
                <h2>
                  <span className="font-bold">Agent: </span>
                  {moment(new Date(record?.createdOn)).fromNow()}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-purple-800">Chief Complaint</h2>
              <div className="grid grid-cols-2">
                <h2>
                  <span className="font-bold">Doctor: </span>
                  {record.selectedDoctor?.specialist}
                </h2>
                <h2>
                  <span className="font-bold">Consulted date: </span>
                  {moment(new Date(record?.createdOn)).format()}
                </h2>
                <h2>
                  <span className="font-bold">User: </span>
                  {record?.selectedDoctor.voiceId}
                </h2>
                <h2>
                  <span className="font-bold">Agent: </span>
                  {moment(new Date(record?.createdOn)).fromNow()}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-purple-800">Summary</h2>
              <div className="grid grid-cols-2">
                <h2>
                  <span className="font-bold">Doctor: </span>
                  {record.selectedDoctor?.specialist}
                </h2>
                <h2>
                  <span className="font-bold">Consulted date: </span>
                  {moment(new Date(record?.createdOn)).format()}
                </h2>
                <h2>
                  <span className="font-bold">User: </span>
                  {record?.selectedDoctor.voiceId}
                </h2>
                <h2>
                  <span className="font-bold">Agent: </span>
                  {moment(new Date(record?.createdOn)).fromNow()}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-purple-800">Symptoms</h2>
              <div className="grid grid-cols-2">
                <h2>
                  <span className="font-bold">Doctor: </span>
                  {record.selectedDoctor?.specialist}
                </h2>
                <h2>
                  <span className="font-bold">Consulted date: </span>
                  {moment(new Date(record?.createdOn)).format()}
                </h2>
                <h2>
                  <span className="font-bold">User: </span>
                  {record?.selectedDoctor.voiceId}
                </h2>
                <h2>
                  <span className="font-bold">Agent: </span>
                  {moment(new Date(record?.createdOn)).fromNow()}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-purple-800">Duration & Severity</h2>
              <div className="grid grid-cols-2">
                <h2>
                  <span className="font-bold">Doctor: </span>
                  {record.selectedDoctor?.specialist}
                </h2>
                <h2>
                  <span className="font-bold">Consulted date: </span>
                  {moment(new Date(record?.createdOn)).format()}
                </h2>
                <h2>
                  <span className="font-bold">User: </span>
                  {record?.selectedDoctor.voiceId}
                </h2>
                <h2>
                  <span className="font-bold">Agent: </span>
                  {moment(new Date(record?.createdOn)).fromNow()}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-purple-800">
                Medications mentioned
              </h2>
              <div className="grid grid-cols-2">
                <h2>
                  <span className="font-bold">Doctor: </span>
                  {record.selectedDoctor?.specialist}
                </h2>
                <h2>
                  <span className="font-bold">Consulted date: </span>
                  {moment(new Date(record?.createdOn)).format()}
                </h2>
                <h2>
                  <span className="font-bold">User: </span>
                  {record?.selectedDoctor.voiceId}
                </h2>
                <h2>
                  <span className="font-bold">Agent: </span>
                  {moment(new Date(record?.createdOn)).fromNow()}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-purple-800">Recommendations</h2>
              <div className="grid grid-cols-2">
                <h2>
                  <span className="font-bold">Doctor: </span>
                  {record.selectedDoctor?.specialist}
                </h2>
                <h2>
                  <span className="font-bold">Consulted date: </span>
                  {moment(new Date(record?.createdOn)).format()}
                </h2>
                <h2>
                  <span className="font-bold">User: </span>
                  {record?.selectedDoctor.voiceId}
                </h2>
                <h2>
                  <span className="font-bold">Agent: </span>
                  {moment(new Date(record?.createdOn)).fromNow()}
                </h2>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ViewReport;
