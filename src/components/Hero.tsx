import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Image from 'next/image';

const Hero = () => {
  return (
    <main className='h-auto lg:h-[850px] w-full mx-auto max-w-screen-2xl bg-[#f0f2f3]  lg:flex  items-center'>

        {/* left */}
        <div className='h-[337px] flex-1 flex flex-col justify-center md:pl-10 pl-5'>
            <h4 className={`${inter.className} text-[14px] leading-[14px] text-[#272343]`}>Welcome to chairy</h4>
            <h2 className={`${inter.className} sm:text-[60px] text-[45px] leading-[66px] text-[#272343] mt-[20px]`}>Best Furniture
Collection for your
interior.</h2>
<button className='rounded-[8px] h-[52px] w-[171px] text-[#FFFFFF] mt-[30px] px-[24px] py-[14px] gap-[20px] flex justify-center items-center bg-[#029FAE] text-[16px] leading-[17px]'>Shop Now <IoMdArrowForward /></button>
        </div>

        {/* right */}
        <div className='h-auto w-auto flex-1 flex justify-center items-center'>
            <Image
            className='sm:h-[584px] h-[484px] sm:w-[404px] w-full object-cover '
            height={100}
            width={500}
            src='/hero.png'
            alt='hero'/>
        </div>
    </main>
  )
}

export default Hero