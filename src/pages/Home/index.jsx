import React from "react";
import "../../styles/Home.css";
import liste from "../../assets/listes/liste.json";
import BannerHome from "../../composants/BannerHome";
import Card from "../../composants/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <BannerHome />
      <div className="annoncesContainer">
        {liste.map((annonce) => (
          <Link to={"/fichelogement/" + annonce.id} key={annonce.id}>
            <Card
              title={annonce.title}
              cover={annonce.cover}
              classNameContainer="card"
            />
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
