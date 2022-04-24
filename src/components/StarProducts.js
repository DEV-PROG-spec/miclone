import React from "react";
import data from "../data/data.json";
import "../styles/StarProducts.css";

const StarProducts = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a href={data.starProduct[0].url}>
          <img src={data.starProduct[0].image} alt="1st Product" />
        </a>
      </div>
      <div>
        <a href={data.starProduct[1].url}>
          <img src={data.starProduct[1].image} alt="1st Product" />
        </a>
        <a href={data.starProduct[2].url}>
          <img src={data.starProduct[2].image} alt="1st Product" />
        </a>
        <a href={data.starProduct[1].url}>
          <img src={data.starProduct[3].image} alt="1st Product" />
        </a>
      </div>
    </div>
  );
};

export default StarProducts;
