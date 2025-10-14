export default function CallToAction() {
    return (
            <section className="get-started dual-cta" aria-label="Primary actions">
                <section className="cta">
                    <h3 className="cta-header">First Time User?</h3>
                    <a className="btn btn-hover btn-secondary" href="#faq">
                        FAQ
                    </a>
                </section>

                <hr className="divider" aria-hidden="true" />

                <section className="cta">
                    <h3 className="cta-header">Feeling Ready?</h3>
                    <a className="btn btn-hover btn-primary" href="Signup">
                        Get Started
                    </a>
                </section>
            </section>
    );
}