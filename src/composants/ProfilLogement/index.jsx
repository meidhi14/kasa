import "../../styles/ProfilLogement.css";
import React from "react";
import { useParams } from "react-router-dom";
import liste from "../../assets/listes/liste.json";

function ProfilLogement() {
  const { id } = useParams();
  const annonce = liste.find((a) => a.id === id);
  const host = annonce.host;

  return (
    <div className="containerProfilLogement">
      <p className="paraProfilLogement">{host.name}</p>
      <img className="imgProfilLogement" src={host.picture} alt="{host.name}" />
    </div>
  );
}

export default ProfilLogement;
