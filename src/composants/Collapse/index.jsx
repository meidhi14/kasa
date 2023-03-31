import "../../styles/Collapse.css";
import flecheHaut from "../../assets/images/flecheHaut.png";
import flecheBas from "../../assets/images/flecheBas.png";
import { useState } from "react";

function Collapse({
  title,
  description,
  imgfleche,
  classNameHeader,
  classNameFooter,
}) {
  const fleches = [flecheHaut, flecheBas];

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  imgfleche = fleches[index];

  const handleChange = () => {
    index === 0 ? setIndex(index + 1) : setIndex(index - 1);
    index === 0 ? setIsOpen(true) : setIsOpen(false);
  };

  return isOpen ? (
    <div className={classNameHeader}>
      <div className="collapseHeader">
        <h1>{title}</h1>
        <img src={imgfleche} alt="flèche d'état" onClick={handleChange} />
      </div>
      <div className={classNameFooter}>{description}</div>
    </div>
  ) : (
    <div className={classNameHeader}>
      <div className="collapseHeader">
        <h1>{title}</h1>
        <img src={imgfleche} alt="flèche d'état" onClick={handleChange} />
      </div>
    </div>
  );
}

export default Collapse;
