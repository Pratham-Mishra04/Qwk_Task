import React from 'react';
import LandingText from '../components/LandingText';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Landing = () => {
    const [control, setControl] = useState(0)

    return (
        <div className="h-132 my-12 px-32 flex items-center gap-24    ">
            <LandingText />
            <div className="relative flex justify-center items-center mx-24">
                <motion.div
                    className="absolute  opacity-0"
                    initial={{ scale: 0.3, rotate: 90 }}
                    animate={control===0?{}:{
                        rotate: 0, scale: 1, opacity: 1
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 15,
                    }}
                >
                    <div className="concentric-circle"></div>
                    <img
                        src="burgerMeal.png"
                        alt=""
                        className="h-48 absolute top-[2rem] left-[3rem] -rotate-[30deg]"
                    />
                    <img
                        src="groceries.png"
                        alt=""
                        className="h-48 absolute top-[7rem] right-[1rem] -rotate-[30deg]"
                    />
                    <img
                        src="bills.png"
                        alt=""
                        className="h-48 absolute top-[25rem] left-[1rem] -rotate-[30deg]"
                    />

                        <img
                            src="medicines.png"
                            alt=""
                            className="h-48 absolute top-[26rem] right-[3rem] -rotate-[30deg]"
                        />

                        <img
                            src="coin.png"
                            alt=""
                            className="h-80 absolute top-[32rem] right-[10rem] -rotate-[30deg]"
                        />

                </motion.div>

                <motion.div
                    className="h-96 z-10"
                    initial={{scale:1}}
                    onHoverStart={()=>{setControl(1)}}
                    onHoverEnd={()=>{setControl(0)}}
                    whileHover={{scale: 1.2}}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <img src="/phoneLanding.png" alt="" className="h-full" />
                </motion.div>
            </div>
        </div>
    );
};

export default Landing;
