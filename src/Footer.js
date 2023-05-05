import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Logo from "./assets/logoMain.png"

const Footer = () => {
  return (
    <div className='bg-black h-96 md:mt-10 pt-20'>
     <div className='bg-gray-900 flex items-center justify-center md:justify-between h-16'>
        <h1 className='text-gray-200 hidden md:flex md:pl-5'>Visit Other Social Channels</h1>
        <h1 className='text-white hidden md:flex text-2xl pl-16 font-bold tracking-widest'>ARCADE</h1>
        <div className=" flex text-white justify-end">
          <div className='hover:text-red-600 pr-5'>
            <TwitterIcon/>
          </div>
          <div className='hover:text-red-600 pr-5'>
            <FacebookIcon/>
          </div>
          <div className='hover:text-red-600 pr-5'>
            <YouTubeIcon/>
          </div>
          <div className='hover:text-red-600 pr-5'>
            <InstagramIcon/>
          </div>
          <div className='hover:text-red-600 md:pr-5'>
            <TelegramIcon/>
          </div>
     </div>
     </div>
     <div className='flex px-4 md:px-40 justify-between items-center w-full h-full bg-gray-200'>
        <p className='text-xs text-start md:text-lg font-bold'>
        Store <br></br>
        UBISOFT CONNECT <br></br>
        COMPANY <br></br>
        News <br></br>
        Support
        </p>
        <div className='flex items-center mr-5 md:mr-0  h-48 w-36 md:h-64 md:w-56'>
            <img src={Logo}/>
        </div>
        <p className='text-xs md:text-lg text-end font-bold'>
        Privacy <br></br>
        Terms of Use <br></br>
        LEGAL INFO <br></br>
        SET COOKIES
        </p>
     </div>
     <div className='bg-gray-200 text-center text-xs flex justify-center pb-2 '>
     <p className=''>© 2021 Arcade Entertainment. All Rights Reserved. Assassin's Creed, Arcade and the Arcade logo are registered or unregistered trademarks of Arcade Entertainment in the U.S. and/or other countries.</p>

     </div>
    </div>
  )
}

export default Footer