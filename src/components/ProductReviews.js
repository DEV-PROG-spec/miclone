import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductReviews.css";

const ProductReviews = ({ productreviews }) => {
  return (
    <div className="ProductReviews">
      {productreviews.map((item, index) => (
        <ProductCard
          name={item.name}
          price={item.price}
          index={index}
          image={item.image}
          review={item.review}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
