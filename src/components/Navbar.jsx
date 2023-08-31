import React from 'react'
import { logo } from '../assets'

function Navbar() {
  return (
    <div className=' flex  justify-around items-center'>
    <img src={logo} alt="" />
    <h1 className=' text-[red]'>MARICO</h1>
    </div>
  )
}

export default Navbar