import React from "react";
import Sale from "./Sale";
import "./sale.css";
import sales from "../../modules/sales";

function SaleList() {
  return (
    <div className="saleListDiv">
      {sales.map((saleItem, index) => {
        return <Sale key={index} sale={saleItem} />;
      })}
    </div>
  );
}

export default SaleList;
