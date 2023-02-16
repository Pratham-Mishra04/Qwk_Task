import React from 'react';
import AllEssentialsCircle from '../components/AllEssentialsCircle';

const AllEssentials = () => {
    return (
        <div className="flex flex-col items-center justify-center my-10 gap-12">
            <div className="text-4xl">All Essentials . #OneApp</div>
            <div className="flex w-full px-32 justify-around items-center">
                <div className='w-2/5 flex flex-col gap-5'>
                    <div className='flex flex-col gap-3 '>
                        <div className='text-5xl'>
                            Say no to juggling!
                        </div>
                        <div className='text-3xl'>
                            Just use Qwk
                        </div>
                    </div>
                    <div className='rounded-3xl bg-blue-600 h-12 w-3/5 flex justify-center items-center text-xl text-white'>
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
