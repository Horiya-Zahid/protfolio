import React from 'react'
import Heading from '../../Helper/Heading'

const Contact = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading 
        headingPrimary='Get In Touch With Us'
        headingSub='Contact Us' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[4rem] items-center w-[80%] m-auto'>
            {/* Info Content */}
            <div>
                <p className='text-[17px] text-white opacity-75'>Get In Touch</p>
                <h1 className='mt-[0.6rem] p-2 text-white sm:p-0 leading-[3.5rem] md:text-[30px] lg:text-[38px] text-[27px] xl:text-[45px]  '>
                    Lets Make Your <span className='text-yellow-400'>Brand</span> Brilliant!</h1>
                    <p className='text-[15px] text-white mt-[1rem] opacity-75'>
                        Unlock the full potential of your brand with innovative web solutions. Weather you need a stunning 
                        website,seamless user experience, or efficient backend systems, I'm here to bring your vision to life and 
                        make a lasting impact.</p>
                    <h1 className='mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold'>+92 319 295 1073</h1>
            </div>

            {/* Form Content */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                    <input 
                    type="text" 
                    placeholder='Name' 
                    className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' />
                     <input 
                    type="email" 
                    placeholder='Email' 
                    className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' />
                </div>
                <input 
                type="text" 
                placeholder='Subject'
                className='py-[0.7rem] mt-[1.5rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-48'
                 />
                 <textarea 
                 rows={4} 
                 placeholder='Message'
                 className='py-[0.7rem] w-full mb-[1.5rem] outline-none text-white bg-gray-800 rounded-md px-48'>         
                 </textarea>
                 <button className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-900 rounded-md px-4'>
                    Submit</button>
            </div>
        </div>
        </div>
  )
}

export default Contact