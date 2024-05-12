import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col  space-y-2 h-full justify-center items-center">
      <div className='spinner'></div>
      <p className="text-bgDark text-3xl font-semibold">Loading....</p>
    </div>
  )
}

export default Spinner
