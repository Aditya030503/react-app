import React, { useState } from 'react'
import TestimoinalCard from './TestimoinalCard'
import review from '../data'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial() {
  const [index,setIndex] = useState(0)


     function leftShiftHandler(){
      if(index-1<0){
        setIndex(review.length-1);
      }else{
        setIndex(index-1);
      }
     }

     function rightShiftHandler(){
      if(index+1>=review.length){
        setIndex(0);
      }else{
        setIndex(index+1)
      }
     }
     function surpriseHandler() {
      let randomIndex =  Math.floor(Math.random() * review.length);
      setIndex(randomIndex);
  }

  setTimeout(rightShiftHandler,4000);

  return (
    <div className=' bg-richblack-100 pt-6'>
      <div className="flex justify-center my-6 items-center  text-3xl text-center">
             Our Testimonials
       </div>
       <div className='flex justify-center items-center flex-col w-8/12 m-auto border-2  pb-10  transition-all duration-700 hover:shadow-xl rounded-md bg-white px-4'>
      
      <div>
        <TestimoinalCard review={review[index]}/>

      </div>
      <div className='flex  mt-4 gap-4 text-3xl  text-violet-400 font-bold'>
      <button onClick={leftShiftHandler} >
       <FiChevronLeft/>
      </button>
      <button onClick={rightShiftHandler}>
       <FiChevronRight/>
      </button>
      </div>
      
      <div className='mt-6'>
           <button
           onClick={surpriseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
           cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
           Surprise Me
           </button>
       </div>
   </div>
    </div>
   
  )
}

export default Testimonial
