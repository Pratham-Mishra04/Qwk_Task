import React from 'react';
import ReviewCard from '../components/ReviewCard';

const HappyUser = () => {
    return (
        <div className="bg-blue-200 flex flex-col gap-8 items-center justify-center p-16 ">
            <div className="text-5xl font-bold">Happy User</div>
            <div className="flex gap-8 px-24">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    );
};

export default HappyUser;
