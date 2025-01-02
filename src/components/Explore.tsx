import React from 'react'
import Image from 'next/image'
import { client } from "@/sanity/lib/client"; // Assuming you have a client set up to fetch data from Sanity

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
}

// Fetch data from Sanity
async function getData() {
  const query = `*[_type == 'product'][3...8] | order(_createdAt asc) { 
    _id,
    name,
    description,
    price,
    "slug":slug.current,
    "imageUrl":Images[0].asset->url
  }`;

  const data = await client.fetch(query);
  return data;
}

const Explore = async () => {
  // Fetch data from Sanity
  const products: Product[] = await getData();

  return (
    <main className="max-w-screen-2xl mx-auto overflow-x-hidden px-4 lg:px-8 h-auto mt-[140px] mb-[80px] flex flex-col lg:flex-row gap-[15px]">
      {/* Left Section */}
      <div className="left w-full lg:w-[50%]">
        {/* Display the first product image */}
        <Image
          className="w-full h-auto lg:h-[648px] object-cover rounded-[10px]"
          height={100}
          width={100}
          src={products[0].imageUrl}
          alt={products[0].name}
        />
      </div>

      {/* Right Section */}
      <div className="right w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
        {/* Map through the remaining products */}
        {products.slice(1).map((product) => (
          <div key={product._id}>
            <Image
              className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
              height={100}
              width={100}
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Explore;
