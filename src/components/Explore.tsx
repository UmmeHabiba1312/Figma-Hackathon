import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-4 lg:px-8 h-auto mt-[140px] mb-[80px] flex flex-col lg:flex-row gap-[15px]">
      {/* Left Section */}
      <div className="left w-full lg:w-[50%]">
        <Image
          className="w-full h-auto lg:h-[648px] object-cover rounded-[10px]"
          height={100}
          width={100}
          src="/category1.png"
          alt="img"
        />
      </div>

      {/* Right Section */}
      <div className="right w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
        {/* Top Images */}
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/product4.png"
            alt="img"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/product1.png"
            alt="img"
          />
        </div>

        {/* Bottom Images */}
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/cat.png"
            alt="img"
          />
        </div>
        <div>
          <Image
            className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
            height={100}
            width={100}
            src="/product1.png"
            alt="img"
          />
        </div>
      </div>
    </main>
  )
}

export default Explore
