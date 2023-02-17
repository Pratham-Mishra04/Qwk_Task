import React from 'react';
import AllEssentialsCircle from '../components/AllEssentialsCircle';

const AllEssentials = () => {
    return (
        <div className="flex flex-col items-center justify-center my-32 gap-24">
            <div className="text-5xl font-bold text-[#856DFA]">All Essentials • #OneApp</div>
            <div className="flex w-full px-32 justify-around items-center">
                <div className='w-2/5 flex flex-col gap-5'>
                    <div className='flex flex-col gap-3 '>
                        <div className='text-5xl font-bold text-[#785CFF]'>
                            Say no to juggling!
                        </div>
                        <div className='text-3xl font-semibold flex'>
                            Just use <div className='whitespace-pre font-bold'> Qwk</div>
                        </div>
                    </div>
                    <div className='rounded-3xl bg-[#6024E0] h-12 w-3/5 flex justify-center items-center text-xl font-semibold text-white'>
                        Anything in Minutes
                    </div>
                    <div className='text-xl'>
                    Stop using multiple Apps to access your instant needs, With Qwk, get all your essentials in #OneApp
                    </div>
                </div>
                <div>
                    <AllEssentialsCircle/>
                </div>
            </div>
        </div>
    );
};

export default AllEssentials;
