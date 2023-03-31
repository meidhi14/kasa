import logoKasaLight from "../../assets/images/logoKasaLight.png";
import "../../styles/Footer.css";

function Footer() {
  return (
    <div className="containerFooter">
      <img src={logoKasaLight} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
