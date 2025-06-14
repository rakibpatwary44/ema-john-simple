import React from "react";
import "./Buy.css";
import { Link } from "react-router";

const Buy = (props) => {
  const Cart = props.Cart;

  // const total = Cart.reduce((total, prd) => total + prd.price , 0)
  let total = 0;
  for (let i = 0; i < Cart.length; i++) {
    const prd = Cart[i];
    total = total + prd.price;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tex = Math.round(total / 10);
  const grandTotal = (total + shipping + tex).toFixed(2);

  const formatNumber = (num) => {
    const precison = num.toFixed(2);
    return Number(precison);
  };
  return (
    <div>
      <h5>Order Summary </h5>
      <p>Items Ordered :{Cart.length} </p>
      <p>Prodcts Price : {formatNumber(total)}</p>
      <p>
        <small>Shiiping Cost : {shipping}</small>
      </p>
      <p>
        <small>Tex + VAT {tex}</small>
      </p>
      <p>Total Price : {grandTotal}</p>
      <Link to="/review">
        <button className="confram-btn">Confram Order</button>
      </Link>
    </div>
  );
};

export default Buy;
