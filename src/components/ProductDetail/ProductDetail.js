import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Products from "../Products/Products";

const ProductDetail = () => {
  const { productsKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productsKey);
  console.log(product);
  return (
    <div>
      <h1>{productsKey} Detail is comeing sooonn</h1>
      <Products buttonAddToCard={false} product={product}></Products>
    </div>
  );
};

export default ProductDetail;
