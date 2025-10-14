import { useState } from "react";

export default function Description() {
    const slides = [
        {
            title: "Get personalized learning paths",
            body: "We analyze your skills and recommend the advice, resources, and next steps to level up quickly.",
        },
        {
            title: "Explore career matches",
            body: "See roles that fit your strengths, skills in demand, and clear steps to transition into new careers.",
        },
        {
            title: "Set goals & track progress",
            body: "Create milestones, set deadlines, and get ai-assisted tasks to keep momentum toward your target role.",
        },
    ];

    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <section id="container">
            <h1 className="app-description">
                Your Skills,
                <br />
                Your Career.
            </h1>

            <section className="use-cases">
                <section
                    className="switcher"
                    role="region"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowLeft") prev();
                        if (e.key === "ArrowRight") next();
                    }}
                >
                    <figure className="switcher-frame">
                        {slides.map((s, i) => (
                            <article
                                key={i}
                                className={`switcher-slide ${i === index ? "active" : ""}`}
                                tabIndex={i === index ? 0 : -1}
                            >
                                <h2 className="slide-title">{s.title}</h2>
                                <p className="slide-body">{s.body}</p>
                            </article>
                        ))}
                    </figure>

                    <nav className="switcher-dots" role="tablist">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                role="tab"
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </nav>
                </section>
            </section>
        </section>
    );
}