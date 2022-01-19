import React from "react";
import "./ItemListContainer.css";
// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="main">
      <h2>{greeting}</h2>
      <div className="itemListContainer">
        <ItemList />
        {/* <ItemCount stock={5} initial={1} /> */}
      </div>
    </div>
  );
};

export default ItemListContainer;
