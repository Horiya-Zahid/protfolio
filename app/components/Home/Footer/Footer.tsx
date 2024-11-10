import React from 'react'
import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40'>
            {/* first part */}
            <div>
            <div className='text-[35px] font-semibold text-white'>
          Hori<span className='text-red-500'>y</span>a
        </div>
        <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70 '>
           Passionate Full Stack Developer dedicated to building seamless web experiences with Next.js, React, and 
           modern web technologies. Commited to delivering high quality, responsive, and user-friendly solutions.</h1>
            <a href='mailto:horiyazahid09@gmail.com'><p className='mt-[1.3rem] text-yellow-300 underline font-semibold'>horiyazahid09@gmail.com</p></a>
            </div>
            {/* 2nd Part */}
            <div className='md:mx-auto'>
                <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>Quick Links</h1>
                <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>About</p>
                <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Services</p>
                <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Project</p>
                <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>Contact</p>
            </div>
            {/* 3rd Part */}
            <div className='lg:mx-auto'>
            <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>Address</h1>
            <div className='flex items-center mt-[1rem] space-x-2'>
                <BiMapPin className='w-[1rem] h-[1rem] text-yellow-400' />
                <p className='text-[17px] font-normal text-white opacity-75'>Karachi, Pakistan</p>
            </div>
            <div className='flex items-center mt-[1rem] space-x-2'>
                <BiEnvelope className='w-[1rem] h-[1rem] text-yellow-400' />
                <a href='mailto:horiyazahid09@gmail.com'><p className='text-[17px] font-normal text-white opacity-75'>horiyazahid09@gmail.com</p></a>
            </div>
            <div className='flex items-center mt-[1rem] space-x-2'>
                <BiPhone className='w-[1rem] h-[1rem] text-yellow-400' />
                <p className='text-[17px] font-normal text-white opacity-75'>+92 319 295 1073</p>
            </div>
            </div>
        </div>
        <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
            &#169; Copyright Horiya Zahid 2024
        </div>
        </div>
  )
}

export default Footer