import React from 'react';
import { useAIContent } from '../hooks/useAIContent';
import RefreshAI from './RefreshAI.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

export default function DashboardOutput() {
    const { aiContent, isLoading, error, refresh } = useAIContent();
    
    if (isLoading) {
        return (
            <LoadingSpinner/>
        );
    }

    if (error) {
        return <p>Error loading content. Please try refreshing.</p>;
    }

    return (
        <>
                
            <RefreshAI refresh={refresh} />
        
            <section className="text-within" id="container">

                <section className="personalized-advice">
                    <h1>Personalized Advice/Resources</h1>
                    <hr/>
                    <ul className="list-text">
                        <React.Fragment>
                            <strong>Advice: </strong>
                            {aiContent.personalizedAdvice.map((personalized, index) => (
                                <li key={`advice-${index}`}>{personalized.advice}</li>
                            ))}
                            <br/>
                            <strong>Resources: </strong>
                            {aiContent.personalizedAdvice[0].resources.map((resource, index) => (
                                <a key={`resources-${index}`} href={resource.url} target="_blank" rel="noopener noreferrer">
                                    <li className="btn btn-hover btn-small" >{resource.name}</li>
                                </a>
                            ))}
                        </React.Fragment>
                    </ul>
                </section>

                <section className="trending-roles">
                    <h1>Trending Roles/Skills</h1>
                    <hr/>
                    {aiContent?.trendingRoles && (
                        <ul className="list-text">
                            {aiContent.trendingRoles.map((role, index) => (
                                <li className="btn btn-small" key={`role-${index}`}><strong>{role.career}: <br/></strong>{role.skills}</li>
                            ))}
                        </ul>
                    )}
                </section>

                <section className="goals-deadlines">
                    <h1>Goals/Deadlines</h1>
                    <hr/>
                    {aiContent?.goals && (
                        <ul className="list-text">
                            {aiContent.goals.map((goal, index) => (
                                <li className="btn btn-small" key={`goal-${index}`}><strong>{goal.name}: <br/></strong>{goal.date}</li>
                            ))}
                        </ul>
                    )}
                </section>

            </section>
        </>
    )
}