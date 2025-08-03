"use client";

import axios from "axios";
import Vapi from "@vapi-ai/web";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { doctorAgent } from "../../_components/DoctorAgentCard";
import { Circle, PhoneCall, PhoneOff } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Provider from "@/app/provider";
import { toast } from "sonner";

type sessionDetail = {
  id: number;
  notes: string;
  sessionId: string;
  report: JSON;
  selectedDoctor: doctorAgent;
  createOn: string;
};
type message = {
  role: string;
  text: string;
};

function MedicalVoiceAgent() {
  const { sessionId } = useParams();
  const [sessionDetail, setSessionDetail] = useState<sessionDetail>();
  const [callStarted, setCallStarted] = useState(false);
  const [vapiInstantance, setVapiInstance] = useState<any>();
  const [currentRoll, setCurrentRole] = useState<string | null>();
  const [liveTranscript, setLiveTranscript] = useState<string>();
  const [messages, setMessages] = useState<message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    sessionId && GetSessionDetails();
  }, [sessionId]);

  const GetSessionDetails = async () => {
    const result = await axios.get("/api/session-chat?sessionId=" + sessionId);
    console.log(result);
    setSessionDetail(result.data);
  };

  const StartCall = () => {
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
    setVapiInstance(vapi);

    const VapiAgnetConfig = {
      name: "AI Medical Doctor Voice Agent",
      firstMessage:
        "Hi there! I'm your AI Medical Assistant. I'm here to help you with any ",
      transcriber: {
        provider: "assembly-ai",
        language: "en",
      },
      voice: {
        provider: "LMNT",
        voiceId: sessionDetail?.selectedDoctor?.voiceId,
      },
      model: {
        Provider: "openai",
        messages: [
          {
            role: "system",
            content: sessionDetail?.selectedDoctor?.agentPrompt,
          },
        ],
      },
    };

    // Start voice conversation
    //@ts-ignore
    vapi.start(VapiAgnetConfig);

    // Listen for events
    vapi.on("call-start", () => {
      console.log("Call started");
      setCallStarted(true);
    });
    vapi.on("call-end", () => {
      console.log("Call ended");
      setCallStarted(false);
    });
    vapi.on("message", (message) => {
      if (message.type === "transcript") {
        const { role, transcriptType, transcript } = message;
        console.log(`${message.role}: ${message.transcript}`);
        if (transcriptType == "partial") {
          setLiveTranscript(transcript);
          setCurrentRole(role);
        } else if (transcriptType == "final") {
          //Final Transcript
          setMessages((prev: any) => [
            ...prev,
            { role: role, text: transcript },
          ]);
          setLiveTranscript("");
          setCurrentRole(null);
        }
      }
    });

    vapi.on("speech-start", () => {
      console.log("Assistant started speaking");
      setCurrentRole("assistant");
    });
    vapi.on("speech-end", () => {
      console.log("Assistant stopped speaking");
      setCurrentRole("user");
    });
  };

  /**
   * End call
   */
  const endCall = async () => {
    setLoading(true);
    if (!vapiInstantance) return;
    //Stop the call
    vapiInstantance.stop();
    // Optionally remove listeners (good for memory management)
    vapiInstantance.off("call-start");
    vapiInstantance.off("call-end");
    vapiInstantance.off("message");
    vapiInstantance.off("speech-start");
    vapiInstantance.off("speech-end");

    //Reset call state
    setCallStarted(false);
    setVapiInstance(null);

    toast.success("your report is generated");
    router.replace("dashboard");

    //const result = await GenerateReport();

    setLoading(false);
  };

  const GenerateReport = async () => {
    const result = await axios.post("/api/medical-report", {
      messages: messages,
      sessionDetail: sessionDetail,
      sessionId: sessionId,
    });

    console.log(result.data);
    return result.data;
  };
  return (
    <div className="p-5 border rounded-3xl bg-secondary">
      <div className="flex justify-between items-center">
        <h2 className="p-1 px-2 rounded-md flex gap-2 items-center">
          <Circle
            className={`h-4 w-4 ${
              callStarted ? "bg-green-400" : "bg-red-600"
            } rounded-full`}
          />{" "}
          {callStarted ? "Connected..." : "Not Connected"}
        </h2>
        <h2 className="font-bold text-xl text-gray-400">00:00</h2>
      </div>
      {sessionDetail && (
        <div className="flex items-center flex-col mt-10">
          <Image
            src={sessionDetail?.selectedDoctor?.image}
            width={120}
            height={120}
            alt={sessionDetail?.selectedDoctor?.specialist}
            className="h-[100px] w-[100px] object-cover rounded-full"
          />
          <h2 className="mt-2 text-lg">
            {sessionDetail?.selectedDoctor?.specialist}
          </h2>
          <p className="text-sm text-gray-400">AI Medical Voice Agent</p>
          <div className="overflow-y-auto flex flex-col items-center px-10 md:px-28 lg:px-52 xl:px-72">
            {messages?.slice(-4).map((msg: message, index) => (
              <h2 className="text-gray-400 p-2" key={index}>
                {msg.role}: {msg.text}
              </h2>
            ))}

            {liveTranscript && liveTranscript?.length > 0 && (
              <h2 className="text-lg">
                {currentRoll} : {liveTranscript}
              </h2>
            )}
          </div>
          {!callStarted ? (
            <Button className="mt-20" onClick={StartCall} disabled={loading}>
              {loading ? <PhoneCall className="animate-spin" /> : <PhoneCall />}
              Start Call
            </Button>
          ) : (
            <Button
              variant={"destructive"}
              onClick={endCall}
              disabled={loading}
            >
              {loading ? <PhoneOff className="animate-spin" /> : <PhoneOff />}
              End Call
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default MedicalVoiceAgent;
