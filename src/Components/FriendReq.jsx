import React from 'react'
import foter from '../assets/imgaes/fotor-20240918234722.png'


export const FriendReq = () => {
  return (
    <>
    <h4 className='pt-2 font-serif text-xl font-bold'>Friend Request</h4>
      <div className='d-flex align-items-center justify-between pt-3'>
    
         <div className='d-flex  align-items-center '>
        <div> <img className='w-12' src={foter} alt="" />  </div>
        <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
       </div>

      <div>  <button className='w-16 h-9 bg-blue-500 font-serif text-white rounded me-2' > Accept</button> 
        <button className='w-16 h-9 bg-red-600 font-serif rounded text-white me-2' >Reject</button> </div>
     </div>


     <div className='d-flex align-items-center justify-between pt-3'>
    
    <div className='d-flex  align-items-center '>
   <div> <img className='w-12' src={foter} alt="" />  </div>
   <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
  </div>

      <div>  <button className='w-16 h-9 bg-blue-500 font-serif text-white rounded me-2' > Accept</button> 
      <button className='w-16 h-9 bg-red-600 font-serif rounded text-white me-2' >Reject</button> </div>
      </div>

<div className='d-flex align-items-center justify-between pt-3'>
    
     <div className='d-flex  align-items-center '>
     <div> <img className='w-12' src={foter} alt="" />  </div>
     <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
      </div>

    <div>  <button className='w-16 h-9 bg-blue-500 font-serif text-white rounded me-2' > Accept</button> 
   <button className='w-16 h-9 bg-red-600 font-serif rounded text-white me-2' >Reject</button> </div>
     </div>


<div className='d-flex align-items-center justify-between pt-3'>
    
    <div className='d-flex  align-items-center '>
     <div> <img className='w-12' src={foter} alt="" />  </div>
     <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
    </div>

   <div>  <button className='w-16 h-9 bg-blue-500 font-serif text-white rounded me-2' > Accept</button> 
   <button className='w-16 h-9 bg-red-600 font-serif rounded text-white me-2' >Reject</button> </div>
    </div>
    </>
  )
}
