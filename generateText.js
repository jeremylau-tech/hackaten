// generateText.js
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Wrap the string in parentheses to prevent re-declaration
const updateGeneratedText = eval(`(${process.env.UPDATE_FUNCTION})`);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Tell me a very short story on a";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  console.log(text);

  // Check if updateGeneratedText is a function before calling it
  if (typeof updateGeneratedText === 'function') {
    updateGeneratedText(text);
  } else {
    console.error('updateGeneratedText is not a function');
  }
}

run();
