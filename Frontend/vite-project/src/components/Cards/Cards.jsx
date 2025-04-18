import { Link } from "react-router-dom";
import "./Cards.css";

function Card({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} className="card-img" />
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
