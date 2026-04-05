import "../styles/Card.css";

function Card({ title, description, items, image }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={image} alt={title} className="card-img" />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Card;
