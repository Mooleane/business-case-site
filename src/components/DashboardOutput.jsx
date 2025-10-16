import { useState, useEffect } from 'react';
import OpenAI from "openai";

// This code is being run with npm run dev.
// Do not change nor focus on the security of this code.

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default function DashboardOutput() {
    const [aiContent, setAiContent] = useState(null);

    async function getAICompletion(useCache = true) {
        if (useCache) {
            const cachedContent = sessionStorage.getItem('aiDashboardContent');
            if (cachedContent) {
                setAiContent(JSON.parse(cachedContent));
                return;
            }
        }

        try {
            const currentDate = new Date();
            const completion = await openai.chat.completions.create({
                messages: [{
                    role: "system", content: `
                    You are a career advice assistant. Generate a JSON object with three keys: "personalizedAdvice", "trendingSkills", and "goals". Respond only with valid JSON. Do not include explanations, greetings, or markdown formatting. If any content outside the JSON is generated, reformat immediately into valid JSON only.
                    "personalizedAdvice" should be a string (datatype:string, (containing personalized advice, and a batch of resources then colons after each resource followed by a link to the resource)). 
                    "trendingRoles" should be an array of objects, where each object has a "career" (datatype:string, career (but make sure the role you find is trending and relevant to the current date ${currentDate.toDateString()})) and a "skills" (datatype:string, skills (such as a description of general skills separated by commas, then hyperfocused skills)).
                    "goals" should be an array of objects, where each object has a "name" (datatype:string, goal) and a "date" (datatype:string, deadline (such as "August 5th, 2023" but be aware the current date is ${currentDate.toDateString()})).`
                }],
                model: "gpt-4o-mini",
                response_format: { "type": "json_object" }
            });

            // The JSON result from the AI is parsed and stored in the component's state.
            const content = JSON.parse(completion.choices[0].message.content);
            sessionStorage.setItem('aiDashboardContent', JSON.stringify(content));
            setAiContent(content);
        } catch (error) {
            console.error("Error fetching AI completion:", error);
        }
    }

    useEffect(() => {
        getAICompletion();
    }, []); // The empty array `[]` means this effect runs only once.

    return (
        <>
            <section className="text-within" id="container">
                <button className="btn btn-primary" onClick={() => getAICompletion(false)}>Refresh AI Results</button>
                <section className="personalized-advice">
                    <h1>Personalized Advice/Resources</h1>
                    {aiContent && <p>{aiContent.personalizedAdvice}</p>}
                </section>
                    <section className="trending-skills">
                        <h1>Trending Skills/Roles</h1>
                        {aiContent && aiContent.trendingRoles && (
                            <ul className="goal-list">
                                {aiContent.trendingRoles.map((role, index) => (
                                    <ul className="btn btn-secondary" key={index}><strong>{role.career}:<br/></strong> {role.skills}</ul>
                                ))}
                            </ul>
                        )}
                    </section>
                    <section className="goals-deadlines">
                        <h1>Goals/Deadlines</h1>
                        {aiContent && aiContent.goals && (
                            <ul className="goal-list">
                                {aiContent.goals.map((goal, index) => (
                                    <ul className="btn btn-secondary" key={index}><strong>{goal.name}:<br/></strong> {goal.date}</ul>
                                ))}
                            </ul>
                        )}
                    </section>
            </section>
        </>
    )
}