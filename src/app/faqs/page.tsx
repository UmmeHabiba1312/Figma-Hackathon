import React from 'react'

const FaqsPage = () => {
  return (
    <main>
        <div className='h-auto w-full mb-[60px] mt-[60px]'>

            <h2 className='text-[48px] leading-[56px] flex justify-center text-[#333333]'>Questions Looks Here</h2>
            <p className='text-[16px] leading-[24px] flex justify-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>


            <div className="h-auto w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[70px] px-[10px]">
  {Array(6)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        className="bg-[#F7F7F7] h-[170px] md:h-auto w-full max-w-[648px] rounded-[8px] p-[35px] mx-auto "
      >
        <div className="flex justify-between items-center">
          <h5 className="text-[18px] leading-[26px] text-[#333333]">
            What types of chairs do you offer?
          </h5>
          <span className="h-[24px] w-[24px] text-center cursor-pointer">+</span>
        </div>
        <p className="text-[16px] leading-[24px] text-[#4F4F4F] mt-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
          modi ullam amet debitis libero veritatis enim repellat optio natus eum
          delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
        </p>
      </div>
    ))}
</div>

            
        </div>
    </main>
  )
}

export default FaqsPage