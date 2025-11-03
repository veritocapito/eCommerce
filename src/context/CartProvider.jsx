import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const itemExists = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (item) => {
    if (itemExists(item.id)) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        } else {
          return cartItem;
        }
      });

      setCart(updatedCart);
      alert(`${item.name} agregado!`);
    } else {
      setCart([...cart, item]);
      alert(`${item.name} agregado!`);
    }
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const getTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return Math.round(total * 100) / 100;
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    return totalItems;
  };

  const checkout = () => {
    confirm("¿Desea finalizar su compra?") && clearCart();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteItem, clearCart, getTotalItems, getTotal, checkout }}>
      {children}
    </CartContext.Provider>
  );
};
