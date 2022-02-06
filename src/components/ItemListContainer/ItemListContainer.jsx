import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { getFirestore } from "../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { categoryId } = useParams();

  useEffect(() => {
    // const db = getFirestore()

    setLoading(true);
    const obtenerProductos = async () => {
      const data = await fetch(`http://fakestoreapi.com/products`);
      const productosObtenidos = await data.json();
      categoryId
        ? setProducts(
            productosObtenidos.filter((item) => item.category === categoryId)
          )
        : setProducts(productosObtenidos);
      setLoading(false);
    };
    obtenerProductos();
  }, [categoryId]);

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
