import React from 'react';
import LandingText from '../components/LandingText';
import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <div className="h-132 my-12 px-32 flex items-center gap-24    ">
            <LandingText />
            <div className="relative flex justify-center items-center mx-24">
                {/* <motion.div
                    initial={{ scale: 0 }}
                    animate={{ rotate: 180, scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                </motion.div> */}
                <div className="absolute">
                    <div className="concentric-circle"></div>
                    <img
                        src="clock.png"
                        alt=""
                        className="h-36 absolute top-[2rem] left-[3rem]"
                    />
                    <img
                        src="clock.png"
                        alt=""
                        className="h-36 absolute top-[7rem] right-[1rem]"
                    />
                    <img
                        src="clock.png"
                        alt=""
                        className="h-36 absolute top-[25rem] left-[1rem]"
                    />
                    <img
                        src="clock.png"
                        alt=""
                        className="h-36 absolute top-[26rem] right-[3rem]"
                    />
                </div>
                <img src="/phoneLanding.png" alt="" className="h-96 z-10" />
            </div>
        </div>
    );
};

export default Landing;
