import React from 'react'
import Image from 'next/image'

const BeforFoter = () => {
  return (
    <main className="mt-[60px]">
      <div className="flex justify-center h-auto items-center bg-[#F4F4F4]">
        <div className="max-w-screen-xl w-full h-[270px] items-center flex px-4 lg:px-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {/* High Quality */}
            <div className="flex items-center gap-4">
              <Image
                className="h-[60px] w-[60px]"
                height={60}
                width={60}
                src="/abf1.png"
                alt="iconImage"
              />
              <div>
                <h2 className="font-bold text-lg">High Quality</h2>
                <p className="text-sm text-gray-600">Crafted from top materials</p>
              </div>
            </div>

            {/* Warranty Protection */}
            <div className="flex items-center gap-4">
              <Image
                className="h-[60px] w-[60px]"
                height={60}
                width={60}
                src="/abf2.png"
                alt="iconImage"
              />
              <div>
                <h2 className="font-bold text-lg">Warranty Protection</h2>
                <p className="text-sm text-gray-600">Over 2 years</p>
              </div>
            </div>

            {/* 24 / 7 Support */}
            <div className="flex items-center gap-4">
              <Image
                className="h-[60px] w-[60px]"
                height={60}
                width={60}
                src="/abf3.png"
                alt="iconImage"
              />
              <div>
                <h2 className="font-bold text-lg">24 / 7 Support</h2>
                <p className="text-sm text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BeforFoter
