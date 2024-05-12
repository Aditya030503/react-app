import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginFrom({setIsLoggedIn}) {
    const [formData , setfromData] = useState(
        {email:"",password:""}
    )

     let navigate= useNavigate()
    const [showPassword,setshowPassword]=useState(false)
      
    function changeHandler(event){
        setfromData((prev)=>(
            {
                ...prev,
                [event.target.name]:[event.target.value]
            }
        ))
    }

    function sumbitHandler(event){
     event.preventDefault() ;
     setIsLoggedIn((prev)=>(!prev))
     navigate("/dashboard")
     toast.success("Sign in")
     console.log(formData)
    }

  return (
    <form onSubmit={sumbitHandler}
    className="flex flex-col w-full gap-y-4 mt-6"
    >
       <label className='w-full relative'>
         <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
          Email Address<span className='text-red-600  font-bold text-3xl absolute left-15 -top-2'>*</span></p>
        <input
         required
         type="email" 
         value={formData.email}
         name='email'
         placeholder='Enter the Email address'
         onChange={changeHandler}
         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

         />
      </label>


      <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
             Password<span className='text-red-600  font-bold text-3xl absolute left-15 -top-2'>*</span></p>
        <input
         required
         type={showPassword?("text"):("password")}
         value={formData.password}
         name='password'
         placeholder='Enter the Password'
         onChange={changeHandler}
         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

         />
         <span
          className='absolute right-3 top-[38px] cursor-pointer' 
         onClick={()=>{
            setshowPassword((prev)=>(!prev))
         }}
         >
         {showPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
         </span>
         <Link to="#">
                <p className='text-xs mt-1 text-blue-800 max-w-max ml-auto '>
                    Forgot Password
                </p>
            </Link>
      </label>
       <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
    </form>
  )
}

export default LoginFrom
