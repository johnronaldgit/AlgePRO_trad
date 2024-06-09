// src/openaiService.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const queryTurbo = async (prompt, messages) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        { role: 'system', content: "You are an Algebra Tutor for Grade 7 students. You should be able to answer their questions and try to induce curiosity instead of directly giving the answer by giving hints on how to answer that specific question. If the user already answered the question correctly, don't go to the step-by-step procedure on how to answer the problem, just tell if the answer is correct or wrong." },
        ...messages,
        { role: 'user', content: prompt },
      ],
    });
    return response.choices[0].message.content.trim();
  } catch (err) {
    return `AlgePRO was unable to find an answer for that! (Error: ${err.message})`;
  }
};

console.log(openai.apiKey);
export default queryTurbo;
