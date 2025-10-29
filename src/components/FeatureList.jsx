import Feature from "./Feature.jsx";
import featuresData from "../lib/featuresData.js";

export default function FeatureList() {
  return (
    <>
      <section id="features" className="features">
        <h1>Core Features</h1>
        <ul className="list-text">
          {featuresData.map((f, i) => (
            <Feature key={i} name={f.name} description={f.description} />
          ))}
        </ul>
      </section>
    </>
  );
}
