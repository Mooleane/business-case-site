    import { useState, useEffect, useCallback } from 'react';
    import careerSuggestions from '../lib/careerSuggestions';

    export function useAIContent() {
        // Prepares the display to viewing dynamically-updated elements: AI content, loading screens, and error messages.
        const [aiContent, setAiContent] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);

        // Enables a responsive loading screen while the AI refreshes the results.
        // useCache determines whether to use previously saved data (on initial load) or fetch new data.
        const getAICompletion = useCallback(async (useCache = true) => {
            setIsLoading(true);
            setError(null);

            // Get previously saved AI data from session storage
            if (useCache) {
                const cachedContent = sessionStorage.getItem('aiDashboardContent');
                if (cachedContent) {
                    setAiContent(JSON.parse(cachedContent));
                    setIsLoading(false);
                    // Stops the AI from auto-generating data if it doesn't need to.
                    return;
                }
            }

            // Happens when getAICompletion is called from a refresh,
            // or if the browser never had any cachedContent at all.
            try {
                // Get user's profile information from local storage to reference.
                const userProfile = localStorage.getItem('userProfile');

                // Prepares the user prompt that the AI uses to references the user's profile information.
                const profileContext = userProfile ? `The user has provided the following profile information: ${userProfile}. Use this to tailor your response.` : 'The user has not provided a profile. Provide generic advice.';

                // Gets the career options from careerSuggestions to reference.
                const careersToFilter = JSON.stringify(careerSuggestions);

                // Gets the current date to attempt to get latest information and functioning goals.
                const currentDate = new Date();

                // Gets all the necessary data from ChatGPT as a json object in-order to
                // dynamically generates info for each section by putting them into hardcoded arrays of objects and strings. 
                const completion = await fetch("https://api.openai.com/v1/chat/completions", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    response_format: { "type": "json_object" },
                    messages: [
                    {
                        role: "system",
                        content: `
                        You are a structured JSON API.
                        {"data_format":"json","strict":true}
                        You must return ONLY valid JSON. 
                        Do not include any explanations, markdown, or extra characters.
                        All strings must be properly closed.
                        `
                    },
                    {
                        role: "user",
                        content: `
                        Generate a career guidance response in this format:
                        {
                        "personalizedAdvice": string,
                        "trendingRoles": [{ "career": string, "skills": string }],
                        "goals": [{ "name": string, "date": string }],
                        "latestTrends": [{ "careerNews": string, "keyPoints": string, "summary": string }],
                        "data": [{ "statistic": string, "source": string }],
                        "matchedCareers": [...]
                        }
                        `
                    },
                    {
                        role: "system",
                        content: `You are a career advice assistant. ${profileContext} Given the following list of careers: ${careersToFilter}. Generate a JSON object with four keys: "personalizedAdvice", "trendingRoles", "goals", and "matchedCareers". Respond only with valid JSON. Do not include explanations, greetings, or markdown formatting.
                        "personalizedAdvice" should be a string (datatype:string, (containing personalized advice, and a batch of resources then colons after each resource followed by a link to the resource)). 
                        "trendingRoles" should be an array of objects, where each object has a "career" (datatype:string, career (but make sure the role you find is trending and relevant to the current date ${currentDate.toDateString()})), and a "skills" (datatype:string, skills (such as a description of general skills separated by commas, then hyperfocused skills)).
                        "goals" should be an array of objects, where each object has a "name" (datatype:string, goal) and a "date" (datatype:string, deadline (such as "August 5th, 2023" but be aware the current date is ${currentDate.toDateString()})).
                        "latestTrends" should be an array of objects, where each object has a "careerNews" (datatype:string, latest career news (give multiple news (reach for 3) and be aware the current date is ${currentDate.toDateString()})), a "keyPoints" (datatype:string, main points about the career news (such as bullet points separated by commas)), and a "summary" (datatype:string, summary of the career news).
                        "data" should be an array of objects, where each object is a "statistic" (datatype:string, real statistics (give accurate statistics about each career news point (2 for each career news point) from reputable sources like the Bureau of Labor Statistics (reach for 6 statistics) and be aware the current date is ${currentDate.toDateString()})).
                        "matchedCareers" should be an array of career objects, filtered from the provided career list, that best match the user's profile preferences (also include career objects that are relevant to their work preferences). The structure of each object in the array must be identical to the source.
                        `
                    },
                    ],
                    temperature: 0,
                    max_tokens: 3000,
                })
                });

                // const completion = await openai.chat.completions.create({
                //     messages: [{
                //         role: "system", content: `
                //         You are a career advice assistant. ${profileContext} Given the following list of careers: ${careersToFilter}. Generate a JSON object with four keys: "personalizedAdvice", "trendingRoles", "goals", and "matchedCareers". Respond only with valid JSON. Do not include explanations, greetings, or markdown formatting.
                //         "personalizedAdvice" should be a string (datatype:string, (containing personalized advice, and a batch of resources then colons after each resource followed by a link to the resource)). 
                //         "trendingRoles" should be an array of objects, where each object has a "career" (datatype:string, career (but make sure the role you find is trending and relevant to the current date ${currentDate.toDateString()})), and a "skills" (datatype:string, skills (such as a description of general skills separated by commas, then hyperfocused skills)).
                //         "goals" should be an array of objects, where each object has a "name" (datatype:string, goal) and a "date" (datatype:string, deadline (such as "August 5th, 2023" but be aware the current date is ${currentDate.toDateString()})).
                //         "latestTrends" should be an array of objects, where each object has a "careerNews" (datatype:string, latest career news (give multiple news (reach for 3) and be aware the current date is ${currentDate.toDateString()})), a "keyPoints" (datatype:string, main points about the career news (such as bullet points separated by commas)), and a "summary" (datatype:string, summary of the career news).
                //         "data" should be an array of objects, where each object is a "statistic" (datatype:string, real statistics (give accurate statistics about each career news point (2 for each career news point) from reputable sources like the Bureau of Labor Statistics (reach for 6 statistics) and be aware the current date is ${currentDate.toDateString()})).
                //         "matchedCareers" should be an array of career objects, filtered from the provided career list, that best match the user's profile preferences (also include career objects that are relevant to their work preferences). The structure of each object in the array must be identical to the source.`
                //     }],
                //     model: "gpt-4o-mini",
                //     response_format: { "type": "json_object" }
                // });

                // Turns the AI's response into mappable arrays/objects, stores it in local storage for later, 
                // and updates the component for all the pages that need it (dashboard, career recommendations, and trend tracker).

                const result = await completion.json();
                const content = JSON.parse(result.choices[0].message.content);
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

        // Returns the data so it can be implemented on different pages.
        // Passing false to getAICompletion skips getting the cache and forces an AI result.
        return { aiContent, isLoading, error, refresh: () => getAICompletion(false) };
    }