import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='games'>
            <Link to="/rps" className='home-btn'>RPC </Link>
            <Link to='/tictac' className='home-btn'>TicTac</Link>
    </div>
  )
}

export default Navigation