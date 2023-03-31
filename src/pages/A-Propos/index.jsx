import BannerAPropos from "../../composants/BannerAPropos";
import Collapse from "../../composants/Collapse";
import React from "react";
import collapseListe from "../../assets/listes/collapse-liste.json";
import "../../styles/APropos.css";
function APropos() {
  return (
    <React.Fragment>
      <BannerAPropos />
      {collapseListe.map((collapse) => (
        <Collapse
          classNameHeader="collapseAPropos"
          classNameFooter="descriptionCollapseAPropos"
          key={collapse.id}
          title={collapse.title}
          description={collapse.description}
        />
      ))}
    </React.Fragment>
  );
}

export default APropos;
