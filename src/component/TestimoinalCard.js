import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

function TestimoinalCard({review}) {
  return (
    <div>
      
        <div className=' flex flex-col justify-center items-center relative pt-4 '>
      <div className=' absolute -top-16 left-8 z-10'>
      <img src={review.image} alt=""  className='w-[140px] h-[140px] rounded-full z-40  ' />
      <div className='w-[140px] h-[140px] bg-blue-700 rounded-full -top-1 left-[8px] absolute z-[-10]'></div>
      </div>

      <div className=' text-center '>
        <p>{review.name}</p>
        <p>{review.job} </p>
      </div>
      
      <div className='text-violet-400 mx-auto mt-3'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-2 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-violet-400 mx-auto mt-3'>
        <FaQuoteRight/>
      </div>

    </div>
    </div>
  
  )
}

export default TestimoinalCard
