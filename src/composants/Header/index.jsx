import { Link } from "react-router-dom";
import "../../styles/Header.css";
import logoKasa from "../../assets/images/logoKasa.png";

function Header() {
  return (
    <nav className="navHeader">
      <Link to={"/"}>
        <img src={logoKasa} alt="logo kasa" className="imgHeader" />
      </Link>
      <div className="lienHeader">
        <Link to={"/"}>Accueil</Link>
        <Link to={"/apropos"} className="lienHeaderAPropos">
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
