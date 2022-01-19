import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemList = () => {
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
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {products.map((product) => {
            return <Item data={product} />;
          })}
        </>
      )}
    </>
  );
};

export default ItemList;
