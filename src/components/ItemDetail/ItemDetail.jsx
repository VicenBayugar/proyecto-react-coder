import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="productoCard">
      <div className="imgContainer">
        <img src={product.image} alt="productImg" className="img" />
      </div>
      <div className="descripcionContainer">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>Opiniones: {product.rating.count}</h4>
        <h4>Promedio: {product.rating.rate}</h4>
        <h1>USD${product.price}</h1>
        <ItemCount stock={5} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
