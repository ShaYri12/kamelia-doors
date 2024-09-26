import Image from 'next/image'
import React from 'react'

const CustomizedDoors = () => {
  return (
    <div className='w-full px-5 sm:px-10 py-[40px] md:py-[100px]'>
      <div className='max-w-[1160px] mx-auto w-full flex items-center justify-between xmd:flex-row flex-col gap-12 xmd:gap-5'>
        <div>
          <h3 className='text-[#EE7922] text-[14px] sm:text-[20px] font-medium leading-[30px] tracking-[7%] uppercase mb-1.5'>customized doors</h3>
          <h1 className='xmd:max-w-[480px] text-[28px] sm:text-[40px] leading-[37px] sm:leading-[50px] tracking-[7%] font-bold text-[#1B1717] uppercase'>get your desired <br/> door designs</h1>
          <p className='py-4 sm:py-12 xmd:max-w-[546px] text-[#6E6E6E] text-[12px] sm:text-[17px] leading-[25px] font-normal'>Experience the freedom to design your ideal door with our custom solutions at Kamelia Doors. Whether you envision a sleek, modern style or a classic, timeless look, we bring your ideas to life with precision and care. Our range of customizable options allows you to choose the perfect finish, material, and design that matches your unique taste and home's aesthetic. Elevate your space with doors that are not only functional but also a true reflection of your personal style.</p>
          <button className="w-[160px] h-[48px] rounded-[10px] bg-[#EE7922] text-[16px] leading-[24px] tracking-[10%] font-semibold text-white">Get now</button>
        </div>
        <Image src='/assets/customized-doors.svg' alt='customized-doors' width={504} height={679} />
      </div>
    </div>
  )
}

export default CustomizedDoors