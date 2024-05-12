import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function LoginFrom({setIsLoggedIn}) {
    const [formData , setfromData] = useState(
        { firstName:"", lastName:"", email:"",password:"",confirmPassword:""}
    )

     let navigate= useNavigate()
    const [showPassword,setshowPassword]=useState(false)
    const [confimShowPassword,setConfimShowPassword]=useState(false)
    const[accountType,setaccountType]= useState("student")

      
    function changeHandler(event){
        setfromData((prev)=>(
            {
                ...prev,
                [event.target.name]:[event.target.value]
            }
        ))
    }

    function submitHandler(event){
     event.preventDefault() ;
    //  console.log(formData.password[0],formData.confirmPassword[0])
     if(!formData.password == formData.confirmPassword){
      toast.error("password do not match")
      return;
     }
     setIsLoggedIn((prev)=>(!prev))
     navigate("/dashboard")
     toast.success("Sign in")
    //  console.log(formData)
       
    

  const finalData = {
      ...formData,
      accountType
  }

  console.log("printing Final account data ");
  console.log(finalData);


    }

  return (
    
    <form onSubmit={submitHandler}>
      <div
        className='flex bg-richblack-700 p-1 gap-x-1 my-6 rounded-full max-w-max'>

      <button   className={`${accountType === "student" ?("bg-richblack-900 text-richblack-5")  :("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200`} 
            onClick={()=>(setaccountType("student"))}>
              student
              </button>
              <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
             onClick={()=>(setaccountType("instructor"))}>
              Instructor
             </button>
    </div> 
    <div>

      {/* form start */}
      <div className='flex gap-x-4 mt-[20px]' >

     
    <label className='w-full'>
       <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
      required
       type="text"
       placeholder='Enter Your First Name'
       name="firstName"
       value={FormData.firstName}
       onChange={changeHandler}
       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
       />
    </label>
    <label className='w-full'>
       <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
       <input
      required
       type="text"
       placeholder='Enter Your Last Name'
       name="lastName"
       value={FormData.lastName}
       onChange={changeHandler}
       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
       />
    </label>
    </div>
    
    {/* email add  */}
    <div className='mt-[20px]'>

    <label className='w-full mt-[20px]'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
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
      </div>
      
   {/* createPassword and Confirm Password */}
   <div className='w-full flex gap-x-4 mt-[20px]'>
        <label className='w-full relative'>
               <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
        <input
         required
         type={showPassword?("text"):("password")}
         value={formData.password}
         name='password'
         placeholder='Enter Your Password'
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
    </label>
    <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
       <input
         required
         type={confimShowPassword?("text"):("password")}
         value={formData.confirmPassword}
         name='confirmPassword'
         placeholder='Confirm Your Password'
         onChange={changeHandler}
         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

         />
         <span
          className='absolute right-3 top-[38px] cursor-pointer'
         onClick={()=>{
          setConfimShowPassword((prev)=>(!prev))
         }}
         >
         {confimShowPassword?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
         </span>
    </label>
    </div>
    <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4'>
            Create Account
        </button>
      </div>
    </form>
  )
}

export default LoginFrom
