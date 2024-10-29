import React from 'react'
import RegFromCom from '../Components/Registration'
import Lottie from "lottie-react";
import Animation from '../assets/animation/Animation.json'
import { ToastContainer, toast } from 'react-toastify';

const Rejistration = () => {
  return (
    <>
    <ToastContainer/>
    <section className='rgistraBg Animation '>
      <div className="container">
        <div className="row ps-2 justify-center text-center items-center w-full h-screen">
         
               <div  className="col-lg-6   align-items-center bg-[#dad4d4] shadow-md font-serif rounded-md py-10">
                 <RegFromCom toast={toast} />
               </div>

            {/* <div className="col-lg-6">
            <Lottie animationData={Animation} loop={true} />
            </div> */}
          </div>

      </div>
    </section>
    </>
  )
}

export default Rejistration