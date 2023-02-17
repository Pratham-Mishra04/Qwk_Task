import React from 'react'
import {motion} from 'framer-motion'

const OneAppImg = ({index, img, title, text, transition, animate}) => {
  return (
    <div  className='w-1/4 h-full flex flex-col justify-center items-center gap-4'>
      <motion.div transition={transition} animate={animate} className='w-2/3'><img src={img} alt="" className='w-full'/></motion.div>
        <div className='text-2xl font-bold'>{index}. {title}</div>
        <div className='text-xl text-center'>{text}</div>
    </div>
  )
}

export default OneAppImg