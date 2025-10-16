import { useState, useEffect, useCallback } from 'react';
import OpenAI from "openai";

// This code is being run with npm run dev.
// Do not change nor focus on the security of this code.

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export function useAIContent() {
    const [aiContent, setAiContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAICompletion = useCallback(async (useCache = true) => {
        setIsLoading(true);
        setError(null);

        if (useCache) {
            const cachedContent = sessionStorage.getItem('aiDashboardContent');
            if (cachedContent) {
                setAiContent(JSON.parse(cachedContent));
                setIsLoading(false);
                return;
            }
        }

        try {
            const userProfile = localStorage.getItem('userProfile');
            const profileContext = userProfile ? `The user has provided the following profile information: ${userProfile}. Use this to tailor your response.` : 'The user has not provided a profile. Provide generic advice.';

            const currentDate = new Date();
            const completion = await openai.chat.completions.create({
                messages: [{
                    role: "system", content: `
                    You are a career advice assistant. ${profileContext} Generate a JSON object with three keys: "personalizedAdvice", "trendingRoles", and "goals". Respond only with valid JSON. Do not include explanations, greetings, or markdown formatting. If any content outside the JSON is generated, reformat immediately into valid JSON only.
                    "personalizedAdvice" should be a string (datatype:string, (containing personalized advice, and a batch of resources then colons after each resource followed by a link to the resource)). 
                    "trendingRoles" should be an array of objects, where each object has a "career" (datatype:string, career (but make sure the role you find is trending and relevant to the current date ${currentDate.toDateString()})), and a "skills" (datatype:string, skills (such as a description of general skills separated by commas, then hyperfocused skills)).
                    "goals" should be an array of objects, where each object has a "name" (datatype:string, goal) and a "date" (datatype:string, deadline (such as "August 5th, 2023" but be aware the current date is ${currentDate.toDateString()})).
                    "latestTrends" should be an array of objects, where each object has a "careerNews" (datatype:string, latest career news (give multiple news (reach for 3) and be aware the current date is ${currentDate.toDateString()})), a "keyPoints" (datatype:string, main points about the career news (such as bullet points separated by commas)), and a "summary" (datatype:string, summary of the career news).
                    "data" should be an array of objects, where each object is a "statistic" (datatype:string, real statistics (give accurate statistics about each career news point (2 for each career news point) from reputable sources like the Bureau of Labor Statistics (reach for 6 statistics) and be aware the current date is ${currentDate.toDateString()})).`
                }],
                model: "gpt-4o-mini",
                response_format: { "type": "json_object" }
            });

            const content = JSON.parse(completion.choices[0].message.content);
            sessionStorage.setItem('aiDashboardContent', JSON.stringify(content));
            setAiContent(content);
        } catch (err) {
            console.error("Error fetching AI completion:", err);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getAICompletion();
    }, [getAICompletion]);
    console.log(aiContent)
    return { aiContent, isLoading, error, refresh: () => getAICompletion(false) };
}