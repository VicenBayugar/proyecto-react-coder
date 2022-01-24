import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const data = await fetch(`http://fakestoreapi.com/products/${itemId}`);
      const producto = await data.json();
      setProduct(producto);
      setLoading(false);
    };
    obtenerProductos();
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      {loading ? <h1>Loading...</h1> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
