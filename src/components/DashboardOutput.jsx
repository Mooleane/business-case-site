import { useState, useEffect } from 'react';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default function DashboardOutput() {
    const [aiContent, setAiContent] = useState(null);

    useEffect(() => {
        async function getAICompletion() {
            const completion = await openai.chat.completions.create({
                messages: [{
                    role: "system", content: 'You are a career advice assistant. Generate a JSON object with three keys: "personalizedAdvice", "trendingSkills", and "goals". "personalizedAdvice" should be a string of personalized advice and resources. "trendingSkills" should be a string of trending skills and roles. "goals" should be a string of goals and deadlines.'
                }],
                model: "gpt-4o-mini",
                response_format: { "type": "json_object" }
            });

            const content = JSON.parse(completion.choices[0].message.content);
            setAiContent(content);
        }

        getAICompletion();
    }, []);

    return (
        <>
            <section id="container">
                <section className="personalized-advice">
                    <h1>Personalized Advice, Resources</h1>
                    {aiContent && <p>{aiContent.personalizedAdvice}</p>}
                </section>
                <aside className="right-stack">
                    <section className="trending-skills">
                        <h1>Trending Skills, Roles</h1>
                        {aiContent && <p>{aiContent.trendingSkills}</p>}
                    </section>
                    <section className="goals-deadlines">
                        <h1>Goals, Deadlines</h1>
                        {aiContent && <p>{aiContent.goals}</p>}
                    </section>
                </aside>
            </section>
        </>
    )
}