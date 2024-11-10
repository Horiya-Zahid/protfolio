'use client';

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Services from "./Services/Services";
import Skill from "./Skill/Skill";
import Project from './Projects/Project';
import Contact from "./Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(()=>{
        const initAOS = async () => {
            await import ('aos');
            AOS.init({
                duration:1000,
                easing:'ease',
                once:true,
                anchorPlacement:'top-bottom'
            });
        };

        initAOS()

    },[]);

    return (
        <div className="overflow-hidden">
            <Hero />
            <AboutMe />
            <Services />
            <Skill />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;