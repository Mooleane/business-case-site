import resources from "../lib/resources"

export default function ResourceList() {
    return (
        <section id="container">
            <section className="resources">
                <ul>
                    {resources.map((label, index) => (
                        <button key={index} className="btn btn-secondary">{label}</button>
                    ))}
                </ul>
            </section>
        </section>
    )
}