import { Link } from "react-router-dom";
import "../../styles/Error.css";
function Error() {
  return (
    <div className="errorContainer">
      <h1 className="errorTitle">404</h1>
      <p className="errorParagraphe">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="errorLien">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
