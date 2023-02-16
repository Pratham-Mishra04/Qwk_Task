import React from 'react'

const OneAppImg = ({index, img, title, text}) => {
  return (
    <div className='w-1/4 h-full flex flex-col justify-center items-center gap-4'>
        <img src={img} alt="" className='w-2/3'/>
        <div className='text-2xl font-bold'>{index}. {title}</div>
        <div className='text-xl text-center'>{text}</div>
    </div>
  )
}

export default OneAppImg