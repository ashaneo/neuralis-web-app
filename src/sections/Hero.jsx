import heroImage from "../assets/hero.png";
import "../styles/Hero.css";

const quickStats = [
  "AI systems for real products",
  "Embedded builds around boards, PCBs, and Jetson",
  "Full-stack web and mobile delivery",
];

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">Engineered intelligence for ambitious products</p>
          <h1>We turn bold ideas into deployable AI, IoT, and software systems.</h1>
          <p className="hero-text">
            Neuralis builds practical solutions across edge hardware, intelligent models,
            and modern applications, so one team can take your concept from prototype to
            product.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#services">
              Explore services
            </a>
            <a className="button button-secondary" href="#contact">
              Start a conversation
            </a>
          </div>

          <ul className="hero-highlights">
            {quickStats.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-large" />
          <div className="hero-orbit hero-orbit-small" />
          <div className="hero-panel">
            <img src={heroImage} alt="" className="hero-image" />

            <div className="floating-note note-top">
              <span>AI</span>
              <strong>Vision, LLMs, VLMs</strong>
            </div>

            <div className="floating-note note-bottom">
              <span>IoT + SE</span>
              <strong>Boards, apps, and cloud systems</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
