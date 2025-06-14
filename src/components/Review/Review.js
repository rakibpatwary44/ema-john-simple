import React, { useEffect, useState } from "react";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { faKeybase } from "@fortawesome/free-brands-svg-icons";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveData = getDatabaseCart();

    const productKeys = Object.keys(saveData);

    const cartProduct = productKeys.map((kays) => {
      const product = fakeData.find((pd) => pd.key === kays);
      product.quantity = saveData[kays];
      return product;
    });
    setCart(cartProduct);
  });
  return (
    <div>
      <h3>Review Products : {cart.length}</h3>
      {cart.map((pd) => (
        <ReviewItem product={pd}></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
