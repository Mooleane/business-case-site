import careerSuggestions from "../lib/careerSuggestions"

export default function CareerOptionsList() {
    return (
        <>
            <section id="container">
                <section className="career-options">
                    <ul className="list-text">
                        {careerSuggestions.map((career, index) => (
                            <li key={index} className="btn btn-hover btn-secondary">{career.title}</li>
                        ))}
                    </ul>
                </section>
                <section className="chosen-career-resources">
                    <h1>Resources</h1>
                </section>
                <section className="chosen-career-listings">
                    <h1>Listings</h1>
                </section>
            </section>
        </>
    )
}