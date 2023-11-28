import React from "react";
import "./nav.css";
import NavExtension from "../navExtension/NavExtension";

function Nav() {
  return (
    <div className="allNavBars">
      <div className="navDiv">
        <img
          className="logo"
          src="https://content.energage.com/company-images/MA15/SE49900/SE49900_logo_orig.jpg"
          alt="logo"
        />
        <input className="searchBar" type="text" placeholder="  Search" />
        <div className="navLinks">
          {/* <img src="" alt="place" /> */}
          <a>Whole Food Market</a>
        </div>
        <div className="navLinks">
          {/* <img src="" alt="P" /> */}
          <a>Log In</a>
        </div>
        <div className="navLinks">
          {/* <img src="" alt="C" /> */}
          <a>Cart</a>
        </div>
      </div>
      <NavExtension />
    </div>
  );
}

export default Nav;
