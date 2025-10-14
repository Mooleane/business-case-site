import { useState } from "react";

export default function FAQ({ question = "Question title", answer = "Answer content.", defaultOpen = false }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <article className={`faq-item ${open ? "open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-arrow">▸</span>
      </button>

      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          {answer}
        </div>
      </div>
    </article>
  );
}
