import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="bg-black md:bg-transparent h-72 w-full mySwiper md:w-full md:h-full">
        
      
        <SwiperSlide className="flex  flex-wrap w-1/2 md:py-10 px-11 md:px-20" ><h1 className="pb-4 text-xl md:text-2xl font-bold underline text-start mt-10 text-gray-200 underline-offset-4">Review</h1><h1 className="text-gray-200 pb-4 text-xs md:text-sm">"Solid Foundation" Assassin's Creed (2007) is fantastic, the real sense of detail, mood and tone is well presented and constructed in this fabulous nostalgic and revolutionary video game.</h1>
        <span className="bg-white cursor-pointer font-semibold w-20 text-lg duration-200 transition-all ease-in-out hover:bg-red-600 flex justify-center text-black h-7">Play</span></SwiperSlide>
        <SwiperSlide className="flex  flex-wrap w-1/2 md:py-10 px-11 md:px-20" ><h1 className="pb-4 text-xl md:text-2xl font-bold underline text-start mt-10 text-gray-200 underline-offset-4">Review</h1><h1 className="text-gray-200 pb-4 text-xs md:text-sm">The decision to have the protagonist talk with a modern American accent whilst all the characters talk in English but with accents appropriate for the setting (so, middle-eastern and English) is baffling, and the voice actor's nasal tone and awkward delivery (combined with a bad script) make the main character very unlikable. </h1>
        <span className="bg-white cursor-pointer font-semibold w-20 text-lg duration-200 transition-all ease-in-out hover:bg-red-600 flex justify-center text-black h-7">Play</span></SwiperSlide>
        <SwiperSlide className="flex  flex-wrap w-1/2 md:py-10 px-11 md:px-20" ><h1 className="pb-4 text-xl md:text-2xl font-bold underline text-start mt-10 text-gray-200 underline-offset-4">Review</h1><h1 className="text-gray-200 pb-4 text-xs md:text-sm">Assassin's creed is my favourite franchise, the concept of the game in itself is amazing, the goal of almost all the games may be approximately the same, but the story behind every single game is really interesting and really different from each other. The graphics are amazing, especially in the last ones.</h1>
        <span className="bg-white cursor-pointer font-semibold w-20 text-lg duration-200 transition-all ease-in-out hover:bg-red-600 flex justify-center text-black h-7">Play</span></SwiperSlide>
      
        
      </Swiper>
    </>
  );
}
