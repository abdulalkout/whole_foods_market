import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <ul>
          <p>Shooping</p>
          <li>Weekly Sales</li>
          <li>Browse In-Store</li>
          <li>Grocery Pickup & Delivery</li>
          <li>Catering</li>
          <li>Shipped to You</li>
          <li>Amazon Prime at Whole Foods</li>
          <li>Gift Cards</li>
          <li>Special Diets</li>
          <li>Tips and Ideas</li>
          <li>Order Online</li>
        </ul>
      </div>
      <div>
        <ul>
          <p>Mission in Action</p>
          <li>Responsible Sourcing</li>
          <li>Quality Standards</li>
          <li>Community Giving</li>
          <li>Environmental Stewardship</li>
        </ul>
      </div>
      <div>
        <ul>
          <p>About</p>
          <li>About Whole Foods Market</li>
          <li>Our Values</li>
          <li>Departments</li>
          <li>Information and Potential Suppliers</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <p>Need Help?</p>
        <br />
        <br />
        <p>Visit customer care {`-->`}</p>
        <br />
        <br />
        <br />
        <p>Connect With Us</p>
      </div>
    </div>
  );
}

export default Footer;
