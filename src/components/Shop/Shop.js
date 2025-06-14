import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Products from "../Products/Products";
import Buy from "../Buy/Buy";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setproduct] = useState(first10);
  const [Cart, setCart] = useState([]);

  const handleAddProducts = (product) => {
    console.log("Prodduct Added", product);
    const newCart = [...Cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter((pd) => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((product) => (
          <Products
            key={product.key}
            buttonAddToCard={true}
            handleAddProducts={handleAddProducts}
            product={product}
          ></Products>
        ))}
      </div>
      <div className="card-container">
        <Buy Cart={Cart}> </Buy>
      </div>
    </div>
  );
};

export default Shop;
