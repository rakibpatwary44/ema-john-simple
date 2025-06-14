import React from "react";

const ReviewItem = (props) => {
  const { name, quantity } = props.product;
  console.log(props);
  const reviewItemStyle = {};
  return (
    <div>
      <h2 className="products-name">{name}</h2>
      <p> Quantity : {quantity}</p>
      <br />
      <button className="main-icon">Remove</button>
    </div>
  );
};

export default ReviewItem;
