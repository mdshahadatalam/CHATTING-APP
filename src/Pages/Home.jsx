import React from 'react'
import LoggedInUserRoute from '../PrivateRoute/LogedInUser'
import { AllUser } from '../Components/AllUser'
import { FriendReq } from '../Components/FriendReq'
import { AllFriend } from '../Components/AllFriend'


const Home = () => {
  return (
    <>
   <section className='homeSec pt-4'>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">

          <div className='shadow-sm px-3 bg-[#FBFBFB]'>
          <AllUser/>
          </div>
          
        </div>
        <div className="col-lg-4">
           
          <div className='shadow-sm p-2'>
            <FriendReq/>
          </div>
        </div>
        <div className="col-lg-4">

          <div className='shadow-sm px-3'>
            <AllFriend/>
          </div>
        </div>
      </div>
    </div>
   </section>
    </>
  )
}

export default Home