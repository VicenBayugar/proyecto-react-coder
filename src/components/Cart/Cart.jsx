import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { contexto } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, totalCarrito } = useContext(contexto);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalCarrito());
  }, [totalCarrito]);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2>Your cart is empty...</h2>
          <h1 className="goShop">
            <NavLink to="/">¡Go shopping!</NavLink>
          </h1>
        </>
      ) : (
        <div className="cartCard">
          <h1>Total a pagar: ${total}</h1>
          {cart.map((i) => (
            <div key={i.id} className="cardProducto">
              <div className="imgCart">
                <img src={i.image} alt="" className="imgCarrito" />
              </div>
              <div className="descripcionCarrito">
                <h4>{i.title}</h4>
                <p>Quantity: {i.cantidad}</p>
                <p>Total: ${i.price * i.cantidad}</p>
              </div>
              <div className="boton">
                <button
                  className="botonEliminar"
                  onClick={() => removeItem(i.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button className="vaciarCarrito" onClick={() => clear()}>
            Empty cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
