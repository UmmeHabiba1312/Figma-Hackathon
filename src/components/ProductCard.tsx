import React from 'react';
import { useCart } from './CartContext'; // Adjust the path as needed

const ProductCard = ({ product }: any) => {
  const { addToCart } = useCart(); // Using the CartContext to get addToCart function

  const handleAddToCart = () => {
    addToCart(product); // Adding product to the cart
  };

  return (
    <div className="product-card border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
