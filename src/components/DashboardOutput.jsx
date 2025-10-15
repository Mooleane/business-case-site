import { useState, useEffect } from 'react';

export default function DashboardOutput() {
    const [aiContent, setAiContent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAICompletion() {
            try {
                const response = await fetch('/api/generate-dashboard');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAiContent(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        getAICompletion();
    }, []);

    return (
        <>
            <section id="container">
                {loading && <p>Loading your dashboard...</p>}
                {error && <p>Error loading content: {error}</p>}
                {aiContent && (
                    <>
                        <section className="personalized-advice">
                            <h1>Personalized Advice, Resources</h1>
                            <p>{aiContent.personalizedAdvice}</p>
                        </section>
                        <aside className="right-stack">
                            <section className="trending-skills">
                                <h1>Trending Skills, Roles</h1>
                                <p>{aiContent.trendingSkills}</p>
                            </section>
                            <section className="goals-deadlines">
                                <h1>Goals, Deadlines</h1>
                                <p>{aiContent.goals}</p>
                            </section>
                        </aside>
                    </>
                )}
            </section>
        </>
    )
}