import About4 from '@/app/Components/About/About4';
import Blog1 from '@/app/Components/Blog/Blog1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="About Us"></BreadCumb>
            <About4
    MainImg="/assets/images/inner/about-us-thu.png"
    SubTitle="DRIVESAFE MATE DRIVING SCHOOL"
    Title="Learn to Drive With<br> Confidence and <span>Safety.</span>"
    Content="At DriveSafe Mate Driving School, we are committed to empowering learners with the skills, confidence, and knowledge needed to navigate the roads safely and responsibly.
Whether you're a beginner or looking to refine your driving abilities, our expert instructors are here to guide you every step of the way. Your journey to mastering the art of driving starts with us—where safety meets confidence!"
    listTitle1="Professional Driving Instructors"
    listTitle2="Flexible Scheduling Options"  
    BoxTitle1="1800+"
    BoxTitle2="Successful Learners"                  
></About4>
            
            
            <Blog1></Blog1>
        </div>
    );
};

export default page;