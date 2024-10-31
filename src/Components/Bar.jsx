import React from 'react'
// import { Link } from 'react-router-dom'
import { FaUserGroup } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import foter from '../assets/imgaes/fotor-20240918234722.png'
import logo from '../assets/imgaes/logo/logo-modified.png'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { loggedOutUser } from '../Features/Slice/LoginSlice';
import { IoCameraOutline } from "react-icons/io5";


const Bar = () => {
   
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut =()=>{
    signOut(auth)
    .then(() => {
      navigate('/')
      localStorage.removeItem('user')
      dispatch(loggedOutUser());
    }).catch((error) => {
      console.log(error);
      
    });
  }
  
  
  return (
    <>
     
<section className='shadow-md bg-[#fff]'>
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
        <Link to={'/'} className='w-10 h-10 bg-black text-white flex items-center justify-center rounded-full text-xl hb'>
       <FaUserGroup />
       </Link>

      <Link to={'/message'}  className=' my-2 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full text-xl'>
      <TbMessage /></Link>
      </ul>
    </div>
    <div className='d-flex text-white font-serif align-items-center position-relative'>
      <img className='w-12 ' src={foter} alt="" />
      <span className='text-white position-absolute camreIcon w-6 h-6 bg-black d-flex justify-center align-items-center rounded-full'> <IoCameraOutline /></span>
      <div className='ps-1'>
        <p className='text-black'>Md Shahadat </p>
      </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to={'/'} className= "w-10 h-10 bg-black text-white flex items-center justify-center rounded-full text-xl">
       <FaUserGroup />
       </Link>

      <Link to={'/message'}  className='  mx-2 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full text-xl'>
      <TbMessage /></Link>
    </ul>
  </div>
  <div>
    <button className='w-20 bg-black h-8 text-white rounded-md font-serif' onClick={handleLogOut} >Log out</button>
  </div>
</div>
</div>
</section>
  

    </>
  )
}

export default Bar