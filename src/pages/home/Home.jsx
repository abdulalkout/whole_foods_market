import React from "react";
import "./home.css";
import Nav from "../../components/nav/Nav";
import AdsSection from "../../components/adsSection/AdsSection";
import OrdersList from "../../components/ordersList/OrdersList";
import ads from "../../modules/ads";
import SaleList from "../../components/sale/SaleList";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <AdsSection ads={ads[0]} />
      <OrdersList />
      <AdsSection ads={ads[1]} />
      <SaleList />
      <Footer />
    </div>
  );
}

export default Home;
