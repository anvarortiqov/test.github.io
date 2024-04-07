import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

function Home() {
  return (
    <div>
        <h2 className='title'>  Welcome to Games</h2>
        <h2 className='title '> Please Choose the Game</h2>
       
        <Navigation/>
      
    </div>
  )
}

export default Home