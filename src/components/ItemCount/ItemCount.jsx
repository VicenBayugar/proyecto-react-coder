import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="counter">
      <div>
        <button
          className="botonMenos"
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
        {counter}
        <button
          className="botonMas"
          onClick={() => {
            if (counter < stock) {
              setCounter(counter + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <button className="agregarCarrito">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
