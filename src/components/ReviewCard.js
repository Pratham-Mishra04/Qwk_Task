import React from 'react';
import { motion } from 'framer-motion';

const ReviewCard = ({ name, review, rating, img }) => {
    const ratingArr = [];
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) ratingArr.push(1);
        else ratingArr.push(-1);
    }
    return (
        <motion.div className="rounded-3xl flex flex-col w-1/3 gap-5 border-2 bg-slate-100 border-black p-10"
        initial={{ scale: 1, boxShadow:'0px 0px black'}}
                    
                    whileHover={{scale: 1.08, boxShadow:'10px 10px black'}}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}>
            <div className="flex">
                <div className="rounded-full border-2 border-black bg-slate-600 w-24 h-24">
                    <img src={img} alt="" className="w-24 h-24 rounded-full" />
                </div>
                <div className="flex flex-col gap-3 justify-center items-center w-2/3">
                    <div className="text-xl font-bold">{name}</div>

                    <div class="flex items-center">
                        {ratingArr.map((el, index) => {
                            if (el === 1)
                                return (
                                    <svg
                                        key={index}
                                        aria-hidden="true"
                                        class="w-8 h-8 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                );
                            return (
                                <svg
                                    key={index}
                                    aria-hidden="true"
                                    class="w-8 h-8 text-gray-300 dark:text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="font-semibold text-lg whitespace-pre-line">
                {review}
            </div>
        </motion.div>
    );
};

export default ReviewCard;
