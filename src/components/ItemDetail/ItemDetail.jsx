import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const onAdd = (cantidad) => {
    alert("Agregaste " + cantidad + " " + product.title);
    setIrAlCarrito(true);
  };

  return (
    <div className="productoCard">
      <div className="imgContainer">
        <img src={product.image} alt="productImg" className="img" />
      </div>
      <div className="descripcionContainer">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>Opinions: {product.rating.count}</h4>
        <h4>Rate: {product.rating.rate}</h4>
        <h1>USD${product.price}</h1>
        <div>
          {irAlCarrito ? (
            <Link to="/cart" className="verCarrito">
              Ver carrito
            </Link>
          ) : (
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
