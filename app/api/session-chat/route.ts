import { sessionChatTable } from "@/config/schema";
import { eq, lt, gte, ne } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/config/db";

export async function POST(req: NextRequest) {
  const { notes, selectedDoctor } = await req.json();
  const user = await currentUser();

  try {
    const sessionId = uuidv4();
    const result = await db
      .insert(sessionChatTable)
      .values({
        sessionId: sessionId,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        notes: notes,
        selectedDoctor: selectedDoctor,
        createdOn: new Date().toString(),
      })
      //@ts-ignore
      .returning({ sessionChatTable });

    return NextResponse.json(result[0]?.sessionChatTable);
  } catch (error) {}
}

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const sessionId = searchParams.get("sessionId");
//   const user = await currentUser();
//   console.log("Current User:", user);

//   console.log("Session ID:", sessionId);

//   const result = await db
//     .select()
//     .from(sessionChatTable)
//     //@ts-ignore
//     .where(eq(sessionChatTable.sessionId, sessionId));

//   console.log(result);

//   return NextResponse.json(result[0]);
// }

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  // Ensure sessionId is provided
  if (!sessionId) {
    return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
  }

  // Log sessionId to ensure it's correctly passed
  console.log("Session ID:", sessionId);

  try {
    // Fetch the current user
    const user = await currentUser();
    console.log("Current User:", user);

    // Query the database for session chat
    const result = await db
      .select()
      .from(sessionChatTable)
      //@ts-ignore
      .where(eq(sessionChatTable.sessionId, sessionId));

    // Log result to see what data we're getting
    console.log("Query Result:", result);

    // If no results, return 404
    if (!result || result.length === 0) {
      return NextResponse.json({ error: "No session found" }, { status: 404 });
    }

    // Return the first result
    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
