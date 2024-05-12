// import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

function Navbar(props) {
  let showbutton = props.isLogIn
  let setshowbutton=props.setisLogIn
  
  return (
    <div className=' flex justify-around fixed bg-slate-900 text-white w-11/12 m-auto py-2 items-center inset-x-0 top-0 '>
        <Link to="/">
        <img src={Logo} alt=""/>
        </Link>
      
      <nav className='flex'>
        <ul className=' flex gap-4  justify-evenly'>
            <li className='flex place-items-center'>
                <Link to="/">Home</Link>
            </li>
            <li className='flex place-items-center'>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="#">Contact</Link>
            </li>
        </ul>
      </nav>
      <div className=' flex gap-4  '>
       {!showbutton && <Link to="/login" ><button>Login</button></Link>}
       {!showbutton && <button><Link to="signup">Signup</Link></button>}
       {showbutton && <button onClick={(prev)=>{
        setshowbutton(!prev)
        toast("Logout")
       }}><Link to="/">Logout</Link></button>}
       {showbutton && <button><Link to="/dashboard">Dashboard</Link></button>}
      
      </div>
    </div>
  )
}

export default Navbar
