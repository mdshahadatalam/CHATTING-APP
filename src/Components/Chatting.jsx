import React from 'react'
import foter from '../assets/imgaes/fotor-20240918234722.png'
import { BsEmojiSmile } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";

export const Chatting = () => {
  return (
    <>
    <div className='w-full  bg-white h-[700px] mt-2'>
        <div className='bg-black py-4 px-6 shadow-md rounded'>
        <div className='d-flex  align-items-center '>
        <div> <img className='w-12' src={foter} alt="" />  </div>
        <div> <p className='font-serif ps-2 text-lg text-white'>Md Shahadat Alam</p></div>
       </div>

        </div>

        <div className='h-[580px] bg-[#FBFBFB] px-6'> hello</div>
        <div className=' bg-[#F5F5F5] py-4'>
            <div className=' bg-white w-[532px] sendingSec rounded-md mx-auto py-2 flex items-center justify-center gap-x-3' >
                <div className='d-flex gap-x-3 w-[15%]'>
                   <div> <span className='text-xl cursor-pointer' ><BsEmojiSmile /></span></div> 
                   <div><span className='text-xl cursor-pointer' ><GrGallery /></span></div>
                </div>
                <input type="text"
                placeholder='Type Something '
                className='w-[60%] outline-none'
                 />
                 <div className='w-15%'>
                 <button className=' bg-blue-400 px-4 py-3 rounded-sm text-white font-serif text-sm'> Send</button>
                 </div>

            </div>
        </div>

    </div>
    </>
  )
}
