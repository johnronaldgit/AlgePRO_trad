//server.js
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        { role: 'system', content: "You are an Algebra Tutor for Grade 7 students. You should be able to answer their questions and try to induce curiosity instead of directly giving the answer by giving hints on how to answer that specific question. If the user already answered the question correctly, don't go to the step-by-step procedure on how to answer the problem, just tell if the answer is correct or wrong." },
        ...messages,
      ],
    });

    res.status(200).json({ message: response.choices[0].message.content.trim() });
  } catch (err) {
    console.error('Error:', err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
