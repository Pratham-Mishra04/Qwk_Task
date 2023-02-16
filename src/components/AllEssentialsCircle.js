import React from 'react';

const AllEssentialsCircle = () => {
    return (
        <div className='relative w-[42rem] flex items-center justify-center'>
            <div className="rounded-full relative w-124 h-124 bg-[#785CFF] flex items-center justify-center">
                <div className="text-5xl w-1/2 self-start my-12 font-bold text-white text-opacity-50">
                    Access to Convenience Redefined
                </div>
                <img
                    src="scooter.png"
                    alt=""
                    className="w-108 absolute right-0 bottom-0"
                />
            </div>

            <div className="absolute flex rounded-xl w-44 items-center p-3 gap-4 bg-white h-20 top-5 right-7">
                    <img src="/clock.png" alt="" className="w-1/3" />
                    <div className="flex flex-col gap-1">
                        <div className="font-bold text-lg">Get</div>
                        <div className="text-sm">Medicines</div>
                    </div>
                </div>

                <div className="absolute flex rounded-xl w-44 items-center p-3 gap-4 bg-white h-20 top-[8rem] right-0 ">
                    <img src="/clock.png" alt="" className="w-1/3" />
                    <div className="flex flex-col gap-1">
                        <div className="font-bold text-lg">Bill</div>
                        <div className="text-sm">Payments</div>
                    </div>
                </div>

                <div className="absolute flex rounded-xl w-52 items-center p-3 gap-4 bg-white h-20 bottom-16 left-8">
                    <img src="/clock.png" alt="" className="w-1/3" />
                    <div className="flex flex-col gap-1">
                        <div className="font-bold text-lg">Delivery in</div>
                        <div className="text-sm">15 Mins</div>
                    </div>
                </div>

                <div className='flex flex-col rounded-xl h-72 w-44 absolute bottom-0 right-5 bg-white items-center'>
                  <img src="burger.png" alt="" className='h-40 w-40'/>
                  <div className='my-3 text-sm'>Zinger Burger</div>
                  <div className='text-2xl font-bold'>Rs.184.60</div>
                  <div className='text-xs my-1'>Free Delivery</div>
                </div>

                <div className='flex flex-col rounded-xl h-72 w-44 absolute top-0 left-2 bg-white items-center'>
                  <img src="orange.png" alt="" className='h-40 w-40'/>
                  <div className='my-3 text-sm'>Fresh Orange</div>
                  <div className='text-2xl font-bold'>Rs.44.60</div>
                  <div className='text-xs my-1'>Free Delivery</div>
                </div>
            

        </div>
    );
};

export default AllEssentialsCircle;
