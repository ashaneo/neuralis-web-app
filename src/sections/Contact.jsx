import SectionIntro from "../components/SectionIntro";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <SectionIntro
            eyebrow="Contact"
            title="Let’s talk about your next build"
            description="If you’re planning an AI system, an embedded product, or a full software platform, send us an email and we can start the conversation from there."
            align="center"
          />

          <p className="contact-copy">
            Reach out to <a href="mailto:admin@neuralis-labs.com">admin@neuralis-labs.com</a> and
            share a little about what you are building, what stage you are in, and where
            you need support.
          </p>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:admin@neuralis-labs.com">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
