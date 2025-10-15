import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Use a non-VITE_ prefixed env var
});

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const completion = await openai.chat.completions.create({
            messages: [{
                role: "system", content: 'You are a career advice assistant. Generate a JSON object with three keys: "personalizedAdvice", "trendingSkills", and "goals". "personalizedAdvice" should be a string of personalized advice and resources. "trendingSkills" should be a string of trending skills and roles. "goals" should be a string of goals and deadlines.'
            }],
            model: "gpt-4o-mini",
            response_format: { "type": "json_object" }
        });
        res.status(200).json(JSON.parse(completion.choices[0].message.content));
    } catch (error) {
        res.status(500).json({ message: 'Error generating AI content', error: error.message });
    }
}
