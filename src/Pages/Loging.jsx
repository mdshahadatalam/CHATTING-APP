import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { LogFromCom } from '../Components/Loging';

export const Loging = () => {
  return (
    
    <>
      <ToastContainer/>
    <section className='loginBg Animation '>
      <div className="container">
        <div className="row ps-2 justify-center text-center items-center w-full h-screen">
         
               <div  className="col-lg-6   align-items-center bg-[#dad4d4] shadow-md font-serif rounded-md py-10">
                 <LogFromCom toast={toast} />
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

