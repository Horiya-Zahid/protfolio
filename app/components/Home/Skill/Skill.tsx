import React from 'react';
import Heading from '../../Helper/Heading';
import SkillCard from './SkillCard';


const Skill = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <Heading headingPrimary='Export My Skills'
        headingSub='My Skills'/>
        <div className='grid  w-[80%] mt-[5rem] mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
            {/* skill card */}
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        >
                <SkillCard image='/Images/html.svg'
                percent='98'
                title="HTML"/>
            </div>
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200">
                <SkillCard image='/Images/css.svg'
                percent='97'
                title="CSS"/>
            </div>
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="400">
                <SkillCard image='/Images/js.svg'
                percent='80'
                title="JavaScript"/>
            </div>
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="600">
                <SkillCard image='/Images/ts.svg'
                percent='94'
                title="TypeScript"/>
            </div>
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="800">
                <SkillCard image='/Images/react.svg'
                percent='90'
                title="React"/>
            </div>
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="1000">
                <SkillCard image='/Images/node.svg'
                percent='78'
                title="Node Js"/>
            </div>
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="1200">
                <SkillCard image='/Images/mongo.svg'
                percent='88'
                title="MongoDB"/>
            </div>
            <div data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="1400">
                <SkillCard image='/Images/python.svg'
                percent='90'
                title="Python"/>
            </div>
        </div>
        </div>
  )
}

export default Skill