import { useFormik } from 'formik'
import React, { useState } from 'react'
import values from './../../../node_modules/lodash-es/values';
import { signUp } from '../../Validation/Validation';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { BeatLoader } from 'react-spinners';
import { Link, Navigate, useNavigate } from 'react-router-dom';




const RegFromCom = ( {toast}) => {

   const [ loading,setLoading] = useState(false)
   const auth = getAuth();
   const navigate = useNavigate()
   const initialValues = {
    name:"",
    email:"",
    password:""
   }

  const formik = useFormik({

    initialValues,
    onSubmit:()=>{
      createdNewUser()
    } ,
    validationSchema:signUp

    
  })


  const createdNewUser = ()=>{
   setLoading(true)
   createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password)
     
        
        .then(()=>{
        
         sendEmailVerification(auth.currentUser)
         .then(()=>{
            toast.success('Email send for verification'), {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: true,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "light",
               }

               setTimeout( ()=>{
                  navigate('/Login')
               },2000 )
               
            setLoading(false)
         })
        })

        .catch( (error)=>{
      if(error.message.includes('auth/email-already-in-use')){
         toast.error('Email already use', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
      }
      setLoading(false)

         // console.log(error.message)
        })
  
  }

//   console.log(formik);
  
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
       <p className='font-serif font-bold'>Registration for your new journey</p>
      <label className="relative w-[70%] my-2 Respons">
         <input 
         type="text" 
         name="name" 
         id="name"
         value={formik.values.name}
         onChange={formik.handleChange}
         className="peer border-[#e5eaf2] border rounded-md outline-none px-1 py-1 w-full focus:border-[#3B9DF8] transition-colors duration-300"
            />
            <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                 Your name
            </span>
       </label>
       {
        formik.errors.name && formik.touched.name &&   <div className="text-red-500">{formik.errors.name}</div>

       }
       
      <label className="relative w-[70%] my-2  Respons">
         <input 
         type="email" 
         name="email" 
         id="email"
         value={formik.values.email}
         onChange={formik.handleChange}
         className="peer border-[#e5eaf2] border rounded-md outline-none px-1 py-1 w-full focus:border-[#3B9DF8] transition-colors duration-300"
            />
            <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                 Your Email
            </span>
       </label>
       {
        formik.errors.email && formik.touched.email  &&  <div className="text-red-500">{formik.errors.email}</div>

       }

       
      <label className="relative w-[70%] my-2 Respons">
         <input 
         type="password" 
         name="password" 
         id="password"
         value={formik.values.password}
         onChange={formik.handleChange}
         className="peer border-[#e5eaf2] border rounded-md outline-none px-1 py-1 w-full focus:border-[#3B9DF8] transition-colors duration-300"
            />
            <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                 Your Password
            </span>
       </label>
       {
        formik.errors.password && formik.touched.password  &&  <div className="text-red-500">{formik.errors.password}</div>

       }


       

             <div>
             <button disabled={loading} type='submit' className="px-6 py-2 border border-[#3B9DF8] w-[400px] bg-[#21282e] 
                 text-[#ffffff] hover:bg-[#ffffff] hover:text-primary transition duration-300 rounded Respons">
                   {
                     loading? <BeatLoader color='#fff' size={5} /> :'Sign Up'
                   }
                </button>
               <p className='font-serif text-[#808080] py-2'>Already have a account? <Link to={"/Login"} className='text-blue-600 hover:underline' >Sign In</Link></p>
             </div>


       
                
    </form>
    </>
  )
}

export default RegFromCom