import React from 'react'
import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'
const page = () => {
  return (
    <main className='max-w-screen-2xl mx-auto h-auto w-full mb-[80px]'>
      {/* pages hero */}
      <div className='h-auto w-auto mt-[60px] mb-[60px] lg:flex'>
        <div className="one flex-1 h-auto">
          <Image
          className='h-[607px] w-[675px] object-cover rounded-[10px]'
          height={100}
          width={100}
          src='/product4.png'
          alt='hero'/>
        </div>
        <div className="two h-auto flex-1 pl-[75px] pt-[80px] lg:pt-0">
          <h2 className='text-[#272343] text-[60px] leading-[66px] '>Library Stool Chair</h2>
          <button className='h-[44px] w-[144px] bg-[#029FAE] rounded-full text-white mt-[50px]'>{`$20.00 USD`}</button>
          <hr className='mt-[40px]'/>
          <p className='text-[22px] leading-[33px] text-[#272343] mt-[70px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <button className='h-[63px] w-[212px] rounded-[8px] bg-[#029FAE] text-white flex justify-center items-center mt-[50px] gap-3'><FiShoppingCart className='h-[29px] w-[29px]' /> Add To cart</button>
        </div>
      </div>


      {/* Feature products */}
      <div className='h-auto w-full'>
      <div className='flex justify-between px-8'>
        <h2 className='text-[28px] leading-[34px] text-[#000000]'>Featured Products</h2>
        {/* Submit Button */}
        <button
          type="submit"
          className="border-b-2 hover:border-[#029FAE] border-[#000000] text-gray-900 focus:border-[#029FAE] focus:outline-none transition-all duration-300 px-4"
        >
          View All
        </button>
        </div>

{/* cards  */}
<div className='h-auto w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-[100px] '>
  {/* one */}
 <div>
 <Image
  className='h-[286px] w-[240px] rounded-[6px]'
  height={100}
  width={100}
  src='/insta1.png'
  alt='ProductImg'/>
  <div className='flex justify-between w-[240px] h-auto mt-3'>
    <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
    <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
  </div>
 </div>

  {/* two */}
  <div>
 <Image
  className='h-[286px] w-[240px] rounded-[6px]'
  height={100}
  width={100}
  src='/insta2.png'
  alt='ProductImg'/>
  <div className='flex justify-between w-[240px] h-auto mt-3'>
    <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
    <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
  </div>
 </div>


{/* threee */}
<div>
 <Image
  className='h-[286px] w-[240px] rounded-[6px]'
  height={100}
  width={100}
  src='/product4.png'
  alt='ProductImg'/>
  <div className='flex justify-between w-[240px] h-auto mt-3'>
    <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
    <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
  </div>
 </div>

{/* four */}
<div>
 <Image
  className='h-[286px] w-[240px] rounded-[6px]'
  height={100}
  width={100}
  src='/product1.png'
  alt='ProductImg'/>
 <div className='flex justify-between w-[240px] h-auto mt-3'>
    <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
    <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
  </div>
 </div>


{/* six */}
<div>
 <Image
  className='h-[286px] w-[240px] rounded-[6px]'
  height={100}
  width={100}
  src='/cat3.png'
  alt='ProductImg'/>
  <div className='flex justify-between w-[240px] h-auto mt-3'>
    <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
    <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
  </div>
 </div>


</div>
      </div>
    </main>
  )
}

export default page
