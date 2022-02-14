import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { contexto } from "../../Context/CartContext";
import "./Cart.css";
import { getFirestore } from "../../firebase/firebase";
import firebase from "firebase/app";

const Cart = () => {
  const { cart, removeItem, clear, totalCarrito } = useContext(contexto);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  useEffect(() => {
    setTotal(totalCarrito());
  }, [totalCarrito]);

  const terminarCompra = () => {
    const db = getFirestore();
    const orders = db.collection("orders");

    const miOrden = {
      buyer: {
        name: nameRef.current.value,
        mobile: mobileRef.current.value,
        email: emailRef.current.value,
      },
      items: cart,
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    orders
      .add(miOrden)
      .then(({ id }) => {
        console.log("orden ingresada: " + id);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2>Your cart is empty...</h2>
          <h1 className="goShop">
            <Link to="/">¡Go shopping!</Link>
          </h1>
        </>
      ) : (
        <div className="cartCard">
          <h2>Total to pay: USD${total}</h2>
          {cart.map((i) => (
            <div key={i.id} className="cardProducto">
              <div className="imgCart">
                <img src={i.image} alt="" className="imgCarrito" />
              </div>
              <div className="descripcionCarrito">
                <h4>{i.title}</h4>
                <p>Quantity: {i.cantidad}</p>
                <p>Total: USD${i.price * i.cantidad}</p>
              </div>
              <div className="boton">
                <button
                  className="botonEliminar"
                  onClick={() => removeItem(i.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button className="vaciarCarrito" onClick={() => clear()}>
            Empty cart
          </button>
          <div className="formCompra">
            <h2>Enter your personal data:</h2>

            <input
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Full name"
              className="inputsForm"
            />

            <input
              type="text"
              name="mobile"
              ref={mobileRef}
              placeholder="Phone number"
              className="inputsForm"
            />

            <input
              type="text"
              name="email"
              ref={emailRef}
              placeholder="Email"
              className="inputsForm"
            />

            <button onClick={() => terminarCompra()} className="botonComprar">
              Buy!
            </button>
          </div>
          <h2>Congratulations! Your order number is : {orderId}</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
