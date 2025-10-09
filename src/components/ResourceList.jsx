import resources from "../lib/resources"

export default function ResourceList() {
    return (
        <>
            <h1 className="main-header">Resources</h1>
            <section id="container">
                <section className="resources">
                    <ul>
                        {resources.map((resource, index) => (
                            <button key={index} className="btn btn-hover btn-secondary">{resource}</button>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    )
}