import { createContext, useEffect, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_v1");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return toast.error("Corrupted cart data, resetting...");
    }
  });

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    toast.success(`${product.title} added to cart!`);
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[product.id]) {
        copy[product.id].quantity += 1;
      } else {
        copy[product.id] = { ...product, quantity: 1 };
      }
      return copy;
    });
  };

  const removeFromCart = (id) => {
    toast.success(`Item removed from cart successfully!`);
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const updateQuantity = (id, qty) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (!copy[id]) return copy;
      copy[id].quantity = Math.max(1, qty);
      return copy;
    });
  };

  const clearCart = () => {
    return toast.success("Order placed successfully!"), setCart({});
  };

  const totalItems = Object.values(cart).reduce((s, it) => s + it.quantity, 0);
  const totalPrice = Object.values(cart).reduce(
    (s, it) => s + it.price * it.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
