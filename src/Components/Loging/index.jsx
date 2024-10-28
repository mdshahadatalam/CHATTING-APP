import { useFormik } from 'formik'
import React, { useState } from 'react'
import { signIn } from '../../Validation/Validation'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BeatLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../../Features/Slice/LoginSlice';
import { Link, useNavigate } from 'react-router-dom';
// import Home from './../../Pages/Home';

export const LogFromCom = ( {toast}) => {
    const [ loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const auth = getAuth();
    const dispatch = useDispatch()
    const initialValues = {
         email:"",
        password:""
       }


    const formik = useFormik({

        initialValues,
        onSubmit:()=>{
          signInUser()
        
        
        } ,
        validationSchema:signIn
        })

    const signInUser = ()=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
        
        .then((user) => {

            setLoading(false)
            
               if(user.user.emailVerified === true){

                dispatch(loggedInUser(user))
                
                localStorage.setItem("user",JSON.stringify(user))
                navigate('/')
                }else{
                toast.error('Your email is not verified', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                    });
              }
              
             })

        .catch((error) => {
            setLoading(false)
        // console.log(error);

        if(error.message.includes('auth/invalid-credential')){
          toast.error('Email or Password Incorrect', {
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
        
         });
    }    


  return (
    <>


    <form onSubmit={formik.handleSubmit}>
       <p className='font-serif font-bold'>Login your account</p>
       
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
                     loading? <BeatLoader color='#fff' size={5} /> :'Sign In'
                   }
                </button>
               <p className='font-serif text-[#808080] py-2'>Don't have a account?  <Link to={'/Registration'} className='text-blue-600 hover:underline' > Sign Up</Link> </p>
             </div>


       
                
    </form>
    </>
  )
}
