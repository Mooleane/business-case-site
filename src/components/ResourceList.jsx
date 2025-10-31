import { useState } from "react";
import resources from "../lib/resources";

export default function ResourceList() {
    const [selectedResource, setSelectedResource] = useState(null);

    return (
        <>
            <h1 className="main-header">Resources</h1>
            <section id="container">
                <section className="resources text-within">
                    <h1>Categories</h1>
                    <hr />
                    <ul className="list-text">
                        {resources.map((resource) => (
                            <li
                                key={resource.category}
                                className="btn btn- hover btn-secondary"
                                onClick={() => setSelectedResource(resource)}
                            >
                                {resource.category}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="chosen-resource-resources text-within">
                    <h1>Links</h1>
                    <hr />
                    {selectedResource ? (
                        <ul className="list-text">
                            {selectedResource.links.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                                    <li className="btn btn-hover btn-small">{link.name}</li>
                                </a>
                            ))}
                        </ul>
                    ) : (
                        <p>Click on a category to see its resource links.</p>
                    )}
                </section>
            </section>
        </>
    )
}