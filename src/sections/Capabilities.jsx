import SectionIntro from "../components/SectionIntro";
import "../styles/Capabilities.css";

const capabilities = [
  {
    title: "Prototype to Product",
    description:
      "We can start with a rough idea, validate it quickly, and evolve it into something robust enough to ship.",
  },
  {
    title: "Edge + Cloud Thinking",
    description:
      "From Jetson deployments to dashboards and APIs, we design the full system rather than isolated parts.",
  },
  {
    title: "Applied AI Delivery",
    description:
      "Our focus is useful AI: models that plug into operations, products, and decision-making instead of staying in demos.",
  },
  {
    title: "Cross-Functional Execution",
    description:
      "Hardware, software, and ML decisions are made together so performance, maintainability, and user experience stay aligned.",
  },
];

function Capabilities() {
  return (
    <section className="section capabilities-section" id="capabilities">
      <div className="container capabilities-layout">
        <SectionIntro
          eyebrow="Capabilities"
          title="Built for teams that need more than just one specialty"
          description="Some projects need embedded thinking, product thinking, and AI thinking at the same time. That overlap is where we do our best work."
          align="center"
        />

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.title} className="capability-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
