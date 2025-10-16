import { useAIContent } from '../hooks/useAIContent';

export default function DashboardOutput() {
    const { aiContent, isLoading, error, refresh } = useAIContent();
    
    if (isLoading) {
        return <p className="main-header">Generating your results...</p>;
    }

    if (error) {
        return <p>Error loading content. Please try refreshing.</p>;
    }

    return (
        <>
            <section className="text-within" id="container">

                <button className="btn btn-primary" onClick={refresh}>Refresh AI Results</button>

                <section className="personalized-advice">
                    <h1>Personalized Advice/Resources</h1>
                    {aiContent && <p>{aiContent.personalizedAdvice}</p>}
                </section>

                <section className="trending-skills">
                    <h1>Trending Skills/Roles</h1>
                    {aiContent?.trendingRoles && (
                        <ul className="goal-list">
                            {aiContent.trendingRoles.map((role, index) => (
                                <ul className="btn btn-secondary" key={index}><strong>{role.career}:<br/></strong> {role.skills}</ul>
                            ))}
                        </ul>
                    )}
                </section>
                
                <section className="goals-deadlines">
                    <h1>Goals/Deadlines</h1>
                    {aiContent?.goals && (
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