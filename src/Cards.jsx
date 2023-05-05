import React from 'react'
import "./Cards.css"
import {useInView} from 'react-intersection-observer'

const Cards = () => {
  const {ref:first,inView:isFirstTrue}= useInView()
  const {ref:second,inView:isSecondTrue}= useInView()
  const {ref:third,inView:isThirdTrue}= useInView()
  const {ref:fourth,inView:isFourthTrue}= useInView()
  const {ref:fifth,inView:isFifthTrue}= useInView()
  const {ref:sixth,inView:isSixthTrue}= useInView()





  return (
    <div className='section'>
      <div className='container'>
      <div className='box'>
        <img src='https://i.pinimg.com/564x/0c/c7/f8/0cc7f8e2aaca39e0355c8588158d221b.jpg' />
    </div>
    <div  className='rectangle'>
      <h1 ref={first} className={`font ${isFirstTrue && "animateFont"}`}>
      Bayek
      </h1>
      <p ref={second} className={`text3 ${isSecondTrue && "animateText"}`}>
    Bayek of Siwa is one of the founding members of the Hidden Ones, 
    second to Aya, his wife. Together, the pair set off on a path of blood and vengeance after the death of their son at the hands of the Order of the Ancients. While Aya sought to end the suffering caused by the Order on a much larger scale, Bayek reserved himself to hunt down all the cult members and kill them himself.
    </p>
    </div>
    
    </div>
    <div className='container'>
      <div className='rectangle'>
        <h1  ref={third} className={`font ${isThirdTrue && "animateFont"}`}>
        Kassan
        </h1>
      <p ref={fourth} className={`text3 ${isFourthTrue && "animateText"}`}>
    During the Peloponnesian War, Kassandra/Alexios (based on player choice) would find themselves immersed in a secret battle between a small band of warriors and a secret cult that sought to control all of Greece. Kassandra/Alexios are descendants of Leonidas, the great Spartan king but grew up orphaned after their sibling was sacrificed for the good of the Spartan people. 
    </p>
      </div>
    
    <div className='box'>
      <img src="https://wallpapercave.com/wp/wp5154798.jpg"/>
    </div>
    </div>
    <div className='container'>
    <div className='box'>
      <img src="https://i.pinimg.com/originals/7a/ff/d5/7affd562a0f3a9eefd9f47fa687e1868.jpg"/>
    </div>
    <div className='rectangle'>
      <h1 ref={fifth} className={`font ${isFifthTrue && "animateFont"}`}>
      Valhalla
      </h1>
      <p ref={sixth} className={`text3 ${isSixthTrue && "animateText"}`}>
    Ezio Auditore served as the protagonist of Assassin's Creed 2 but would also appear in the next two installments of the franchise: Assassin's Creed Brotherhood and Assassin's Creed Revelations. Ezio is perhaps the most dedicated and noteworthy assassin to date, having shaped.
    </p>
    </div>
    </div>
    </div>
    
    
  )
}

export default Cards