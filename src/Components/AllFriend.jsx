import React from 'react'
import foter from '../assets/imgaes/fotor-20240918234722.png'
import { useLocation, useNavigate } from 'react-router-dom'

export const AllFriend = () => {

    const location = useLocation()
    const navigate = useNavigate()
  return (
  <>
  <h4 className='pt-3 font-serif text-xl font-bold'> All Friend</h4>
      <div className='d-flex align-items-center justify-between pt-3'>
    
         <div className='d-flex  align-items-center '>
        <div> <img className='w-12' src={foter} alt="" />  </div>
        <div> <p className='font-serif ps-2 text-lg'>Md Shahadat Alam</p></div>
       </div>

      <div> 
        
         {
            location.pathname =='/' && (
                <button
                onClick={ ()=>{
                     navigate('/message')
                }}
                 className='w-20 h-9 bg-blue-500 font-serif text-white rounded me-2'
                  > Message</button> 
            )
         }
        
        </div>
     </div>
  </>
  )
}
