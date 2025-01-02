import React from 'react';
import Image from 'next/image';

const ProFooter = () => {
  return (
    <main className="h-auto w-full max-w-screen-2xl mx-auto mt-[150px] bg-[#f4f4f5] overflow-x-hidden">
      <h2 className="sm:text-[50px] text-[40px] leading-[59px] flex justify-center pt-[50px] lg:px-8 px-4">
        Or subscribe to the newsletter
      </h2>
      <div className="flex justify-center mt-[50px] lg:px-8 px-4">
      <form className="flex items-center gap-4">
  {/* Email Input */}
  <input
    type="email"
    placeholder="Enter your email"
    className="border-b-2 border-[#000000] bg-[#f4f4f5] focus:outline-none focus:border-[#029FAE] transition-all duration-300 sm:w-[643px] w-full pl-3"
    required
  />

  {/* Submit Button */}
  <button
    type="submit"
    className="border-b-2 hover:border-[#029FAE] border-[#000000] text-gray-700 focus:border-[#029FAE] focus:outline-none transition-all duration-300 px-4"
  >
    Submit
  </button>
</form>

      </div>

      {/* Instagram section */}
      <div className="h-auto w-full lg:px-8 px-6">
        <h2 className="sm:text-[50px] text-[40px] leading-[59px] flex justify-center mt-[80px]">
          Follow products and discounts on Instagram
        </h2>

        <div className="h-auto w-full grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[100px] gap-4">
          {/* Instagram Images */}
          <Image
            className="sm:h-[186px] h-auto sm:w-[186px] w-full rounded-[6px] object-cover"
            height={186}
            width={186}
            src="/insta1.png"
            alt="ProductImg"
          />
          <Image
            className="sm:h-[186px] h-auto sm:w-[186px] w-full rounded-[6px] object-cover"
            height={186}
            width={186}
            src="/insta2.png"
            alt="ProductImg"
          />
          <Image
            className="sm:h-[186px] h-auto sm:w-[186px] w-full rounded-[6px] object-cover"
            height={186}
            width={186}
            src="/product4.png"
            alt="ProductImg"
          />
          <Image
            className="sm:h-[186px] h-auto sm:w-[186px] w-full rounded-[6px] object-cover"
            height={186}
            width={186}
            src="/product1.png"
            alt="ProductImg"
          />
          <Image
            className="sm:h-[186px] h-auto sm:w-[186px] w-full rounded-[6px] object-cover"
            height={186}
            width={186}
            src="/product3.png"
            alt="ProductImg"
          />
          <Image
            className="sm:h-[186px] h-auto sm:w-[186px] w-full rounded-[6px] object-cover"
            height={186}
            width={186}
            src="/cat3.png"
            alt="ProductImg"
          />
        </div>
      </div>
    </main>
  );
};

export default ProFooter;
