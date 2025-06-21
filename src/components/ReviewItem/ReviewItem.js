import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key } = props.product;
  // console.log(props);
  const reviewItemStyle = {
    borderBottom: '1px solid lightgray',
    marginBottom: '5px',
    paddingBottom: '5px',
    marginLeft: '200px'
  };
  return (
    <div style={reviewItemStyle} >

      <h2 className="products-name">{name}</h2>
      <p> Quantity : {quantity}</p>
      <br />
      <button
        onClick={ () => props.removeProduct (key) }
        className="main-icon"

      >Remove</button>
    </div>
  );
};

export default ReviewItem;
