import "../../styles/RateLogement.css";
import ratePleine from "../../assets/images/ratePleine.png";
import rateVide from "../../assets/images/rateVide.png";
import React from "react";
import liste from "../../assets/listes/liste.json";
import { useParams } from "react-router-dom";

function RateLogement() {
  const { id } = useParams();
  const annonce = liste.find((a) => a.id === id);
  const rate = parseInt(annonce.rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(
        <img
          className="ratePleineRateLogement"
          src={ratePleine}
          alt="étoile pleine"
          key={i}
        />
      );
    } else {
      stars.push(
        <img
          className="rateVideRateLogement"
          src={rateVide}
          alt="étoile vide"
          key={i}
        />
      );
    }
  }

  return <div className="containerRateLogement">{stars}</div>;
}

export default RateLogement;
