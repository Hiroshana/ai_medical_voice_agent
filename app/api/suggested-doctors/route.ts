import { AIDoctorAgents } from "@/shared/list";
import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/config/OpenAIModel";

export async function POST(req: NextRequest) {
  const { notes } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-lite",
      messages: [
        { role: "system", content: JSON.stringify(AIDoctorAgents) },
        {
          role: "user",
          content:
            "User Notes/Symptoms:" +
            notes +
            ", Depends on user notes and symptoms, Please suggest list of doctors, Return Object in JSON only",
        },
      ],
    });

    console.log(completion.choices[0].message);

    const rwaResp = completion.choices[0].message || "";
    //@ts-ignore
    const Resp = rwaResp.content
      .trim()
      .replace("```json", "")
      .replace("```", "");
    const JSONResp = JSON.parse(Resp);

    console.log(JSONResp);
    return NextResponse.json(JSONResp);
  } catch (error) {
    return NextResponse.json(error);
  }
}
