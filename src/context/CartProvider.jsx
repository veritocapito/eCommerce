import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const itemExists = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (item) => {
    if (itemExists(item.id)) {
      alert("El item ya fue agregado al carrito");
      return;
    }
    const newItem = { ...item };
    setCart([...cart, newItem]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    if (cart.length) {
      return cart.length;
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
