import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
const Products = (props) => {
  console.log(props);

  const { img, name, seller, price, stock, key } = props.product;

  return (
    <div className="products">
      <div className="products-img">
        <img src={img} alt="" />
      </div>
      <div className="products-name">
        <h3>
          <Link to={"/product/" + key}>{name}</Link>
        </h3>
        <p>
          <small>By : {seller} </small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} Left in stock - Order Now</small>
        </p>

        <button
          onClick={() => props.handleAddProducts(props.product)}
          className="main-icon"
        >
          {" "}
          <FontAwesomeIcon icon={faCartShopping} />
          Add to card
        </button>
      </div>
    </div>
  );
};

export default Products;
