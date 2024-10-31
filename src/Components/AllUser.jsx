import React from 'react'
import foter from '../assets/imgaes/fotor-20240918234722.png'
import { FaUserPlus } from "react-icons/fa6";

export const AllUser = () => {
  return (
    <>
    <h4 className='pt-3 font-serif text-xl font-bold'>  All Users</h4>
      <div className='d-flex align-items-center justify-between pt-3'>
    
         <div className='d-flex  align-items-center '>
        <div> <img className='w-12' src={foter} alt="" />  </div>
        <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
       </div>

      <div> <span className='text-2xl'>  < FaUserPlus /> </span>   </div>
     </div>

     <div className='d-flex align-items-center justify-between pt-3'>
    
        <div className='d-flex  align-items-center '>
         <div> <img className='w-12' src={foter} alt="" />  </div>
        <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
        </div>

       <div> <span className='text-2xl'>  < FaUserPlus /> </span>   </div>
     </div>

     <div className='d-flex align-items-center justify-between pt-3'>
    
       <div className='d-flex  align-items-center '>
       <div> <img className='w-12' src={foter} alt="" />  </div>
        <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
       </div>

      <div> <span className='text-2xl'>  < FaUserPlus /> </span>   </div>
     </div>

    <div className='d-flex align-items-center justify-between pt-3'>
    
      <div className='d-flex  align-items-center '>
     <div> <img className='w-12' src={foter} alt="" />  </div>
      <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
      </div>

      <div> <span className='text-2xl'>  < FaUserPlus /> </span>   </div>
     </div>

   <div className='d-flex align-items-center justify-between pt-3'>
    
      <div className='d-flex  align-items-center '>
     <div> <img className='w-12' src={foter} alt="" />  </div>
     <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
     </div>

     <div> <span className='text-2xl'>  < FaUserPlus /> </span>   </div>
    </div>
    </>
  )
}
