import React from 'react'
// import { Link } from 'react-router-dom'
import { FaUserGroup } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import foter from '../assets/imgaes/fotor-20240918234722.png'


const Bar = () => {

  const location = useLocation()
  console.log(location.pathname);
  
  
  return (
    <>
     
<section className='shadow-md bg-[#4e4a4a]'>
<div className="container">
<div className="navbar ">
   <div className="navbar-start nav">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className='d-flex text-white font-serif align-items-center'>
      <img className='w-12 ' src={foter} alt="" />
      <div className='ps-1'>
        <p>Md Shahadat Alam</p>
      </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to={'/'} className='w-10 h-10 bg-white flex items-center justify-center rounded-full text-xl hb'>
       <FaUserGroup />
       </Link>

      <Link to={'/message'}  className='w-10 h-10 bg-white flex items-center justify-center rounded-full text-xl'>
      <TbMessage /></Link>
    </ul>
  </div>
  <div>
    <button className='w-20 bg-slate-600 h-8 text-white rounded-md font-serif'>Log out</button>
  </div>
</div>
</div>
</section>
  

    </>
  )
}

export default Bar