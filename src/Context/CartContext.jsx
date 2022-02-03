import React, { createContext, useState } from "react";

export const contexto = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (producto, cantidad) => {
    if (isInCart(producto.id)) {
      const indexItem = cart.findIndex((e) => e.item.id === producto.id);
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: producto, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((i) => i.item.id === id);
  };

  const removeItem = (id) => {
    const carritoActualizado = cart.filter((e) => e.item.id !== id);
    setCart(carritoActualizado);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <contexto.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </contexto.Provider>
  );
};

export default CartContext;
