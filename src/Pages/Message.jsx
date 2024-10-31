import React from 'react'
import { AllFriend } from '../Components/AllFriend'
import { Chatting } from '../Components/Chatting'

export const Message = () => {
  return (
    <>
     <section className='homeSec pt-4'>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">

          <div className='shadow-sm px-3 bg-[#FBFBFB]'>
          <AllFriend/>
          </div>
          
        </div>
        <div className="col-lg-8">
          <div>
            <Chatting/>
          </div>
           
        </div>
      </div>
    </div>
   </section>
    </>
  )
}
