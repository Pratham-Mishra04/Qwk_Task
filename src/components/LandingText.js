import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Anything Instant', 'Groceries', 'Food', 'Medicine', 'Bills', 'Money Transfer'];

const LandingText = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            1000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="w-1/2 h-full flex flex-col justify-center gap-8">
            <div className="h-1/4 flex flex-col  my-3">
                <div className="h-1/2 text-[4rem] font-bold">#OneApp</div>
                <div className="h-1/2 text-[3.5rem] flex gap-3">
                    for
                    <TextTransition
                        className="font-bold text-[#6024E0]"
                        springConfig={presets.gentle}
                    >
                        {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                </div>
            </div>
            <div className="text-2xl font-bold">
                ⚡Anything in mins, if not seconds!
            </div>
            <div className="text-[2.5rem] font-bold text-[#6024E0]">
                Why do you need 10 apps?
            </div>

            <div className="flex flex-col justify-center items-center w-3/5">
                <div className="flex w-full gap-3">
                    <img
                        src="/google_play.png"
                        alt=""
                        className="w-1/2 h-full"
                    />
                    <img
                        src="/apple_store.png"
                        alt=""
                        className="w-1/2 h-full"
                    />
                </div>
                <div className="font-bold text-2xl my-4 flex">
                    Download{' '}
                    <div className="whitespace-pre text-[#6024E0]"> Qwk </div>{' '}
                    NOW
                </div>
            </div>
        </div>
    );
};

export default LandingText;
