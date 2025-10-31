import { useState } from 'react';
import { useAIContent } from '../hooks/useAIContent';
import RefreshAI from './RefreshAI.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

export default function CareerOptionsList() {
    const [selectedCareer, setSelectedCareer] = useState(null);
    const { aiContent, isLoading, error, refresh } = useAIContent();

    const handleCareerClick = (career) => {
        setSelectedCareer(career);
    };

    if (isLoading) {
        return (
            <LoadingSpinner/>
        );
    }

    if (error || !aiContent?.matchedCareers) {
        return <p>Error loading career recommendations. Please try refreshing.</p>;
    }

    return (
        <>
        
            <RefreshAI refresh={refresh} />

            <section id="container">

                <section className="career-options text-within">
                    <h1>Career Suggestions</h1>
                    <hr/>
                    <ul className="list-text">
                        {aiContent.matchedCareers.map((career, index) => (
                            <li key={`career-${index}`} className="btn btn-hover btn-secondary" onClick={() => handleCareerClick(career)}>
                                {career.title}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="chosen-career-summary text-within">
                    <h1>Summary</h1>
                    <hr/>
                    {selectedCareer ? (
                        <div>
                            <h2>{selectedCareer.title}</h2>

                            <p>{selectedCareer.description}</p>
                            
                            <h3>Soft Skills</h3>
                            <p>{selectedCareer.softSkills.join(', ')}</p>

                            <h3>Hard Skills</h3>
                            <p>{selectedCareer.hardSkills.join(', ')}</p>
                        </div>
                    ) : (
                        <p>Click on a career option to see details.</p>
                    )}
                </section>

                <section className="chosen-career-resources text-within">
                    <h1>Resources</h1>
                    <hr/>
                    {selectedCareer ? (
                        // Only shown when selectedCareer is not null; career has been chosen.
                        <>
                            <ul className="list-text">
                                {selectedCareer.resources.map((resource, index) => (
                                    <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer">
                                        <li className="btn btn-hover btn-small">{resource.name}</li>
                                    </a>
                                ))}
                            </ul>
                        </>
                    ) : (
                        // Only shown when selectedCareer is null; no chosen career.
                        <p>Click on a career option to see details.</p>
                    )}
                </section>

            </section>
        </>
    )
}