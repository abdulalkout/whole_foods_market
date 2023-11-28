import React from "react";
import "./orderItem.css";

function OrderItem({ order }) {
  return (
    <div className="orederItem">
      <a className="orderName">{order.name}</a>
      <img className="orderItemImg" src={order.image} />
    </div>
  );
}

export default OrderItem;
