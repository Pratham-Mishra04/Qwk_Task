import React from 'react';
import ReviewCard from '../components/ReviewCard';

const HappyUser = () => {
    return (
        <div className="bg-[#D2D1E9] flex flex-col gap-12 items-center justify-center p-16 ">
            <div className="text-5xl font-bold text-[#583FD0]">Happy User</div>
            <div className="flex gap-8 px-24">
                <ReviewCard name={"Bharathraj"} rating={5} img={"user1.png"} review={"I've been using this app for a few months now and I couldn't be happier with the convenience it provides. I can order food, groceries, and medicine all in one place and have them delivered to my doorstep without any delay. The app is easy to use and the customer service is top-notch." }/>
                <ReviewCard name={"Sudharasan "} rating={5} img={"user3.png"} review={"I love this app! It's a lifesaver for me since I can't always get out of the house to do my shopping. I can order everything I need and have it delivered in one convenient package. I highly recommend it to anyone looking for a hassle-free way to get their groceries, food, and medicine." }/>
                <ReviewCard name={"Nehal Baid"} rating={4} img={"user2.png"} review={"Qwk has an amazing feature which is particularly great for group orders.\n While ordering everyone has different preferences from different restaurants, Qwk allows us to order from multiple locations in one order. I highly recommend it to anyone looking for convenience and ease." }/>
            </div>
        </div>
    );
};

export default HappyUser;
