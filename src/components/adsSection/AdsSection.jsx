import React from "react";
import "./adsSection.css";

function AdsSection(props) {
  return (
    <div className="adsSection">
      <img
        style={{
          width: `${props.ads.width}`,
          height: `${props.ads.height}`,
          marginLeft: `${props.ads.margin}`,
        }}
        className="adsImg"
        src={props.ads.image}
      />
      <div style={{ top: `${props.ads.top}` }} className="adsSalesDiv">
        <h1 className="theAdsHeadline">{props.ads.name}</h1>
        <p>{props.ads.p}</p>
        <button className="salesButton"> See all sales</button>
        <p>{props.ads.p2}</p>
      </div>
    </div>
  );
}

export default AdsSection;
