import { Link } from "react-router-dom"

export default function CallToAction() {
    return (
            <section className="get-started dual-cta" aria-label="Primary actions">
                <section className="cta">
                    <h3 className="cta-header">First Time Here?</h3>
                    <a className="btn btn-hover btn-secondary" href="#faq">
                        FAQ
                    </a>
                </section>

                <hr className="divider" aria-hidden="true" />

                <section className="cta">
                    <h3 className="cta-header">Feeling Ready?</h3>
                    <Link to="/Profile" className="btn btn-hover btn-primary">Get Started</Link>
                </section>
            </section>
    );
}