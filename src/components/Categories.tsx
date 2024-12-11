import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Categories = () => {
  return (
    <main className="max-w-screen-2xl mx-auto w-full mt-[60px] px-6 sm:px-6 lg:px-8 mb-[60px]">
      <h2
        className={`${inter.className} text-[32px] font-medium leading-[35px] text-[#272343] mt-[50px]`}
      >
        Top Categories
      </h2>

      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Category 1 */}
        <div className="group w-full h-[424px] rounded-[10px] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            className="h-full w-full object-cover rounded-[10px]" 
            
            height={100}
            width={100}
            src="/cat.png"
            alt="category1"
          />
          {/* Hover Info */}
          <div className="absolute bottom-0 left-0 w-full bg-black text-white pl-10 py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="font-bold">Wing Chair</span> <br />
            <span>3,584 Products</span>
          </div>
        </div>

        {/* Category 2 */}
        <div className="group w-full h-[424px] rounded-[10px] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            className="h-full w-full object-cover rounded-[10px]" 
            height={100}
            width={100}
            src="/cat2.png"
            alt="category2"
          />
          {/* Hover Info */}
          <div className="absolute bottom-0 left-0 w-full bg-black text-white pl-10 py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="font-bold">Wing Chair</span> <br />
            <span>3,584 Products</span>
          </div>
        </div>

        {/* Category 3 */}
        <div className="group w-full h-[424px] rounded-[10px] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            className="h-full w-full object-cover rounded-[10px]"  
            height={100}
            width={100}
            src="/cat3.png"
            alt="category3"
          />
          {/* Hover Info */}
          <div className="absolute bottom-0 left-0 w-full bg-black text-white pl-10 py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="font-bold">Wing Chair</span> <br />
            <span>3,584 Products</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Categories;
