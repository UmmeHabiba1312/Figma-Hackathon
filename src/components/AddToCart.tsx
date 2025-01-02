// AddToCart.tsx
'use client';

import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { FiShoppingCart } from "react-icons/fi";
import { urlFor } from "@/sanity/lib/image";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  image: any;
  currency: string;
  id: string; // Unique identifier for the product
  price_id?:string;
}

const AddToCart = ({
  currency,
  description,
  name,
  price,
  image,
  id,
  price_id,
}: ProductCart) => {
  const { cartDetails, addItem, setItemQuantity, handleCartClick } =
    useShoppingCart();

  const product = {
    id, // This must match the cart's unique identifier field
    name,
    description,
    price,
    image: urlFor(image).url(),
    currency,
    price_id
  };

  const handleAddToCart = () => {
    // Check if the item already exists in the cart
    const existingItem = cartDetails?.[id];

    if (existingItem) {
      // Increment the quantity if it exists
      setItemQuantity(id, existingItem.quantity + 1);
    } else {
      // Add a new item if it doesn't exist
      addItem(product);
    }

    // Optionally, open the cart after adding the item
    handleCartClick();
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="h-[63px] hover:bg-[#272343] w-[212px] rounded-[8px] bg-[#029FAE] text-white flex justify-center items-center mt-[40px] gap-3"
    >
      <FiShoppingCart className="h-[29px] w-[29px]" /> Add To Cart
    </Button>
  );
};

export default AddToCart;
