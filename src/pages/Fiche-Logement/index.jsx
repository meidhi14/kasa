import React from "react";
import Carrousel from "../../composants/Carrousel";
import TitleLogement from "../../composants/TitleLogement";
import LocationLogement from "../../composants/LocationLogement";
import { useParams } from "react-router-dom";
import liste from "../../assets/listes/liste.json";
import TagLogement from "../../composants/TagLogement";
import ProfilLogement from "../../composants/ProfilLogement";
import RateLogement from "../../composants/RateLogement";
import Collapse from "../../composants/Collapse";
import Error from "../../pages/Error";
import "../../styles/FicheLogement.css";

function FicheLogement() {
  const { id } = useParams();
  const annonce = liste.find((a) => a.id === id);
  if (!annonce) {
    return <Error />;
  }
  const tags = annonce.tags;
  const description = annonce.description;
  const equipments = annonce.equipments;

  return (
    <React.Fragment>
      <div className="containerFicheLogement">
        <Carrousel />
        <div className="ficheLogementHeader">
          <div className="ficheLogementHeaderGauche">
            <TitleLogement />
            <LocationLogement />
            <div className="tagsFicheLogement">
              {tags.map((tag, index) => (
                <TagLogement tag={tag} key={`${tag} - ${index}`} />
              ))}
            </div>
          </div>
          <div className="ficheLogementHeaderDroite">
            <ProfilLogement />
            <RateLogement />
          </div>
        </div>
        <div className="ficheLogementContenu">
          <Collapse
            classNameHeader="titleCollapseFicheLogement"
            classNameFooter="descriptionFicheLogement"
            title="Description"
            description={description}
          />
          <Collapse
            classNameHeader="titleCollapseFicheLogement"
            classNameFooter="descriptionFicheLogement"
            title="Équipements"
            description={equipments.map((equipement) => (
              <li className="equipementsFicheLogement">{equipement}</li>
            ))}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default FicheLogement;
