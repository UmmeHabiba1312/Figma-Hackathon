import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Image from 'next/image';

const Hero = () => {
  return (
    <main className='h-auto lg:h-[850px] w-full mx-auto max-w-screen-2xl bg-[#f0f2f3] flex flex-col lg:flex-row items-center px-4 sm:px-10 lg:px-0'>

      {/* Left Section */}
      <div className='flex-1 flex flex-col justify-center text-center lg:text-left'>
        <h4 className={`${inter.className} text-[14px] leading-[14px] text-[#272343]`}>
          Welcome to Chairy
        </h4>
        <h2
          className={`${inter.className} text-[32px] sm:text-[45px] lg:text-[60px] leading-[36px] sm:leading-[50px] lg:leading-[66px] text-[#272343] mt-4`}
        >
          Best Furniture Collection for your interior.
        </h2>
        <button
          className='rounded-[8px] h-[52px] w-full sm:w-[171px] text-[#FFFFFF] mt-6 sm:mt-[30px] px-4 sm:px-[24px] py-2 flex justify-center items-center bg-[#029FAE] text-[16px] leading-[17px]'
        >
          Shop Now <IoMdArrowForward className='ml-2' />
        </button>
      </div>

      {/* Right Section */}
      <div className='flex-1 h-auto w-auto flex justify-center items-center mt-6 lg:mt-0'>
        <Image
          className='h-auto w-full sm:w-[404px] md:w-[554px] lg:h-[804px] lg:w-[650px] '
          height={100}
          width={500}
          src='/hero.png'
          alt='hero'
        />
      </div>
    </main>
  );
};

export default Hero;
