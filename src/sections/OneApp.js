import React from 'react'
import OneAppImg from '../components/OneAppImg'

const OneApp = () => {
  return (
    <div>
        <div className='h-64 flex flex-col justify-center items-center gap-8'>
            <div className='text-7xl font-semibold text-[#6024E0]'>
                🤩Everything you could possibly need
            </div>
            <div className='text-6xl font-bold'>
                all in #OneApp?
            </div>
        </div>
        <div className='h-108 rounded-3xl mx-28 border-4 border-[#6024E0] flex justify-evenly p-5 bg-[#F1F1FF]'>
            <OneAppImg index={1} title={"Save time"} text={"Dont waste time by switching between apps"} img={"/clock.png"}/>
            <OneAppImg index={2} title={"Save Money"} text={"We’ll get you the best deals, better pricing than elsewhere"} img={"/wallet.png"}/>
            <OneAppImg index={3} title={"Just use Qwk"} text={"Save time and money with Qwk"} img={"/qwk_logo.png"}/>
        </div>
    </div>
  )
}

export default OneApp