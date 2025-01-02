import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';



async function getData(){
  const query = "*[_type == 'logoImage'] | order(_updatedAt asc)[0...7]";
  const data = await client.fetch(query);
  return data;
}

const Logos = async() => {
  const data = await getData();
  return (
    <main className='max-w-screen-2xl overflow-x-hidden mx-auto mt-[60px] mb-[60px] px-4 sm:px-8 lg:px-16'>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 items-center ">
        {
          data.map((logo:any, index:number) => (
            <Image
              key={index}
              className='w-[85px] h-[87px] object-cover'
              height={100}
              width={100}
              src={urlFor(logo.image1).url()}
              alt='logo'
            />
          ))
        }
        {/* Logo 1 */}
        {/* <Image
          className='w-[85px] h-[87px] object-cover'
          height={100}
          width={100}
           src={urlFor(data.image1).url()}
          alt='logo'
        /> */}
        {/* Logo 2 */}
        {/* <Image
          className='w-[107px] h-[109px] object-cover'
          height={100}
          width={100}
          src='/logoiiiiii.png'
          alt='logo'
        /> */}
        {/* Logo 3 */}
        {/* <Image
          className='w-[135px] h-[139px] object-cover'
          height={100}
          width={100}
          src='/logoiiiii.png'
          alt='logo'
        /> */}
        {/* Logo 4 */}
        {/* <Image
          className='w-[65px] h-[63px] object-cover'
          height={100}
          width={100}
          src='/logoiiii.png'
          alt='logo'
        /> */}
        {/* Logo 5 */}
        {/* <Image
          className='w-[98px] h-[101px] object-cover'
          height={100}
          width={100}
          src='/logoiii.png'
          alt='logo'
        /> */}
        {/* Logo 6 */}
        {/* <Image
          className='w-[113px] h-[115px] object-cover'
          height={100}
          width={100}
          src='/logoii.png'
          alt='logo'
        /> */}
        {/* Logo 7 */}
        {/* <Image
          className='w-[84px] h-[87px] object-cover'
          height={100}
          width={100}
          src='/logoi.png'
          alt='logo'
        /> */}
      </div>
    </main>
  )
}

export default Logos
