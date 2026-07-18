"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  finish?: string;
  size?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load from local storage on mount
    const saved = localStorage.getItem("prabha_cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    } else {
      // Mock cart with 2-3 products pre-loaded as requested
      setItems([
        {
          productId: "1",
          name: "Lumina Gold Washbasin",
          image: "/images/products/basin-1.jpg",
          price: 15000,
          quantity: 1,
          finish: "Gold",
        },
        {
          productId: "2",
          name: "Onyx Black Floor Tile",
          image: "/images/products/tile-1.jpg",
          price: 2500,
          quantity: 10,
          size: "60x60",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    // Save to local storage on change
    localStorage.setItem("prabha_cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === item.productId && i.finish === item.finish && i.size === item.size);
      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId && i.finish === item.finish && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity: Math.max(1, quantity) } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
