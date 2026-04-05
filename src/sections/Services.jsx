import Card from "../components/Card";
import SectionIntro from "../components/SectionIntro";
import "../styles/Services.css";

const services = [
  {
    title: "IoT & Embedded Systems",
    description:
      "We design connected systems that bridge sensors, compute, and production-ready hardware.",
    image: "/images/iot.png",
    items: [
      "Board-level prototyping and PCB-oriented solutions",
      "Jetson-based edge AI systems and device integration",
      "Sensor pipelines, firmware coordination, and field connectivity",
      "Embedded-to-cloud architectures for real deployments",
    ],
  },
  {
    title: "Artificial Intelligence",
    description:
      "We build AI around the actual problem, from perception and automation to advanced multimodal systems.",
    image: "/images/ai.png",
    items: [
      "Computer vision for inspection, tracking, and automation",
      "LLMs and VLMs for assistants, search, and reasoning workflows",
      "Classification pipelines and custom neural network models",
      "Model integration into products, dashboards, and edge devices",
    ],
  },
  {
    title: "Software Engineering",
    description:
      "We deliver the software layer that turns prototypes into dependable, usable products.",
    image: "/images/se.png",
    items: [
      "Full-stack web platforms and internal tools",
      "Mobile apps with clean product flows",
      "APIs, backend systems, and data-connected services",
      "User-facing experiences that connect hardware and intelligence",
    ],
  },
];

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionIntro
          eyebrow="What We Do"
          title="A compact team across hardware, intelligence, and product delivery"
          description="We work best where disciplines overlap: intelligent edge devices, AI-powered workflows, and the software systems that make them useful in the real world."
          align="center"
        />

        <div className="cards">
          {services.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
