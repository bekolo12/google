import { GoogleGenAI } from "@google/genai";
import { Transaction } from "../types";

// Do not initialize at top-level to avoid runtime crashes if env var is missing
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeFinances = async (transactions: Transaction[]): Promise<string> => {
  // Access the key safely inside the function
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("API Key is missing in environment variables");
    return "Error: API Key is missing. Please add your GEMINI_API_KEY to the Vercel project settings.";
  }

  try {
    // Initialize the client only when needed
    const ai = new GoogleGenAI({ apiKey });
    
    const transactionSummary = JSON.stringify(transactions);
    
    const prompt = `
      You are an expert personal financial advisor. 
      Analyze the following list of financial transactions provided in JSON format.
      
      Transactions:
      ${transactionSummary}
      
      Please provide a response in Markdown format with the following sections:
      1. **Financial Health Score**: Give a score from 1-10 based on income vs expense ratio.
      2. **Spending Trends**: Briefly explain where the money is going (biggest categories).
      3. **Anomalies**: Point out any unusual or high expenses.
      4. **Actionable Tips**: Give 3 specific tips to save money based on this specific data.
      
      Keep the tone professional, encouraging, and concise.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Unable to generate analysis at this time.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error generating insights. Please check your API key configuration and try again.";
  }
};