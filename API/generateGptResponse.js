require('dotenv').config();

const axios = require('axios');
const { conversationData } = require('./conversationData');
const express = require('express');
const app = express();

const generateGptResponse = async (prompt) => {
    const config = {
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
    };

    const data = {
        model:'gpt-3.5-turbo',
        messages:await conversationData(prompt),
    };

    const url='https://api.openai.com/v1/chat/completions';

    try {
        const response=await axios.post(url, data, config);
        const generatedText=response.data.choices[0].message.content;
        return generatedText;
    } catch (error){
        console.error(error);
        return `GPT API側でエラーが発生:${error.message}`;
    }
};

app.use(express.json());

app.post('/api/generate-response', async (req, res) => {
    const prompt = req.body.prompt;
    try {
        const response = await generateGptResponse(prompt);
        res.json({ generatedText: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `API側でエラーが発生:${error.message}` });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));