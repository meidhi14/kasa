import { useParams } from "react-router-dom";
import "../../styles/TitleLogement.css";
import liste from "../../assets/listes/liste.json";

function TitleLogement() {
  const { id } = useParams();
  const annonce = liste.find((a) => a.id === id);
  const title = annonce.title;
  return <h1 className="titleTitleLogement">{title}</h1>;
}

export default TitleLogement;
