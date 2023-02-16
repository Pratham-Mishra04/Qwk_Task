import React from 'react';

export const Navbar = () => {
    return (
        <div className="flex w-full h-20">
            <div className="flex w-4/6 items-center">
                <div className="mx-24 text-3xl font-bold">Qwk</div>
            </div>
            <div className="flex items-center justify-around w-1/5 mx-20">
                <div className='font-semibold'>Apply for Job</div>
                <div>
                    <button class="bg-blue-500 gap-1 w-36 justify-center flex items-start hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        <div >Get</div>
                        <div className='text-xl'>Qwk</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
