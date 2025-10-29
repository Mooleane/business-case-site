import career_nav_logo from "../assets/career_nav_logo.png";

export default function AboutDescription() {
  return (
    <section className="about-description text-within" id="container">
        <img className="big-app-logo" src={career_nav_logo} alt="app-logo" />
        <section>
            <p>
                CareerNav is a platform designed to streamline the career discovery process. 
                The AI tools provide personalized career recommendations, tracked trends, and curated resources to achieve your career goals.
            </p>
        </section>
    </section>
  );
}