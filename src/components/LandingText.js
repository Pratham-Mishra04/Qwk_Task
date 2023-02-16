import React from 'react';

const LandingText = () => {
    return (
        <div className="w-1/2 h-full flex flex-col justify-center gap-4">
            <div className="h-1/6 flex flex-col gap-2 my-3">
                <div className="h-1/2 text-5xl font-bold">#OneApp</div>
                <div className="h-1/2 text-5xl flex gap-3">for <div className='font-bold text-[#6024E0]'>Anything Instant</div></div>
            </div>
            <div className="text-xl my-2 font-bold">⚡Anything in mins, if not seconds!</div>
            <div className="text-3xl font-bold text-[#6024E0]">Why do you need 10 apps?</div>

            <div className="flex flex-col justify-center items-center w-1/2">
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
                <div className="font-bold text-xl my-4 flex">Download <div className='whitespace-pre text-[#6024E0]'> Qwk </div> NOW</div>
            </div>
        </div>
    );
};

export default LandingText;
