import React, { useState } from 'react'
import FilterData from '../component/FilterData';
import Cards from '../component/Cards';
import Spinner from '../component/Spinner';
import Testimonial from '../component/Testimonial';
import Blogs from '../component/Blogs';



function Dashboard({courses,filterData,loading}) {

   const [category,setCategory]=useState(filterData[0].title);
   const [lectures,setLectures] =useState(true);
   console.log("dashboard",courses,loading,filterData,lectures)

  return (



    <div  className='h-screen mt-20 justify-center

    '>
       <div className="flex justify-center mb-7 items-center  text-5xl text-center">
        {
          `Welcome to StudyNotion ${lectures?("Course"):("Blog")}`
        }
              
       </div>
       <div className='flex m-auto mb-5 gap-4 w-5/12'>
        <button className={`text-lg px-2 w-full py-1 rounded-md font-medium text-white bg-black ${lectures?(""):("bg-opacity-50 border-transparent ")} border-2 transition-all duration-300 `} onClick={()=>(setLectures(true))}>Lectures</button>
        <button className={`text-lg px-2 w-full py-1 rounded-md font-medium text-white bg-black ${lectures?("bg-opacity-50  border-transparent"):("")} border-2 transition-all duration-300 `} onClick={()=>(setLectures(false))}>Blogs</button>
       </div>
       <div className=''>
        {
           loading?(<Spinner/>):(
            <div className='bg-richblack-100'>
                 <div className='flex w-11/12 m-auto '>
                     <div className='w-3/12  items-center'>
                    <FilterData
                     category={category}
                     setCategory={setCategory}
                     filterData={filterData}
                    />
                 </div>
                 {/* <div> */}
                  {
                    lectures?( <div className='w-11/12'>
                    <Cards
                    courses={courses}
                    category={category}
                    />
                    </div>):(<div className='w-11/12'><Blogs/></div>)
                  }
                 {/* </div> */}
                

            </div>
            </div>
            
          )
        }
       </div>
       <div>
        <Testimonial/>
       </div>
      
      
    </div>
   
  );
}

export default Dashboard;
