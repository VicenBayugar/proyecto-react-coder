import React, { useContext } from "react";
import { contexto } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(contexto);

  return (
    <>
      {cart.length === 0 ? (
        <h1>Your cart is empty...</h1>
      ) : (
        <div className="cartCard">
          {cart.map((i) => (
            <div key={i.item.id} className="cardProducto">
              <div className="imgCart">
                <img src={i.item.image} alt="" className="imgCarrito" />
              </div>
              <div className="descripcionCarrito">
                <h4>{i.item.title}</h4>
                <p>Quantity: {i.cantidad}</p>
              </div>
              <div className="boton">
                <button
                  className="botonEliminar"
                  onClick={() => removeItem(i.item.id)}
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
