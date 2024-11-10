import React from 'react';
import Heading from '../../Helper/Heading';
import { ServiceCard } from './ServiceCard';

const Services = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
       {/* Heading */}
       <Heading 
       headingPrimary='What can i do for clients' 
       headingSub='Creative Services' 
       />
       <div className='w-[80%] mt-[4rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[3rem] items-center'>
        {/* Service Card */}
        <div 
        data-aos="fade-rigth"
            data-aos-anchor-placement="top-center">
            <ServiceCard  image="/Images/icon1.png" title="Web Developer"/>
        </div>
        <div
        data-aos="fade-rigth"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200">
            <ServiceCard  image="/Images/icon2.png" title="React Developer"/>
        </div>
        <div data-aos="fade-rigth"
        data-aos-anchor-placement="top-center"
        data-aos-delay="400">
            <ServiceCard  image="/Images/icon3.png" title="Next Js Developer"/>
        </div>
        <div data-aos="fade-rigth"
        data-aos-anchor-placement="top-center"
        data-aos-delay="600">
            <ServiceCard  image="/Images/icon4.png" title="Node Js Developer"/>
        </div>
        <div data-aos="fade-rigth"
        data-aos-anchor-placement="top-center"
        data-aos-delay="800">
            <ServiceCard  image="/Images/icon5.png" title="Frontend Developer"/>
        </div>
        <div data-aos="fade-rigth"
        data-aos-anchor-placement="top-center"
        data-aos-delay="1000">
            <ServiceCard  image="/Images/icon2.png" title="Backend Developer"/>
        </div>
       </div>
       </div>
  )
}

export default Services