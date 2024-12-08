import React from 'react'
import Image from 'next/image'

const Logos = () => {
  return (
    <main className='max-w-screen-2xl mx-auto mt-[60px] mb-[60px] px-4 sm:px-8 lg:px-16'>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-center">
        {/* Logo 1 */}
        <Image
          className='w-[85px] h-[87px] object-cover'
          height={100}
          width={100}
          src='/logo.png'
          alt='logo'
        />
        {/* Logo 2 */}
        <Image
          className='w-[107px] h-[109px] object-cover'
          height={100}
          width={100}
          src='/logo7.png'
          alt='logo'
        />
        {/* Logo 3 */}
        <Image
          className='w-[135px] h-[139px] object-cover'
          height={100}
          width={100}
          src='/logo6.png'
          alt='logo'
        />
        {/* Logo 4 */}
        <Image
          className='h-[65px] w-[63px] object-cover'
          height={100}
          width={100}
          src='/logo5.png'
          alt='logo'
        />
        {/* Logo 5 */}
        <Image
          className='w-[98px] h-[101px] object-cover'
          height={100}
          width={100}
          src='/logo4.png'
          alt='logo'
        />
        {/* Logo 6 */}
        <Image
          className='w-[113px] h-[115px] object-cover'
          height={100}
          width={100}
          src='/logo3.png'
          alt='logo'
        />
        {/* Logo 7 */}
        <Image
          className='w-[84px] h-[87px] object-cover'
          height={100}
          width={100}
          src='/logo2.png'
          alt='logo'
        />
      </div>
    </main>
  )
}

export default Logos
