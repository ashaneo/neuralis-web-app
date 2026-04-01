import Card from "../components/Card";

// You can replace these with real images later
const aiImg = "./images/ai.png";
const iotImg = "/images/iot.png";
const seImg = "/images/se.png";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>What We Build</h2>

        <div className="cards">
          <Card
            title="Artificial Intelligence"
            description="We build intelligent systems tailored to your needs."
            image={aiImg}
            items={[
              "Computer Vision",
              "LLMs & VLMs",
              "Classification models",
              "Custom neural networks",
            ]}
          />

          <Card
            title="IoT & Embedded"
            description="Connecting hardware with intelligent systems."
            image={iotImg}
            items={[
              "PCB & board design",
              "Jetson-based systems",
              "Sensors & edge devices",
              "Embedded programming",
            ]}
          />

          <Card
            title="Software Engineering"
            description="Modern, scalable software solutions."
            image={seImg}
            items={[
              "Full-stack web apps",
              "Mobile development",
              "APIs & backend systems",
              "Cloud solutions",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;