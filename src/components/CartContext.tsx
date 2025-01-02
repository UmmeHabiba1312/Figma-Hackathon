"use client"
import React, { createContext, useContext, useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  size: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void; // Add the addToCart function
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }:any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    // Check if product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Update quantity if product exists
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart(
      cart.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
