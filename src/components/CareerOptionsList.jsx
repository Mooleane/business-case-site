import { useState } from 'react';
import careerSuggestions from "../lib/careerSuggestions";

export default function CareerOptionsList() {
    const [selectedCareer, setSelectedCareer] = useState(null);

    const handleCareerClick = (career) => {
        setSelectedCareer(career);
    };

    return (
        <>
            <section id="container">
                <section className="career-options text-within">
                    <h2>Career Options</h2>
                    <ul className="list-text">
                        {careerSuggestions.map((career, index) => (
                            <li key={index} className="btn btn-hover btn-secondary" onClick={() => handleCareerClick(career)}>
                                {career.title}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="chosen-career-summary text-within">
                    <h1>Summary</h1>
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
                </section>
            </section>
        </>
    )
}