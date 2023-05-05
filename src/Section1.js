import React from 'react'
import Cards from "./Cards"

const Section1 = () => {
  return (
    <div className='bg-black flex flex-col justify-center items-center'>
        <h1 className='md:text-7xl text-3xl py-10 md:py-20 font-bold text-white tracking-wider'>CHARACTERS</h1>
        <Cards/>
    </div>
  )
}

export default Section1