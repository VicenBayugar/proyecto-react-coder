import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    setTimeout(() => {
      const obtenerProductos = async () => {
        const data = await fetch("http://fakestoreapi.com/products");
        const productosObtenidos = await data.json();
        setProducts(productosObtenidos);
        setLoading(false);
      };
      obtenerProductos();
    }, 2000);
  }, []);

  return (
    <div className="main">
      <h2>{greeting}</h2>
      <div className="itemListContainer">
        {loading ? <h1>Loading...</h1> : <ItemList products={products} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
