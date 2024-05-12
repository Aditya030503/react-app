// import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {
    let category =props.category;
    let courses=props.courses;
    // const [startIndex,setStartIndex]=useState(0);
    // const [endIndex,setEndIndex]=useState(8);
   console.log("cardsData",courses,category);
    function getCourses(){
        if(category=="All"){
            let allCourses=[];
         Object.values(courses).forEach(array=>{
             array.forEach((coursesData=>{
              allCourses.push(coursesData);
        }))
      })
      return allCourses;
    }else{
        return courses[category];
    }
        }
       
   console.log(getCourses());
  return (
    <div className='bg-richblack-100'>
        <div className=' flex  flex-wrap pl-11 gap-5 '>
     {getCourses().map(
      (courses)=>{
        return <Card key={courses.id}
        courses={courses}
        />
     })}
    </div>
    </div>
    
  )
}

export default Cards
