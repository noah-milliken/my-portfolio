
import React from 'react'
import ProfilePicture from './ProfilePicture'
import MenuCards from './MenuCards'

function Hero() {
    //import name or visitor name as welcome message.
    const visitor ='Friend'
  return (
    <div className='flex flex-col items-center mx-auto border'>
        <h1>{`Welcome ${visitor}!`}</h1> 
        <h3>Thanks for visiting my portfolio. How can I help you? </h3>
        <ProfilePicture />
        <MenuCards />
    </div> 
    
  )
}

export default Hero