import { useParams } from "react-router-dom";
import "../../styles/LocationLogement.css";
import liste from "../../assets/listes/liste.json";

function LocationLogement() {
  const { id } = useParams();
  const annonce = liste.find((a) => a.id === id);
  const location = annonce.location;
  return <p className="paraLocationLogement">{location}</p>;
}

export default LocationLogement;
