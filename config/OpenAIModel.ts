import OpenAI from "openai";
export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000/", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "AI Medical Voice Agent", // Optional. Site title for rankings on openrouter.ai.
  },
});
