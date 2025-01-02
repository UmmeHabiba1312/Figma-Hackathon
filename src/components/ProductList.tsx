import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard
import { useCart } from './CartContext';
 // Import useCart to access cart state

const ProductList = () => {
  const { cart } = useCart(); // Access the cart state from context
  // Sample products array
  const products = [
    {
      id: 1,
      name: 'Library Stool Chair',
      description: 'Ashen Slate/Cobalt Bliss',
      price: 99,
      image: '/product1.png',
    },
    {
      id: 2,
      name: 'Bookshelf Chair',
      description: 'Wooden Frame, Brown',
      price: 149,
      image: '/product2.png',
    },
    // Add more products here
  ];

  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
