import React from 'react'
import Heading from '../../Helper/Heading'
import AboutInfoBox from './AboutInfoBox'
import AboutImage from '@/public/Images/about.svg'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='mt-[5rem] mb-[3rem]'>
        {/* heading */}
        <Heading headingPrimary="I Can Build Your Dream website" 
        headingSub="About Me" 
        />
        <div className='w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-centergap-[4rem]'>
            {/* personal information */}
            <div>
                <h1 className='mb-[1.4rem] text-[27px] font-semibold text-orange-500'>Personal Information :</h1>
                {/* About information box */}
                <AboutInfoBox 
                text1="First Name : Horiya" 
                text2="Last Name : Zahid" 
                />
                <AboutInfoBox 
                text1="Adress : Karachi" 
                text2="Phone : 0319-2951073" 
                />
                <AboutInfoBox 
                text1="Age : 21" 
                text2="Email : horiyazahid09@gmail.com" 
                />
                <AboutInfoBox 
                text1="Freelance : Available" 
                text2="Language : English" 
                />
                <AboutInfoBox 
                text1="Country : Pakistan" 
                text2="Role : Developer" 
                />
            </div>
            {/* Image */}
            <Image 
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            src='/Images/aboutme2.png' 
            width={300}
            height={300}
            alt="About" className="mx-auto " />
        </div>
        </div>
  )
}

export default AboutMe