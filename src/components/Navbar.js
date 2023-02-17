import React from 'react';

export const Navbar = () => {
    return (
        <div className="flex w-full h-20 sticky top-0 z-50 bg-white">
            <div className="flex w-4/6 items-center">
                <div className="mx-24 text-[2.5rem] font-bold text-[#6024E0]">Qwk</div>
            </div>
            <div className="flex items-center justify-around w-1/5 mx-20">
                <div className='font-semibold text-lg'>Apply for Job</div>
                <div>
                    <button class="bg-[#6024E0] gap-1 w-40 justify-center flex items-start text-white font-bold py-2 px-4 rounded-full">
                        <div >Get</div>
                        <div className='text-xl'>Qwk</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
