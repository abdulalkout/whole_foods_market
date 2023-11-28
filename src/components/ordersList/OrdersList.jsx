import React from "react";
import "./ordersList.css";
import OrderItem from "../odrerItem/OrderItem";
import ordersOptions from "../../modules/orders";

function OrdersList() {
  return (
    <div className="orderListOptions">
      {ordersOptions.map((order, index) => {
        return <OrderItem key={index} order={order} />;
      })}
    </div>
  );
}

export default OrdersList;
