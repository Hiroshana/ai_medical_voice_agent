"use client";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IconArrowRight } from "@tabler/icons-react";
import axios from "axios";
import DoctorAgentCard, { doctorAgent } from "./DoctorAgentCard";
import { Loader, Loader2 } from "lucide-react";
import SuggestedDoctorCard from "./SuggestedDoctorCard";
import { useRouter } from "next/navigation";

function AddNewConsultDialog() {
  const [note, setNote] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [suggestedDoctors, setSuggestedDoctors] = useState<doctorAgent[]>();
  const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent>();
  const router = useRouter();

  const OnClickNext = async () => {
    setLoading(true);
    const result = await axios.post("/api/suggested-doctors", {
      notes: note,
    });

    console.log(result.data);
    setSuggestedDoctors(result.data);
    setLoading(false);
  };

  // Save All Info To database
  const onStartConsultation = async () => {
    setLoading(true);
    const result = await axios.post("/api/session-chat", {
      notes: note,
      selectedDoctor: selectedDoctor,
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
    <Dialog>
      <DialogTrigger>
        <Button className="mt-3">
          + Would you like assistance in arranging a consultation?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add basic details</DialogTitle>
          <DialogDescription asChild>
            {!suggestedDoctors ? (
              <div>
                <h2>Add symptoms or any other details</h2>
                <Textarea
                  placeholder="A details here..."
                  className="h-[200px] mt-5"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <h2> Select the doctor</h2>
                <div className="gird grid-cols-3 gap-5">
                  {/* suggested doctors */}
                  {suggestedDoctors.map((doctor, index) => (
                    <SuggestedDoctorCard
                      doctorAgent={doctor}
                      key={index}
                      setSelectedDoctor={() => setSelectedDoctor(doctor)}
                      selectedDoctor={selectedDoctor}
                    />
                  ))}
                </div>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          {!suggestedDoctors ? (
            <Button disabled={!note || loading} onClick={() => OnClickNext()}>
              Next{" "}
              {loading ? (
                <Loader2 className="animated-spin" />
              ) : (
                <IconArrowRight />
              )}
            </Button>
          ) : (
            <Button
              disabled={loading || !selectedDoctor}
              onClick={() => onStartConsultation()}
            >
              Start Consultation{" "}
              {loading ? (
                <Loader2 className="animated-spin" />
              ) : (
                <IconArrowRight />
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewConsultDialog;
