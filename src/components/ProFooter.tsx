import React from 'react'
import Image from 'next/image'
const ProFooter = () => {
  return (
    <main className='h-[724px] w-full max-w-screen-2xl mx-auto mt-[150px] bg-[#f4f4f5]'>
        <h2 className='text-[50px] leading-[59px] flex justify-center pt-[50px]'>Or subscribe to the newsletter</h2>
        <div className="flex justify-center mt-[50px]">
      <form className="flex items-center gap-4">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="border-b-2 border-[#000000] bg-[#f4f4f5] focus:outline-none focus:border-[#029FAE] transition-all duration-300 w-[643px] pl-3"
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



{/* div */}
<div className='h-[319px] w-full lg:px-8 px-4'>
<h2 className='text-[50px] leading-[59px] flex justify-center mt-[80px]'>Follow products and discounts on Instagram</h2>

<div className='h-[200px] w-full grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-[100px] '>
  {/* one */}
  <Image
  className='h-[186px] w-[186px] rounded-[6px]'
  height={100}
  width={100}
  src='/insta1.png'
  alt='ProductImg'/>

  {/* two */}
  <Image
  className='h-[186px] w-[186px] rounded-[6px]'
  height={100}
  width={100}
  src='/insta2.png'
  alt='ProductImg'/>


{/* threee */}
<Image
  className='h-[186px] w-[186px] rounded-[6px]'
  height={100}
  width={100}
  src='/product4.png'
  alt='ProductImg'/>


{/* four */}
<Image
  className='h-[186px] w-[186px] rounded-[6px]'
  height={100}
  width={100}
  src='/product1.png'
  alt='ProductImg'/>

{/* five */}
<Image
  className='h-[186px] w-[186px] rounded-[6px]'
  height={100}
  width={100}
  src='/product3.png'
  alt='ProductImg'/>


{/* six */}
<Image
  className='h-[186px] w-[186px] rounded-[6px]'
  height={100}
  width={100}
  src='/cat3.png'
  alt='ProductImg'/>


</div>
</div>
    
    </main>
  )
}

export default ProFooter