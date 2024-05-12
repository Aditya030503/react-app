import React from 'react'

function Card({courses}) {
  return (
    <div className=''>
         <div className='flex w-[250px] flex-col '>
      <div>
        <img src={courses.image.url} alt="" />
      </div>
      <div>
        <p>{courses.title}</p>
     
     
        <p>{courses.description.length>100?(courses.description.substr(0,100))+" .....":(courses.description)} </p>
      </div>
    </div>
    </div>
   
  )
}

export default Card
