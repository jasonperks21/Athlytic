import { NextResponse } from 'next/server';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate } from '@langchain/core/prompts';

// Mock raw metrics from Strava, Oura, and MyFitnessPal (with some suboptimal values)
const mockMetrics = {
  strava: {
    weekly_distance_km: 18.2, // lower than before
    runs_this_week: 2, // fewer runs
    avg_pace_min_per_km: 6.8, // slower pace
    last_run: { distance_km: 5, duration_min: 34, date: '2024-07-18' }
  },
  oura: {
    sleep_score: 62, // lower sleep score
    avg_sleep_hours: 5.3, // less sleep
    hrv: 31, // lower HRV
    readiness_score: 65, // lower readiness
    last_night: { sleep_hours: 4.8, deep_sleep_hours: 0.7 }
  },
  myfitnesspal: {
    avg_daily_calories: 1800, // possibly low
    avg_protein_g: 55, // low protein
    avg_carbs_g: 320, // high carbs
    avg_fat_g: 90, // high fat
    days_logged: 5 // not logging every day
  }
};

export async function POST(req) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ insights: [], metrics: mockMetrics });
    }

    // Compose a chat prompt using system and human messages
    const prompt = ChatPromptTemplate.fromMessages([
      [
        'system',
        `You are a health and fitness data scientist. Given user metrics from Strava, Oura, and MyFitnessPal, you MUST ALWAYS generate 4 actionable insights, even if you have to be creative or speculative. If the data is optimal, suggest ways to maintain or further improve. For each insight, provide: title, description, category (performance, recovery, nutrition, sleep), priority (high, medium, low), confidence (0-100), actionable (true/false), and recommendations (array of strings, can be empty). Respond ONLY with a valid JSON array, with no extra text, comments, or trailing commas. Do NOT use markdown or code blocks in your response.`
      ],
      [
        'human',
        'User metrics: {metrics}'
      ]
    ]);

    const llm = new ChatGoogleGenerativeAI({
      apiKey,
      model: 'gemini-2.0-flash',
      temperature: 0.4,
      maxOutputTokens: 1024,
    });

    // Compose the chain: prompt.pipe(llm)
    const chain = prompt.pipe(llm);

    const result = await chain.invoke({ metrics: JSON.stringify(mockMetrics, null, 2) });

    let insights;
    try {
      let raw = result.content || result.text;
      // Remove Markdown code block if present
      raw = raw.replace(/```json|```/g, '').trim();
      // Try to extract the first JSON array from the response
      const match = raw.match(/\[.*\]/s);
      insights = match ? JSON.parse(match[0]) : JSON.parse(raw);
    } catch (e) {
      insights = [];
    }

    return NextResponse.json({ insights });
  } catch (error) {
    return NextResponse.json({ error: error.message, insights: [], metrics: mockMetrics }, { status: 500 });
  }
} 