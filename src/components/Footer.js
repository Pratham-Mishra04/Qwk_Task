import React from 'react'

const Footer = () => {
  return (
    <div className='h-72 w-full bg-[#6024E0] relative'>
        <div className='absolute top-8 right-10 text-right text-white flex flex-col gap-2'>
          <div>
          Privacy Policy  •  Terms & Conditions  •  Refund & Cancellation Policy 
          </div>
          <div>
          © Copyright 2022 - QWK. All rights reserved.
          </div>
          <div className='flex justify-end gap-2'>
            <div className='bg-white w-12 h-12 rounded-full p-2 flex items-center justify-center'><img src="twitter.png" alt="" /></div>
            <div className='bg-white w-12 h-12 rounded-full p-2 flex items-center justify-center'><img src="facebook.png" alt="" /></div>
            <div className='bg-white w-12 h-12 rounded-full p-2 flex items-center justify-center'><img src="instagram.png" alt="" /></div>
            <div className='bg-white w-12 h-12 rounded-full p-2 flex items-center justify-center'><img src="linkedin.png" alt="" /></div>
          </div>
        </div>
    </div>
  )
}

export default Footer