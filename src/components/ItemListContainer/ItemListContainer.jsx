import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getFirestore } from "../../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const db = getFirestore();
      const itemCollection = db
        .collection("productos")
        .where("category", "==", `${categoryId}`);
      itemCollection
        .get()
        .then((querySnapshot) => {
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const db = getFirestore();
      const itemCollection = db.collection("productos");
      itemCollection
        .get()
        .then((querySnapshot) => {
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
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
