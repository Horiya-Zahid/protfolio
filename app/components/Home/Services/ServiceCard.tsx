import React from 'react';
import Image from 'next/image';

interface Props {
  image:string;
  title:string
}

export const ServiceCard = ({image,title}:Props) => {
  return (
    <div className='shadow-md hover:scale-110 transition-all duration-500 bg-black p-8 rounded-lg'>
      {/* Images */}
      <Image 
      src={image} 
      alt={title} 
      width={80} 
      height={80} 
      className="mt-[2rem] mb-[2rem] mx-auto" />
      <div className='text-center'>
        {/* title */}
        <h1 className='font-semibold text-[26px] text-white '>{title}</h1>
        <p className='mt-[0.5rem] text-white text-opacity-60'>
          Transforming ideas into seek, dynamic web solutions with a mastery of modern development tools
        </p>
        <button className='px-5 py-2 bg-blue-600 mt-[2rem] text-white rounded-lg'>Read More</button>
      </div>
      </div>
  )
}
