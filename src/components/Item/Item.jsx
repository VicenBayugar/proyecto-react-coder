import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="itemCard">
      <div className="contenedorImg">
        <img src={data.image} alt="#" className="imagen" />
      </div>
      <h4>{data.title}</h4>
      <h4>${data.price}</h4>
    </div>
  );
};

export default Item;
