import React from 'react';

const LandingText = () => {
    return (
        <div className="w-1/2 h-full flex flex-col justify-center gap-4">
            <div className="h-1/6 flex flex-col gap-2">
                <div className="h-1/2 text-5xl">#OneApp</div>
                <div className="h-1/2 text-4xl">for Anything Instant</div>
            </div>
            <div className="text-xl">Anything in mins, if not seconds!</div>
            <div className="text-2xl">Why do you need 10 apps?</div>

            <div className="flex flex-col justify-center items-center w-3/4">
                <div className="flex w-full">
                    <img
                        src="/google_play.png"
                        alt=""
                        className="w-1/2 h-4/5"
                    />
                    <img
                        src="/apple_store.png"
                        alt=""
                        className="w-1/2 h-3/4"
                    />
                </div>
                <div className="font-semibold text-xl">Download Qwk NOW</div>
            </div>
        </div>
    );
};

export default LandingText;
