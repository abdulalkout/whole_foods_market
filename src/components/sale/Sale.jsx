import React from "react";
import "./sale.css";

function Sale({ sale }) {
  return (
    <div className="saleItem">
      <img className="saleItemImage" src={sale.image} />
      <a className="saleLinks" href="">
        {sale.name}
      </a>
    </div>
  );
}

export default Sale;
