import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="itemCard">
      <div className="contenedorImg">
        <img src={data.image} alt="#" className="imagen" />
      </div>
      <div className="descItem">
        <h4>{data.title}</h4>
        <h4>${data.price}</h4>
        <Link to={`/detalle/${data.id}`} className="linkDetalle">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
