'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import AddToCart from './AddToCart';

interface SimplifiedProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
}

interface ProductListProps {
  products: SimplifiedProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <main className="max-w-screen-2xl mx-auto mt-[80px] lg:px-8 px-4 mb-10">
      <h2 className="text-[32px] font-semibold leading-[35px] text-[#272343]">
        All Products
      </h2>

      {/* Products Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[35px] mt-[30px]">
        {products.map((product, index) => (
          <div
            key={product._id}
            className="group overflow-hidden rounded-[6px] bg-white sm:mt-8 md:mt-12 transition-all duration-300"
          >
            <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
              {/* Conditional Rendering for Buttons */}
              {[0, 4, 8].includes(index) && (
                <button className="absolute left-2 top-2 text-white px-4 py-2 rounded-[4px] text-sm bg-[#01AD5A]">
                  New
                </button>
              )}

              {[1, 5, 9].includes(index) && (
                <button className="absolute left-2 top-2 text-white px-4 py-2 rounded-[4px] text-sm bg-[#F5813F]">
                  Sales
                </button>
              )}

              {/* Image */}
              {product.imageUrl ? (
                <Image
                  className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
                  height={250}
                  width={250}
                  src={product.imageUrl}
                  alt={product.name}
                />
              ) : (
                <div className="w-full sm:h-[250px] h-[300px] bg-gray-200 rounded-[6px] flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-3 px-1">
              <div>
                {/* Product Name */}
                <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">
                  <Link href={`/extrapages/${product.slug}`}>{product.name}</Link>
                </div>

                {/* Price Section */}
                {index === 1 ? (
                  <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580] flex gap-2 items-center">
                    ${product.price}
                    <span className="text-[#9A9CAA] text-[14px] leading-[15px] line-through">
                      $30
                    </span>
                  </div>
                ) : (
                  <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">
                    ${product.price}
                  </div>
                )}
              </div>

              <div className="flex justify-center pb-4">
                {/* Cart Icon */}
                <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
                  <FiShoppingCart className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4">
              <AddToCart
                id={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.imageUrl}
                currency="USD"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;