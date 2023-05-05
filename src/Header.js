import React, { useState } from 'react'
import Logo from "./assets/logoMain.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [open,isOpen]=useState(false)
  const handleOpen=()=>{
    isOpen(!open)
  }
  return (
    <>
    <div className='flex h-6/6 text-white items-center justify-between w-screen p-2 md:p-4 bg-black'>
        <div className='cursor-pointer flex md:w-1/4 justify-center h-full items-center text-black'>
        <img className='w-15 h-9' src={Logo}/>
        </div>
        <h1 className='md:hidden text-start font-bold w-2/4 text-white text-lg ease-in-out transition duration-600 hover:text-red-500 '>ARCADE</h1>

        <div className='md:flex hidden  justify-center w-2/4 h-full'>
            <ul className='w-full cursor-pointer md:flex relative text-lg lg:w-full md:justify-between'>
                <li className='hover:scale-110 hover:opacity-100 opacity-60'>
                    home
                </li>
                <li className='hover:scale-110 hover:opacity-100 opacity-60'>
                    news
                </li>
                <li className='hover:scale-110 hover:opacity-100 opacity-60'>
                    leader board
                </li>
                <li className='hover:scale-110 hover:opacity-100 opacity-60'>
                    support
                </li>
                <li className='hover:scale-110 hover:opacity-100 opacity-60'>
                    more
                </li>
            </ul>
        </div>
        <div className="hidden md:flex w-1/4 text-white justify-center">
        <div className='hover:text-red-600 pr-10'>
            <TwitterIcon/>
          </div>
          <div className='hover:text-red-600 pr-10'>
            <FacebookIcon/>
          </div>
          <div className='hover:text-red-600 '>
            <InstagramIcon/>
          </div>
        </div>
        <div onClick={handleOpen} className='w-1/4 flex cursor-pointer justify-end text-white md:hidden mr-2' >
         <MenuIcon />
        </div>
    </div>
    {open && 
      <div className='h-screen text-white w-screen bg-black'>
      
      <div className='flex flex-col justify-start w-full overflow-hidden h-full'>
            <ul className=' w-full list flex flex-col relative text-lg font-normal text-center  justify-start'>
                <li className='mb-4 mt-20'>
                    Home
                </li>
                <li className='mb-4'>
                    News
                </li >
                <li className='md:hidden mb-4 lg:flex'>
                    Leader Board
                </li>
                <li className='mb-4'>
                    Support
                </li>
                <li>
                    More
                </li>
            </ul>
            <div className='flex w-3/4 justify-center mx-auto mt-10'>
            <div className='hover:text-red-600 pr-10'>
            <TwitterIcon/>
          </div>
          <div className='hover:text-red-600 pr-10'>
            <FacebookIcon/>
          </div>
          <div className='hover:text-red-600 '>
            <InstagramIcon/>
          </div>
            </div>
        </div>
      </div>}
    </>
  )
}

export default Header