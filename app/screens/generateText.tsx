// MyComponent.tsx
import { useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as React from 'react';
import { API_KEY, UPDATE_FUNCTION } from '@env';


const generateText = async (input1: string, input2: string): Promise<string> => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Create a medication reminder for a " + input1 + "in" + input2 + "language" + "in 5 words";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log (text);
  return text;
};

export default generateText;
