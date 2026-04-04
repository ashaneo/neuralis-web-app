import SectionIntro from "../components/SectionIntro";

const processSteps = [
  {
    title: "Scope the system",
    description:
      "We shape the hardware, AI, and software boundaries early so the solution stays realistic and buildable.",
  },
  {
    title: "Build the right core",
    description:
      "We focus on the central prototype first, whether that is a model pipeline, device stack, backend service, or user-facing app.",
  },
  {
    title: "Prepare for delivery",
    description:
      "We refine the product into something teams can demo, test, deploy, and extend with confidence.",
  },
];

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionIntro
          eyebrow="How We Work"
          title="Clear delivery, not endless complexity"
          description="We keep the process lightweight and practical so progress stays visible while the technical foundation remains strong."
          align="center"
        />

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <article key={step.title} className="process-card">
              <span className="process-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
