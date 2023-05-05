import React, { useEffect, useState } from 'react'
import MainImage from "./assets/main.webp"
import {Text1} from './Text'
import {Text2} from './Text'

const Main = () => {
const [pageLoad,isPageLoad]=useState(false)
useEffect(() => {
isPageLoad(true)
}, [pageLoad])

  return (
    <div style={{}} className='h-96 md:h-full relative items-center '>
        <img className='h-full w-full absolute object-cover' src={MainImage}/>
       <div className='flex w-full h-full flex-col justify-center items-center bg-white'>
       <Text1 className=""/>
       <h1 className='absolute text-center font-semibold md:font-bold px-5 md:px-80 text-gray-300 pb-12 underline-offset-4 text-xs md:text-sm'>Sail across the icy North Sea to discover and conquer the broken kingdoms of England. Immerse yourself in activities like hunting and drinking games or engage in traditional Norse competitions like flyting – or, as it's better known.</h1>
       {pageLoad && <Text2/>}
       </div>
       
    </div>
  )
}

export default Main