import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Shop = () => {
  // Array containing product details
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/product3.png", // Path for the first product image
    },
    {
      id: 2,
      name: "Library Stool Chair",
      description: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/product1.png", // Path for the second product image
    },
  ];

  return (
    <main className="mt-[60px] mb-[60px]">
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bag Section */}
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Bag</h2>

          {/* Cart Items */}
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center gap-4 border-b pb-6 mb-6"
            >
              <div className="w-full md:w-1/4">
                <Image
                  height={100}
                  width={100}
                  src={product.image} // Use dynamic image path
                  alt={product.name}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex gap-4 text-sm mt-2">
                  <p>Size: {product.size}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button className="text-gray-500 hover:text-gray-800">
                    <FaRegHeart />
                  </button>
                  <button className="text-gray-500 hover:text-gray-800">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/4 text-right">
                <p className="text-sm font-medium text-gray-700">
                  MRP: ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="hover:bg-gray-100 rounded-lg p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">Subtotal</p>
            <p className="text-sm font-medium">$198.00</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              Estimated Delivery & Handling
            </p>
            <p className="text-sm font-medium">Free</p>
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <p className="text-base font-semibold">Total</p>
            <p className="text-base font-semibold">$198.00</p>
          </div>
          <button className="w-full mt-6 py-2 px-4 bg-[#029FAE] text-white font-semibold rounded-[30px] hover:bg-teal-600">
            Member Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Shop;
