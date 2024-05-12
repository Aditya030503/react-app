import React from 'react'
import SignupFrom from './SignupFrom'
import LoginFrom from './LoginFrom'
import frame from '../assets/frame.png'
import {FcGoogle} from "react-icons/fc"

function Templet({title,description1,description2,formType,image,setIsLoggedIn}) {
  return (
    

<div className='flex justify-between w-11/12 max-w-[1160px] max-h-screen   pt-12 mx-auto gap-x-12 gap-y-0 mt-5 '>
<div className='w-11/12 max-w-[450px]' >
            <h1
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' 
            >
                {title}
            </h1>

            <p className='text-[1.125rem] leading[1.625rem]' >
                <span className='text-richblack-700'>{description1}</span>
                <br/>
                <span className='text-blue-900 italic'>{description2}</span>
            </p>
        <div>
           {formType==="signup"?(<SignupFrom setIsLoggedIn={setIsLoggedIn}/>):(<LoginFrom setIsLoggedIn={setIsLoggedIn}/>)}
        </div>
        <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 bg-richblack-700
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
      </div>
     
      <div className='relative w-11/12 max-w-[450px] mt-20'>
            <img src={frame}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4'
                />    
        </div>
     
    </div>
  
    
  )
}

export default Templet
