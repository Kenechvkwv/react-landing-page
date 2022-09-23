import React from "react";
import FeatureBox from "./featurebox";
import FeatureImage from "../images/feature_1.png";
import FeatureImage2 from "../images/feature_2.png";
import FeatureImage3 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={FeatureImage} title="Development Course" />
        <FeatureBox image={FeatureImage2} title="Money Saving Services" />
        <FeatureBox image={FeatureImage3} title="Usability Interface" />
      </div>
    </div>
  );
}

export default Feature;
