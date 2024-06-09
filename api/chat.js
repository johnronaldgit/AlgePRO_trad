// api/chat.js
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Only POST requests are allowed' });
    return;
  }

  const { messages } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-4-turbo',
      messages: [
        { role: 'system', content: "You are an Algebra Tutor for Grade 7 students. You should be able to answer their questions and try to induce curiosity instead of directly giving the answer by giving hints on how to answer that specific question. If the user already answered the question correctly, don't go to the step-by-step procedure on how to answer the problem, just tell if the answer is correct or wrong." },
        ...messages,
      ],
    });

    res.status(200).json({ message: response.data.choices[0].message.content.trim() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
