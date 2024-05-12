import React from 'react'

function FilterData({category,setCategory,filterData}) {
   
    function changeHandler(title){
        console.log(title);
        setCategory(title);
        console.log(category);
    }
   
  return (
    <div className='gap-5 flex flex-col'>
      {
       filterData.map((data)=>{
        return <button className={`text-lg px-2 w-full py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? 
        "bg-opacity-60 border-white" :
        "bg-opacity-40 border-transparent"}
        `}
        key={data.id} onClick={()=>changeHandler(data.title)} >
            {data.title}
        </button>
       }) 
      }
    </div>
  )
}

export default FilterData
