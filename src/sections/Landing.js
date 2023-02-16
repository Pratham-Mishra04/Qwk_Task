import React from 'react';
import LandingText from '../components/LandingText';

const Landing = () => {
    return (
        <div className="h-132 px-32 flex items-center gap-24    ">
            <LandingText />
            <img src="/phoneLanding.png" alt="" className='h-1/2'/>
        </div>
    );
};

export default Landing;
