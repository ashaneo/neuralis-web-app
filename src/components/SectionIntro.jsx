function SectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionIntro;
