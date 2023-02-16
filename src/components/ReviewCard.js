import React from 'react';

const ReviewCard = () => {
    return (
        <div className="rounded-3xl flex flex-col gap-5 border-1 border-black p-10">
            <div className='flex'>
                <div className="rounded-full border-1 border-black bg-slate-600 w-24 h-24"></div>
                <div className='flex flex-col gap-3 justify-center items-center w-2/3'>
                    <div className='text-xl font-bold'>Bharathraj</div>
                    <div>5 Stars</div>
                </div>
            </div>
            <div className='font-semibold text-lg'>
                I've been using this app for a few months now and I couldn't be
                happier with the convenience it provides. I can order food,
                groceries, and medicine all in one place and have them delivered
                to my doorstep without any delay. The app is easy to use and the
                customer service is top-notch
            </div>
        </div>
    );
};

export default ReviewCard;
