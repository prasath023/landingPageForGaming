import React from 'react'
import video from "./assets/file.mp4"
import Nft1 from './Nft1'
import Nft2 from './Nft2'
import "./Section3.css"
const Section3 = () => {
  return (
    <div className='flex nft md:h-full w-screen relative bg-black flex-col md:flex-row justify-center items-center '>
      <div className=' hidden md:flex bg-black relative justify-center items-center'>
        <video className='h-full w-full' autoPlay muted loop>
         <source src={video} type="video/mp4"/>
        </video>
        <h1 className='hidden md:flex absolute text-white md:text-7xl tracking-wider md:mb-96 font-bold'>UNIVERSAL WAR</h1>
        
      </div>
      <div className='flex w-full h-full flex-col md:flex-row justify-between items-center absolute'>
      <div className='mt-20 mr-56 md:mr-7 md:-mt-28 md:pl-32'>
      <Nft1/>
      </div>
      <div className='flex flex-col w-full md:h-1/2 md:ml-40 md:mt-96 justify-center items-center'>
        <p className='text-xs pb-7 md:pb-0 mt-48 md:mt-0 md:text-xl text-gray-200 md:px-16 text-center'>
          Connect with people and make war through NFTs, <br></br>
          bring your characters as a real asset and Play,
          <br></br> Trade, Earn with NFT.
        <span className="md:py-1 cursor-pointer mt-2 font-semibold md:mt-10 text-sm md:text-lg bg-white duration-200 transition-all ease-in-out hover:bg-red-600 flex justify-center text-black md:px-4">Read More</span>
        </p>
      </div>
      <div className='mb-24 ml-6 md:ml-0 pb-2 md:pr-80'>
      <Nft2/>
      </div>
      </div>
      
      
      

    </div>
  )
}

export default Section3