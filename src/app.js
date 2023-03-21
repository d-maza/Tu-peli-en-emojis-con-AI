const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const generarTexto = async (prompt) => {
  const data = {
    model: "text-davinci-003",
    prompt,
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n"]
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  };

  try {
    const response = await fetch('https://api.openai.com/v1/completions', data, { headers });
      const text = response.data.text;
      // const text = response.data.choices[0].text;
    return text;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const prompt = "Convertir títulos de películas en emoji.\n\nVolver al futuro: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \nStar Wars:\n";

generarTexto(prompt)
  .then((texto) => console.log({texto}))
  .catch((error) => console.error(error));

