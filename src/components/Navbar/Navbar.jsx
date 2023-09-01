import React from 'react'
import { logo } from '../../assets'

function Navbar() {
  return (
   <div className=' wrapper flex  items-center gap-[30px]  text-[white] text-[bold] '>
    <img src={logo} alt="" />
    <h1 className='text-[20px]'>MARICO</h1>
    <div className='m-[50px]'>
      <ul className='flex justify-between items-center text-[white] gap-[50px] ml-[400px] text-[bold]  text-[20px] '>
        <li>
          <a href="#">Use Cases</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a className='text-[#3C82F4;]' href="#">Pricing</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li className='ml-[400px]'>
          <a href="#">LOGIN</a>
        </li>
        <li className=' rounded-[10px]  p-[20px] text-center bg-[blue] w-[119px]'>
          <a  href="#">SIGN UP</a>
        </li>
      </ul>
      
       
      
    </div>
   </div>
  )
}

export default Navbar