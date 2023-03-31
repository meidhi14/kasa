import carrouselFlecheGauche from "../../assets/images/carrouselFlecheGauche.png";
import carrouselFlecheDroite from "../../assets/images/carrouselFlecheDroite.png";
import "../../styles/Carrousel.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import liste from "../../assets/listes/liste.json";

function Carrousel() {
  // --- Extraction de l'id de l'URL ---
  const { id } = useParams();
  // --- Filtrer la liste pour récupérer l'annonce correspondante
  const annonce = liste.find((a) => a.id === id);
  // --- Récuperer les pictures
  const listePictures = annonce.pictures;

  const [source, setSource] = useState(0);

  const imagePrev = () => {
    source === 0 ? setSource(listePictures.length - 1) : setSource(source - 1);
  };

  const imageNext = () => {
    source === listePictures.length - 1 ? setSource(0) : setSource(source + 1);
  };

  return listePictures.length > 1 ? (
    <div className="carrouselContainer">
      <img
        src={listePictures[source]}
        alt={"images de " + annonce.title}
        className="carrouselImage"
      />
      <div className="carrouselFlecheGauche">
        <img
          src={carrouselFlecheGauche}
          alt="carrouselFlecheGauche"
          onClick={imagePrev}
          className="imgCarrouselFlecheGauche"
        />
      </div>
      <div className="carrouselFlecheDroite">
        <img
          src={carrouselFlecheDroite}
          alt="carrouselFlecheDroite"
          onClick={imageNext}
          className="imgCarrouselFlecheDroite"
        />
      </div>
      <div className="carrouselNumerotation">
        <p>
          {source + 1} / {listePictures.length}
        </p>
      </div>
    </div>
  ) : (
    <div className="carrouselContainer">
      <img
        src={listePictures[source]}
        alt={"images de " + annonce.title}
        className="carrouselImage"
      />
    </div>
  );
}

export default Carrousel;
