import "../../styles/Card.css";

function Card({ title, cover, classNameContainer }) {
  return (
    <div className={classNameContainer}>
      <img src={cover} alt={title} className="cardImg" />
      <div className="card-title">{title}</div>
    </div>
  );
}

export default Card;
