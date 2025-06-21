import React, { useEffect, useState } from "react";
import {
  addToDatabaseCart,
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import { faKeybase } from "@fortawesome/free-brands-svg-icons";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Products from './../Products/Products';
import Buy from './../Buy/Buy';

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = (productKey) => {
    console.log('producrt Remove button clicket ', productKey)
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart)
    removeFromDatabaseCart(productKey);
  }

  useEffect(() => {
    const saveData = getDatabaseCart();

    const productKeys = Object.keys(saveData);

    const cartProduct = productKeys.map((kays) => {
      const product = fakeData.find((pd) => pd.key === kays);
      product.quantity = saveData[kays];
      return product;
    });
    setCart(cartProduct);
  }, []);
  return (
    <div className="Twin-container">
      {/* <h3>Review Products : {cart.length}</h3>  */}
      <div className="product-container">
        {
          cart.map(pd =>
            <ReviewItem
              key={pd.kay}
              product={pd}
              removeProduct={removeProduct}
            ></ReviewItem>)
        }
      </div>
      <div className="cart-container">
       <Buy  Cart={cart}> </Buy>
      </div>
    </div>
  );
};

export default Review;
