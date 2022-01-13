import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="main">
      <h2>{greeting}</h2>
      <div className="itemListContainer">
        <ItemCount stock={5} initial={1} />
      </div>
    </div>
  );
};

export default ItemListContainer;
