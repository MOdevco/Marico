import React from 'react'
import { logo } from '../../assets'

function Navbar() {
  return (
    <div className='flex justify-between '>
      <img src={logo} alt="" />
      <h1>SAlom</h1>
    </div>
  )
}

export default Navbar