import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests are allowed' });
    return;
  }

  const { messages } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'ft:gpt-3.5-turbo-0125:personal::9rgk2RSC',
      messages: [
        { role: 'system', content: "You are an Algebra Tutor for Grade 8 students. You should be able to answer their questions and try to induce curiosity instead of directly giving the answer, give ask the student using step-by-step process on how to answer that specific question. If the user already answered the question correctly, don't go to the step-by-step procedure anymore on how the question is solved, just tell if the answer is correct or wrong." },
        ...messages,
      ],
    });

    if (response && response.choices && response.choices[0] && response.choices[0].message) {
      res.status(200).json({ message: response.choices[0].message.content.trim() });
    } else {
      res.status(500).json({ error: 'Invalid response structure from OpenAI API' });
    }
  } catch (err) {
    console.error('Error from OpenAI API:', err);
    res.status(500).json({ error: err.message });
  }
};
