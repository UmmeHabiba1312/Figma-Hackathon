import React from 'react'
import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'

const OurProduct = () => {
  return (
    <main className='max-w-screen-2xl mx-auto mt-[60px] mb-[80px]'>
        <h2 className='text-[32px] leading-[35px] text-[#272343] font-medium flex justify-center'>Our Products</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] mt-[80px] px-4 sm:px-4 lg:px-8">
        {/* Product 1 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <button className="absolute left-2 top-2 bg-[#01AD5A] text-white px-4 py-2 rounded-[4px] text-sm">
              New
            </button>
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product1.png"
              alt="product1"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <button className="absolute left-4 top-4 bg-[#F5813F] text-white px-4 py-2 rounded-lg text-sm">
              Sales
            </button>
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product2.png"
              alt="product2"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580] flex gap-2 items-center">{'20$'}  <span className='text-[#9A9CAA] text-[14px] leading-[15px] line-through'>{`20$`}</span></div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product3.png"
              alt="product3"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] text-black h-[44px] w-[44px] group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product4.png"
              alt="product4"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="group-hover:bg-[#029FAE] bg-gray-200 rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] mt-[80px] px-4 sm:px-4 lg:px-8">
        {/* Product 1 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <button className="absolute left-2 top-2 bg-[#01AD5A] text-white px-4 py-2 rounded-[4px] text-sm">
              New
            </button>
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product1.png"
              alt="product1"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <button className="absolute left-4 top-4 bg-[#F5813F] text-white px-4 py-2 rounded-lg text-sm">
              Sales
            </button>
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product2.png"
              alt="product2"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580] flex gap-2 items-center">{'20$'}  <span className='text-[#9A9CAA] text-[14px] leading-[15px] line-through'>{`20$`}</span></div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product3.png"
              alt="product3"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] text-black h-[44px] w-[44px] group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="group overflow-hidden rounded-[6px] shadow-lg bg-white hover:shadow-xl transition-all duration-300">
          <div className="relative w-full h-[250px] flex justify-center items-center">
            <Image
              className="w-full h-[250px] object-cover"
              height={250}
              width={250}
              src="/product4.png"
              alt="product4"
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
              <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
            </div>
          
            <div className="flex justify-center pb-4">
              <div className="group-hover:bg-[#029FAE] bg-gray-200 rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
                <FiShoppingCart className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OurProduct