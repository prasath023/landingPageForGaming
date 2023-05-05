import React from 'react'
import Swiper from './Swiper'
import gameplay from "./assets/gameplay.mp4"
const Section2 = () => {
  return (
    <div className='flex h-96 md:h-screen w-full bg-black relative justify-center items-center '>
      <div className='hidden md:flex items-center md:ml-28 justify-start md:h-96 md:w-96 text-white ' >
       <Swiper/>
      </div>
     <div className='flex  w-full md:w-2/3 relative justify-center md:justify-center md:pr-16 items-center'>
     <h1 className='absolute text-red-600 text-4xl md:text-7xl font-black pb-72 md:mt-0 md:pr-96 md:pb-96 '>game <span className='text-white'>play</span></h1>
      <video className='h-80 md:h-80 md:w-800' autoPlay muted loop>
            <source className='h-56' src={gameplay} type="video/mp4"/>
        </video>
      </div>
    </div>
        
  )
}

export default Section2