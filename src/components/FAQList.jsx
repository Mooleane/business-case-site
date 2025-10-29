import FAQ from "./FAQ.jsx";
import faqData from "../lib/faqData.js";

export default function FAQPage() {
  return (
    <>
      <section id="faq" className="faq">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((f, i) => (
          <FAQ key={i} question={f.question} answer={f.answer} />
        ))}
      </section>
    </>
  );
}
