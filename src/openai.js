const openai = require("openai");

openai.apiKey = "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";

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}